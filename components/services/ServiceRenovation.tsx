'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ServiceRenovation: React.FC = () => {
  return (
    <section id="renovation" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/images/renovation.png"
                alt="Rénovation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Rénovation</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Spécialistes de la rénovation, nous transformons vos espaces existants pour leur donner une nouvelle vie. 
              Qu&#39;il s&#39;agisse d&#39;une rénovation partielle ou complète, nous mettons notre savoir-faire à votre service pour 
              des résultats qui dépasseront vos attentes.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Nos services de rénovation incluent :</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Rénovation complète d&#39;appartements et maisons</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Rénovation de locaux commerciaux</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Réaménagement d&#39;espaces intérieurs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Mise aux normes électriques et plomberie</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Rénovation énergétique et écologique</span>
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

export default ServiceRenovation;
