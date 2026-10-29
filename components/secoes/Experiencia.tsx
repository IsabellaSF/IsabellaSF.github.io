import { BarraAnimada, Revelar } from "@/components/animacoes";
import { CardBrutal } from "@/components/ui/CardBrutal";
import { TituloSecao } from "@/components/ui/TituloSecao";
import type { Conteudo } from "@/content/tipos";

const coresBarra = ["bg-rosa", "bg-verde", "bg-lilas", "bg-creme", "bg-azul"];

function anoDecimal(data: Date) {
  return data.getFullYear() + data.getMonth() / 12;
}

/** Experiências como um gráfico de Gantt (linha do tempo) + cards com os detalhes. */
export function Experiencia({ t }: { t: Conteudo }) {
  const itens = t.experiencia.itens;
  const agora = anoDecimal(new Date()); // data do build
  const inicioEixo = Math.floor(Math.min(...itens.map((e) => e.inicio)));
  const fimEixo = Math.ceil(agora + 0.01);
  const anos = Array.from({ length: fimEixo - inicioEixo + 1 }, (_, i) => inicioEixo + i);
  const posicao = (ano: number) => ((ano - inicioEixo) / (fimEixo - inicioEixo)) * 100;

  return (
    <section aria-labelledby="experiencia" className="mx-auto max-w-6xl px-4 py-16">
      <TituloSecao id="experiencia" rotulo="In [4]: plt.barh(experiencia)">
        {t.experiencia.titulo}
      </TituloSecao>

      <Revelar>
        <CardBrutal className="mb-10 p-4 sm:p-6" aria-hidden="true">
          <div className="space-y-3">
            {itens.map((exp, i) => {
              const fim = exp.fim ?? agora;
              return (
                <div key={exp.organizacao} className="grid gap-1 md:grid-cols-[13rem_1fr] md:items-center md:gap-4">
                  <p className="truncate font-mono text-xs font-bold">{exp.organizacao.split(" · ")[0]}</p>
                  <div className="relative h-8 border-2 border-black bg-papel">
                    {anos.slice(1, -1).map((ano) => (
                      <span
                        key={ano}
                        className="absolute inset-y-0 border-l border-dashed border-black/40"
                        style={{ left: `${posicao(ano)}%` }}
                      />
                    ))}
                    <BarraAnimada
                      esquerda={posicao(exp.inicio)}
                      largura={posicao(fim) - posicao(exp.inicio)}
                      atraso={i * 0.12}
                      className={`absolute inset-y-0.5 border-2 border-black ${coresBarra[i % coresBarra.length]}`}
                    />
                  </div>
                </div>
              );
            })}
            <div className="grid md:grid-cols-[13rem_1fr] md:gap-4">
              <span />
              <div className="relative h-5 font-mono text-xs font-bold">
                {anos.map((ano) => (
                  <span
                    key={ano}
                    className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
                    style={{ left: `${posicao(ano)}%` }}
                  >
                    {ano}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardBrutal>
      </Revelar>

      <ol className="grid gap-6 md:grid-cols-2">
        {itens.map((exp, i) => (
          <li key={exp.organizacao}>
            <Revelar atraso={(i % 2) * 0.08} className="h-full">
              <CardBrutal interativo className="h-full p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className={`size-4 border-2 border-black ${coresBarra[i % coresBarra.length]}`} />
                  <span className="font-mono text-xs font-bold">{exp.periodo}</span>
                  {exp.fim === null && (
                    <span className="border-2 border-black bg-verde px-1.5 font-mono text-[10px] font-bold uppercase">
                      {t.experiencia.atual}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl uppercase leading-tight">{exp.organizacao}</h3>
                <p className="mb-3 font-bold">{exp.cargo}</p>
                <ul className="list-['→_'] space-y-1 pl-5">
                  {exp.pontos.map((ponto) => (
                    <li key={ponto}>{ponto}</li>
                  ))}
                </ul>
              </CardBrutal>
            </Revelar>
          </li>
        ))}
      </ol>
    </section>
  );
}
