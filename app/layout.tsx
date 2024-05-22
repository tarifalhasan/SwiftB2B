import "@/styles/globals.css";
import { Poppins as FontSans } from "next/font/google";

import SiteHeader from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { getTermsHeaderPageData } from "@/data/loaders";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: ReactNode;
}

interface LinkI {
  id: number;
  Label: string;
  LinkHref: string;
}
interface HeaderPorps {
  id: number;
  __component: string;
  logo: {
    id: number;
    url: string;
    alternativeText: null | string;
  };
  Link: LinkI[];
  Button: { id: number; Label: string; href: string };
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const strapiData = await getTermsHeaderPageData();

  const { Header } = strapiData;

  const headerData = Header[0] as HeaderPorps;

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SiteHeader data={headerData} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
