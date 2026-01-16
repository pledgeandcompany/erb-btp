'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const RecruitmentHero: React.FC = () => {
  return (
    <section className="relative h-auto py-24 md:py-32 bg-white dark:bg-gray-900 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/images/pattern.png')" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Rejoignez <span className="text-[#ff914d]">ERB-BTP</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
              Découvrez nos opportunités de carrière et rejoignez une équipe passionnée par la construction 
              et la rénovation de qualité. Plus de 25 ans d'expertise à votre service.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="/team.svg"
                alt="Équipe ERB-BTP"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-[#ff914d] text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg font-bold mb-2">Rejoignez notre équipe</p>
              <p className="text-sm">Des opportunités de carrière dans un secteur dynamique et innovant.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentHero;
