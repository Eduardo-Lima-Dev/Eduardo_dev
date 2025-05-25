"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("common");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center text-center"
    >
      {/* background com linhas/gradiente roxo - coloque sua arte em /public/images */}
      <div className="max-w-3xl px-6">
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
          className="mt-8 flex flex-wrap justify-center gap-4"
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
    </section>
  );
}
