'use client';

import React from 'react';
import { Button } from '../ui/Button';

const SecuriteDetails: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Sécurité sur nos chantiers</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                La sécurité est une priorité absolue sur tous nos chantiers. Nous mettons en place des mesures 
                rigoureuses pour assurer la protection de nos équipes, de nos clients et du public.
              </p>
            </div>

            {/* Section 8.1 - PPSPS */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Plan Particulier de Sécurité et de Protection de la Santé
              </h3>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-[#ff914d]/20">
                <div className="flex items-start mb-6">
                  <div className="mr-4 mt-1 p-2 bg-[#fff1e8] dark:bg-[#ff914d]/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Suivant le PGC, et suite à la visite d&apos;inspection commune, nous établirons un PPSPS spécifique 
                      aux travaux à réaliser sur le chantier.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      L&apos;ensemble de notre personnel intervenant aura pris connaissance du PPSPS avant le démarrage 
                      des travaux.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Les PPSPS sera soumis au Coordonnateur de Sécurité pour validation.
                    </p>
                  </div>
                </div>
                <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div className="flex items-center text-sm text-[#ff914d]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Document obligatoire pour tous nos chantiers
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8.2 - Locaux d'hygiène */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                Locaux d&apos;hygiène
              </h3>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-[#ff914d]/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-6 rounded-lg border border-[#ff914d]/20">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </span>
                      Base vie
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Une zone sera délimitée afin d&apos;y installer une base-vie destinée aux personnels intervenant, 
                      elle comprendra un bungalow avec réfectoire et vestiaires ainsi qu&apos;un WC chimique, 
                      l&apos;ensemble sera conforme aux dispositions d&apos;hygiène et de sécurité en vigueur.
                    </p>
                  </div>
                  
                  <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-6 rounded-lg border border-[#ff914d]/20">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      Balisage
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cette enceinte sera délimitée par des clôtures de chantier type HERAS, de 2ml de hauteur, 
                      réalisée en éléments tubulaires galvanisés avec mailles 10X10, montés sur des plots en béton 
                      et restant amovible.
                    </p>
                  </div>
                  
                  <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-6 rounded-lg border border-[#ff914d]/20">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>
                      Nettoyage
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Les locaux de la base vie seront nettoyés et entretenus quotidiennement, pendant toute la 
                      durée des travaux. Il en sera de même pour les abords de la base vie, de l&apos;immeuble et du 
                      parking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8.3 - Zone de stockage */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </span>
                Zone de stockage
              </h3>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-[#ff914d]/20">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 p-2 bg-[#fff1e8] dark:bg-[#ff914d]/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Une zone de stockage tampon sera matérialisée par des clôtures de chantier. Elle se situe 
                      généralement en pied de façade, à l&apos;aplomb du treuil. C&apos;est une zone de stockage provisoire, 
                      car aucun matériau n&apos;y reste stocké après le départ des ouvriers.
                    </p>
                    <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-lg border border-[#ff914d]/20 mt-4">
                      <div className="flex items-center">
                        <span className="text-[#ff914d] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          Tous matériaux excedentaires seront évacués en fin de journée.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8.4 - Matériels d'hygiène et de sécurité */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </span>
                Matériels d&apos;hygiène et de sécurité
              </h3>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-[#ff914d]/20 mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Equipement de travail du personnel
                </h4>
                
                <div className="mb-6 bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                    Chaque ouvrier est muni d&apos;un coffret de sécurité comprenant :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-none mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                      {[
                        "Combinaisons de travail avec sérigraphie",
                        "Chaussures ou bottes de sécurité",
                        "Combinaisons jetables",
                        "Gant néoprène pour manipulations chimiques",
                        "Gant en cuirs pour manutention",
                        "Casque de chantier",
                        "Lunettes de protection",
                        "Casque antibruit ou bouchons d'oreille",
                        "Masques jetable anti poussière",
                        "Masques avec cartouches"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-[#ff914d] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="list-none mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                      {[
                        "Equipement de pluie",
                        "Gilet jaune fluo",
                        "Ligne de vie",
                        "Harnais de sécurité",
                        "Stop chute",
                        "Mousqueton",
                        "Pinces, potelets et filets",
                        "Extincteurs",
                        "Rallonge électrique avec disjoncteur"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-[#ff914d] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <span className="text-[#ff914d] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Trousse à pharmacie complète
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-7">
                    <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                      <li>• Attelle gouttière</li>
                      <li>• Paire de ciseaux</li>
                      <li>• Pansements absorbants</li>
                      <li>• Pansements lavables</li>
                      <li>• Compresses GAZE 20 x 20</li>
                    </ul>
                    <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                      <li>• Tube de gel apaisant</li>
                      <li>• Paires de gants</li>
                      <li>• Couverture de survie</li>
                      <li>• Bande extensible cohésive</li>
                      <li>• Pince à écharde</li>
                    </ul>
                    <ul className="list-none text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                      <li>• Compresses imprégnées</li>
                      <li>• Solution ophtalmique</li>
                      <li>• Ruban adhésif</li>
                      <li>• Épingles</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-[#ff914d]/20">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  <span className="text-[#ff914d] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  Equipement de protection individuelle (E.P.I.)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      Inventorié une fois par mois
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Vérifié quotidiennement
                    </p>
                  </div>
                  <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Remplacé sous 24 heures si nécessaire
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </span>
                      Boites à pharmacie vérifiées mensuellement
                    </p>
                  </div>
                </div>
              </div>
            </div>
              
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Protections et sécurité du chantier
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#ff914d]/20">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <span className="text-[#ff914d] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    Protections collectives
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Garde-corps escamotables aux zones sans protection collective",
                      "Pinces avec potelets, filets et main courante rigide",
                      "Points d'accroche pour harnais et système antichute",
                      "Échafaudage de sécurité aux normes CE"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#ff914d] mr-2 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#ff914d]/20">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <span className="text-[#ff914d] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    Protections du public
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Clôtures de chantier grillagées de 2m de hauteur",
                      "Signalisation par panneaux et affichage",
                      "Nettoyage régulier des abords du chantier",
                      "Éclairage et points clignotants pour le balisage"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#ff914d] mr-2 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#ff914d]/20">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <span className="text-[#ff914d] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </span>
                    Engin de levage
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 space-y-3">
                    <p>
                      L&apos;approvisionnement des terrasses est effectué par l&apos;extérieur à partir de grue de 
                      terrasse du type TRACTEL, véhicule nacelle allant jusqu&apos;à 30m de haut, monte matériaux ou 
                      grue mobile.
                    </p>
                    <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-3 rounded-lg mt-2">
                      <p className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="text-[#ff914d] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        L&apos;emprise au sol est sécurisée par des barrières amovibles de 2m de hauteur avec inscription &quot;interdit au public&quot;
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#ff914d]/20">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <span className="text-[#ff914d] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </span>
                    Propreté et sécurité incendie
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 space-y-3">
                    <p>
                      Tous gravats sont évacués dans les 48h. Les ouvriers rangent leurs matériels et nettoient leur poste de travail quotidiennement.
                    </p>
                    <p>
                      Le nombre d&apos;extincteurs en terrasse est égal au nombre de points chauds. Tout stockage doit se trouver à plus de 10m des zones de travail.
                    </p>
                    <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-3 rounded-lg mt-2">
                      <p className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                        <span className="text-[#ff914d] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        Plus un chantier est propre et organisé, moins il y a de risques incendie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Unique */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Document Unique
              </h3>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#ff914d]/20">
                <div className="text-gray-600 dark:text-gray-400 space-y-4">
                  <p>
                    Le Document Unique a pour but de renseigner toute personne travaillant dans l&apos;entreprise sur les risques 
                    encourus pour chaque tâche et de noter tous les moyens de prévention à mettre en œuvre.
                  </p>
                  <p>
                    Il est consultable au siège de l&apos;entreprise et les consignes de sécurité sont régulièrement 
                    rappelées aux ouvriers.
                  </p>
                  <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-lg mt-2">
                    <p className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-[#ff914d] mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      <span>
                        La mise à jour du Document Unique est effectuée annuellement et après chaque accident du travail ou incident grave.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section - Risques sur la santé liés aux produits et matériaux */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Risques sur la santé liés aux produits et matériaux
              </h3>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#ff914d]/20">
                <div className="text-gray-600 dark:text-gray-400 space-y-4">
                  <p>
                    Notre entreprise respecte les recommandations des fiches de données sécurité des produits 
                    ou techniques mis en œuvre sur le chantier.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start">
                      <span className="text-[#ff914d] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>Fiches de données de sécurité distribuées aux ouvriers</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#ff914d] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>Formation régulière sur les risques chimiques</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#ff914d] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>Équipements de protection adaptés fournis</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#ff914d] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>Stockage sécurisé des produits dangereux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FDS Section */}
            <div className="mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="text-[#ff914d] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Fiches de Données de Sécurité (FDS)
              </h3>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#ff914d]/20">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  La FDS (Fiche de Données de Sécurité) comprend obligatoirement les 16 points règlementaires 
                  suivants :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#fff8f3] dark:bg-[#ff914d]/10 p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                      Identification et prévention
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Identification du produit",
                        "Identification des dangers",
                        "Composition/informations sur les composants",
                        "Premiers secours",
                        "Mesures de lutte contre l'incendie",
                        "Mesures à prendre en cas de dispersion accidentelle",
                        "Manipulation et stockage",
                        "Contrôles de l'exposition/protection individuelle"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#ff914d] mr-2 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[#fff8f3] dark:bg-[#ff914d]/10 p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                      <span className="text-[#ff914d] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </span>
                      Propriétés et informations complémentaires
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Propriétés physiques et chimiques",
                        "Stabilité et réactivité",
                        "Informations toxicologiques",
                        "Informations écologiques",
                        "Considérations relatives à l'élimination",
                        "Informations relatives au transport",
                        "Informations réglementaires",
                        "Autres informations"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#ff914d] mr-2 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-lg mt-6">
                  <p className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-[#ff914d] mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>
                      Les fiches de données de sécurité sont disponibles pour tous les produits utilisés sur nos chantiers et sont régulièrement mises à jour selon la réglementation en vigueur.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 animate-fade-in">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-[#ff914d]/20 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Besoin d&apos;informations sur notre politique de sécurité ?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos mesures de sécurité sur les chantiers.
                </p>
                <Button href="/contact" className="bg-[#ff914d] hover:bg-[#e07c3e] text-white font-medium py-3 px-6 rounded-md transition-all">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuriteDetails;
