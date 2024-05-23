import "@/styles/globals.css";
import { Poppins as FontSans } from "next/font/google";

import ChatView from "@/components/ChatView";
import SiteHeader from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { getTermsHeaderPageData } from "@/data/loaders";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "STLTH Labs: Reshaping Building on Web3",
  metadataBase: new URL("https://www.swiftb2b.com/"),
  alternates: {
    canonical: "https://www.swiftb2b.com",
    languages: {
      "en-US": "/en-US",
    },
  },
  description:
    " Welcome to STLTH Labs, where the future of web3 is not just imagined, but crafted.",
  icons: "/icons/favicon.jpeg",
  openGraph: {
    images: "/images/og.png",
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const strapiData = await getTermsHeaderPageData();

  const { Header } = strapiData;

  const headerData = Header[0] as HeaderPorps;

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen relative bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SiteHeader data={headerData} />
        {children}
        <ChatView />
        <Toaster />
      </body>
    </html>
  );
}
