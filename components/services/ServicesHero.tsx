'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ServicesHero: React.FC = () => {
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
              Nos <span className="text-yellow-500">Services</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
              ERB-BTP vous propose une gamme complète de services pour tous vos projets de construction et rénovation. 
              Notre équipe d&#39;experts met son savoir-faire à votre service pour des réalisations de qualité.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <a href="#construction" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900 transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 font-medium">Construction</span>
              </a>
              <a href="#renovation" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900 transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 font-medium">Rénovation</span>
              </a>
              <a href="#etancheite" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900 transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 font-medium">Étanchéité</span>
              </a>
              <a href="#isolation" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900 transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 font-medium">Isolation</span>
              </a>
              <a href="#facades" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900 transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 font-medium">Façades</span>
              </a>
              <a href="#exterieur" className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900 transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 font-medium">Extérieur</span>
              </a>
            </div>
            
            <Button href="/contact" size="lg">
              Demander un devis gratuit
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="/images/services/services-hero.jpg"
                alt="Services ERB-BTP"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg font-bold mb-2">Experts en construction depuis 1995</p>
              <p className="text-sm">Plus de 25 ans d&#39;expérience à votre service pour des projets de qualité.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
