import { Revelar } from "@/components/animacoes";
import { CardBrutal } from "@/components/ui/CardBrutal";
import { TituloSecao } from "@/components/ui/TituloSecao";
import { PERFIL } from "@/content/perfil";
import type { Conteudo } from "@/content/tipos";

export function Contato({ t }: { t: Conteudo }) {
  const canais = [
    { rotulo: t.contato.email, valor: PERFIL.email, href: `mailto:${PERFIL.email}`, cor: "bg-rosa" },
    { rotulo: "LinkedIn", valor: "in/isabella-freitas-dev", href: PERFIL.linkedin, cor: "bg-verde" },
    { rotulo: "GitHub", valor: "@IsabellaSF", href: PERFIL.github, cor: "bg-lilas" },
  ];

  return (
    <section aria-labelledby="contato" className="mx-auto max-w-6xl px-4 py-16">
      <TituloSecao id="contato" rotulo="In [7]: isabella.contato()">
        {t.contato.titulo}
      </TituloSecao>
      <Revelar>
        <CardBrutal cor="creme" className="p-6 sm:p-10">
          <p className="mb-8 max-w-2xl text-xl font-bold sm:text-2xl">{t.contato.texto}</p>
          <ul className="grid gap-5 md:grid-cols-3">
            {canais.map((canal) => (
              <li key={canal.rotulo}>
                <a
                  href={canal.href}
                  target={canal.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className={`block border-[3px] border-black p-4 shadow-brutal transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-1.5 active:translate-y-1.5 active:shadow-none ${canal.cor}`}
                >
                  <span className="block font-display text-xl uppercase">{canal.rotulo} ↗</span>
                  <span className="block break-all font-mono text-sm">{canal.valor}</span>
                </a>
              </li>
            ))}
          </ul>
        </CardBrutal>
      </Revelar>
    </section>
  );
}
