import { Revelar } from "@/components/animacoes";
import { CardBrutal } from "@/components/ui/CardBrutal";
import { Tag, type CorTag } from "@/components/ui/Tag";
import { TituloSecao } from "@/components/ui/TituloSecao";
import type { Conteudo } from "@/content/tipos";

const cores: CorTag[] = ["verde", "rosa", "creme", "lilas", "branco"];

export function Sobre({ t }: { t: Conteudo }) {
  return (
    <section aria-labelledby="sobre" className="mx-auto max-w-6xl px-4 py-16">
      <TituloSecao id="sobre" rotulo="In [2]: isabella.sobre()">
        {t.sobre.titulo}
      </TituloSecao>
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <Revelar>
          <CardBrutal className="space-y-4 p-6 text-lg leading-relaxed sm:p-8">
            {t.sobre.paragrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </CardBrutal>
        </Revelar>
        <Revelar atraso={0.1}>
          <CardBrutal cor="creme" className="p-6">
            <h3 className="mb-4 font-mono text-sm font-bold uppercase">{t.sobre.interessesTitulo}</h3>
            <ul className="flex flex-wrap gap-3">
              {t.sobre.interesses.map((interesse, i) => (
                <li key={interesse}>
                  <Tag cor={cores[i % cores.length]}>{interesse}</Tag>
                </li>
              ))}
            </ul>
          </CardBrutal>
        </Revelar>
      </div>
    </section>
  );
}
