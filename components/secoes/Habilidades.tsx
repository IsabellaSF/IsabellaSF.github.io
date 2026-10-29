import { Revelar } from "@/components/animacoes";
import { CardBrutal } from "@/components/ui/CardBrutal";
import { TituloSecao } from "@/components/ui/TituloSecao";
import type { Conteudo } from "@/content/tipos";

/** Habilidades apresentadas como a saída de um `df.head()` do pandas. */
export function Habilidades({ t }: { t: Conteudo }) {
  const { linhas, colunaCategoria, colunaFerramentas } = t.habilidades;
  return (
    <section aria-labelledby="habilidades" className="mx-auto max-w-6xl px-4 py-16">
      <TituloSecao id="habilidades" rotulo={`In [3]: skills.head(${linhas.length})`}>
        {t.habilidades.titulo}
      </TituloSecao>
      <Revelar>
        <CardBrutal className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse font-mono text-sm">
            <thead>
              <tr className="border-b-[3px] border-black bg-black text-left text-white">
                <th scope="col" className="w-12 px-4 py-3" />
                <th scope="col" className="px-4 py-3">{colunaCategoria}</th>
                <th scope="col" className="px-4 py-3">{colunaFerramentas}</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, i) => (
                <tr key={linha.categoria} className="border-b-2 border-black last:border-b-0 even:bg-papel">
                  <th scope="row" className="px-4 py-3 text-left font-bold">
                    {i}
                  </th>
                  <td className="whitespace-nowrap px-4 py-3 font-bold">{linha.categoria}</td>
                  <td className="px-4 py-3">
                    <ul className="flex flex-wrap gap-2">
                      {linha.itens.map((item) => (
                        <li key={item} className="border-2 border-black bg-white px-2 py-0.5 hover:bg-verde">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t-[3px] border-black bg-creme px-4 py-2 font-mono text-xs">
            [{linhas.length} rows × 2 columns]
          </p>
        </CardBrutal>
      </Revelar>
    </section>
  );
}
