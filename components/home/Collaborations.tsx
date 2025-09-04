'use client';

import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import CollaboratorLogo from '@/components/ui/CollaboratorLogo';

interface Collaborator {
  name: string;
  logo: string;
}

const collaborators: Collaborator[] = [
  {
    name: 'Mairie de Paris',
    logo: '/mairie-paris-logo.png'
  },
  {
    name: 'RIVP',
    logo: '/rivp.webp'
  },
  {
    name: 'Paris Habitat',
    logo: '/paris-habitat.png'
  },
  {
    name: 'Bouygues Construction',
    logo: '/bouyguesc-logo.png'
  },
  {
    name: 'Eiffage',
    logo: '/logo-eiffage.png'
  },
  {
    name: 'Vinci',
    logo: '/vinci-logo.png'
  }
];

const Collaborations: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ils nous font confiance"
          subtitle="ERB-BTP collabore avec des entreprises et institutions de premier plan"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center max-w-6xl mx-auto">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center h-24 border border-gray-100 dark:border-gray-700 group">
              <div className="h-16 w-full flex items-center justify-center">
                <CollaboratorLogo 
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic max-w-2xl mx-auto">
            ERB-BTP est fier de collaborer avec ces partenaires de confiance pour offrir des services de construction et rénovation de la plus haute qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
