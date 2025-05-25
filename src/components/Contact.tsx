"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./variants";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Link from "next/link";

export default function Contact() {
  const [controls, ref] = useScrollAnimation();

  return (
    <section id="contato" className="py-24">
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-lg rounded-xl bg-base/70 p-10 text-center backdrop-blur"
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          Vamos construir algo incrível?
        </h2>
        <p className="mt-4 text-zinc-300">
          Envie detalhes do seu projeto ou fale direto comigo:
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="https://wa.me/5589994129483"
            target="_blank"
            className="rounded-lg bg-primary px-6 py-3 font-semibold shadow hover:bg-primary-dark"
          >
            WhatsApp
          </Link>
          <Link
            href="mailto:eduardo.devtech@gmail.com"
            className="rounded-lg border border-primary px-6 py-3 font-semibold hover:bg-primary/10"
          >
            eduardo.devtech@gmail.com
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
