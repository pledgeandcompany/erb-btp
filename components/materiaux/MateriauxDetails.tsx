'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

const MateriauxDetails: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Nos Moyens et Matériaux
            </h2>
            <div className="w-24 h-1 bg-[#ff914d] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Découvrez les ressources humaines et matérielles que nous mettons à votre disposition pour garantir des prestations de qualité
            </p>
          </div>

          {/* Moyens Humains */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Moyens Humains
            </h3>
            
            {/* Effectifs généraux */}
            <div className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-[#ff914d]">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Effectifs affectés à ce marché
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Employé administratif</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chargé d&apos;affaires</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chef de chantier</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">16</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Ouvriers HQ</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chauffeurs / livreurs</div>
                </div>
              </div>
            </div>

            {/* Équipes spécialisées */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Nos équipes spécialisées
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Équipe 1 */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#ff914d] text-white p-4">
                    <h5 className="text-lg font-semibold">ÉQUIPE 1 : Étanchéité</h5>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 étancheur HQ</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 compagnon</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 fourgonnette CITROEN JUMPER</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 Tablette SAMSUNG</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Équipe 3 */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#ff914d] text-white p-4">
                    <h5 className="text-lg font-semibold">ÉQUIPE 3 : Couverture</h5>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 Couvreur HQ</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 compagnon</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 fourgonnette CITROEN JUMPER</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#ff914d] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">1 tablette SAMSUNG</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Insertion par l’économie */}
            <div className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-[#ff914d]">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pourcentage réservé à l’insertion par l’économie
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                À chaque chantier, ERB-BTP s’efforce de réserver les emplois de manœuvre à l’insertion sociale par l’économie. Sur une équipe moyenne de 5 personnes, on compte en général 2 manœuvres.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold bg-gray-50 dark:bg-gray-700 p-3 rounded-md border-l-2 border-[#ff914d]">
                Plusieurs de nos salariés actuels ont été recrutés définitivement par ce biais sous forme de CDI.
              </p>
            </div>
          </section>

          {/* Moyens Matériels */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Moyens Matériels
            </h3>
            
            {/* Liste des équipements */}
            <div className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-[#ff914d]">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                Équipements affectés aux interventions
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Treuils</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">2</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Bennes</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">8</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Tronçonneuses</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">8</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Perceuses</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">6</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Chalumeaux</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">12</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Extincteurs</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">1</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Camion benne</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#ff914d] dark:text-[#ff914d] mb-2">30</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Clôtures de chantier</div>
                </div>
              </div>
            </div>

            {/* Fournisseurs */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Nos Fournisseurs
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Isolant */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#ff914d] text-white p-4">
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
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#ff914d] text-white p-4">
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
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#ff914d] text-white p-4">
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
            <div className="mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-[#ff914d]">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Maintenance Préventive
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Une couverture mal entretenue génère des dangers immédiats pouvant causer de gros dégâts
                au bâtiment et augmente les risques d&apos;infiltration au sein du bâtiment.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Lors de l&apos;entretien de votre terrasse inaccessible, nous effectuons :
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Examen général des ouvrages d'\u00e9tanchéité visibles",
                  "Remise en ordre des protections gravillon",
                  "Inspection de tous les ouvrages complémentaires visibles",
                  "Nettoyage des orifices des évacuations d'eaux pluviales et trop-pleins",
                  "Recherche de fuites et sondage"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#ff914d] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA Section */}
            <div className="mt-12 mb-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-md text-center">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Besoin d&apos;un devis pour vos travaux ?</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en matériaux et obtenir un devis personnalisé pour votre projet.  
              </p>
              <Link href="/contact" className="inline-block">
                <Button className="bg-[#ff914d] hover:bg-[#e07c3e] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default MateriauxDetails;
