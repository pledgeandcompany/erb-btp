'use client';

import React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-auto py-24 md:py-32 bg-white dark:bg-gray-800 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/images/pattern.png')" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              À propos <span className="text-yellow-500">d&#39;ERB-BTP</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
              Depuis plus de 25 ans, ERB-BTP s&#39;est imposé comme un acteur incontournable du secteur de la construction 
              et de la rénovation en Île-de-France. Notre engagement envers l&#39;excellence et la satisfaction client 
              a fait notre réputation.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-yellow-500 font-bold text-2xl mr-2">25+</span>
                <span className="text-gray-700 dark:text-gray-300">Années d&#39;expérience</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-yellow-500 font-bold text-2xl mr-2">500+</span>
                <span className="text-gray-700 dark:text-gray-300">Projets réalisés</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-yellow-500 font-bold text-2xl mr-2">98%</span>
                <span className="text-gray-700 dark:text-gray-300">Clients satisfaits</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="/images/btp5.png"
                alt="ERB-BTP équipe"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg font-bold mb-2">Notre mission</p>
              <p className="text-sm">Construire des espaces durables qui améliorent la qualité de vie de nos clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
