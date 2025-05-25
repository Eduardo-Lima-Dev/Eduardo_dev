"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from 'next-intl';

const sections = ["hero", "services", "portfolio", "about", "contact"];

export default function ScrollButton() {
  const [currentSection, setCurrentSection] = useState("hero");
  const t = useTranslations('scroll');

  useEffect(() => {
    const handleScroll = () => {
      let minDistance = Infinity;
      let active = sections[0];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const distance = Math.abs(el.offsetTop - scrollPosition);
          if (distance < minDistance) {
            minDistance = distance;
            active = section;
          }
        }
      }
      setCurrentSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (currentSection === "contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const nextIndex = sections.indexOf(currentSection) + 1;
      const nextSection = sections[nextIndex];
      const el = document.getElementById(nextSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isAtEnd = currentSection === "contact";

  return (
    <button
      onClick={handleClick}
      className="fixed right-2 top-1/2 z-50 flex flex-col items-center px-2 py-3 rounded-lg text-zinc-400 hover:text-primary transition-colors"
      style={{ transform: "translateY(-50%)" }}
      aria-label={isAtEnd ? t('backToTop') : t('scroll')}
    >
      <span
        className="text-xs mb-1"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {isAtEnd ? t('backToTop') : t('scroll')}
      </span>
      {isAtEnd ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
    </button>
  );
}
