'use client'

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';

const Ornementation: React.FC = () => {
  return (
    <section id="ornementation" className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Service Header with Accent Bar */}
        <div className="flex items-center mb-6">
          <div className="h-1 w-10 bg-[#ff914d] mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            ORNEMENTATION
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Véritable métier d'art, les 5 maîtres ornemanistes de nos ateliers travaillent sur la reproduction ou la création 
                d'ornement de couverture dans le respect des règles de l'art. L'atelier Duplessis a obtenu en 2006 le label 
                « entreprise du patrimoine vivant » et assure la pérennité et le savoir-faire de ce métier rare et précieux.
              </p>
            </div>
            
            {/* Service Features */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md border border-gray-100 dark:border-gray-600">
              <h3 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center">
                <span className="bg-[#fff1e8] dark:bg-[#5e3520] p-1.5 rounded-full mr-2">
                  <Star className="h-3.5 w-3.5 text-[#ff914d] dark:text-[#ff914d]" />
                </span>
                Nos prestations d'ornementation comprennent :
              </h3>
              <ul className="space-y-2">
                {[
                  "5 maîtres ornemanistes dans nos ateliers",
                  "Reproduction et création d'ornements de couverture",
                  "Label Entreprise du Patrimoine Vivant (2006)",
                  "Respect des règles de l'art",
                  "Savoir-faire rare et précieux préservé"
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
                src="/images/services/ornementation.svg"
                alt="Ornementation"
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

export default Ornementation;
