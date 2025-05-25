"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from './ui/button';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  };

  return (
    <Button
      variant="ghost"
      onClick={switchLocale}
      className="text-sm font-medium"
    >
      {locale === "pt" ? "EN" : "PT"}
    </Button>
  );
} 