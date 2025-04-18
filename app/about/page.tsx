import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutHistory from '@/components/about/AboutHistory';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'À propos | ERB-BTP Construction et Rénovation',
  description: 'Découvrez l\'histoire, les valeurs et l\'équipe d\'ERB-BTP, votre partenaire de confiance pour tous vos projets de construction et rénovation depuis 1995.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <AboutHero />
      
      {/* History Section */}
      <AboutHistory />
      
      {/* Values Section */}
      <AboutValues />
      
      {/* Team Section */}
      <AboutTeam />
      
      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment ERB-BTP peut vous aider à le réaliser.
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