'use client';

import React, { useState } from 'react';
import PartenairesLegaux from './PartenairesLegaux';
import PartenairesCommerciaux from './PartenairesCommerciaux';

type CategoryType = 'all' | 'legal' | 'commercial';

const PartenairesDetails: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Partenaires
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Découvrez les entreprises et organisations avec lesquelles nous collaborons pour garantir l&apos;excellence de nos services
            </p>
          </div>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full ${
                activeCategory === 'all'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              } transition-colors`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveCategory('legal')}
              className={`px-6 py-2 rounded-full ${
                activeCategory === 'legal'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              } transition-colors`}
            >
              Légal
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-6 py-2 rounded-full ${
                activeCategory === 'commercial'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              } transition-colors`}
            >
              Commerciaux
            </button>
          </div>

          {/* Contenu des partenaires */}
          <div className="space-y-16">
            {(activeCategory === 'all' || activeCategory === 'legal') && <PartenairesLegaux />}
            {(activeCategory === 'all' || activeCategory === 'commercial') && <PartenairesCommerciaux />}
          </div>

          {/* Section de collaboration */}
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Vous souhaitez devenir partenaire ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              ERB-BTP est toujours à la recherche de nouveaux partenariats pour enrichir son offre et améliorer la qualité de ses services.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartenairesDetails;
