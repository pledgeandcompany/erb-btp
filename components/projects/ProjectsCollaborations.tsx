'use client';

import React from 'react';
import Image from 'next/image';

interface Collaborator {
  name: string;
  logo: string;
  description?: string;
}

const collaborators: Collaborator[] = [
  {
    name: 'Mairie de Paris',
    logo: '/mairie-paris-logo.png',
    description: 'Projets de rénovation urbaine'
  },
  {
    name: 'RIVP',
    logo: '/rivp.webp',
    description: 'Réhabilitation de logements sociaux'
  },
  {
    name: 'Paris Habitat',
    logo: '/paris-habitat.png',
    description: 'Travaux d\'étanchéité et toiture'
  },
  {
    name: 'Bouygues Construction',
    logo: '/bouyguesc-logo.png',
    description: 'Sous-traitance sur grands projets'
  },
  {
    name: 'Eiffage',
    logo: '/logo-eiffage.png',
    description: 'Partenariat sur projets d\'infrastructure'
  },
  {
    name: 'Vinci',
    logo: '/vinci-logo.png',
    description: 'Collaboration sur projets commerciaux'
  }
];

const ProjectsCollaborations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nos Collaborations</h2>
          <p className="text-gray-600 dark:text-gray-300">
            ERB-BTP est fier de collaborer avec des entreprises et institutions de premier plan.
            Découvrez nos principaux clients et partenaires.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="relative h-16 w-full mb-3">
                <Image
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-center text-gray-900 dark:text-white">
                {collaborator.name}
              </h3>
              {collaborator.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                  {collaborator.description}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Nous travaillons également avec de nombreuses copropriétés, syndics et particuliers sur des projets de toutes tailles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCollaborations;
