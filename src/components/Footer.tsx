"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-base/50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Eduardo Dev. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/eduardodevtech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/eduardodevtech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-primary"
            >
              <Linkedin size={20} />
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