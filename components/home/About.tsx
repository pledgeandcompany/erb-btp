'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/btp4.png"
              alt="ERB-BTP - Entreprise de construction et rénovation en Île-de-France"
              width={600}
              height={400}
              className="object-cover w-full"
              loading="eager"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Notre Histoire</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Aujourd'hui, avec une équipe de professionnels qualifiés et un portefeuille impressionnant 
              de projets réussis, nous continuons d'innover et de nous adapter pour offrir les meilleures 
              solutions à nos clients.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center text-[#ff914d] hover:text-[#e67e35] dark:text-[#ff914d] dark:hover:text-[#ffb583] font-medium"
            >
              En savoir plus
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
