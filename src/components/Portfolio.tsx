"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./variants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import PortfolioModal, { PortfolioItem } from "./PortfolioModal";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import Flag from "./Flag";
import PlatformBadge from "./PlatformBadge";
import { getProjects, featuredProjectIds } from "@/lib/projects";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from "next/link";

export default function Portfolio() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [controls, ref] = useScrollAnimation();
  const t = useTranslations('portfolio');

  const items = getProjects(t).filter(item => featuredProjectIds.includes(item.id));

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
              {item.inReview && <Flag label={t('in_review')} />}
              <PlatformBadge platform={item.platform} />
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
                    unoptimized={item.img?.includes('microlink.io') || item.img?.endsWith('.svg')}
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
