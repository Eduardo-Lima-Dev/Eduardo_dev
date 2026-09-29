"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Smartphone, Code2 } from "lucide-react";
import GlowBackground from "./GlowBackground";
import DeviceMockup from "./DeviceMockup";

export default function Hero() {
  const t = useTranslations("common");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GlowBackground />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-24 md:grid-cols-2">
        <div className="text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="whitespace-pre-line text-4xl font-extrabold md:text-6xl"
        >
          {t("hero_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-zinc-300"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
        >
          <Link
            href="https://wa.me/5589994129483"
            target="_blank"
            className="rounded-lg bg-primary px-6 py-3 font-semibold shadow hover:bg-primary-dark"
          >
            {t("whatsapp")}
          </Link>
          <Link
            href="mailto:eduardo.devtech@gmail.com"
            className="rounded-lg border border-primary px-6 py-3 font-semibold hover:bg-primary/10"
          >
            {t("email")}
          </Link>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative mx-auto hidden h-[26rem] w-full max-w-md md:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-4"
          >
            <DeviceMockup kind="browser" gradient="from-violet-700 to-pink-400" icon={<Code2 size={30} />} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0"
          >
            <DeviceMockup kind="phone" gradient="from-teal-600 to-cyan-400" icon={<Smartphone size={30} />} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
