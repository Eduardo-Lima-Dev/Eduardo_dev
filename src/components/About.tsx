"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./variants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const [controls, ref] = useScrollAnimation();
  const t = useTranslations('about');

  const handleDownloadCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="about" className="py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 md:flex-row">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="w-full flex justify-center md:w-1/3 md:justify-start"
        >
          <Image
            src="/images/profile_1.jpg"
            alt="Eduardo Dev"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="w-full text-center md:w-2/3 md:text-left"
        >
          <h2 className="text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            {t('description')}
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="mt-6 inline-block rounded-lg border border-primary px-6 py-3 font-semibold hover:bg-primary/10"
            >
              {t('download_cv')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
