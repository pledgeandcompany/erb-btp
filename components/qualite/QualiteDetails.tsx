'use client';

import React from 'react';
import Image from 'next/image';

const QualiteDetails: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Qualité de notre prestation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Notre engagement pour l&apos;excellence et la qualité dans tous nos projets
            </p>
          </div>

          {/* Qualification Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Qualification
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <Image 
                    src="/qualibat.webp" 
                    alt="Qualibat Logo" 
                    width={150} 
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Qualibat
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nous sommes heureux de vous faire bénéficier de notre savoir-faire, qui est certifié par le 
                    label QUALIBAT, décerné par la Fédération Française du Bâtiment.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cette qualification vous apporte des garanties sur notre professionnalisme, et valide notre 
                    aptitude ainsi que notre sérieux, à mener à bien nos ouvrages.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conformité Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Conformité de nos ouvrages
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                La conformité de la réalisation de nos ouvrages, est contrôlée par le responsable du chantier.
                L&apos;ensemble des travaux sera réalisé dans les règles de l&apos;art, et conformément aux 
                dispositions et réglementations en vigueur.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Normes et DTU appliqués
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {['DTU 43.5', 'DTU 43.1', 'DTU 40.11', 'DTU 40.14', 'DTU 40.21', 'DTU 40.22', 
                  'DTU 40.23', 'DTU 40.25', 'DTU 40.35', 'DTU 40.41', 'DTU 40.36', 'DTU 40.35'].map((dtu, index) => (
                  <div key={index} className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded text-center text-sm">
                    {dtu}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Épreuve d'étanchéité Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Épreuve d&apos;étanchéité à l&apos;eau
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-400">
                Sur demande du maître d&apos;œuvre, nous pouvons effectuer une épreuve d&apos;étanchéité à l&apos;eau.
                Cette épreuve sera réalisée conformément aux conditions notifiées dans l&apos;article 10.2 du DTU 43.1.
              </p>
            </div>
          </section>

          {/* Garanties Section */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Levée des réserves et Garantie de Parfait Achèvement
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Levée des réserves
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Nous nous engageons à lever l&apos;ensemble des réserves dans les délais prescrit par la maitrise d&apos;ouvrage.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Garantie de Parfait achèvement
                </h4>
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
                
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Notre processus d&apos;intervention
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Intervention sur site et recherche des causes d&apos;infiltration</li>
                    <li>Établissement d&apos;un rapport d&apos;intervention</li>
                    <li>Réparation et/ou remise en état</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Contactez-nous pour en savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualiteDetails;
