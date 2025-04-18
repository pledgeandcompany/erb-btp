'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ServiceEtancheite: React.FC = () => {
  return (
    <section id="etancheite" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Étanchéité</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              L&#39;étanchéité est essentielle pour protéger votre bâtiment contre les infiltrations d&#39;eau. 
              Nos experts mettent en œuvre des solutions durables et efficaces pour assurer une parfaite 
              imperméabilisation de vos toitures, terrasses et fondations.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Nos solutions d&#39;étanchéité comprennent :</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Étanchéité de toitures terrasses</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Étanchéité de fondations et sous-sols</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Membranes bitumineuses et synthétiques</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Traitement des infiltrations et remontées capillaires</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Cuvelage et solutions d&#39;étanchéité pour pièces humides</span>
              </li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300">
              Nos solutions d&#39;étanchéité assurent la pérennité de vos ouvrages. N&#39;hésitez pas à nous consulter pour un diagnostic ou une intervention rapide.
            </p>
            
            <Button href="/contact" className="mt-2">
              Demander un devis
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/images/etancheite.png"
                alt="Étanchéité"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceEtancheite;
