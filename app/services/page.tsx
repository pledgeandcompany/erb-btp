import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntroduction from '@/components/services/ServicesIntroduction';
import ServiceConstruction from '@/components/services/ServiceConstruction';
import ServiceRenovation from '@/components/services/ServiceRenovation';
import ServiceEtancheite from '@/components/services/ServiceEtancheite';
import ServiceIsolation from '@/components/services/ServiceIsolation';
import ServiceFacades from '@/components/services/ServiceFacades';
import ServiceExterieur from '@/components/services/ServiceExterieur';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Services | ERB-BTP Construction et Rénovation',
  description: 'Découvrez nos services de construction, rénovation, étanchéité, isolation thermique, ravalement de façades et aménagement extérieur.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Services Introduction */}
      <ServicesIntroduction />
      
      {/* Individual Service Sections */}
      <ServiceConstruction />
      <ServiceRenovation />
      <ServiceEtancheite />
      <ServiceIsolation />
      <ServiceFacades />
      <ServiceExterieur />
      
      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&#39;hui pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Demander un devis
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
