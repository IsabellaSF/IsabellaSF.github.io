import { Revelar } from "@/components/animacoes";
import { BotaoBrutal } from "@/components/ui/BotaoBrutal";
import { CardBrutal } from "@/components/ui/CardBrutal";
import { Tag } from "@/components/ui/Tag";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { PROJETOS } from "@/content/projetos";
import type { Conteudo, Idioma } from "@/content/tipos";

export function Projetos({ t, idioma }: { t: Conteudo; idioma: Idioma }) {
  return (
    <section aria-labelledby="projetos" className="mx-auto max-w-6xl px-4 py-16">
      <TituloSecao id="projetos" rotulo="In [6]: projetos.plot(kind='grid')">
        {t.projetos.titulo}
      </TituloSecao>
      <ul className="grid gap-8 md:grid-cols-2">
        {PROJETOS.map((projeto, i) => (
          <li key={projeto.id}>
            <Revelar atraso={(i % 2) * 0.08} className="h-full">
              <CardBrutal as="article" cor={projeto.cor} interativo className="flex h-full flex-col p-6">
                <p
                  className={`mb-4 self-start border-2 border-black px-2 font-mono text-xs font-bold uppercase ${
                    projeto.status === "concluido" ? "bg-white" : "bg-black text-white"
                  }`}
                >
                  {projeto.status === "concluido" ? `✓ ${t.projetos.concluido}` : `⚙ ${t.projetos.emConstrucao}`}
                </p>
                <h3 className="font-display text-2xl uppercase leading-tight">{projeto.titulo[idioma]}</h3>
                <p className="mt-3 grow leading-relaxed">{projeto.descricao[idioma]}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {projeto.tags.map((tag) => (
                    <li key={tag}>
                      <Tag cor="branco">{tag}</Tag>
                    </li>
                  ))}
                </ul>
                {(projeto.repositorio || projeto.demo) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {projeto.repositorio && (
                      <BotaoBrutal href={projeto.repositorio} cor="preto" target="_blank" rel="noreferrer">
                        {t.projetos.verRepositorio} ↗
                      </BotaoBrutal>
                    )}
                    {projeto.demo && (
                      <BotaoBrutal href={projeto.demo} cor="rosa" target="_blank" rel="noreferrer">
                        {t.projetos.verDemo} ↗
                      </BotaoBrutal>
                    )}
                  </div>
                )}
              </CardBrutal>
            </Revelar>
          </li>
        ))}
      </ul>
    </section>
  );
}
