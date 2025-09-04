'use client';

import React from 'react';
import Image from 'next/image';

const QualiteHero: React.FC = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Notre <span className="text-[#ff914d]">Engagement</span> pour la Qualité
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Chez ERB-BTP, nous mettons un point d&apos;honneur à offrir des prestations de qualité supérieure, 
                respectant les normes les plus strictes du secteur et garantissant votre satisfaction à long terme.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-[#fff1e8] dark:bg-[#ff914d]/10 px-4 py-2 rounded-full">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Certifié Qualibat</span>
                </div>
                <div className="flex items-center bg-[#fff1e8] dark:bg-[#ff914d]/10 px-4 py-2 rounded-full">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Normes DTU</span>
                </div>
                <div className="flex items-center bg-[#fff1e8] dark:bg-[#ff914d]/10 px-4 py-2 rounded-full">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Garantie 10 ans</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Qualité ERB-BTP"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff914d]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-[#ff914d]/20">
              <Image
                src="/qualibat.webp"
                alt="Certification Qualibat"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </div>
  );
};

export default QualiteHero;
