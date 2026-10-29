"use client";

import { animate, motion, MotionConfig, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Faz o conteúdo subir e aparecer quando entra na tela (uma vez). */
export function Revelar({
  children,
  atraso = 0,
  className,
}: {
  children: React.ReactNode;
  atraso?: number;
  className?: string;
}) {
  const reduzir = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduzir ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: atraso, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Conta de 0 até o número do valor (ex.: "15+" → 0…15 e depois o "+"). */
export function Contador({ valor }: { valor: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true });
  const reduzir = useReducedMotion();
  const partes = valor.match(/^(\d+)(.*)$/);
  // Começa com o valor final, para o HTML estático (e quem está sem JS) já mostrar o número certo.
  const [atual, setAtual] = useState(valor);

  useEffect(() => {
    if (!partes || !visivel || reduzir) return;
    const alvo = Number(partes[1]);
    const controle = animate(0, alvo, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setAtual(`${Math.round(v)}`),
      onComplete: () => setAtual(valor),
    });
    return () => controle.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visivel, reduzir, valor]);

  return <span ref={ref}>{atual}</span>;
}

/** Barra do gráfico de Gantt que cresce da esquerda para a direita. */
export function BarraAnimada({
  esquerda,
  largura,
  className,
  atraso = 0,
  children,
}: {
  esquerda: number;
  largura: number;
  className?: string;
  atraso?: number;
  children?: React.ReactNode;
}) {
  const reduzir = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ left: `${esquerda}%`, width: `${largura}%`, transformOrigin: "left" }}
      initial={reduzir ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: atraso, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Faz todas as animações do Framer Motion respeitarem `prefers-reduced-motion`. */
export function ConfigMovimento({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
