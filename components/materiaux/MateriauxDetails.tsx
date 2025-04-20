'use client';

import React from 'react';

const MateriauxDetails: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Moyens et Matériaux
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Découvrez les ressources humaines et matérielles que nous mettons à votre disposition pour garantir des prestations de qualité
            </p>
          </div>

          {/* Moyens Humains */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Moyens Humains</h3>
            
            {/* Effectifs généraux */}
            <div className="mb-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Effectifs affectés à ce marché</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Employé administratif</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chargé d&apos;affaires</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chef de chantier</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">16</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Ouvriers HQ</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chauffeurs / livreurs</div>
                </div>
              </div>
            </div>

            {/* Équipes spécialisées */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Nos équipes spécialisées</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Équipe 1 */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-yellow-600 text-white p-4">
                    <h5 className="text-lg font-semibold">ÉQUIPE 1 : Étanchéité</h5>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 étancheur HQ</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 compagnon</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 fourgonnette CITROEN JUMPER</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 Tablette SAMSUNG</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Équipe 3 */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-yellow-600 text-white p-4">
                    <h5 className="text-lg font-semibold">ÉQUIPE 3 : Couverture</h5>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 Couvreur HQ</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 compagnon</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 fourgonnette CITROEN JUMPER</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 tablette SAMSUNG</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Insertion par l'économie */}
            <div className="mb-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Pourcentage réservé à l&apos;insertion par l&apos;économie</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                À chaque chantier, ERB-BTP s&apos;efforce de réserver les emplois de manœuvre à l&apos;insertion sociale par l&apos;économie. Sur une équipe moyenne de 5 personnes, on compte en général 2 manœuvres.
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                Plusieurs de nos salariés actuels ont été recrutés définitivement par ce biais sous forme de CDI.
              </p>
            </div>
          </section>

          {/* Moyens Matériels */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Moyens Matériels</h3>
            
            {/* Liste des équipements */}
            <div className="mb-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Équipements affectés aux interventions</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Treuils</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Bennes</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">8</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Tronçonneuses</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">8</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Perceuses</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">6</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chalumeaux</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">12</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Extincteurs</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Camion benne</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">30</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Clôtures de chantier</div>
                </div>
              </div>
            </div>

            {/* Fournisseurs */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Nos Fournisseurs</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Isolant */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-yellow-600 text-white p-4">
                    <h5 className="text-lg font-semibold">Isolant</h5>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>ROCKWOOL</li>
                      <li>EFFISOL</li>
                      <li>KNAUFF</li>
                      <li>RECTICEL</li>
                    </ul>
                  </div>
                </div>

                {/* Étanchéité */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-yellow-600 text-white p-4">
                    <h5 className="text-lg font-semibold">Étanchéité</h5>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>SIPLAST</li>
                      <li>AXTER</li>
                      <li>MEPLE</li>
                      <li>SOPREMA</li>
                    </ul>
                  </div>
                </div>

                {/* Couverture */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-yellow-600 text-white p-4">
                    <h5 className="text-lg font-semibold">Couverture</h5>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>ASTURIENNE</li>
                      <li>LARIVIERE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance préventive */}
            <div className="mb-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Maintenance Préventive</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Une couverture mal entretenue génère des dangers immédiats pouvant causer de gros dégâts
                au bâtiment et augmente les risques d&apos;infiltration au sein du bâtiment.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Lors de l&apos;entretien de votre terrasse inaccessible, nous effectuons :
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>Examen général des ouvrages d&apos;étanchéité visibles</li>
                <li>Remise en ordre des protections gravillon</li>
                <li>Inspection de tous les ouvrages complémentaires visibles</li>
                <li>Nettoyage des orifices des évacuations d&apos;eaux pluviales et trop-pleins</li>
                <li>Recherche de fuites et sondage</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MateriauxDetails;
