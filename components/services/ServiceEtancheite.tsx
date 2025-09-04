'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Droplets } from 'lucide-react';

const ServiceEtancheite: React.FC = () => {
  return (
    <section id="etancheite" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Service Header with Accent Bar */}
        <div className="flex items-center mb-12">
          <div className="h-1 w-12 bg-[#ff914d] mr-4"></div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Étanchéité
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                L&apos;étanchéité est essentielle pour protéger votre bâtiment contre les infiltrations d&apos;eau. 
                Nos experts mettent en œuvre des solutions durables et efficaces pour assurer une parfaite 
                imperméabilisation de vos toitures, terrasses et fondations.
              </p>
            </div>
            
            {/* Service Features */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-100 flex items-center">
                <span className="bg-[#fff1e8] dark:bg-[#5e3520] p-2 rounded-full mr-3">
                  <Droplets className="h-5 w-5 text-[#ff914d] dark:text-[#ff914d]" />
                </span>
                Nos solutions d&apos;étanchéité comprennent :
              </h3>
              <ul className="space-y-4">
                {[
                  "Étanchéité de toitures terrasses",
                  "Étanchéité de fondations et sous-sols",
                  "Membranes bitumineuses et synthétiques",
                  "Traitement des infiltrations et remontées capillaires",
                  "Cuvelage et solutions d'étanchéité pour pièces humides"
                ].map((item, index) => (
                  <li key={index} className="flex items-start transition-all duration-200 hover:translate-x-1">
                    <CheckCircle2 className="h-6 w-6 mr-3 text-[#ff914d] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Additional Info Card */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                Nos solutions d&apos;étanchéité assurent la pérennité de vos ouvrages. N&apos;hésitez pas à nous consulter pour un diagnostic ou une intervention rapide.
              </p>
            </div>
            

          </div>
          
          {/* Right Column - Image with Overlay */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-[#ff914d] transform translate-x-3 translate-y-3 rounded-lg transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-[450px] transition-all duration-300 group-hover:shadow-[#fff1e8] dark:group-hover:shadow-[#5e3520]">
              <Image
                src="/images/etancheite.png"
                alt="Étanchéité"
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

export default ServiceEtancheite;
