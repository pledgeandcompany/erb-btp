'use client';

import React from 'react';
import { ValidationError } from '@/lib/form-validation';

interface ContactInfoStepProps {
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    city: string;
  };
  onChange: (field: 'firstName' | 'lastName' | 'email' | 'phone' | 'address' | 'postalCode' | 'city', value: string) => void;
  errors?: Record<string, ValidationError>;
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ contactInfo, onChange, errors = {} }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Vos coordonnées
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Veuillez fournir vos informations de contact pour que nous puissions vous envoyer votre devis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            value={contactInfo.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            required
            className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            value={contactInfo.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            required
            className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={contactInfo.email}
            onChange={(e) => onChange('email', e.target.value)}
            required
            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            value={contactInfo.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            required
            className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            value={contactInfo.address}
            onChange={(e) => onChange('address', e.target.value)}
            className={`w-full px-4 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Code Postal
          </label>
          <input
            type="text"
            id="postalCode"
            value={contactInfo.postalCode}
            onChange={(e) => onChange('postalCode', e.target.value)}
            className={`w-full px-4 py-2 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.postalCode && (
            <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ville
          </label>
          <input
            type="text"
            id="city"
            value={contactInfo.city}
            onChange={(e) => onChange('city', e.target.value)}
            className={`w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md focus:ring-[#ff914d] focus:border-[#ff914d] bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="mt-8 bg-[#fff1e8] dark:bg-[#ff914d]/10 p-4 rounded-md">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-[#ff914d] dark:text-[#ff914d]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Vos données personnelles sont utilisées uniquement pour vous contacter au sujet de votre devis. 
              Elles ne seront jamais partagées avec des tiers. Les champs marqués d&#39;un * sont obligatoires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;
