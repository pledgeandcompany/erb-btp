'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import ProjectTypeStep from './steps/ProjectTypeStep';
import ServiceTypeStep from './steps/ServiceTypeStep';
import ProjectDetailsStep from './steps/ProjectDetailsStep';
import SurfaceStep from './steps/SurfaceStep';
import MaterialsStep from './steps/MaterialsStep';
import ContactInfoStep from './steps/ContactInfoStep';
import QuoteSummary from './QuoteSummary';

// Define the steps of the form
const STEPS = {
  PROJECT_TYPE: 0,
  SERVICE_TYPE: 1,
  PROJECT_DETAILS: 2,
  SURFACE: 3,
  MATERIALS: 4,
  CONTACT_INFO: 5,
  SUMMARY: 6
};

// Initial form data
const initialFormData = {
  projectType: '',
  serviceType: '',
  projectDetails: {
    location: '',
    timeframe: '',
    budget: '',
    description: ''
  },
  surface: {
    area: 0,
    unit: 'm²'
  },
  materials: [],
  contactInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: ''
  }
};

// Base pricing for different services (per m²)
const BASE_PRICING = {
  construction: 1500, // €/m²
  renovation: 800,    // €/m²
  etancheite: 120,    // €/m²
  isolation: 80,      // €/m²
  facades: 90,        // €/m²
  exterieur: 150      // €/m²
};

// Material price multipliers
const MATERIAL_MULTIPLIERS = {
  'standard': 1.0,
  'premium': 1.3,
  'luxury': 1.6
};

const DevisForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.PROJECT_TYPE);
  const [formData, setFormData] = useState(initialFormData);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Calculate estimated price whenever relevant form data changes
  useEffect(() => {
    if (formData.serviceType && formData.surface.area > 0) {
      const basePrice = BASE_PRICING[formData.serviceType as keyof typeof BASE_PRICING] || 0;
      let materialMultiplier = 1.0;
      
      // Apply material multiplier if selected
      if (formData.materials.length > 0) {
        const selectedMaterial = formData.materials[0];
        materialMultiplier = MATERIAL_MULTIPLIERS[selectedMaterial as keyof typeof MATERIAL_MULTIPLIERS] || 1.0;
      }
      
      // Calculate total price
      const total = basePrice * formData.surface.area * materialMultiplier;
      setEstimatedPrice(Math.round(total));
    }
  }, [formData.serviceType, formData.surface.area, formData.materials]);

  // Handle form data updates
  const updateFormData = (field: string, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle nested form data updates
  const updateNestedFormData = (parent: string, field: string, value: unknown) => {
    setFormData(prev => {
      const parentValue = prev[parent as keyof typeof prev];
      const isObject = parentValue && typeof parentValue === 'object' && !Array.isArray(parentValue);
      return {
        ...prev,
        [parent]: {
          ...(isObject ? parentValue : {}),
          [field]: value,
        }
      };
    });
  };

  // Navigate to next step
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, STEPS.SUMMARY));
  };

  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, STEPS.PROJECT_TYPE));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // In a real application, you would send the form data to your backend here
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
    } catch {
      setSubmitError('Une erreur est survenue lors de l&#39;envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form to start over
  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(STEPS.PROJECT_TYPE);
    setSubmitSuccess(false);
    setSubmitError('');
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case STEPS.PROJECT_TYPE:
        return (
          <ProjectTypeStep 
            selectedType={formData.projectType} 
            onSelect={(value) => updateFormData('projectType', value)} 
          />
        );
      case STEPS.SERVICE_TYPE:
        return (
          <ServiceTypeStep 
            selectedType={formData.serviceType} 
            projectType={formData.projectType}
            onSelect={(value) => updateFormData('serviceType', value)} 
          />
        );
      case STEPS.PROJECT_DETAILS:
        return (
          <ProjectDetailsStep 
            details={formData.projectDetails} 
            onChange={(field, value) => updateNestedFormData('projectDetails', field, value)} 
          />
        );
      case STEPS.SURFACE:
        return (
          <SurfaceStep 
            surface={formData.surface} 
            onChange={(field, value) => updateNestedFormData('surface', field, value)} 
          />
        );
      case STEPS.MATERIALS:
        return (
          <MaterialsStep 
            selectedMaterials={formData.materials} 
            serviceType={formData.serviceType}
            onChange={(value) => updateFormData('materials', value)} 
          />
        );
      case STEPS.CONTACT_INFO:
        return (
          <ContactInfoStep 
            contactInfo={formData.contactInfo} 
            onChange={(field, value) => updateNestedFormData('contactInfo', field, value)} 
          />
        );
      case STEPS.SUMMARY:
        return (
          <QuoteSummary 
            formData={formData} 
            estimatedPrice={estimatedPrice} 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        );
      default:
        return null;
    }
  };

  // If submission was successful, show thank you message
  if (submitSuccess) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Demande envoyée avec succès !</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Merci pour votre demande de devis. Notre équipe va étudier votre projet et vous contactera dans les plus brefs délais.
            Un email de confirmation a été envoyé à {formData.contactInfo.email}.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Référence de votre demande: <span className="font-medium">DEV-{Date.now().toString().slice(-6)}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="outline">
              Retour à l&#39;accueil
            </Button>
            <Button onClick={resetForm}>
              Nouvelle demande
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Progress indicator
  const progress = Math.round((currentStep / STEPS.SUMMARY) * 100);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-0">
      {/* Progress bar */}
      <div className="mb-0">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-yellow-500 transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Type de projet</span>
          <span>Détails</span>
          <span>Devis</span>
        </div>
      </div>

      {/* Step content */}
      <div className="mb-8 min-h-[300px]">
        {renderStep()}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <Button 
          onClick={prevStep} 
          variant="outline"
          disabled={currentStep === STEPS.PROJECT_TYPE}
          className={currentStep === STEPS.PROJECT_TYPE ? 'opacity-0' : ''}
        >
          Précédent
        </Button>
        
        {currentStep < STEPS.SUMMARY ? (
          <Button 
            onClick={nextStep} 
            disabled={
              (currentStep === STEPS.PROJECT_TYPE && !formData.projectType) ||
              (currentStep === STEPS.SERVICE_TYPE && !formData.serviceType) ||
              (currentStep === STEPS.SURFACE && formData.surface.area <= 0)
            }
          >
            Suivant
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default DevisForm;
