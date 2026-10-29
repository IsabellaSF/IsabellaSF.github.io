"use client";

import { useEffect, useRef } from "react";

/*
 * Fundo animado com "gráficos" de ciência de dados desenhados em canvas 2D.
 * Quatro cenas se alternam a cada DURACAO_CENA ms:
 *   1. dispersão + reta de regressão (mínimos quadrados)
 *   2. histograma de uma amostra normal + curva de densidade
 *   3. série temporal com faixa de intervalo de confiança
 *   4. k-means: centroides migrando e pontos mudando de cor
 * Fica parado com prefers-reduced-motion e pausa quando a aba está oculta.
 */

const DURACAO_CENA = 12000;
const QUADRO_MINIMO_MS = 1000 / 30;
const COR = {
  preto: "#000000",
  rosa: "#FF44C7",
  verde: "#71FF4A",
  lilas: "#A78BFA",
  azul: "#4D7CFF",
  creme: "#FFE6A7",
  branco: "#FFFFFF",
};

// Gerador pseudoaleatório com semente, para as cenas serem sempre iguais.
function rng(semente: number) {
  let s = semente >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function normal(aleatorio: () => number) {
  const u = Math.max(aleatorio(), 1e-9);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * aleatorio());
}

const limitar = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const suavizar = (v: number) => 1 - Math.pow(1 - limitar(v), 3);

type Area = { x: number; y: number; l: number; a: number };
type Cena = (ctx: CanvasRenderingContext2D, area: Area, p: number, fonte: string) => void;

function criarCenas(pequena: boolean): Cena[] {
  const n = pequena ? 30 : 70;

  // 1. Dispersão + regressão
  const r1 = rng(1);
  const pontos = Array.from({ length: n }, () => {
    const x = r1();
    return { x, y: limitar(0.15 + 0.65 * x + normal(r1) * 0.09, 0.02, 0.98) };
  });
  const mx = pontos.reduce((s, q) => s + q.x, 0) / n;
  const my = pontos.reduce((s, q) => s + q.y, 0) / n;
  const b =
    pontos.reduce((s, q) => s + (q.x - mx) * (q.y - my), 0) / pontos.reduce((s, q) => s + (q.x - mx) ** 2, 0);
  const a = my - b * mx;

  const dispersao: Cena = (ctx, ar, p, fonte) => {
    const visiveis = Math.floor(suavizar(p / 0.45) * n);
    pontos.slice(0, visiveis).forEach((q, i) => {
      circulo(ctx, ar.x + q.x * ar.l, ar.y + (1 - q.y) * ar.a, pequena ? 6 : 8, i % 3 === 0 ? COR.rosa : COR.verde);
    });
    const linha = suavizar((p - 0.45) / 0.25);
    if (linha > 0) {
      ctx.strokeStyle = COR.preto;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(ar.x, ar.y + (1 - a) * ar.a);
      ctx.lineTo(ar.x + linha * ar.l, ar.y + (1 - (a + b * linha)) * ar.a);
      ctx.stroke();
    }
    if (p > 0.72) {
      rotulo(ctx, `ŷ = ${a.toFixed(2)} + ${b.toFixed(2)}x`, ar.x + ar.l * 0.05, ar.y + ar.a * 0.08, fonte, COR.creme);
    }
  };

  // 2. Histograma + densidade normal
  const r2 = rng(2);
  const amostra = Array.from({ length: 600 }, () => normal(r2));
  const classes = pequena ? 14 : 22;
  const contagens = new Array(classes).fill(0);
  amostra.forEach((v) => {
    const k = Math.floor(((v + 3) / 6) * classes);
    if (k >= 0 && k < classes) contagens[k]++;
  });
  const maxContagem = Math.max(...contagens);
  const densidade = (z: number) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
  const escalaDensidade = (600 * (6 / classes)) / maxContagem;

  const histograma: Cena = (ctx, ar, p, fonte) => {
    const largura = ar.l / classes;
    contagens.forEach((c, i) => {
      const crescer = suavizar((p - i * 0.018) / 0.3);
      const h = (c / maxContagem) * ar.a * 0.9 * crescer;
      ctx.fillStyle = i % 2 ? COR.lilas : COR.rosa;
      ctx.strokeStyle = COR.preto;
      ctx.lineWidth = 3;
      ctx.fillRect(ar.x + i * largura, ar.y + ar.a - h, largura, h);
      ctx.strokeRect(ar.x + i * largura, ar.y + ar.a - h, largura, h);
    });
    const curva = suavizar((p - 0.5) / 0.3);
    if (curva > 0) {
      ctx.strokeStyle = COR.preto;
      ctx.lineWidth = 5;
      ctx.beginPath();
      for (let k = 0; k <= 100 * curva; k++) {
        const z = -3 + (6 * k) / 100;
        const y = ar.y + ar.a - densidade(z) * escalaDensidade * ar.a * 0.9;
        k === 0 ? ctx.moveTo(ar.x + (k / 100) * ar.l, y) : ctx.lineTo(ar.x + (k / 100) * ar.l, y);
      }
      ctx.stroke();
    }
    if (p > 0.8) rotulo(ctx, "X ~ N(μ, σ²)", ar.x + ar.l * 0.05, ar.y + ar.a * 0.08, fonte, COR.verde);
  };

  // 3. Série temporal com intervalo de confiança
  const r3 = rng(3);
  const tamanho = pequena ? 80 : 160;
  let nivel = 0.5;
  const serie = Array.from({ length: tamanho }, (_, i) => {
    nivel = limitar(nivel + normal(r3) * 0.012, 0.2, 0.8);
    return limitar(nivel + Math.sin(i / 9) * 0.08);
  });

  const temporal: Cena = (ctx, ar, p, fonte) => {
    const ate = Math.max(2, Math.floor(suavizar(p / 0.8) * tamanho));
    const px = (i: number) => ar.x + (i / (tamanho - 1)) * ar.l;
    const py = (v: number) => ar.y + (1 - v) * ar.a;
    ctx.fillStyle = COR.verde;
    ctx.beginPath();
    for (let i = 0; i < ate; i++) ctx.lineTo(px(i), py(serie[i] + 0.06 + i * 0.0004));
    for (let i = ate - 1; i >= 0; i--) ctx.lineTo(px(i), py(serie[i] - 0.06 - i * 0.0004));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = COR.preto;
    ctx.lineWidth = 5;
    ctx.beginPath();
    for (let i = 0; i < ate; i++) i === 0 ? ctx.moveTo(px(i), py(serie[i])) : ctx.lineTo(px(i), py(serie[i]));
    ctx.stroke();
    circulo(ctx, px(ate - 1), py(serie[ate - 1]), 10, COR.rosa);
    if (p > 0.82) rotulo(ctx, "IC 95%", ar.x + ar.l * 0.05, ar.y + ar.a * 0.08, fonte, COR.creme);
  };

  // 4. K-means
  const r4 = rng(4);
  const centros = [
    { x: 0.25, y: 0.3 },
    { x: 0.72, y: 0.35 },
    { x: 0.5, y: 0.75 },
  ];
  const inicios = [
    { x: 0.9, y: 0.85 },
    { x: 0.1, y: 0.8 },
    { x: 0.55, y: 0.1 },
  ];
  const coresCluster = [COR.rosa, COR.verde, COR.lilas];
  const pontosCluster = Array.from({ length: n * 2 }, (_, i) => {
    const c = centros[i % 3];
    return { x: limitar(c.x + normal(r4) * 0.08), y: limitar(c.y + normal(r4) * 0.08) };
  });

  const kmeans: Cena = (ctx, ar, p, fonte) => {
    const m = suavizar((p - 0.15) / 0.5);
    const atuais = centros.map((c, k) => ({
      x: inicios[k].x + (c.x - inicios[k].x) * m,
      y: inicios[k].y + (c.y - inicios[k].y) * m,
    }));
    pontosCluster.forEach((q) => {
      let melhor = 0;
      let menor = Infinity;
      atuais.forEach((c, k) => {
        const d = (q.x - c.x) ** 2 + (q.y - c.y) ** 2;
        if (d < menor) [menor, melhor] = [d, k];
      });
      circulo(ctx, ar.x + q.x * ar.l, ar.y + q.y * ar.a, pequena ? 5 : 7, p < 0.1 ? COR.branco : coresCluster[melhor]);
    });
    atuais.forEach((c) => {
      const s = pequena ? 14 : 20;
      ctx.fillStyle = COR.preto;
      ctx.fillRect(ar.x + c.x * ar.l - s / 2, ar.y + c.y * ar.a - s / 2, s, s);
    });
    if (p > 0.7) rotulo(ctx, "k = 3", ar.x + ar.l * 0.05, ar.y + ar.a * 0.08, fonte, COR.verde);
  };

  return [dispersao, histograma, temporal, kmeans];
}

function circulo(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, cor: string) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = cor;
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = COR.preto;
  ctx.stroke();
}

function rotulo(ctx: CanvasRenderingContext2D, texto: string, x: number, y: number, fonte: string, fundo: string) {
  ctx.font = `700 22px ${fonte}`;
  const largura = ctx.measureText(texto).width + 24;
  ctx.fillStyle = COR.preto;
  ctx.fillRect(x + 5, y + 5, largura, 40);
  ctx.fillStyle = fundo;
  ctx.fillRect(x, y, largura, 40);
  ctx.strokeStyle = COR.preto;
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, largura, 40);
  ctx.fillStyle = COR.preto;
  ctx.textBaseline = "middle";
  ctx.fillText(texto, x + 12, y + 21);
}

function eixos(ctx: CanvasRenderingContext2D, ar: Area) {
  ctx.strokeStyle = COR.preto;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(ar.x, ar.y - 10);
  ctx.lineTo(ar.x, ar.y + ar.a);
  ctx.lineTo(ar.x + ar.l + 10, ar.y + ar.a);
  ctx.stroke();
  ctx.lineWidth = 3;
  for (let i = 1; i <= 5; i++) {
    const x = ar.x + (ar.l * i) / 5;
    const y = ar.y + ar.a - (ar.a * i) / 5;
    ctx.beginPath();
    ctx.moveTo(x, ar.y + ar.a);
    ctx.lineTo(x, ar.y + ar.a + 12);
    ctx.moveTo(ar.x - 12, y);
    ctx.lineTo(ar.x, y);
    ctx.stroke();
  }
}

export function FundoDados() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fonte = getComputedStyle(document.body).getPropertyValue("--font-mono").trim() || "monospace";
    let cenas = criarCenas(window.innerWidth < 640);
    let largura = 0;
    let altura = 0;

    const redimensionar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      largura = window.innerWidth;
      altura = window.innerHeight;
      canvas.width = largura * dpr;
      canvas.height = altura * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cenas = criarCenas(largura < 640);
    };

    const desenhar = (tempo: number) => {
      const indice = Math.floor(tempo / DURACAO_CENA) % cenas.length;
      const p = (tempo % DURACAO_CENA) / DURACAO_CENA;
      // Entra e sai suavemente nas bordas de cada cena.
      ctx.globalAlpha = limitar(Math.min(p / 0.05, (1 - p) / 0.05));
      ctx.clearRect(0, 0, largura, altura);
      const margemX = largura < 640 ? 32 : largura * 0.1;
      const area = { x: margemX, y: altura * 0.18, l: largura - margemX * 2, a: altura * 0.66 };
      eixos(ctx, area);
      cenas[indice](ctx, area, p, fonte);
      ctx.globalAlpha = 1;
    };

    redimensionar();
    window.addEventListener("resize", redimensionar);

    if (reduzir) {
      desenhar(DURACAO_CENA * 0.6); // quadro estático da regressão já desenhada
      return () => window.removeEventListener("resize", redimensionar);
    }

    let quadro = 0;
    let ultimo = 0;
    let decorrido = 0;
    let anterior: number | null = null;

    const laco = (agora: number) => {
      quadro = requestAnimationFrame(laco);
      if (anterior === null) anterior = agora;
      decorrido += agora - anterior;
      anterior = agora;
      if (agora - ultimo < QUADRO_MINIMO_MS) return;
      ultimo = agora;
      desenhar(decorrido);
    };

    const aoMudarVisibilidade = () => {
      if (document.hidden) {
        cancelAnimationFrame(quadro);
        anterior = null;
      } else {
        quadro = requestAnimationFrame(laco);
      }
    };

    quadro = requestAnimationFrame(laco);
    document.addEventListener("visibilitychange", aoMudarVisibilidade);
    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("resize", redimensionar);
      document.removeEventListener("visibilitychange", aoMudarVisibilidade);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.22]"
    />
  );
}
