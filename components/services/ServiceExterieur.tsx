'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Palmtree } from 'lucide-react';

const ServiceExterieur: React.FC = () => {
  return (
    <section id="exterieur" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Service Header with Accent Bar */}
        <div className="flex items-center mb-12">
          <div className="h-1 w-12 bg-green-500 mr-4"></div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Aménagement Extérieur
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with Overlay */}
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500 transform translate-x-3 translate-y-3 rounded-lg transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[450px] transition-all duration-300 group-hover:shadow-green-200 dark:group-hover:shadow-green-900">
              <Image
                src="/images/exterieur.png"
                alt="Aménagement extérieur"
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
                Transformez vos espaces extérieurs avec ERB-BTP : terrasses, clôtures, allées, et plus encore. 
                Notre équipe de paysagistes expérimentés vous accompagne de l&apos;étude à la réalisation pour créer 
                des espaces extérieurs harmonieux et fonctionnels qui valorisent votre propriété.
              </p>
            </div>
            
            {/* Service Features */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-100 flex items-center">
                <span className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                  <Palmtree className="h-5 w-5 text-green-600 dark:text-green-400" />
                </span>
                Nos prestations d&apos;aménagement extérieur :
              </h3>
              <ul className="space-y-4">
                {[
                  "Conception d'allées, d'accès et d'espaces verts",
                  "Installation de clôtures, portails et murets d'entourage",
                  "Création de terrasses, pergolas et espaces de détente extérieurs",
                  "Pose de pavés, dalles et revêtements extérieurs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start transition-all duration-200 hover:translate-x-1">
                    <CheckCircle2 className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>         
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExterieur;
