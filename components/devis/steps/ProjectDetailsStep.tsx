'use client';

import React from 'react';
import { ValidationError } from '@/lib/form-validation';

interface ProjectDetailsStepProps {
  details: {
    location: string;
    timeframe: string;
    budget: string;
    description: string;
  };
  onChange: (field: 'location' | 'timeframe' | 'budget' | 'description', value: string) => void;
  errors?: Record<string, ValidationError>;
}

const ProjectDetailsStep: React.FC<ProjectDetailsStepProps> = ({ details, onChange, errors = {} }) => {
  const timeframeOptions = [
    { value: 'urgent', label: 'Urgent (< 1 mois)' },
    { value: 'soon', label: 'Prochainement (1-3 mois)' },
    { value: 'planning', label: 'En planification (3-6 mois)' },
    { value: 'future', label: 'Projet futur (> 6 mois)' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Moins de 10 000 €' },
    { value: '10k-50k', label: '10 000 € - 50 000 €' },
    { value: '50k-100k', label: '50 000 € - 100 000 €' },
    { value: '100k-250k', label: '100 000 € - 250 000 €' },
    { value: 'over-250k', label: 'Plus de 250 000 €' },
    { value: 'not-defined', label: 'Budget non défini' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Détails du projet
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Fournissez-nous quelques informations supplémentaires sur votre projet.
      </p>

      <div className="space-y-6">
        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Localisation du projet
          </label>
          <input
            type="text"
            id="location"
            value={details.location}
            onChange={(e) => onChange('location', e.target.value)}
            placeholder="Ville, code postal ou adresse"
            className={`w-full px-4 py-2 border ${errors.location ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.location && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.location.message}</p>
          )}
        </div>

        {/* Timeframe */}
        <div>
          <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Délai de réalisation souhaité
          </label>
          <select
            id="timeframe"
            value={details.timeframe}
            onChange={(e) => onChange('timeframe', e.target.value)}
            className={`w-full px-4 py-2 border ${errors.timeframe ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          >
            <option value="">Sélectionnez un délai</option>
            {timeframeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Budget estimé
          </label>
          <select
            id="budget"
            value={details.budget}
            onChange={(e) => onChange('budget', e.target.value)}
            className={`w-full px-4 py-2 border ${errors.budget ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          >
            <option value="">Sélectionnez un budget</option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description du projet
          </label>
          <textarea
            id="description"
            value={details.description}
            onChange={(e) => onChange('description', e.target.value)}
            rows={4}
            placeholder="Décrivez votre projet en quelques mots (besoins spécifiques, contraintes, etc.)"
            className={`w-full px-4 py-2 border ${errors.description ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.description && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsStep;
