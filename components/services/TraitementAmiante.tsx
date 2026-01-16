'use client'

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const TraitementAmiante: React.FC = () => {
  return (
    <section id="traitement-amiante" className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Service Header with Accent Bar */}
        <div className="flex items-center mb-6">
          <div className="h-1 w-10 bg-[#ff914d] mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            TRAITEMENT DE L'AMIANTE
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Le traitement de l'amiante est une opération délicate qui nécessite une expertise particulière. 
                Notre équipe certifiée intervient dans le respect des normes de sécurité les plus strictes pour 
                protéger la santé des occupants et de nos techniciens.
              </p>
            </div>
            
            {/* Service Features */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md border border-gray-100 dark:border-gray-600">
              <h3 className="text-base font-semibold mb-3 text-gray-800 dark:text-gray-100 flex items-center">
                <span className="bg-[#fff1e8] dark:bg-[#5e3520] p-1.5 rounded-full mr-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-[#ff914d] dark:text-[#ff914d]" />
                </span>
                Nos prestations de traitement de l'amiante comprennent :
              </h3>
              <ul className="space-y-2">
                {[
                  "Diagnostic et repérage avant travaux",
                  "Retrait et confinement de l'amiante",
                  "Équipe certifiée et équipements de protection",
                  "Respect des normes de sécurité",
                  "Gestion des déchets et décontamination"
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
          <div className="relative group">
            <div className="absolute inset-0 bg-[#ff914d] transform translate-x-3 translate-y-3 rounded-lg transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative rounded-md overflow-hidden shadow-lg h-[280px] transition-all duration-300 group-hover:shadow-[#fff1e8] dark:group-hover:shadow-[#5e3520]">
              <Image
                src="/images/services/amiante.svg"
                alt="Traitement de l'amiante"
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

export default TraitementAmiante;
