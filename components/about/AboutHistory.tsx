'use client';

import React from 'react';
import Image from 'next/image';

const AboutHistory: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Notre Histoire</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Découvrez comment ERB-BTP est devenu un leader dans le secteur de la construction et rénovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/btp4.png"
              alt="Évolution historique d'ERB-BTP depuis 1995 - Entreprise de construction et rénovation en Île-de-France fondée par Ali Tombari"
              width={600}
              height={400}
              className="object-cover w-full"
              loading="eager"
            />
          </div>
          
          <div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d] flex items-center justify-center text-white font-bold">
                    1995
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">Fondation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-16">
                  ERB-BTP est fondé par Ali Tombari avec une vision claire : offrir des services de construction 
                  de qualité supérieure avec une approche centrée sur le client.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d] flex items-center justify-center text-white font-bold">
                    2005
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">Expansion</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-16">
                  Après 10 ans de succès, l&#39;entreprise s&#39;agrandit et élargit sa gamme de services pour inclure 
                  la rénovation, l&#39;étanchéité et l&#39;isolation thermique.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d] flex items-center justify-center text-white font-bold">
                    2015
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">Innovation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-16">
                  Toujours à la pointe de l&#39;innovation, ERB-BTP investit dans les nouvelles technologies pour offrir 
                  des solutions performantes, durables et respectueuses de l&#39;environnement.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d] flex items-center justify-center text-white font-bold">
                    2023
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">Aujourd&#39;hui</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-16">
                  Aujourd&#39;hui, ERB-BTP est reconnu comme un acteur majeur du secteur, avec une équipe de professionnels 
                  qualifiés et un portefeuille impressionnant de projets réussis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
