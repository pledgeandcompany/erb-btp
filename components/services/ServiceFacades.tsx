'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ServiceFacades: React.FC = () => {
  return (
    <section id="facades" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ravalement de Façades</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Le ravalement de façade n'est pas seulement esthétique, c'est aussi une protection essentielle pour votre bâtiment. 
              Nos équipes qualifiées réalisent des travaux de ravalement complets pour redonner à votre façade son éclat d'origine 
              tout en la protégeant des agressions extérieures.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Nos services de ravalement comprennent :</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Nettoyage et décapage des façades</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Traitement des fissures et réparation des supports</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Application d'enduits décoratifs et peintures</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Pose de revêtements isolants thermiques</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Traitement hydrofuge et anti-mousse</span>
              </li>
            </ul>
            
            <Button href="/contact" className="mt-2">
              Demander un devis
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/images/facade.png"
                alt="Ravalement de façades"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFacades;
