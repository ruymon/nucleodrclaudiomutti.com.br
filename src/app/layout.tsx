import { Footer } from "@/components/compositions/Footer";
import { MobileNavbar } from "@/components/compositions/MobileNavbar";
import { Navbar } from "@/components/compositions/Navbar";
import { baseSeo } from "@/helpers/seo";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { DM_Sans, Kalam } from "next/font/google";
import { ReactNode, Suspense } from "react";
import { GoogleAnalytics } from "./GoogleAnalytics";
import "./globals.css";

const dmSansFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const kalamFont = Kalam({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  applicationName: "Website Núcleo Dr Claudio Mutti",
  referrer: "origin-when-cross-origin",
  title:
    "Núcleo Dr Claudio Mutti - Clínica de Saúde em São Paulo | Bem-Estar e Longevidade",
  description:
    "Descubra uma abordagem personalizada para o bem-estar e longevidade na Núcleo Dr Claudio Mutti. Especialistas em emagrecimento, hipertrofia, reposição hormonal e muito mais. Cuide da sua aparência sem comprometer a saúde. Agende sua consulta hoje mesmo!",
  manifest: "/manifest.json",
  robots: "index, follow",
  keywords: baseSeo.keywords,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSansFont.variable} ${kalamFont.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#B45309" />
      </head>

      <body>
        <Navbar />
        <MobileNavbar />

        {children}
        <Analytics />

        <Suspense>
          <GoogleAnalytics />
        </Suspense>

        <Footer />
      </body>
    </html>
  );
}
