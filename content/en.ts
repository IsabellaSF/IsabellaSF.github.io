import type { Conteudo } from "./tipos";

export const en: Conteudo = {
  meta: {
    titulo: "Isabella Freitas · Data Science",
    descricao:
      "Portfolio of Isabella Freitas, Mathematics and Data Science student: machine learning, Python, SQL and full stack development.",
  },
  nav: {
    sobre: "About",
    habilidades: "Skills",
    experiencia: "Experience",
    formacao: "Education",
    projetos: "Projects",
    contato: "Contact",
    trocarIdioma: "Ler em português",
  },
  hero: {
    saudacao: "Hi! I'm",
    cargo: "Mathematics and Data Science student",
    resumo: "machine learning · Python · SQL · Next.js · Nest.js",
    botaoProjetos: "See projects",
    botaoCurriculo: "Download résumé",
    botaoContato: "Contact",
    sticker: "Math + Data",
  },
  kpis: [
    { valor: "2", rotulo: "degrees in progress" },
    { valor: "5", rotulo: "experiences" },
    { valor: "15+", rotulo: "technologies" },
    { valor: "C2", rotulo: "English (EF SET)" },
  ],
  sobre: {
    titulo: "About",
    paragrafos: [
      "I'm an undergraduate student in Mathematics at UFSJ and in Data Science at UNINTER, with a technical background in IT from IFMG. I combine knowledge in programming, automation and artificial intelligence.",
      "I have experience in hands-on academic projects involving software development and hardware integration, from educational robotics to full stack development. I'm combining the drive to learn with real-world industry experience, using data to solve real problems.",
    ],
    interessesTitulo: "Interests",
    interesses: [
      "Space sector",
      "Public data (IBGE)",
      "Health and education",
      "Environment",
      "Data privacy and ethics",
    ],
  },
  habilidades: {
    titulo: "Skills",
    colunaCategoria: "category",
    colunaFerramentas: "tools",
    linhas: [
      { categoria: "Languages", itens: ["Python", "TypeScript", "JavaScript", "Java", "C#", "PHP"] },
      { categoria: "Data & AI", itens: ["Data cleaning", "Data analysis", "Machine Learning", "Visualization"] },
      { categoria: "Databases", itens: ["SQL", "MySQL Workbench", "NoSQL", "Data modeling"] },
      { categoria: "Web", itens: ["Next.js", "Nest.js", "HTML5", "CSS"] },
      { categoria: "Mobile", itens: ["Flutter"] },
      { categoria: "Tools", itens: ["Git", "GitHub"] },
    ],
  },
  experiencia: {
    titulo: "Experience",
    atual: "present",
    itens: [
      {
        cargo: "Full stack intern",
        organizacao: "DataClix",
        periodo: "May 2026 – present",
        inicio: 2026.33,
        fim: null,
        pontos: [
          "Full stack development with Nest.js and Next.js",
          "SQL (MySQL Workbench) and NoSQL database modeling",
          "Version control and collaboration with GitHub",
        ],
      },
      {
        // TODO: describe the activities at UFVision.
        cargo: "Associate member",
        organizacao: "UFVision",
        periodo: "Dec 2024 – present",
        inicio: 2024.92,
        fim: null,
        pontos: ["Associate member of the UFVision group"],
      },
      {
        cargo: "Intern",
        organizacao: "NERO · Robotics Specialization Center",
        periodo: "Aug 2025 – Feb 2026",
        inicio: 2025.58,
        fim: 2026.08,
        pontos: [
          "Built the control app for an educational robot",
          "Robotics teaching practices for adult and primary education",
        ],
      },
      {
        cargo: "Member",
        organizacao: "NIAS · Signal Identification and Analysis Center",
        periodo: "2023 – 2024",
        inicio: 2023,
        fim: 2025,
        pontos: [
          "Front-end development with Python, CSS, HTML and PHP",
          "Training in data cleaning, data analysis and machine learning",
          "Outreach group with an artificial intelligence course",
        ],
      },
      {
        cargo: "Projects director",
        organizacao: "Electrical Engineering Student Association",
        periodo: "2023 – 2024",
        inicio: 2023,
        fim: 2025,
        pontos: ["Coordinated the projects run by the student association"],
      },
    ],
  },
  formacao: {
    titulo: "Education",
    itens: [
      {
        curso: "B.Sc. in Mathematics",
        instituicao: "Federal University of São João del-Rei (UFSJ)",
        periodo: "2026 – present",
        status: "in progress",
      },
      {
        curso: "Associate degree in Data Science",
        instituicao: "UNINTER International University Center",
        periodo: "Mar 2026 – Jun 2028",
        status: "in progress",
      },
      {
        curso: "Electrical Engineering",
        instituicao: "Federal University of Viçosa (UFV)",
        periodo: "2022 – 2026",
        status: "not completed",
      },
      {
        curso: "IT Technician",
        instituicao: "IFMG, Ouro Branco campus",
        periodo: "2017 – 2019",
        status: "completed",
      },
    ],
    idiomasTitulo: "Languages",
    idiomas: [
      { nome: "Portuguese", nivel: "native" },
      { nome: "English", nivel: "C2, EF SET 74/100" },
    ],
  },
  projetos: {
    titulo: "Projects",
    concluido: "done",
    emConstrucao: "in progress",
    verRepositorio: "Repository",
    verDemo: "Demo",
  },
  contato: {
    titulo: "Contact",
    texto: "Want to talk about data, a project or a job opening? Reach me on any of these channels.",
    email: "Email",
  },
  rodape: "Built with Next.js and Tailwind · hosted on GitHub Pages",
};
