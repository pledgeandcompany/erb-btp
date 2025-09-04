'use client';

import React from 'react';
import { ValidationError } from '@/lib/form-validation';

interface MaterialsStepProps {
  selectedMaterials: string[];
  serviceType: string;
  onChange: (materials: string[]) => void;
  errors?: Record<string, ValidationError>;
}

const MaterialsStep: React.FC<MaterialsStepProps> = ({ selectedMaterials, serviceType, onChange, errors = {} }) => {
  // Define material options based on service type
  const getMaterialOptions = () => {
    switch (serviceType) {
      case 'construction':
        return [
          { id: 'standard', name: 'Standard', description: 'Matériaux de base, bon rapport qualité/prix', price: '1x' },
          { id: 'premium', name: 'Premium', description: 'Matériaux de qualité supérieure, durables et esthétiques', price: '1.3x' },
          { id: 'luxury', name: 'Luxe', description: 'Matériaux haut de gamme, finitions exceptionnelles', price: '1.6x' }
        ];
      case 'renovation':
        return [
          { id: 'standard', name: 'Standard', description: 'Matériaux de base, bon rapport qualité/prix', price: '1x' },
          { id: 'premium', name: 'Premium', description: 'Matériaux de qualité supérieure, durables et esthétiques', price: '1.3x' },
          { id: 'luxury', name: 'Luxe', description: 'Matériaux haut de gamme, finitions exceptionnelles', price: '1.6x' }
        ];
      case 'etancheite':
        return [
          { id: 'standard', name: 'Standard', description: 'Membrane bitumineuse classique', price: '1x' },
          { id: 'premium', name: 'Premium', description: 'Membrane EPDM haute résistance', price: '1.3x' },
          { id: 'luxury', name: 'Luxe', description: 'Système d\'étanchéité liquide polyuréthane', price: '1.6x' }
        ];
      case 'isolation':
        return [
          { id: 'standard', name: 'Standard', description: 'Laine de verre ou laine de roche', price: '1x' },
          { id: 'premium', name: 'Premium', description: 'Isolation en fibre de bois ou ouate de cellulose', price: '1.3x' },
          { id: 'luxury', name: 'Luxe', description: 'Isolation polyuréthane haute performance', price: '1.6x' }
        ];
      case 'facades':
        return [
          { id: 'standard', name: 'Standard', description: 'Enduit traditionnel, peinture acrylique', price: '1x' },
          { id: 'premium', name: 'Premium', description: 'Enduit décoratif, peinture siloxane', price: '1.3x' },
          { id: 'luxury', name: 'Luxe', description: 'Parement pierre, bardage bois ou composite', price: '1.6x' }
        ];
      case 'exterieur':
        return [
          { id: 'standard', name: 'Standard', description: 'Dallage béton, gravier, clôture simple', price: '1x' },
          { id: 'premium', name: 'Premium', description: 'Pavés, terrasse bois, clôture composite', price: '1.3x' },
          { id: 'luxury', name: 'Luxe', description: 'Pierre naturelle, bois exotique, aménagement paysager', price: '1.6x' }
        ];
      default:
        return [
          { id: 'standard', name: 'Standard', description: 'Matériaux de base, bon rapport qualité/prix', price: '1x' },
          { id: 'premium', name: 'Premium', description: 'Matériaux de qualité supérieure, durables et esthétiques', price: '1.3x' },
          { id: 'luxury', name: 'Luxe', description: 'Matériaux haut de gamme, finitions exceptionnelles', price: '1.6x' }
        ];
    }
  };

  const materialOptions = getMaterialOptions();

  const handleMaterialSelect = (materialId: string) => {
    // For now, we only allow one material selection
    onChange([materialId]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Choix des matériaux
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Sélectionnez la qualité des matériaux souhaitée pour votre projet.
      </p>

      <div className="space-y-4">
        {materialOptions.map((material) => (
          <div
            key={material.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${selectedMaterials.includes(material.id) 
                ? 'border-[#ff914d] bg-[#fff1e8] dark:bg-[#ff914d]/10' 
                : 'border-gray-200 dark:border-gray-700 hover:border-[#ff914d]/50 dark:hover:border-[#ff914d]/50'}
            `}
            onClick={() => handleMaterialSelect(material.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-4 flex items-center justify-center ${
                  selectedMaterials.includes(material.id)
                    ? 'border-[#ff914d] bg-[#ff914d]'
                    : 'border-gray-300 dark:border-gray-600'
                }`}>
                  {selectedMaterials.includes(material.id) && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {material.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {material.description}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
                  {material.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-md">
        <h3 className="text-sm font-medium text-[#e07e3d] dark:text-[#ff914d] mb-2">
          Impact sur le prix
        </h3>
        <p className="text-sm text-[#e07e3d] dark:text-[#ff914d]/90">
          Le choix des matériaux influence directement le coût final de votre projet. 
          Les matériaux premium et luxe offrent une meilleure durabilité et des finitions plus soignées.
        </p>
      </div>
      {errors.materials && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">{errors.materials.message}</p>
      )}
    </div>
  );
};

export default MaterialsStep;
