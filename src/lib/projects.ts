import type { PortfolioItem } from "@/components/PortfolioModal";

const GH = "https://github.com/Eduardo-Lima-Dev";
const shot = (url: string) =>
  `https://api.microlink.io/?url=${url}&screenshot=true&meta=false&embed=screenshot.url`;

type Translate = (key: string) => string;

export function getProjects(t: Translate): PortfolioItem[] {
  return [
    // Mobile
    {
      id: "hospitalcare",
      title: "HC Hospital Care",
      description: t("projects.hospitalcare.description"),
      stack: ["React Native", "TypeScript", "Geolocalização"],
      platform: "mobile",
      img: "/images/projects/hospitalcare.svg",
      inReview: true,
    },
    {
      id: "speedmed",
      title: "SpeedMed",
      description: t("projects.speedmed.description"),
      stack: ["React", "TypeScript", "Node.js"],
      platform: "web",
      img: "/images/projects/speedmed.svg",
    },
    {
      id: "probatorai",
      title: "Probator AI",
      description: t("projects.probatorai.description"),
      stack: ["React", "TypeScript", "Mobile-first", "IA"],
      platform: "web",
      img: "/images/projects/probatorai.svg",
    },
    {
      id: "metanolfc",
      title: "Metanol FC",
      description: t("projects.metanolfc.description"),
      stack: ["React Native", "Expo", "NestJS", "React", "Vite"],
      inDevelopment: true,
      platform: "mobile",
      img: "/images/projects/metanolfc.svg",
    },
    {
      id: "radarmanhua",
      title: "Radar Manhua",
      description: t("projects.radarmanhua.description"),
      stack: ["Flutter", "Dart", "Telegram"],
      platform: "mobile",
      img: "/images/projects/radarmanhua.svg",
    },
    {
      id: "darkharmony",
      title: "Dark Harmony",
      description: t("projects.darkharmony.description"),
      stack: ["React Native", "Expo", "Google Drive API"],
      platform: "mobile",
      img: "/images/projects/darkharmony.svg",
    },
    {
      id: "powerfit",
      title: "PowerFit",
      repo: `${GH}/PowerFit`,
      production: "https://play.google.com/store/apps/details?id=com.eduardolima.powerfit",
      description: t("projects.powerfit.description"),
      stack: ["Kotlin", "Jetpack Compose", "Firebase"],
      platform: "mobile",
      img: "/images/projects/powerfit.svg",
    },
    {
      id: "quixhouse",
      title: "QuixHouse",
      repo: `${GH}/QuixHouse`,
      production: "https://play.google.com/store/apps/details?id=com.eduardolima.quixhouse",
      description: t("projects.quixhouse.description"),
      stack: ["Kotlin", "Firebase"],
      platform: "mobile",
      img: "/images/projects/quixhouse.svg",
    },
    {
      id: "androidconnect",
      title: "Android Connect",
      repo: `${GH}/Android-Connect`,
      production: "https://play.google.com/store/apps/details?id=com.eduardolima.androidconnect",
      description: t("projects.androidconnect.description"),
      stack: ["Flutter", "Dart"],
      platform: "mobile",
      img: "/images/projects/androidconnect.svg",
    },
    {
      id: "academiaufc",
      title: "Academia UFC",
      repo: `${GH}/AcademiaUFC`,
      description: t("projects.academiaufc.description"),
      stack: ["Flutter", "Dart"],
      platform: "mobile",
      img: "/images/projects/academiaufc.svg",
    },
    {
      id: "eficienciaenergetica",
      title: "Projeto Eficiência Energética",
      repo: `${GH}/Projeto-de-Eficiencia-Energetica`,
      description: t("projects.eficienciaenergetica.description"),
      stack: ["Python", "Node.js", "Java (Android)"],
      platform: "mobile",
      img: "/images/projects/eficienciaenergetica.svg",
    },
    // Desktop
    {
      id: "pinheirosociety",
      title: "Pinheiro Society",
      repo: `${GH}/PinheiroSociety`,
      description: t("projects.pinheirosociety.description"),
      stack: ["Flutter", "Dart", "Windows", "Linux", "macOS"],
      platform: "desktop",
      img: "/images/projects/pinheirosociety.svg",
    },
    // Web
    {
      id: "bulletquest",
      title: "BulletQuest",
      repo: `${GH}/BulletQuest_Frontend`,
      production: "https://bulletquest.vercel.app",
      description: t("projects.bulletquest.description"),
      stack: ["Next.js", "Tailwind", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      inDevelopment: true,
      platform: "web",
      img: "/images/projects/bulletquest.svg",
    },
    {
      id: "meuracha",
      title: "Meu Racha",
      repo: `${GH}/Meu_Racha`,
      production: "https://meu-racha.vercel.app",
      description: t("projects.meuracha.description"),
      stack: ["Next.js", "TypeScript", "Firebase"],
      img: shot("https://meu-racha.vercel.app"),
      platform: "web",
    },
    {
      id: "frequentium",
      title: "Frequentium",
      repo: `${GH}/Frequentium`,
      production: "https://frequentium.vercel.app",
      description: t("projects.frequentium.description"),
      stack: ["Next.js", "TypeScript"],
      img: shot("https://frequentium.vercel.app"),
      platform: "web",
    },
    {
      id: "siggflow",
      title: "SiggFlow",
      repo: `${GH}/SiggFlow`,
      production: "https://sigg-flow.vercel.app",
      description: t("projects.siggflow.description"),
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
      img: shot("https://sigg-flow.vercel.app"),
      platform: "web",
    },
    {
      id: "rediux",
      title: "RediUX",
      repo: "https://github.com/RediUX/RediUX_",
      production: "https://rediux.vercel.app",
      description: t("projects.rediux.description"),
      stack: ["Next.js", "Tailwind"],
      img: shot("https://rediux.vercel.app"),
      platform: "web",
    },
  ];
}

// Projetos em destaque na página inicial
export const featuredProjectIds = [
  "hospitalcare",
  "speedmed",
  "probatorai",
  "pinheirosociety",
  "powerfit",
  "radarmanhua",
];
