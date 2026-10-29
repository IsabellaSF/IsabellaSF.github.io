import type { CorCard } from "@/components/ui/CardBrutal";
import type { Idioma } from "./tipos";

export type Projeto = {
  id: string;
  titulo: Record<Idioma, string>;
  descricao: Record<Idioma, string>;
  tags: string[];
  status: "concluido" | "emConstrucao";
  repositorio?: string;
  demo?: string;
  cor: CorCard;
};

// Para adicionar um projeto, basta incluir um item nesta lista.
export const PROJETOS: Projeto[] = [
  {
    id: "rastreador-satelites",
    titulo: {
      pt: "Rastreador de Satélites Brasileiros",
      en: "Brazilian Satellite Tracker",
    },
    descricao: {
      pt: "Globo 3D com a posição em tempo real do Amazonia-1, CBERS-4/4A, SGDC-1 e SCD-1/2, e previsão de passagens visíveis sobre as capitais. Órbitas propagadas em Python (SGP4/Skyfield) e atualizadas pelo GitHub Actions.",
      en: "3D globe showing the live position of Amazonia-1, CBERS-4/4A, SGDC-1 and SCD-1/2, with visible pass predictions over Brazilian capitals. Orbits propagated in Python (SGP4/Skyfield) and refreshed by GitHub Actions.",
    },
    tags: ["Python", "Skyfield", "Next.js", "GitHub Actions"],
    status: "emConstrucao",
    cor: "lilas",
  },
  {
    id: "data-visualization-covid",
    titulo: {
      pt: "Data Visualization: COVID-19",
      en: "Data Visualization: COVID-19",
    },
    descricao: {
      pt: "Análise exploratória da evolução da pandemia: tratamento de séries temporais e gráficos comparativos para identificar tendências globais e regionais.",
      en: "Exploratory analysis of the pandemic's evolution: time-series cleaning and comparative charts to spot global and regional trends.",
    },
    tags: ["Python", "Pandas", "EDA", "Jupyter"],
    status: "concluido",
    repositorio: "https://github.com/IsabellaSF/Exercicio-de-Data-Visualization",
    cor: "creme",
  },
  {
    id: "tagbot",
    titulo: { pt: "TagBot", en: "TagBot" },
    descricao: {
      pt: "Nova versão do aplicativo de controle do robô educacional TagBot, desenvolvido no NERO para aulas de robótica no ensino básico e no EJA.",
      en: "New version of the TagBot educational robot control app, built at NERO for robotics classes in primary and adult education.",
    },
    tags: ["Flutter", "Robótica", "Educação"],
    status: "concluido",
    repositorio: "https://github.com/IsabellaSF/tagbot",
    cor: "verde",
  },
  {
    id: "wireframe",
    titulo: {
      pt: "Wireframe de média fidelidade",
      en: "Mid-fidelity wireframe",
    },
    descricao: {
      pt: "Estudo de UI/UX: estrutura de telas, hierarquia visual e fluxo de navegação antes da implementação.",
      en: "UI/UX study: screen structure, visual hierarchy and navigation flow before implementation.",
    },
    tags: ["UI/UX", "Wireframe"],
    status: "concluido",
    repositorio: "https://github.com/IsabellaSF/Criando-um-wireframe-de-media-fidelidade",
    cor: "branco",
  },
];
