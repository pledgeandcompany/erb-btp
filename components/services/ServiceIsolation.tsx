'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ServiceIsolation: React.FC = () => {
  return (
    <section id="isolation" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/images/isolation.png"
                alt="Isolation thermique"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Isolation Thermique</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Une bonne isolation est la clé pour réduire votre consommation énergétique et améliorer votre confort. 
              Nos solutions d'isolation thermique sont adaptées à tous types de bâtiments et respectent les normes 
              environnementales les plus exigeantes.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Nos prestations d'isolation incluent :</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Isolation des combles et toitures</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Isolation des murs par l'intérieur ou l'extérieur</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Isolation des planchers et sous-sols</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Utilisation de matériaux écologiques et performants</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Éligibilité aux aides financières et crédits d'impôt</span>
              </li>
            </ul>
            
            <Button href="/contact" className="mt-2">
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIsolation;
