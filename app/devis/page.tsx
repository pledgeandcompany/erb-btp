import React from 'react';
import DevisForm from '@/components/devis/DevisForm';
import { Button } from '@/components/ui/Button';
import QuotePageSchema from '@/components/seo/QuotePageSchema';
import { generateMetadata } from '@/lib/seo-utils';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Demande de Devis | ERB-BTP Construction et Rénovation',
  description: 'Obtenez un devis personnalisé pour votre projet de construction, rénovation ou aménagement avec notre formulaire interactif.',
  path: '/devis',
  keywords: ['devis', 'estimation', 'construction', 'rénovation', 'aménagement', 'ERB-BTP', 'prix', 'tarifs', 'travaux', 'bâtiment'],
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

export default function DevisPage() {
  return (
    <main className="pt-28 pb-20 min-h-screen bg-white dark:bg-gray-900">
      <QuotePageSchema />
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Demande de Devis
            </h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
              Complétez le formulaire ci-dessous pour obtenir une estimation de votre projet. 
              Notre équipe vous contactera pour finaliser votre devis personnalisé.
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-8">
              <DevisForm />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-16">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Documents et informations nécessaires
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">
                Pour vous fournir un devis précis, nous aurons besoin des éléments suivants. Préparez-les à l&apos;avance pour accélérer le processus :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Documents techniques</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Plans ou croquis du projet (si disponibles)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Photos de l&apos;espace actuel ou du terrain</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Permis de construire (si applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Mesures précises des surfaces concernées</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Diagnostic technique du bâtiment (pour rénovation)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Informations requises</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Adresse complète du lieu des travaux</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Calendrier souhaité pour les travaux</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Budget approximatif envisagé</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Préférences de matériaux et finitions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2">
                        <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Contraintes particulières du site ou du projet</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg border border-[#ff914d]/20">
                <p className="text-sm text-[#e07e3d] dark:text-[#ff914d]/90 flex items-start">
                  <svg className="h-5 w-5 mr-2 flex-shrink-0 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    Ne vous inquiétez pas si vous ne disposez pas de tous ces éléments. Notre équipe vous guidera et pourra réaliser une visite sur site pour compléter les informations manquantes.
                  </span>
                </p>
              </div>
            </div>
            
            <div className="mt-16 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Pourquoi choisir ERB-BTP pour votre projet ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#fff1e8] dark:bg-[#ff914d]/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#ff914d] dark:text-[#ff914d]/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Expertise reconnue</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Notre équipe possède une solide expérience dans le secteur du BTP, avec de nombreux projets réussis à notre actif.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#fff1e8] dark:bg-[#ff914d]/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#ff914d] dark:text-[#ff914d]/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Délais respectés</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous nous engageons à respecter les délais convenus pour chaque projet, garantissant une livraison dans les temps.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#fff1e8] dark:bg-[#ff914d]/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#ff914d] dark:text-[#ff914d]/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Devis transparent</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nos devis sont détaillés et transparents, sans frais cachés, pour vous permettre de prendre une décision éclairée.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mb-16 border border-[#ff914d]/20">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Comment se déroule notre processus de devis ?</h3>
                <ol className="space-y-6 ml-6 list-decimal">
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Soumission de votre demande</span> - Remplissez le formulaire ci-dessus avec les détails de votre projet.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Étude préliminaire</span> - Notre équipe analyse votre demande et prépare une première estimation.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Visite technique</span> - Si nécessaire, nous organisons une visite sur site pour évaluer précisément les travaux.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Devis détaillé</span> - Vous recevez un devis complet avec le détail des prestations et des coûts.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Planification</span> - Une fois le devis accepté, nous planifions ensemble le calendrier des travaux.
                  </li>
                </ol>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Types de projets</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Construction neuve résidentielle et commerciale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Rénovation complète ou partielle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Travaux d&apos;étanchéité et d&apos;isolation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Aménagement extérieur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Ravalement de façades</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Nos garanties</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Assurance décennale pour tous nos travaux</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Matériaux de qualité certifiés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Équipe qualifiée et expérimentée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Suivi personnalisé tout au long du projet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff914d] mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Service après-vente réactif</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center border border-[#ff914d]/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Des questions supplémentaires ?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant votre projet ou votre demande de devis.
                </p>
                <Button href="/contact" size="lg">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
