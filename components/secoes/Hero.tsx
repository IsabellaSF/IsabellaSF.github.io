import { BotaoBrutal } from "@/components/ui/BotaoBrutal";
import { CardBrutal } from "@/components/ui/CardBrutal";
import { Sticker } from "@/components/ui/Sticker";
import { PERFIL } from "@/content/perfil";
import type { Conteudo } from "@/content/tipos";

export function Hero({ t }: { t: Conteudo }) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
      <div className="relative">
        <CardBrutal cor="branco" className="relative max-w-4xl shadow-brutal-lg">
          {/* Barra de janela, como um notebook aberto */}
          <div className="flex items-center gap-2 border-b-[3px] border-black bg-creme px-4 py-2">
            <span className="size-3.5 rounded-full border-2 border-black bg-rosa" />
            <span className="size-3.5 rounded-full border-2 border-black bg-verde" />
            <span className="size-3.5 rounded-full border-2 border-black bg-lilas" />
            <span className="ml-2 font-mono text-xs font-bold">portfolio.ipynb</span>
          </div>

          <div className="space-y-5 p-5 sm:p-8">
            <p className="font-mono text-sm">
              <span className="font-bold">In [1]:</span>{" "}
              <span className="bg-creme px-1">isabella.apresentar()</span>
            </p>
            <div className="flex gap-3 font-mono text-sm">
              <span className="shrink-0 font-bold">Out[1]:</span>
              <div className="min-w-0">
                <p className="mb-1">{t.hero.saudacao}</p>
                <h1 className="font-display text-4xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
                  {PERFIL.nome}
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[0.8em] w-[0.45em] translate-y-[0.08em] bg-rosa motion-safe:animate-[piscar_1s_steps(1)_infinite]"
                  />
                </h1>
              </div>
            </div>
            <p className="inline-block border-[3px] border-black bg-verde px-3 py-1 font-sans text-lg font-bold sm:text-xl">
              {t.hero.cargo}
            </p>
            <p className="font-mono text-sm sm:text-base">{t.hero.resumo}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <BotaoBrutal href="#projetos" cor="rosa">
                {t.hero.botaoProjetos} ↓
              </BotaoBrutal>
              {PERFIL.curriculoPdf && (
                <BotaoBrutal href={PERFIL.curriculoPdf} cor="creme" download>
                  {t.hero.botaoCurriculo}
                </BotaoBrutal>
              )}
              <BotaoBrutal href="#contato" cor="branco">
                {t.hero.botaoContato}
              </BotaoBrutal>
            </div>
          </div>
        </CardBrutal>

        <Sticker cor="verde" rotacao={6} className="absolute -top-5 right-2 sm:right-10 md:right-[18%]">
          {t.hero.sticker}
        </Sticker>
        <div
          aria-hidden="true"
          className="absolute -bottom-10 right-4 hidden size-28 items-center justify-center rounded-full border-[3px] border-black bg-lilas font-mono text-xs font-bold shadow-brutal md:flex motion-safe:animate-[girar_14s_linear_infinite]"
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0">
            <defs>
              <path id="circulo" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
            </defs>
            <text fontSize="11" fontFamily="var(--font-mono)" fontWeight="700" letterSpacing="2">
              <textPath href="#circulo">p &lt; 0.05 · n = 1 · σ² · μ · </textPath>
            </text>
          </svg>
          <span className="font-display text-2xl">∑</span>
        </div>
      </div>
    </section>
  );
}
