"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const t = useTranslations('nav');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Se estiver próximo do final da página, seleciona a seção de contato
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Encontrar a seção mais próxima do topo da viewport
      let currentSection = sections[0];
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const distance = Math.abs(offsetTop - scrollPosition);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-base/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#hero" className="font-bold text-xl flex items-center">
          <Image 
            src="/images/Logo_Branca.png" 
            alt="Logo" 
            width={32} 
            height={32}
            className="mr-2 w-8 h-8"
            priority
          />
          <span className="text-primary">E</span>D
        </Link>

        <ul className="hidden gap-8 md:flex">
          {['about', 'services', 'portfolio', 'contact'].map((id) => (
            <li key={id}>
              <Link 
                href={`#${id}`} 
                className={`hover:text-primary transition-colors ${
                  activeSection === id ? 'text-primary' : 'text-zinc-400'
                }`}
              >
                {t(id)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
}
