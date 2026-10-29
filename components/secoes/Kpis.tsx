import { Contador, Revelar } from "@/components/animacoes";
import { CardBrutal, type CorCard } from "@/components/ui/CardBrutal";
import type { Conteudo } from "@/content/tipos";

const cores: CorCard[] = ["creme", "rosa", "verde", "lilas"];

export function Kpis({ t }: { t: Conteudo }) {
  return (
    <section aria-label="KPIs" className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {t.kpis.map((kpi, i) => (
          <Revelar key={kpi.rotulo} atraso={i * 0.08}>
            <CardBrutal cor={cores[i % cores.length]} className="p-5">
              <p className="font-display text-5xl leading-none sm:text-6xl">
                <Contador valor={kpi.valor} />
              </p>
              <p className="mt-2 font-mono text-xs font-bold uppercase sm:text-sm">{kpi.rotulo}</p>
            </CardBrutal>
          </Revelar>
        ))}
      </div>
    </section>
  );
}
