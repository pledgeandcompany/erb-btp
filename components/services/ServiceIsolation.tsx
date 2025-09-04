'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Thermometer } from 'lucide-react';

const ServiceIsolation: React.FC = () => {
  return (
    <section id="isolation" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Service Header with Accent Bar */}
        <div className="flex items-center mb-12">
          <div className="h-1 w-12 bg-[#ff914d] mr-4"></div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Isolation Thermique
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with Overlay */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#ff914d] transform translate-x-3 translate-y-3 rounded-lg transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[450px] transition-all duration-300 group-hover:shadow-[#fff1e8] dark:group-hover:shadow-[#5e3520]">
              <Image
                src="/images/isolation.png"
                alt="Isolation thermique"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>

            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Nos solutions d&apos;isolation thermique sont adaptées à tous types de bâtiments et respectent les normes 
                environnementales les plus exigeantes. Réduisez votre consommation énergétique et améliorez votre confort.
              </p>
            </div>
            
            {/* Service Features */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-100 flex items-center">
                <span className="bg-[#fff1e8] dark:bg-[#5e3520] p-2 rounded-full mr-3">
                  <Thermometer className="h-5 w-5 text-[#ff914d] dark:text-[#ff914d]" />
                </span>
                Nos prestations d&apos;isolation incluent :
              </h3>
              <ul className="space-y-4">
                {[
                  "Isolation des combles et toitures",
                  "Isolation des murs par l'intérieur ou l'extérieur",
                  "Isolation des planchers et sous-sols",
                  "Utilisation de matériaux écologiques et performants",
                  "Éligibilité aux aides financières et crédits d'impôt"
                ].map((item, index) => (
                  <li key={index} className="flex items-start transition-all duration-200 hover:translate-x-1">
                    <CheckCircle2 className="h-6 w-6 mr-3 text-[#ff914d] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Energy Savings Card */}
            <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="text-green-800 dark:text-green-200 font-semibold mb-2">Économies d&apos;énergie</h4>
              <p className="text-green-700 dark:text-green-300">
                Une bonne isolation peut réduire votre consommation énergétique jusqu&apos;à 30% et améliorer significativement votre confort thermique en toute saison.
              </p>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIsolation;
