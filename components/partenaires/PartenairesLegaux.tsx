'use client';

import React from 'react';
import Image from 'next/image';

// Définition du type pour un partenaire
interface Partenaire {
  id: number;
  nom: string;
  description: string;
  logo: string;
  site?: string;
}

// Liste des partenaires légaux
const partenairesLegaux: Partenaire[] = [
  {
    id: 1,
    nom: "Qualibat",
    description: "Organisme de qualification et certification des entreprises de construction, garantissant notre expertise et notre savoir-faire",
    logo: "/qualibat.webp",
    site: "https://www.qualibat.com"
  }
];

const PartenairesLegaux: React.FC = () => {
  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Partenaires Légaux</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Nos partenaires juridiques et légaux qui nous accompagnent dans la conformité de nos projets.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partenairesLegaux.map((partenaire) => (
          <div 
            key={partenaire.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src={partenaire.logo}
                  alt={`Logo ${partenaire.nom}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{partenaire.nom}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{partenaire.description}</p>
              {partenaire.site && (
                <a 
                  href={partenaire.site} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 font-medium inline-flex items-center"
                >
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartenairesLegaux;
