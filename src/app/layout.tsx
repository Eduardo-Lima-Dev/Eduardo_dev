import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollButton from "@/components/ScrollButton";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eduardo Dev — Android & Front-End Engineer",
  description:
    "Desenvolvedor Android nativo, Front-End Next.js e Product Owner. Landing pages e apps com performance de verdade.",
  openGraph: {
    title: "Eduardo Dev — Portfólio",
    description:
      "Conheça meus projetos em Kotlin, React, Next.js e consulte como posso acelerar o seu produto.",
    url: "https://eduardo-dev.vercel.app",
    siteName: "Eduardo Dev",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Banner Eduardo Dev",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@seu_twitter",
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} data-theme="dark">
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <ScrollButton />
          {children}
          <Footer />
          <Toaster position="bottom-center" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
