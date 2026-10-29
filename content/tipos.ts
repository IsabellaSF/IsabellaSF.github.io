export const IDIOMAS = ["pt", "en"] as const;
export type Idioma = (typeof IDIOMAS)[number];

export type Experiencia = {
  cargo: string;
  organizacao: string;
  periodo: string;
  /** Ano decimal (ex.: 2026.33 = maio de 2026), usado para desenhar o gráfico de Gantt. */
  inicio: number;
  /** `null` = em andamento. */
  fim: number | null;
  pontos: string[];
};

export type Formacao = {
  curso: string;
  instituicao: string;
  periodo: string;
  status: string;
};

export type Conteudo = {
  meta: { titulo: string; descricao: string };
  nav: {
    sobre: string;
    habilidades: string;
    experiencia: string;
    formacao: string;
    projetos: string;
    contato: string;
    trocarIdioma: string;
  };
  hero: {
    saudacao: string;
    cargo: string;
    resumo: string;
    botaoProjetos: string;
    botaoCurriculo: string;
    botaoContato: string;
    sticker: string;
  };
  kpis: { valor: string; rotulo: string }[];
  sobre: {
    titulo: string;
    paragrafos: string[];
    interessesTitulo: string;
    interesses: string[];
  };
  habilidades: {
    titulo: string;
    colunaCategoria: string;
    colunaFerramentas: string;
    linhas: { categoria: string; itens: string[] }[];
  };
  experiencia: { titulo: string; atual: string; itens: Experiencia[] };
  formacao: {
    titulo: string;
    itens: Formacao[];
    idiomasTitulo: string;
    idiomas: { nome: string; nivel: string }[];
  };
  projetos: {
    titulo: string;
    concluido: string;
    emConstrucao: string;
    verRepositorio: string;
    verDemo: string;
  };
  contato: { titulo: string; texto: string; email: string };
  rodape: string;
};
