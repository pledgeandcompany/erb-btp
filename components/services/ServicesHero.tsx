'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ServicesHero: React.FC = () => {
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
              Nos <span className="text-[#ff914d]">Services</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
              ERB-BTP vous propose une gamme complète de services pour tous vos projets de construction et rénovation. 
              Notre équipe d&#39;experts met son savoir-faire à votre service pour des réalisations de qualité.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {/* Existing Services */}
              <a href="#construction" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Construction</span>
              </a>
              <a href="#renovation" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Rénovation</span>
              </a>
              <a href="#etancheite" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Étanchéité</span>
              </a>
              <a href="#isolation" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Isolation</span>
              </a>
              <a href="#facades" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Façades</span>
              </a>
              <a href="#exterieur" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Extérieur</span>
              </a>
              
              {/* New UTB Services */}
              <a href="#couverture" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Couverture</span>
              </a>
              <a href="#charpente" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Charpente</span>
              </a>
              <a href="#ornementation" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Ornementation</span>
              </a>
              <a href="#electricite" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Électricité</span>
              </a>
              <a href="#plomberie" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Plomberie</span>
              </a>
              <a href="#cvc" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">CVC</span>
              </a>
              <a href="#serrurerie-metallerie" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Serrurerie</span>
              </a>
              <a href="#pierre-de-taille-marbrerie" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Pierre/Marbre</span>
              </a>
              <a href="#bardage" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Bardage</span>
              </a>
              <a href="#murs-ossature-bois" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Ossature Bois</span>
              </a>
              <a href="#traitement-amiante" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Amiante</span>
              </a>
              <a href="#gros-oeuvre" className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#fff1e8] dark:hover:bg-[#5e3520] transition-colors group">
                <span className="text-gray-800 dark:text-white group-hover:text-[#ff914d] dark:group-hover:text-[#ff914d] font-medium text-sm">Gros Œuvre</span>
              </a>
            </div>
            
            <Button href="/contact" size="lg">
              Demander un devis
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="/images/btp2.png"
                alt="Services ERB-BTP"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-[#ff914d] text-white p-6 rounded-lg shadow-lg max-w-xs">
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
