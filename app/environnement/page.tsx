import React from 'react';
import EnvironnementHero from '../../components/environnement/EnvironnementHero';
import EnvironnementDetails from '../../components/environnement/EnvironnementDetails';
import EnvironmentPageSchema from '@/components/seo/EnvironmentPageSchema';
import { generateMetadata } from '@/lib/seo-utils';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Engagement Environnemental | ERB-BTP',
  description: 'Découvrez notre engagement environnemental et notre charte Chantier Vert pour des constructions responsables et durables.',
  path: '/environnement',
  keywords: ['environnement', 'chantier vert', 'construction durable', 'ERB-BTP', 'éco-construction', 'responsabilité environnementale', 'développement durable'],
  openGraph: {
    images: [{
      url: '/og-logo.png',
      width: 1200,
      height: 630,
      alt: 'ERB-BTP Construction et Rénovation'
    }],
    type: 'website'
  }
});

export default function EnvironnementPage() {
  return (
    <main className="pt-20 bg-white dark:bg-gray-900">
      <EnvironmentPageSchema />
      <EnvironnementHero />
      <EnvironnementDetails />
    </main>
  );
}
