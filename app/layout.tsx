import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import CookieConsent from "@/components/ui/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ERB-BTP | Construction et Rénovation à Paris et Île-de-France",
  description: "Entreprise de construction et rénovation spécialisée en maçonnerie, étanchéité, isolation et ravalement. Plus de 20 ans d'expertise en Île-de-France.",
  keywords: "construction, rénovation, maçonnerie, étanchéité, isolation, ravalement, BTP, Paris, Île-de-France, entreprise construction",
  authors: [{ name: "ERB-BTP" }],
  creator: "ERB-BTP",
  publisher: "ERB-BTP",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://www.erb-btp.fr"),
  alternates: {
    canonical: "/",
    languages: {
      'fr-FR': "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.erb-btp.fr",
    title: "ERB-BTP | Construction et Rénovation à Paris et Île-de-France",
    description: "Entreprise de construction et rénovation spécialisée en maçonnerie, étanchéité, isolation et ravalement. Plus de 20 ans d'expertise en Île-de-France.",
    siteName: "ERB-BTP",
    images: [
      {
        url: "/logo-main.png",
        width: 1200,
        height: 630,
        alt: "ERB-BTP Construction et Rénovation",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERB-BTP | Construction et Rénovation à Paris et Île-de-France",
    description: "Entreprise de construction et rénovation spécialisée en maçonnerie, étanchéité, isolation et ravalement. Plus de 20 ans d'expertise en Île-de-France.",
    images: ["/logo-main.png"],
  },
  icons: {
    icon: '/favicon-erb.png',
    apple: '/favicon-erb.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="erb-btp-theme">
          <Layout>
            {children}
          </Layout>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
