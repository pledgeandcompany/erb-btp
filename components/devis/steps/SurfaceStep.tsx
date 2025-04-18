'use client';

import React, { useState } from 'react';

interface SurfaceStepProps {
  surface: {
    area: number;
    unit: string;
  };
  onChange: (field: string, value: any) => void;
}

const SurfaceStep: React.FC<SurfaceStepProps> = ({ surface, onChange }) => {
  const [error, setError] = useState('');

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseFloat(value);
    
    if (value === '') {
      onChange('area', 0);
      setError('');
    } else if (isNaN(numValue)) {
      setError('Veuillez entrer un nombre valide');
    } else if (numValue <= 0) {
      setError('La surface doit être supérieure à 0');
    } else if (numValue > 10000) {
      setError('Pour les surfaces supérieures à 10 000 m², veuillez nous contacter directement');
    } else {
      onChange('area', numValue);
      setError('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Surface du projet
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Indiquez la surface approximative concernée par votre projet.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Surface en m²
          </label>
          <div className="flex">
            <input
              type="number"
              id="area"
              value={surface.area || ''}
              onChange={handleAreaChange}
              placeholder="Ex: 120"
              min="1"
              max="10000"
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <span className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-r-md">
              m²
            </span>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-2">
            Pourquoi avons-nous besoin de cette information ?
          </h3>
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            La surface est un élément essentiel pour estimer le coût de votre projet. 
            Plus la surface est précise, plus notre estimation sera fiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Petite surface</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Moins de 50 m²</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Surface moyenne</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Entre 50 et 150 m²</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Grande surface</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Plus de 150 m²</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurfaceStep;
