'use client';

import React from 'react';
import Image from 'next/image';

const MateriauxHero: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Moyens et <span className="text-[#ff914d]">Matériaux</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Des équipements de qualité et des équipes spécialisées pour garantir l&apos;excellence de nos prestations en couverture et étanchéité.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-[#ff914d] flex items-center">
                <div className="mr-3 text-[#ff914d]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Équipes Spécialisées</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Personnel qualifié</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-[#ff914d] flex items-center">
                <div className="mr-3 text-[#ff914d]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Matériaux Premium</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fournisseurs de qualité</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-[#ff914d] flex items-center">
                <div className="mr-3 text-[#ff914d]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Maintenance Préventive</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Entretien régulier</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 md:h-96 lg:h-full rounded-xl overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff914d]/30 to-transparent z-10 rounded-xl"></div>
            <Image
              src="/images/materiaux-hero.jpg"
              alt="Équipements et matériaux de construction"
              fill
              priority
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default MateriauxHero;
