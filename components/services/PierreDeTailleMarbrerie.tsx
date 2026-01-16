'use client'

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Mountain } from 'lucide-react';

const PierreDeTailleMarbrerie: React.FC = () => {
  return (
    <section id="pierre-de-taille-marbrerie" className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Service Header with Accent Bar */}
        <div className="flex items-center mb-6">
          <div className="h-1 w-10 bg-[#ff914d] mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            PIERRE DE TAILLE - MARBRERIE
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Expert de la pierre de taille depuis 1919, nous intervenons pour la réalisation, le remplacement ou la rénovation 
                d'escaliers, sols, colonnes sur pierre (marbre, granit, céramique, etc.). Nous réalisons salles de bains, 
                cuisine, piscines ou encore terrasses en marbre et pierres taillées.
              </p>
            </div>
            
            {/* Service Features */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md border border-gray-100 dark:border-gray-600">
              <h3 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center">
                <span className="bg-[#fff1e8] dark:bg-[#5e3520] p-1.5 rounded-full mr-2">
                  <Mountain className="h-3.5 w-3.5 text-[#ff914d] dark:text-[#ff914d]" />
                </span>
                Nos prestations de pierre de taille et marbrerie comprennent :
              </h3>
              <ul className="space-y-2">
                {[
                  "Expertise depuis 1919 en pierre de taille",
                  "Réalisation, remplacement et rénovation",
                  "Escaliers, sols, colonnes en pierre",
                  "Matériaux nobles (marbre, granit, céramique)",
                  "SDB, cuisine, piscines, terrasses sur mesure"
                ].map((item, index) => (
                  <li key={index} className="flex items-start transition-all duration-200 hover:translate-x-1">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-[#ff914d] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column - Image with Overlay */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-[#ff914d] transform translate-x-3 translate-y-3 rounded-lg transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative rounded-md overflow-hidden shadow-lg h-[280px] transition-all duration-300 group-hover:shadow-[#fff1e8] dark:group-hover:shadow-[#5e3520]">
              <Image
                src="/images/services/marbrerie.svg"
                alt="Pierre de Taille - Marbrerie"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PierreDeTailleMarbrerie;
