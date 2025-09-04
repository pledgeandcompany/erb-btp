'use client';

import React from 'react';
import Image from 'next/image';

const EnvironnementHero: React.FC = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Notre engagement <span className="text-[#ff914d]">environnemental</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Chez ERB-BTP, nous nous engageons à minimiser l&apos;impact de nos chantiers sur l&apos;environnement 
                grâce à notre charte Chantier Vert et nos pratiques responsables.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-[#fff1e8] dark:bg-[#ff914d]/10 px-4 py-2 rounded-full">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Chantier Vert</span>
                </div>
                <div className="flex items-center bg-[#fff1e8] dark:bg-[#ff914d]/10 px-4 py-2 rounded-full">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Tri sélectif</span>
                </div>
                <div className="flex items-center bg-[#fff1e8] dark:bg-[#ff914d]/10 px-4 py-2 rounded-full">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Véhicules propres</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/btp1.png"
                alt="Chantier écologique ERB-BTP avec pratiques durables - Tri sélectif des déchets et utilisation de matériaux respectueux de l'environnement"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff914d]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-[#ff914d]/20">
              <div className="bg-[#ff914d] text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </div>
  );
};

export default EnvironnementHero;
