import { en } from "./en";
import { pt } from "./pt";
import { IDIOMAS, type Conteudo, type Idioma } from "./tipos";

const conteudos: Record<Idioma, Conteudo> = { pt, en };

export function ehIdioma(valor: string): valor is Idioma {
  return (IDIOMAS as readonly string[]).includes(valor);
}

export function obterConteudo(idioma: Idioma): Conteudo {
  return conteudos[idioma];
}
