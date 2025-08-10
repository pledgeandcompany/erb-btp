'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-600">
      <button
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{question}</h3>
        <span className="ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </span>
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function ContactFAQ() {
  return (
    <div className="space-y-4">
      <FaqItem 
        question="Comment demander un devis ?" 
        answer="Vous pouvez demander un devis en remplissant notre formulaire de contact, en nous appelant directement ou en nous envoyant un email. Nous vous répondrons dans les 24-48 heures ouvrables."
      />
      
      <FaqItem 
        question="Quelles zones géographiques couvrez-vous ?" 
        answer="Nous intervenons principalement à Paris et en Île-de-France. N'hésitez pas à nous contacter pour vérifier si nous pouvons intervenir dans votre région."
      />
      
      <FaqItem 
        question="Quels types de projets prenez-vous en charge ?" 
        answer="Nous prenons en charge tous types de projets de construction et rénovation, qu'il s'agisse de travaux résidentiels, commerciaux ou industriels. Consultez notre page Services pour plus de détails."
      />
      
      <FaqItem 
        question="Quelles sont vos garanties ?" 
        answer="Tous nos travaux sont garantis conformément à la législation en vigueur. Nous offrons une garantie décennale pour les gros œuvres et une garantie biennale pour les éléments d'équipement."
      />
    </div>
  );
}
