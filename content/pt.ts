import type { Conteudo } from "./tipos";

export const pt: Conteudo = {
  meta: {
    titulo: "Isabella Freitas · Ciência de Dados",
    descricao:
      "Portfólio de Isabella Freitas, estudante de Matemática e Ciência de Dados: machine learning, Python, SQL e desenvolvimento full stack.",
  },
  nav: {
    sobre: "Sobre",
    habilidades: "Habilidades",
    experiencia: "Experiência",
    formacao: "Formação",
    projetos: "Projetos",
    contato: "Contato",
    trocarIdioma: "Read in English",
  },
  hero: {
    saudacao: "Olá! Eu sou",
    cargo: "Estudante de Matemática e Ciência de Dados",
    resumo: "machine learning · Python · SQL · Next.js · Nest.js",
    botaoProjetos: "Ver projetos",
    botaoCurriculo: "Baixar currículo",
    botaoContato: "Contato",
    sticker: "Matemática + Dados",
  },
  kpis: [
    { valor: "2", rotulo: "graduações em curso" },
    { valor: "5", rotulo: "experiências" },
    { valor: "15+", rotulo: "tecnologias" },
    { valor: "C2", rotulo: "inglês (EF SET)" },
  ],
  sobre: {
    titulo: "Sobre",
    paragrafos: [
      "Sou graduanda em Matemática pela UFSJ e em Ciência de Dados pela UNINTER, com formação técnica em Informática pelo IFMG. Combino conhecimentos em programação, automação e inteligência artificial.",
      "Tenho experiência em projetos acadêmicos práticos que envolvem desenvolvimento de software e integração com hardware, da robótica educacional ao desenvolvimento full stack. Busco unir a vontade de aprender com a experiência no mercado de trabalho, usando dados para resolver problemas reais.",
    ],
    interessesTitulo: "Interesses",
    interesses: [
      "Setor espacial",
      "Dados públicos (IBGE)",
      "Saúde e educação",
      "Meio ambiente",
      "Privacidade e ética de dados",
    ],
  },
  habilidades: {
    titulo: "Habilidades",
    colunaCategoria: "categoria",
    colunaFerramentas: "ferramentas",
    linhas: [
      { categoria: "Linguagens", itens: ["Python", "TypeScript", "JavaScript", "Java", "C#", "PHP"] },
      { categoria: "Dados & IA", itens: ["Limpeza de dados", "Análise de dados", "Machine Learning", "Visualização"] },
      { categoria: "Bancos de dados", itens: ["SQL", "MySQL Workbench", "NoSQL", "Modelagem"] },
      { categoria: "Web", itens: ["Next.js", "Nest.js", "HTML5", "CSS"] },
      { categoria: "Mobile", itens: ["Flutter"] },
      { categoria: "Ferramentas", itens: ["Git", "GitHub"] },
    ],
  },
  experiencia: {
    titulo: "Experiência",
    atual: "atual",
    itens: [
      {
        cargo: "Estagiária full stack",
        organizacao: "DataClix",
        periodo: "mai 2026 – atual",
        inicio: 2026.33,
        fim: null,
        pontos: [
          "Desenvolvimento full stack com Nest.js e Next.js",
          "Modelagem de bancos de dados SQL (MySQL Workbench) e NoSQL",
          "Versionamento e colaboração com GitHub",
        ],
      },
      {
        // TODO: descrever as atividades na UFVision.
        cargo: "Membro associado",
        organizacao: "UFVision",
        periodo: "dez 2024 – atual",
        inicio: 2024.92,
        fim: null,
        pontos: ["Membro associado do grupo UFVision"],
      },
      {
        cargo: "Estagiária",
        organizacao: "NERO · Núcleo de Especialização em Robótica",
        periodo: "ago 2025 – fev 2026",
        inicio: 2025.58,
        fim: 2026.08,
        pontos: [
          "Desenvolvimento do aplicativo de controle de um robô educacional",
          "Práticas pedagógicas de robótica para o EJA e o ensino básico",
        ],
      },
      {
        cargo: "Membro",
        organizacao: "NIAS · Núcleo de Identificação e Análise de Sinais",
        periodo: "2023 – 2024",
        inicio: 2023,
        fim: 2025,
        pontos: [
          "Desenvolvimento de front-end com Python, CSS, HTML e PHP",
          "Capacitação em limpeza de dados, análise de dados e machine learning",
          "Grupo de extensão com curso de inteligência artificial",
        ],
      },
      {
        cargo: "Diretora de projetos",
        organizacao: "Centro Acadêmico de Engenharia Elétrica",
        periodo: "2023 – 2024",
        inicio: 2023,
        fim: 2025,
        pontos: ["Coordenação dos projetos realizados pelo centro acadêmico"],
      },
    ],
  },
  formacao: {
    titulo: "Formação",
    itens: [
      {
        curso: "Bacharelado em Matemática",
        instituicao: "Universidade Federal de São João del-Rei (UFSJ)",
        periodo: "2026 – atual",
        status: "em andamento",
      },
      {
        curso: "Tecnologia em Ciência de Dados",
        instituicao: "Centro Universitário Internacional UNINTER",
        periodo: "mar 2026 – jun 2028",
        status: "em andamento",
      },
      {
        curso: "Engenharia Elétrica",
        instituicao: "Universidade Federal de Viçosa (UFV)",
        periodo: "2022 – 2026",
        status: "não concluído",
      },
      {
        curso: "Técnico em Informática",
        instituicao: "IFMG, campus Ouro Branco",
        periodo: "2017 – 2019",
        status: "concluído",
      },
    ],
    idiomasTitulo: "Idiomas",
    idiomas: [
      { nome: "Português", nivel: "nativo" },
      { nome: "Inglês", nivel: "C2, EF SET 74/100" },
    ],
  },
  projetos: {
    titulo: "Projetos",
    concluido: "concluído",
    emConstrucao: "em construção",
    verRepositorio: "Repositório",
    verDemo: "Demo",
  },
  contato: {
    titulo: "Contato",
    texto: "Quer conversar sobre dados, um projeto ou uma vaga? Me chame por um destes canais.",
    email: "E-mail",
  },
  rodape: "Feito com Next.js e Tailwind · publicado no GitHub Pages",
};
