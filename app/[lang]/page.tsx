import { ConfigMovimento } from "@/components/animacoes";
import { FundoDados } from "@/components/FundoDados";
import { Contato } from "@/components/secoes/Contato";
import { Experiencia } from "@/components/secoes/Experiencia";
import { Formacao } from "@/components/secoes/Formacao";
import { Habilidades } from "@/components/secoes/Habilidades";
import { Hero } from "@/components/secoes/Hero";
import { Kpis } from "@/components/secoes/Kpis";
import { Navegacao } from "@/components/secoes/Navegacao";
import { Projetos } from "@/components/secoes/Projetos";
import { Sobre } from "@/components/secoes/Sobre";
import { ehIdioma, obterConteudo } from "@/content";
import { PERFIL } from "@/content/perfil";

export default async function Pagina({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!ehIdioma(lang)) return null;
  const t = obterConteudo(lang);

  return (
    <ConfigMovimento>
      <FundoDados />
      <Navegacao t={t} idioma={lang} />
      <main>
        <Hero t={t} />
        <Kpis t={t} />
        <Sobre t={t} />
        <Habilidades t={t} />
        <Experiencia t={t} />
        <Formacao t={t} />
        <Projetos t={t} idioma={lang} />
        <Contato t={t} />
      </main>
      <footer className="mt-10 border-t-[3px] border-black bg-black px-4 py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 font-mono text-sm">
          <p>
            © {new Date().getFullYear()} {PERFIL.nome}
          </p>
          <p>{t.rodape}</p>
        </div>
      </footer>
    </ConfigMovimento>
  );
}
