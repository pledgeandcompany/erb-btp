'use client';

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ali Tombari',
    role: 'Chargé d\'affaire',
    image: '/images/team-1.jpg',
    bio: 'Avec plus de 20 ans d\'expérience dans le secteur de la construction, Ali dirige ERB-BTP avec passion et expertise. Il supervise personnellement chaque projet pour garantir la satisfaction des clients.'
  },
  {
    name: 'Sophie Martin',
    role: 'Directrice Technique',
    image: '/images/team-2.jpg',
    bio: 'Ingénieure de formation, Sophie apporte son expertise technique à tous nos projets. Elle veille à ce que chaque réalisation respecte les normes les plus strictes en matière de qualité et de sécurité.'
  },
  {
    name: 'Marc Dubois',
    role: 'Chef de Chantier',
    image: '/images/team-3.jpg',
    bio: 'Fort de ses 15 années d\'expérience sur le terrain, Marc coordonne nos équipes de chantier avec efficacité. Son sens de l\'organisation garantit le respect des délais et des budgets.'
  },
  {
    name: 'Nadia Benali',
    role: 'Responsable Administrative',
    image: '/images/team-4.jpg',
    bio: 'Nadia gère l\'administration et les finances d\'ERB-BTP. Sa rigueur et son professionnalisme assurent le bon fonctionnement quotidien de l\'entreprise.'
  }
];

const AboutTeam: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Notre Équipe</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Rencontrez les professionnels passionnés qui font d'ERB-BTP une entreprise d'excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-yellow-600 dark:text-yellow-400 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Rejoignez Notre Équipe</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe. 
            Si vous êtes motivé, rigoureux et que vous partagez nos valeurs, n'hésitez pas à nous contacter.
          </p>
          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
            >
              Postuler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
