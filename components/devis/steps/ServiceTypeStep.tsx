'use client';

import React from 'react';
import { ValidationError } from '@/lib/form-validation';

interface ServiceTypeStepProps {
  selectedType: string;
  projectType: string;
  onSelect: (type: string) => void;
  errors?: Record<string, ValidationError>;
}

const ServiceTypeStep: React.FC<ServiceTypeStepProps> = ({ selectedType, projectType, onSelect, errors = {} }) => {
  const serviceTypes = [
    {
      id: 'construction',
      name: 'Construction Neuve',
      description: 'Construction complète d\'un nouveau bâtiment',
      icon: 'M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
    },
    {
      id: 'renovation',
      name: 'Rénovation',
      description: 'Rénovation partielle ou complète d\'un bâtiment existant',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      id: 'etancheite',
      name: 'Étanchéité',
      description: 'Travaux d\'étanchéité pour toitures, terrasses, fondations',
      icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
    },
    {
      id: 'isolation',
      name: 'Isolation Thermique',
      description: 'Isolation des murs, toitures, combles, planchers',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
    },
    {
      id: 'facades',
      name: 'Ravalement de Façades',
      description: 'Nettoyage, réparation et embellissement des façades',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      id: 'exterieur',
      name: 'Aménagement Extérieur',
      description: 'Terrasses, allées, clôtures, espaces verts',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Quel type de service vous intéresse ?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Sélectionnez le service qui correspond le mieux à votre projet {projectType && `${projectType}`}.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceTypes.map((service) => (
          <div
            key={service.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${selectedType === service.id 
                ? 'border-[#ff914d] bg-[#fff1e8] dark:bg-[#ff914d]/10' 
                : 'border-gray-200 dark:border-gray-700 hover:border-[#ff914d]/50 dark:hover:border-[#ff914d]/50'}
            `}
            onClick={() => onSelect(service.id)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedType === service.id 
                    ? 'bg-[#fff1e8] dark:bg-[#ff914d]/20 text-[#ff914d]' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {errors.serviceType && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">{errors.serviceType.message}</p>
      )}
    </div>
  );
};

export default ServiceTypeStep;
