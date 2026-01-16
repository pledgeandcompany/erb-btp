import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceConstruction from '@/components/services/ServiceConstruction';
import ServiceRenovation from '@/components/services/ServiceRenovation';
import ServiceEtancheite from '@/components/services/ServiceEtancheite';
import ServiceIsolation from '@/components/services/ServiceIsolation';
import ServiceFacades from '@/components/services/ServiceFacades';
import ServiceExterieur from '@/components/services/ServiceExterieur';
import Couverture from '@/components/services/Couverture';
import Charpente from '@/components/services/Charpente';
import Ornementation from '@/components/services/Ornementation';
import Electricite from '@/components/services/Electricite';
import Plomberie from '@/components/services/Plomberie';
import CVC from '@/components/services/CVC';
import SerrurerieMetallerie from '@/components/services/SerrurerieMetallerie';
import PierreDeTailleMarbrerie from '@/components/services/PierreDeTailleMarbrerie';
import Bardage from '@/components/services/Bardage';
import MursOssatureBois from '@/components/services/MursOssatureBois';
import TraitementAmiante from '@/components/services/TraitementAmiante';
import GrosOeuvre from '@/components/services/GrosOeuvre';
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
      
      {/* Individual Service Sections */}
      <ServiceConstruction />
      <ServiceRenovation />
      <ServiceEtancheite />
      <ServiceIsolation />
      <ServiceFacades />
      <ServiceExterieur />
      
      {/* Additional UTB Services */}
      <Couverture />
      <Charpente />
      <Ornementation />
      <Electricite />
      <Plomberie />
      <CVC />
      <SerrurerieMetallerie />
      <PierreDeTailleMarbrerie />
      <Bardage />
      <MursOssatureBois />
      <TraitementAmiante />
      <GrosOeuvre />
      
      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
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
            <Button href="/projects" variant="outline" size="lg">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
