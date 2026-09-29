import { useTranslations } from "next-intl";
import { Smartphone, Globe, Monitor } from "lucide-react";
import type { PortfolioItem } from "./PortfolioModal";

const icons = { mobile: Smartphone, web: Globe, desktop: Monitor };

export default function PlatformBadge({ platform }: { platform: PortfolioItem["platform"] }) {
  const t = useTranslations("portfolio");
  const Icon = icons[platform];

  return (
    <div className="absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
      <Icon size={14} />
      {t(platform)}
    </div>
  );
}
