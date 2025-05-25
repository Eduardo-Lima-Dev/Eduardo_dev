"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./variants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useTranslations } from "next-intl";
import {
  Smartphone,
  Globe,
  GaugeCircle,
} from "lucide-react"; // icones lineares

export default function Services() {
  const [controls, ref] = useScrollAnimation();
  const t = useTranslations('services');

  const services = [
    {
      title: t('android.title'),
      desc: t('android.description'),
      Icon: Smartphone,
    },
    {
      title: t('frontend.title'),
      desc: t('frontend.description'),
      Icon: Globe,
    },
    {
      title: t('product.title'),
      desc: t('product.description'),
      Icon: GaugeCircle,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="text-3xl font-bold md:text-5xl"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="mt-4 text-zinc-400"
        >
          {t('subtitle')}
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map(({ title, desc, Icon }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              className="rounded-xl bg-base/70 p-8 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-primary/30"
            >
              <Icon size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
