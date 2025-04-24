'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

interface Collaborator {
  name: string;
  logo: string;
}

const collaborators: Collaborator[] = [
  {
    name: 'Mairie de Paris',
    logo: '/images/collaborators/mairie-paris.png'
  },
  {
    name: 'RIVP',
    logo: '/images/collaborators/rivp.png'
  },
  {
    name: 'Paris Habitat',
    logo: '/images/collaborators/paris-habitat.png'
  },
  {
    name: 'Bouygues Construction',
    logo: '/images/collaborators/bouygues.png'
  },
  {
    name: 'Eiffage',
    logo: '/images/collaborators/eiffage.png'
  },
  {
    name: 'Vinci',
    logo: '/images/collaborators/vinci.png'
  }
];

const Collaborations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ils nous font confiance"
          subtitle="ERB-BTP collabore avec des entreprises et institutions de premier plan"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-24">
              <div className="relative h-16 w-full">
                <Image
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/projects" 
            className="text-yellow-600 dark:text-yellow-400 hover:underline font-medium"
          >
            Découvrir nos projets et collaborations →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
