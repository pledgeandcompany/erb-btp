import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceConstruction from '@/components/services/ServiceConstruction';
import ServiceRenovation from '@/components/services/ServiceRenovation';
import ServiceEtancheite from '@/components/services/ServiceEtancheite';
import ServiceIsolation from '@/components/services/ServiceIsolation';
import ServiceFacades from '@/components/services/ServiceFacades';
import ServiceExterieur from '@/components/services/ServiceExterieur';
import SectionTitle from '@/components/ui/SectionTitle';
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
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre expertise à votre service"
            subtitle="Chez ERB-BTP, nous mettons notre savoir-faire et notre expérience au service de vos projets. Notre équipe de professionnels qualifiés vous accompagne à chaque étape, de la conception à la réalisation."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Qualité garantie</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous nous engageons à fournir un travail de qualité, dans le respect des normes et des délais convenus.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Respect des délais</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous respectons scrupuleusement les délais convenus pour la réalisation de vos projets.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Devis transparent</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous vous proposons des devis détaillés et transparents, sans mauvaises surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
