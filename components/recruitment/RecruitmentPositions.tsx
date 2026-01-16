'use client'

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';

const RecruitmentPositions: React.FC = () => {
  const positions = [
    {
      title: "Commercial",
      department: "Ventes",
      location: "Région Parisienne",
      type: "CDI",
      experience: "2+ ans",
      description: "Développement du portefeuille clients et prospection commerciale dans le secteur BTP.",
      requirements: [
        "Expérience commerciale en BTP souhaitée",
        "Excellentes capacités de communication",
        "Permis B indispensable",
        "Autonomie et sens du résultat"
      ]
    }
  ];

  return (
    <section id="postes" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos <span className="text-[#ff914d]">Postes à Pourvoir</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Rejoignez notre équipe et participez à des projets passionnants
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {positions.map((position, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {position.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-[#ff914d] text-white text-sm rounded-full">
                        {position.department}
                      </span>
                    </div>
                    <Briefcase className="h-6 w-6 text-[#ff914d] flex-shrink-0" />
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-[#ff914d]" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2 text-[#ff914d]" />
                      {position.type} • {position.experience} d'expérience
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Compétences requises :
                    </h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-[#ff914d] mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button href={`/contact?job=${position.title}`} className="w-full" size="sm">
                    Postuler
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Vous ne trouvez pas votre profil ? Nous sommes toujours à la recherche de talents !
          </p>
          <Button href="/contact" variant="outline" size="lg">
            Candidature
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentPositions;
