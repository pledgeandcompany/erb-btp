'use client';

import React from 'react';

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
  onChange: (field: string, value: string) => void;
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ contactInfo, onChange }) => {
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
