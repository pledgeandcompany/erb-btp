'use client';

import React from 'react';
import Image from 'next/image';

const ProjectsHero: React.FC = () => {
  return (
    <section className="relative h-auto py-24 md:py-32 bg-white dark:bg-gray-900 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/images/pattern.png')" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Nos <span className="text-[#ff914d]">Réalisations</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
              Découvrez nos projets de construction et rénovation réalisés pour nos clients. 
              Chaque projet témoigne de notre engagement envers la qualité et la satisfaction client.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-[#ff914d] dark:text-[#ff914d] font-bold text-2xl mr-2">150+</span>
                <span className="text-gray-700 dark:text-gray-300">Projets résidentiels</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-[#ff914d] dark:text-[#ff914d] font-bold text-2xl mr-2">75+</span>
                <span className="text-gray-700 dark:text-gray-300">Projets commerciaux</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-[#ff914d] dark:text-[#ff914d] font-bold text-2xl mr-2">50+</span>
                <span className="text-gray-700 dark:text-gray-300">Rénovations</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="/images/btp1.png"
                alt="Projets ERB-BTP"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-[#ff914d] text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg font-bold mb-2">Excellence reconnue</p>
              <p className="text-sm">Nos projets ont été récompensés pour leur qualité et leur innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
