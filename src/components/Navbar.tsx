"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const t = useTranslations('nav');

  const toggleTheme = () => {
    document.documentElement.dataset.theme = dark ? "light" : "dark";
    setDark(!dark);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-base/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#hero" className="font-bold text-xl">
          {/* SVG simplificada da sua logo → substitua pelo import real */}
          <span className="text-primary">E</span>D
        </Link>

        <ul className="hidden gap-8 md:flex">
          {['services', 'portfolio', 'about', 'contact'].map((id) => (
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
          <button onClick={toggleTheme} aria-label="Theme toggle">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
