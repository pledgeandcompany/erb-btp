'use client';

import React from 'react';
import Image from 'next/image';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 h-full">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Nos coordonnées</h3>
      
      <div className="flex items-center mb-8">
        <Image 
          src="/logo-transparent.png" 
          alt="ERB-BTP Logo" 
          width={60} 
          height={60} 
          className="mr-4"
        />
        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">ERB-BTP</h4>
          <p className="text-gray-600 dark:text-gray-400">Construction et Rénovation</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 mr-3">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h5 className="text-lg font-medium text-gray-900 dark:text-white">Adresse</h5>
            <p className="text-gray-600 dark:text-gray-400 mt-1">86 Rue Voltaire, 93100 MONTREUIL</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 mr-3">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h5 className="text-lg font-medium text-gray-900 dark:text-white">Service commercial</h5>
            <p className="text-gray-600 dark:text-gray-400 mt-1">06 35 30 15 07</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">commercial@erb-btp.fr</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 mr-3">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h5 className="text-lg font-medium text-gray-900 dark:text-white">Service travaux</h5>
            <p className="text-gray-600 dark:text-gray-400 mt-1">+33 6 29 83 94 71</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">contact@erb-btp.fr</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 mr-3">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h5 className="text-lg font-medium text-gray-900 dark:text-white">Heures d&apos;ouverture</h5>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Lundi - Vendredi: 8h - 18h</p>
            <p className="text-gray-600 dark:text-gray-400">Samedi: 9h - 12h</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Contact direct</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="mr-4">
              <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                <span className="text-xl font-bold text-yellow-600 dark:text-yellow-300">AT</span>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white">Ali TOMBARI</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">ali.tombari@erb-btp.fr</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="mr-4">
              <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                <span className="text-xl font-bold text-yellow-600 dark:text-yellow-300">YE</span>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white">Yasin ELMATIAR</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">yasin.elmatiar@erb-btp.fr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
