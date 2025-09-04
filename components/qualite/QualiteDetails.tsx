'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

const QualiteDetails: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Qualité
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Notre engagement pour l&apos;excellence et la qualité dans tous nos projets
            </p>
          </div>

          {/* Qualification Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Qualification
            </h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8 border border-[#ff914d]/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="relative p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                    <Image 
                      src="/qualibat.webp" 
                      alt="Qualibat Logo" 
                      width={180} 
                      height={180}
                      className="object-contain"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#ff914d] text-white text-xs font-medium py-1 px-3 rounded-full">
                      Certifié
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="text-[#ff914d] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Certification Qualibat
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nous sommes heureux de vous faire bénéficier de notre savoir-faire, qui est certifié par le 
                    label QUALIBAT, décerné par la Fédération Française du Bâtiment.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cette qualification vous apporte des garanties sur notre professionnalisme, et valide notre 
                    aptitude ainsi que notre sérieux, à mener à bien nos ouvrages.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-[#ff914d]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Certification renouvelée annuellement
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conformité Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Conformité de nos ouvrages
            </h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-[#ff914d]/20">
              <div className="flex items-start mb-6">
                <div className="mr-4 mt-1 p-2 bg-[#fff1e8] dark:bg-[#ff914d]/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    La conformité de la réalisation de nos ouvrages est contrôlée par le responsable du chantier.
                    L&apos;ensemble des travaux sera réalisé dans les règles de l&apos;art, et conformément aux 
                    dispositions et réglementations en vigueur.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </span>
                  Normes et DTU appliqués
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
                  {['DTU 43.5', 'DTU 43.1', 'DTU 40.11', 'DTU 40.14', 'DTU 40.21', 'DTU 40.22', 
                    'DTU 40.23', 'DTU 40.25', 'DTU 40.35', 'DTU 40.41', 'DTU 40.36', 'DTU 40.35'].map((dtu, index) => (
                    <div key={index} className="bg-[#fff1e8] dark:bg-[#ff914d]/10 text-[#e07e3d] dark:text-[#ff914d] px-3 py-2 rounded-md text-center text-sm font-medium border border-[#ff914d]/10">
                      {dtu}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Épreuve d'étanchéité Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Épreuve d&apos;étanchéité à l&apos;eau
            </h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-[#ff914d]/20">
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-[#fff1e8] dark:bg-[#ff914d]/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Sur demande du maître d&apos;oeuvre, nous pouvons effectuer une épreuve d&apos;étanchéité à l&apos;eau.
                    Cette épreuve sera réalisée conformément aux conditions notifiées dans l&apos;article 10.2 du DTU 43.1.
                  </p>
                  <div className="flex items-center text-sm text-[#ff914d]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Test conforme aux normes du DTU 43.1
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Garanties Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Levée des réserves et Garantie de Parfait Achèvement
            </h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-[#ff914d]/20">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Levée des réserves
                </h4>
                <p className="text-gray-600 dark:text-gray-400 pl-8">
                  Nous nous engageons à lever l&apos;ensemble des réserves dans les délais prescrit par la maitrise d&apos;ouvrage.
                </p>
              </div>
              
              <div className="border-t border-gray-100 dark:border-gray-700 pt-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  Garantie de Parfait achèvement
                </h4>
                <div className="pl-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Conformément à la législation en vigueur, tous nos travaux sont assurés auprès de la compagnie 
                    d&apos;assurance EISL sous le numéro DEC-ELI-003696-01.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nos assurances civile et décennale garantissent nos ouvrages pour une durée de 10 ans à 
                    compter de la réception des travaux.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Durant toute l&apos;année qui suit la réception des travaux, nous assurons la garantie de parfait 
                    achèvement. Votre interlocuteur sera le chargé d&apos;affaires ayant suivi les travaux, de la 
                    signature du marché à la réception de travaux.
                  </p>
                  
                  <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-5 rounded-lg border border-[#ff914d]/20">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Notre processus d&apos;intervention
                    </h5>
                    <ul className="space-y-2 pl-7">
                      <li className="flex items-start">
                        <span className="text-[#ff914d] mr-2">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Intervention sur site et recherche des causes d&apos;infiltration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#ff914d] mr-2">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Établissement d&apos;un rapport d&apos;intervention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#ff914d] mr-2">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Réparation et/ou remise en état</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <Button 
              href="/contact" 
              size="lg"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualiteDetails;
