'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Award, Shield, Briefcase, Globe } from 'lucide-react';

// Définition du type pour un partenaire
interface Partner {
  id: number;
  nom: string;
  description: string;
  logo: string;
  site?: string;
  certifications?: string[];
  domaines?: string[];
  anneePartenariat?: number;
  category: 'legal' | 'commercial';
}

// Liste des partenaires
const partners: Partner[] = [
  {
    id: 1,
    nom: "Qualibat",
    description: "Organisme de qualification et certification des entreprises de construction, garantissant notre expertise et notre savoir-faire",
    logo: "/qualibat.webp",
    site: "https://www.qualibat.com",
    certifications: ["RGE", "Qualité", "Certification officielle"],
    category: 'legal'
  },
  {
    id: 2,
    nom: "PLEDGE AND GROW",
    description: "Agence de développement informatique partenaire qui nous accompagne dans la création et l'amélioration de nos solutions digitales. Nous collaborons étroitement pour optimiser notre présence en ligne et nos outils numériques.",
    logo: "/pledge-logo.png",
    site: "https://pledgeandgrow.com",
    domaines: ["Développement web", "Applications mobiles", "Solutions digitales"],
    anneePartenariat: 2022,
    category: 'commercial'
  }
];

type CategoryType = 'all' | 'legal' | 'commercial';

const PartnersDisplay: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  // Filtrer les partenaires en fonction de la catégorie active
  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-1 w-12 bg-yellow-500 mx-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Nos Partenaires
              </h2>
              <div className="h-1 w-12 bg-yellow-500 mx-4"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Découvrez les entreprises et organisations avec lesquelles nous collaborons pour garantir l&apos;excellence de nos services
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-yellow-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Tous les partenaires
            </button>
            <button
              onClick={() => setActiveCategory('legal')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                activeCategory === 'legal'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Shield className="w-4 h-4 mr-2" />
              Partenaires Légaux
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                activeCategory === 'commercial'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Partenaires Commerciaux
            </button>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredPartners.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row"
              >
                {/* Logo Area with Gradient Overlay */}
                <div className="relative h-52 md:h-auto md:w-2/5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.nom}`}
                      fill
                      className="object-contain p-4 drop-shadow-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-md font-medium text-xs ${
                    partner.category === 'legal' 
                      ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200' 
                      : 'bg-green-100 dark:bg-green-900/60 text-green-800 dark:text-green-200'
                  }`}>
                    {partner.category === 'legal' ? 'Légal' : 'Commercial'}
                  </div>
                  
                  {/* Partnership Year Badge */}
                  {partner.anneePartenariat && (
                    <div className="absolute top-4 right-4 bg-yellow-100 dark:bg-yellow-900/60 text-yellow-800 dark:text-yellow-200 text-xs px-2.5 py-1 rounded-md font-medium">
                      <span>Depuis {partner.anneePartenariat}</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{partner.nom}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {partner.description}
                    </p>
                    
                    {/* Certifications */}
                    {partner.certifications && partner.certifications.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Certifications</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {partner.certifications.map((cert, index) => (
                            <span 
                              key={index}
                              className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-md font-medium"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Domains */}
                    {partner.domaines && partner.domaines.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Globe className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Domaines d&apos;expertise</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {partner.domaines.map((domaine, index) => (
                            <span 
                              key={index}
                              className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded-md font-medium"
                            >
                              {domaine}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Visit Site Button */}
                  {partner.site && (
                    <div className="mt-auto pt-2">
                      <a 
                        href={partner.site} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-sm hover:shadow ${
                          partner.category === 'legal' 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-green-600 hover:bg-green-700'
                        }`}
                      >
                        Visiter le site
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Section de collaboration */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-8 rounded-xl shadow-sm border border-yellow-100 dark:border-yellow-900/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Vous souhaitez devenir partenaire ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  ERB-BTP est toujours à la recherche de nouveaux partenariats pour enrichir son offre et améliorer la qualité de ses services. Contactez-nous pour discuter des possibilités de collaboration.
                </p>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersDisplay;
