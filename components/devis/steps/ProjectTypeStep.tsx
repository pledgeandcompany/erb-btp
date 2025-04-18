'use client';

import React from 'react';
import Image from 'next/image';

interface ProjectTypeStepProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

const ProjectTypeStep: React.FC<ProjectTypeStepProps> = ({ selectedType, onSelect }) => {
  const projectTypes = [
    {
      id: 'residential',
      name: 'Résidentiel',
      description: 'Maisons individuelles, appartements, résidences',
      icon: '/images/icons/residential.svg'
    },
    {
      id: 'commercial',
      name: 'Commercial',
      description: 'Bureaux, commerces, restaurants, hôtels',
      icon: '/images/icons/commercial.svg'
    },
    {
      id: 'industrial',
      name: 'Industriel',
      description: 'Usines, entrepôts, bâtiments techniques',
      icon: '/images/icons/industrial.svg'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Quel type de projet souhaitez-vous réaliser ?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Sélectionnez le type de bâtiment concerné par votre projet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectTypes.map((type) => (
          <div
            key={type.id}
            className={`
              border rounded-lg p-6 cursor-pointer transition-all
              ${selectedType === type.id 
                ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' 
                : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700'}
            `}
            onClick={() => onSelect(type.id)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    className={`w-12 h-12 ${selectedType === type.id ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {type.id === 'residential' && (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                      />
                    )}
                    {type.id === 'commercial' && (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                      />
                    )}
                    {type.id === 'industrial' && (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                      />
                    )}
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {type.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {type.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeStep;
