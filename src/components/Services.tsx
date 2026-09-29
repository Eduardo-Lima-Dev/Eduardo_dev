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
      gradient: "from-teal-600 to-cyan-400",
    },
    {
      title: t('frontend.title'),
      desc: t('frontend.description'),
      Icon: Globe,
      gradient: "from-violet-700 to-pink-400",
    },
    {
      title: t('product.title'),
      desc: t('product.description'),
      Icon: GaugeCircle,
      gradient: "from-orange-600 to-amber-300",
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
          {services.map(({ title, desc, Icon, gradient }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              className="group relative overflow-hidden rounded-xl bg-base/70 p-8 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-primary/30"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
              <div className={`relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                <Icon size={30} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
