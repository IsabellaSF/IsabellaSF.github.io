import { Revelar } from "@/components/animacoes";
import { CardBrutal, type CorCard } from "@/components/ui/CardBrutal";
import { TituloSecao } from "@/components/ui/TituloSecao";
import type { Conteudo } from "@/content/tipos";

const cores: CorCard[] = ["creme", "branco", "branco", "branco"];

export function Formacao({ t }: { t: Conteudo }) {
  return (
    <section aria-labelledby="formacao" className="mx-auto max-w-6xl px-4 py-16">
      <TituloSecao id="formacao" rotulo="In [5]: formacao.describe()">
        {t.formacao.titulo}
      </TituloSecao>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ul className="grid gap-5 sm:grid-cols-2">
          {t.formacao.itens.map((item, i) => (
            <li key={item.curso}>
              <Revelar atraso={i * 0.06} className="h-full">
                <CardBrutal cor={cores[i % cores.length]} className="flex h-full flex-col p-5">
                  <p className="mb-2 font-mono text-xs font-bold">{item.periodo}</p>
                  <h3 className="font-display text-lg uppercase leading-tight">{item.curso}</h3>
                  <p className="mt-1 grow">{item.instituicao}</p>
                  <p className="mt-3 self-start border-2 border-black bg-white px-2 font-mono text-xs font-bold">
                    {item.status}
                  </p>
                </CardBrutal>
              </Revelar>
            </li>
          ))}
        </ul>
        <Revelar atraso={0.1}>
          <CardBrutal cor="lilas" className="p-5">
            <h3 className="mb-4 font-display text-xl uppercase">{t.formacao.idiomasTitulo}</h3>
            <dl className="space-y-3">
              {t.formacao.idiomas.map((idioma) => (
                <div key={idioma.nome} className="border-2 border-black bg-white p-3">
                  <dt className="font-bold">{idioma.nome}</dt>
                  <dd className="font-mono text-sm">{idioma.nivel}</dd>
                </div>
              ))}
            </dl>
          </CardBrutal>
        </Revelar>
      </div>
    </section>
  );
}
