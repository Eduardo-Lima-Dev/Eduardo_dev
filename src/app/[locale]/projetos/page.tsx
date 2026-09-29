"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/variants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import PortfolioModal, { PortfolioItem } from "@/components/PortfolioModal";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import Flag from "@/components/Flag";
import PlatformBadge from "@/components/PlatformBadge";
import { getProjects } from "@/lib/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import Link from "next/link";

export default function ProjetosPage() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [controls, ref] = useScrollAnimation();
  const t = useTranslations('portfolio');
  const tScroll = useTranslations('scroll');

  const items = getProjects(t);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft />
            {tScroll('backToTop')}
          </Link>
          <motion.h1
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="text-4xl font-bold md:text-6xl mb-4"
          >
            {t('all_projects')}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="text-zinc-400 text-lg"
          >
            {t('all_projects_subtitle')}
          </motion.p>
        </div>

        {/* Grid de projetos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </div>

      <PortfolioModal
        open={!!selected}
        onClose={() => setSelected(null)}
        item={selected}
      />
    </div>
  );
} 