'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ServiceExterieur: React.FC = () => {
  return (
    <section id="exterieur" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/images/exterieur.png"
                alt="Aménagement extérieur"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Aménagement Extérieur</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Aménagez vos espaces extérieurs avec ERB-BTP : terrasses, clôtures, allées, et plus encore. Nous vous accompagnons de l&#39;étude à la réalisation.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Nos prestations d&#39;aménagement extérieur :</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Conception d&#39;allées, d&#39;accès et d&#39;espaces verts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Installation de clôtures, portails et murets d&#39;entourage</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Création de terrasses, pergolas et espaces de détente extérieurs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Pose de pavés, dalles et revêtements extérieurs</span>
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

export default ServiceExterieur;
