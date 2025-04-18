import React from 'react';
import DevisForm from '@/components/devis/DevisForm';

export const metadata = {
  title: 'Demande de Devis | ERB-BTP Construction et Rénovation',
  description: 'Obtenez un devis personnalisé pour votre projet de construction, rénovation ou aménagement avec notre formulaire interactif.',
};

export default function DevisPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Demande de Devis
            </h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
              Complétez le formulaire ci-dessous pour obtenir une estimation de votre projet. 
              Notre équipe vous contactera pour finaliser votre devis personnalisé.
            </p>
            
            <DevisForm />
          </div>
        </div>
      </section>
    </main>
  );
}
