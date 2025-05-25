"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { X, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import Flag from "./Flag";
import toast from "react-hot-toast";

interface Props {
  open: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
}

export interface PortfolioItem {
  id: string;
  title: string;
  repo: string;
  production?: string;
  description: string;
  stack: string[];
  img?: string;
  animation?: any;
  inDevelopment?: boolean;
}

export default function PortfolioModal({ open, onClose, item }: Props) {
  const t = useTranslations('portfolio');
  
  if (!item) return null;

  const isWebProject = item.stack.some(tech => 
    tech.toLowerCase().includes('next.js') || 
    tech.toLowerCase().includes('react') || 
    tech.toLowerCase().includes('vue') || 
    tech.toLowerCase().includes('angular')
  );

  const handleProductionClick = (e: React.MouseEvent) => {
    if (item.inDevelopment) {
      e.preventDefault();
      toast.error(t('not_in_production'), {
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid #333',
        },
      });
    }
  };
  
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          as={motion.div}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl rounded-xl bg-base p-6 shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-zinc-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-base">
            {item.inDevelopment && <Flag />}
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
            width={800}
            height={450}
                className="rounded-lg object-cover"
                unoptimized={item.img?.includes('microlink.io')}
          />
            )}
          </div>

          <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
          <p className="mt-2 text-zinc-300">{item.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((s) => (
              <span
                key={s}
                className="rounded bg-primary/20 px-2 py-1 text-sm text-primary"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
          <a
            href={item.repo}
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold shadow hover:bg-primary-dark"
          >
              <Github size={20} />
              {t('view_repo')}
            </a>
            {item.production && isWebProject && (
              <a
                href={item.production}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleProductionClick}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-semibold ${
                  item.inDevelopment
                    ? 'border-zinc-600 text-zinc-400 cursor-not-allowed'
                    : 'border-primary text-white hover:bg-primary/10'
                }`}
              >
                <ExternalLink size={20} />
                {t('view_live')}
              </a>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
