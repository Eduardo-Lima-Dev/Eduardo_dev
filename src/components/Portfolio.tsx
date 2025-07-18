"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./variants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import PortfolioModal, { PortfolioItem } from "./PortfolioModal";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import androidAnimation from "../../public/animations/android.json";
import fitnessAnimation from "../../public/animations/fitness.json";
import homeAnimation from "../../public/animations/home.json";
import uiAnimation from "../../public/animations/ui.json";
import energyAnimation from "../../public/animations/energy.json";
import Flag from "./Flag";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from "next/link";

export default function Portfolio() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [controls, ref] = useScrollAnimation();
  const t = useTranslations('portfolio');

  // Array com todos os projetos
  const allItems: PortfolioItem[] = [
    {
      id: "pixelados",
      title: "PIXelados",
      repo: "https://github.com/Eduardo-Lima-Dev/PIXelados",
      production: "https://pixelados.vercel.app",
      description: t('projects.pixelados.description'),
      stack: ["Next.js", "Tailwind", "TypeScript", "Prisma", "PostgreSQL"],
      img: "https://api.microlink.io/?url=https://pixelados.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      inDevelopment: true,
      allowProduction: true,
    },
    {
      id: "powerfit",
      title: "PowerFit",
      repo: "https://github.com/Eduardo-Lima-Dev/PowerFit",
      production: "https://play.google.com/store/apps/details?id=com.eduardolima.powerfit",
      description: t('projects.powerfit.description'),
      stack: ["Kotlin", "Jetpack Compose", "Firebase"],
      animation: fitnessAnimation,
    },
    {
      id: "bulletquest",
      title: "BulletQuest",
      repo: "https://github.com/Eduardo-Lima-Dev/BulletQuest_Frontend",
      production: "https://bulletquest.vercel.app",
      description: t('projects.bulletquest.description'),
      stack: ["Next.js", "Tailwind", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      animation: uiAnimation,
      inDevelopment: true,
    },
    {
      id: "meuracha",
      title: "Meu Racha",
      repo: "https://github.com/Eduardo-Lima-Dev/Meu_Racha",
      production: "https://meu-racha.vercel.app",
      description: t('projects.meuracha.description'),
      stack: ["Next.js", "TypeScript", "Firebase"],
      img: "https://api.microlink.io/?url=https://meu-racha.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      id: "frequentium",
      title: "Frequentium",
      repo: "https://github.com/Eduardo-Lima-Dev/Frequentium",
      production: "https://frequentium.vercel.app",
      description: t('projects.frequentium.description'),
      stack: ["Next.js", "TypeScript"],
      img: "https://api.microlink.io/?url=https://frequentium.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      id: "homelife",
      title: "Home Life",
      repo: "https://github.com/Eduardo-Lima-Dev/Home-Life",
      production: "https://homelife-prod.vercel.app",
      description: t('projects.homelife.description'),
      stack: ["Next.js", "Tailwind", "PostgreSQL"],
      img: "https://api.microlink.io/?url=https://homelife-prod.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      id: "androidconnect",
      title: "Android Connect",
      repo: "https://github.com/Eduardo-Lima-Dev/Android-Connect",
      production: "https://play.google.com/store/apps/details?id=com.eduardolima.androidconnect",
      description: t('projects.androidconnect.description'),
      stack: ["Flutter"],
      animation: androidAnimation,
    },
    {
      id: "quixhouse",
      title: "QuixHouse",
      repo: "https://github.com/Eduardo-Lima-Dev/QuixHouse",
      production: "https://play.google.com/store/apps/details?id=com.eduardolima.quixhouse",
      description: t('projects.quixhouse.description'),
      stack: ["Kotlin", "Firebase"],
      animation: homeAnimation,
    },
    {
      id: "eficienciaenergetica",
      title: "Projeto Eficiência Energética",
      repo: "https://github.com/Eduardo-Lima-Dev/Eficiencia-Energetica",
      description: t('projects.eficienciaenergetica.description'),
      stack: ["Node.js", "Java (Android)"],
      animation: energyAnimation,
      img: "/images/eficiencia.png",
    },
    {
      id: "rediux",
      title: "RediUX",
      repo: "https://github.com/RediUX/RediUX_",
      production: "https://rediux.vercel.app",
      description: t('projects.rediux.description'),
      stack: ["Next.js", "Tailwind"],
      img: "https://api.microlink.io/?url=https://rediux.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      id: "siggflow",
      title: "SiggFlow",
      repo: "https://github.com/Eduardo-Lima-Dev/SiggFlow",
      production: "https://sigg-flow.vercel.app",
      description: t('projects.siggflow.description'),
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
      img: "https://api.microlink.io/?url=https://sigg-flow.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      id: "malibuatelie",
      title: "Malibu Ateliê",
      repo: "https://github.com/Eduardo-Lima-Dev/Malibu-Atelie",
      production: "https://malibu-atelie.vercel.app",
      description: t('projects.malibuatelie.description'),
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      img: "https://api.microlink.io/?url=https://malibu-atelie.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
  ];

  // Filtra apenas os 6 projetos selecionados para mostrar na página inicial
  const selectedIds = ["pixelados", "malibuatelie", "siggflow", "frequentium", "meuracha", "homelife"];
  const items = allItems.filter(item => selectedIds.includes(item.id));

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="text-center text-3xl font-bold md:text-5xl"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="mt-4 text-center text-zinc-400"
        >
          {t('subtitle')}
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <motion.button
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-xl bg-base/70 p-4 text-left shadow-lg backdrop-blur hover:-translate-y-1 hover:shadow-primary/30"
            >
              {item.inDevelopment && <Flag />}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-base">
                {item.animation ? (
                  <Lottie
                    animationData={item.animation}
                    loop={true}
                    className="h-full w-full"
                  />
                ) : (
                  <Image
                    src={item.img || '/images/placeholder.png'}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={item.img?.includes('microlink.io')}
                  />
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-zinc-400">{item.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Botão Ver Mais */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="mt-12 text-center"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white transition-all hover:bg-primary/80 hover:scale-105"
          >
            {t('view_all_projects')}
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </motion.div>
      </div>

      <PortfolioModal
        open={!!selected}
        onClose={() => setSelected(null)}
        item={selected}
      />
    </section>
  );
}
