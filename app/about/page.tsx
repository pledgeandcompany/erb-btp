import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutHistory from '@/components/about/AboutHistory';
import AboutValues from '@/components/about/AboutValues';
import { Button } from '@/components/ui/Button';
import AboutPageSchema from '@/components/seo/AboutPageSchema';
import { generateMetadata } from '@/lib/seo-utils';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'À propos | ERB-BTP Construction et Rénovation',
  description: 'Découvrez l\'histoire, les valeurs et l\'équipe d\'ERB-BTP, votre partenaire de confiance pour tous vos projets de construction et rénovation depuis 1995.',
  path: '/about',
  keywords: ['ERB-BTP', 'histoire', 'valeurs', 'équipe', 'entreprise construction', 'rénovation', 'Montreuil', 'Paris', 'Île-de-France'],
  openGraph: {
    images: [{
      url: '/images/about-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'L\'équipe ERB-BTP'
    }],
    type: 'website'
  }
});

export default function AboutPage() {
  return (
    <main>
      <AboutPageSchema />
      {/* Hero Section */}
      <AboutHero />
      
      {/* History Section */}
      <AboutHistory />
      
      {/* Values Section */}
      <AboutValues />
      
      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&#39;hui pour discuter de votre projet et découvrir comment ERB-BTP peut vous aider à le réaliser.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Nous contacter
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}