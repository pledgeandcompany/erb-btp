'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 mb-4 hover:bg-white dark:hover:bg-gray-600">
      <button
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">{question}</h3>
        <span className="ml-4 bg-gray-100 dark:bg-gray-700 rounded-full p-1 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900 transition-colors duration-300">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300" />
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 pt-3 border-t border-gray-100 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      </div>
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
