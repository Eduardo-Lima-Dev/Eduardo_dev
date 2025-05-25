"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./variants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {
  const [controls, ref] = useScrollAnimation();
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24">
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-lg rounded-xl bg-base/70 p-10 text-center backdrop-blur"
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          {t('build_something')}
        </h2>
        <p className="mt-4 text-zinc-300">
          {t('send_details')}
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="https://wa.me/5589994129483"
            target="_blank"
            className="rounded-lg bg-primary px-6 py-3 font-semibold shadow hover:bg-primary-dark"
          >
            {t('whatsapp')}
          </Link>
          <Link
            href="mailto:eduardo.devtech@gmail.com"
            className="rounded-lg border border-primary px-6 py-3 font-semibold hover:bg-primary/10"
          >
            {t('email')}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
