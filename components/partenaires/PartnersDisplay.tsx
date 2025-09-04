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
              <div className="h-1 w-12 bg-[#ff914d] mx-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Nos Partenaires
              </h2>
              <div className="h-1 w-12 bg-[#ff914d] mx-4"></div>
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
                  ? 'bg-[#ff914d] text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Tous les partenaires
            </button>
            <button
              onClick={() => setActiveCategory('legal')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                activeCategory === 'legal'
                  ? 'bg-[#ff914d] text-white shadow-md'
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
                  ? 'bg-[#ff914d] text-white shadow-md'
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
                      alt={`Logo officiel de ${partner.nom} - Partenaire ${partner.category === 'legal' ? 'légal' : 'commercial'} d'ERB-BTP dans le secteur de la construction et rénovation`}
                      fill
                      className="object-contain p-4 drop-shadow-md"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-md font-medium text-xs ${
                    partner.category === 'legal' 
                      ? 'bg-[#ff914d]/10 dark:bg-[#ff914d]/20 text-[#ff914d] dark:text-[#ff914d]' 
                      : 'bg-[#ff914d]/10 dark:bg-[#ff914d]/20 text-[#ff914d] dark:text-[#ff914d]'
                  }`}>
                    {partner.category === 'legal' ? 'Légal' : 'Commercial'}
                  </div>
                  
                  {/* Partnership Year Badge */}
                  {partner.anneePartenariat && (
                    <div className="absolute top-4 right-4 bg-[#ff914d]/10 dark:bg-[#ff914d]/20 text-[#ff914d] dark:text-[#ff914d] text-xs px-2.5 py-1 rounded-md font-medium">
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
                          <Award className="h-4 w-4 text-[#ff914d] dark:text-[#ff914d] mr-2" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Certifications</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {partner.certifications.map((cert, index) => (
                            <span 
                              key={index}
                              className="bg-[#ff914d]/10 dark:bg-[#ff914d]/20 text-[#ff914d] dark:text-[#ff914d] text-xs px-2 py-1 rounded-md font-medium"
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
                          <Globe className="h-4 w-4 text-[#ff914d] dark:text-[#ff914d] mr-2" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Domaines d&apos;expertise</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {partner.domaines.map((domaine, index) => (
                            <span 
                              key={index}
                              className="bg-[#ff914d]/10 dark:bg-[#ff914d]/20 text-[#ff914d] dark:text-[#ff914d] text-xs px-2 py-1 rounded-md font-medium"
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
                        className="inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-sm hover:shadow bg-[#ff914d] hover:bg-[#e07c3e]"
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
        </div>
      </div>
    </div>
  );
};

export default PartnersDisplay;
