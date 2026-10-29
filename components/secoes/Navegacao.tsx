import type { Conteudo, Idioma } from "@/content/tipos";
import { PERFIL } from "@/content/perfil";

export function Navegacao({ t, idioma }: { t: Conteudo; idioma: Idioma }) {
  const outro: Idioma = idioma === "pt" ? "en" : "pt";
  const links = [
    ["sobre", t.nav.sobre],
    ["habilidades", t.nav.habilidades],
    ["experiencia", t.nav.experiencia],
    ["formacao", t.nav.formacao],
    ["projetos", t.nav.projetos],
    ["contato", t.nav.contato],
  ] as const;

  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-black bg-papel">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a
          href={`/${idioma}/`}
          className="border-[3px] border-black bg-rosa px-2 py-1 font-display text-lg shadow-brutal-sm"
          aria-label={PERFIL.nomeCurto}
        >
          {PERFIL.iniciais}
        </a>
        <ul className="hidden items-center gap-1 font-mono text-sm font-bold lg:flex">
          {links.map(([id, rotulo]) => (
            <li key={id}>
              <a href={`#${id}`} className="border-2 border-transparent px-2 py-1 hover:border-black hover:bg-verde">
                {rotulo}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={`/${outro}/`}
            hrefLang={outro}
            title={t.nav.trocarIdioma}
            className="flex border-[3px] border-black font-mono text-sm font-bold shadow-brutal-sm"
          >
            <span aria-hidden="true" className={`px-2 py-1 ${idioma === "pt" ? "bg-black text-white" : "bg-white"}`}>
              PT
            </span>
            <span aria-hidden="true" className={`px-2 py-1 ${idioma === "en" ? "bg-black text-white" : "bg-white"}`}>
              EN
            </span>
            <span className="sr-only">{t.nav.trocarIdioma}</span>
          </a>
          <a
            href="#contato"
            className="border-[3px] border-black bg-verde px-3 py-1 font-mono text-sm font-bold shadow-brutal-sm lg:hidden"
          >
            {t.nav.contato}
          </a>
        </div>
      </nav>
    </header>
  );
}
