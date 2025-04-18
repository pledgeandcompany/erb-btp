'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface QuoteSummaryProps {
  formData: {
    projectType: string;
    serviceType: string;
    projectDetails: {
      location: string;
      timeframe: string;
      budget: string;
      description: string;
    };
    surface: {
      area: number;
      unit: string;
    };
    materials: string[];
    contactInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      postalCode: string;
      city: string;
    };
  };
  estimatedPrice: number;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string;
}

const QuoteSummary: React.FC<QuoteSummaryProps> = ({ 
  formData, 
  estimatedPrice, 
  onSubmit, 
  isSubmitting, 
  submitSuccess, 
  submitError 
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Helper function to get readable names
  const getReadableName = (key: string, type: string) => {
    const mappings: Record<string, Record<string, string>> = {
      projectType: {
        residential: 'Résidentiel',
        commercial: 'Commercial',
        industrial: 'Industriel'
      },
      serviceType: {
        construction: 'Construction Neuve',
        renovation: 'Rénovation',
        etancheite: 'Étanchéité',
        isolation: 'Isolation Thermique',
        facades: 'Ravalement de Façades',
        exterieur: 'Aménagement Extérieur'
      },
      timeframe: {
        urgent: 'Urgent (< 1 mois)',
        soon: 'Prochainement (1-3 mois)',
        planning: 'En planification (3-6 mois)',
        future: 'Projet futur (> 6 mois)'
      },
      budget: {
        'under-10k': 'Moins de 10 000 €',
        '10k-50k': '10 000 € - 50 000 €',
        '50k-100k': '50 000 € - 100 000 €',
        '100k-250k': '100 000 € - 250 000 €',
        'over-250k': 'Plus de 250 000 €',
        'not-defined': 'Budget non défini'
      },
      materials: {
        standard: 'Standard',
        premium: 'Premium',
        luxury: 'Luxe'
      }
    };

    return mappings[type]?.[key] || key;
  };

  // Format price with thousand separators
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // Calculate price range (±15%)
  const minPrice = Math.round(estimatedPrice * 0.85);
  const maxPrice = Math.round(estimatedPrice * 1.15);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Récapitulatif de votre demande
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Veuillez vérifier les informations ci-dessous avant de soumettre votre demande de devis.
      </p>

      {/* Quote estimation */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-4">
          Estimation de prix
        </h3>
        <div className="text-center">
          <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-2">
            Basé sur les informations fournies, le coût estimé de votre projet est de :
          </p>
          <div className="text-3xl font-bold text-yellow-900 dark:text-yellow-200 mb-2">
            {formatPrice(minPrice)} € - {formatPrice(maxPrice)} €
          </div>
          <p className="text-xs text-yellow-700 dark:text-yellow-400 mb-4">
            Cette estimation est donnée à titre indicatif et pourra être affinée lors de l'étude détaillée de votre projet.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-3 rounded-md">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Note :</span> Cette estimation est basée sur une surface de {formData.surface.area} m² 
            et des matériaux de qualité {formData.materials.length > 0 ? getReadableName(formData.materials[0], 'materials') : 'standard'}.
            Le prix final dépendra d'une étude approfondie de votre projet et pourra varier en fonction de contraintes spécifiques.
          </p>
        </div>
      </div>

      {/* Project summary */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Détails du projet
          </h3>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Type de projet</p>
              <p className="text-gray-900 dark:text-white">{getReadableName(formData.projectType, 'projectType')}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Type de service</p>
              <p className="text-gray-900 dark:text-white">{getReadableName(formData.serviceType, 'serviceType')}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Surface</p>
              <p className="text-gray-900 dark:text-white">{formData.surface.area} m²</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Matériaux</p>
              <p className="text-gray-900 dark:text-white">
                {formData.materials.length > 0 
                  ? getReadableName(formData.materials[0], 'materials') 
                  : 'Non spécifié'}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Localisation</p>
              <p className="text-gray-900 dark:text-white">{formData.projectDetails.location || 'Non spécifié'}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Délai souhaité</p>
              <p className="text-gray-900 dark:text-white">
                {formData.projectDetails.timeframe 
                  ? getReadableName(formData.projectDetails.timeframe, 'timeframe') 
                  : 'Non spécifié'}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Budget</p>
              <p className="text-gray-900 dark:text-white">
                {formData.projectDetails.budget 
                  ? getReadableName(formData.projectDetails.budget, 'budget') 
                  : 'Non spécifié'}
              </p>
            </div>
          </div>
          
          {formData.projectDetails.description && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</p>
              <p className="text-gray-900 dark:text-white whitespace-pre-line">
                {formData.projectDetails.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contact information */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Coordonnées
          </h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Nom complet</p>
              <p className="text-gray-900 dark:text-white">
                {formData.contactInfo.firstName} {formData.contactInfo.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-gray-900 dark:text-white">{formData.contactInfo.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Téléphone</p>
              <p className="text-gray-900 dark:text-white">{formData.contactInfo.phone}</p>
            </div>
            {formData.contactInfo.address && (
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Adresse</p>
                <p className="text-gray-900 dark:text-white">
                  {formData.contactInfo.address}
                  {formData.contactInfo.postalCode && formData.contactInfo.city && (
                    <>, {formData.contactInfo.postalCode} {formData.contactInfo.city}</>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Terms and conditions */}
      <div className="mb-8">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="w-4 h-4 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:ring-yellow-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-600 dark:text-gray-300">
              J'accepte que mes données soient utilisées pour me contacter au sujet de ma demande de devis. 
              J'ai lu et j'accepte les <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline">conditions générales</a> et la <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:underline">politique de confidentialité</a>.
            </label>
          </div>
        </div>
      </div>

      {/* Error message */}
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-md">
          <p>{submitError}</p>
        </div>
      )}

      {/* Submit button */}
      <div className="text-center">
        <Button
          onClick={onSubmit}
          disabled={!termsAccepted || isSubmitting}
          className="px-8 py-3"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            'Envoyer ma demande de devis'
          )}
        </Button>
      </div>
    </div>
  );
};

export default QuoteSummary;
