import React from 'react';
import PartenairesDetails from '../../components/partenaires/PartenairesDetails';
import { generateMetadata } from '@/lib/seo-utils';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: "Nos Partenaires | ERB-BTP",
  description: "Découvrez les partenaires légaux, fournisseurs et commerciaux d'ERB-BTP qui contribuent à la qualité de nos services.",
  path: "/partenaires",
  keywords: ["partenaires", "fournisseurs", "collaborations", "ERB-BTP", "construction", "rénovation", "partenaires commerciaux"],
  openGraph: {
    images: [{
      url: "/images/partners-hero.jpg",
      width: 1200,
      height: 630,
      alt: "Partenaires ERB-BTP"
    }],
    type: "website"
  }
});

export default function PartenairesPage() {
  return (
    <main className="pt-20 bg-white dark:bg-gray-900">
      <PartenairesDetails />
    </main>
  );
}
