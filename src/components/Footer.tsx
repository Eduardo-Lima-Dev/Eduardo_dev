"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-zinc-800 bg-base/50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-400">
              {t('rights', { year: new Date().getFullYear() })}
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/Eduardo-Lima-Dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luiz-eduardo12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/eduard0.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.tiktok.com/@um.simples.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary"
            >
              <FaTiktok size={20} />
            </Link>
            <Link
              href="mailto:eduardo.devtech@gmail.com"
              className="text-zinc-400 hover:text-primary"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 