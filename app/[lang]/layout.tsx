import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { ehIdioma, obterConteudo } from "@/content";
import { PERFIL } from "@/content/perfil";
import { IDIOMAS } from "@/content/tipos";
import "../globals.css";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--fonte-display" });
const texto = Space_Grotesk({ subsets: ["latin"], variable: "--fonte-texto" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--fonte-mono" });

export const dynamicParams = false;

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }));
}

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!ehIdioma(lang)) return {};
  const t = obterConteudo(lang);
  return {
    metadataBase: new URL(PERFIL.site),
    title: t.meta.titulo,
    description: t.meta.descricao,
    authors: [{ name: PERFIL.nome, url: PERFIL.site }],
    icons: { icon: "/favicon.svg" },
    alternates: {
      canonical: `/${lang}/`,
      languages: { "pt-BR": "/pt/", en: "/en/" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}/`,
      title: t.meta.titulo,
      description: t.meta.descricao,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function Layout({ children, params }: Params & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!ehIdioma(lang)) notFound();
  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={`${display.variable} ${texto.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
