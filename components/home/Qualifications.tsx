'use client';

import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface Qualification {
  code: string;
  description: string;
  dateAttribution: string;
}

const Qualifications: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const qualifications: Qualification[] = [
    {
      code: '2142',
      description: 'Réparation en maçonnerie et en béton armé',
      dateAttribution: '12/10/2022'
    },
    {
      code: '3211',
      description: 'Étanchéité en matériaux bitumineux en feuilles (Technicité courante)',
      dateAttribution: '26/10/2022'
    },
    {
      code: '3241',
      description: 'Étanchéité liquide (s.e.l.) (Technicité courante)',
      dateAttribution: '05/09/2022'
    },
    {
      code: '3412',
      description: 'Calfeutrement de joints de construction (Technicité confirmée)',
      dateAttribution: '28/11/2022'
    },
    {
      code: '3423',
      description: 'Imperméabilité des façades (Technicité supérieure)',
      dateAttribution: '19/01/2023'
    },
    {
      code: '6121',
      description: 'Ravalement en peinture',
      dateAttribution: '21/02/2023'
    },
    {
      code: '7131',
      description: 'Isolation thermique par l&#39;extérieur (Technicité courante)',
      dateAttribution: '08/02/2023'
    }
  ];

  // Helper function to render mobile qualification card
  const renderMobileQualificationCard = (qualification: Qualification, index: number) => {
    // Extract technicité level from description if it exists
    const technicityMatch = qualification.description.match(/\(Technicité (.+?)\)/);
    const technicityLevel = technicityMatch ? technicityMatch[1] : null;
    
    return (
      <div 
        key={index}
        className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mb-4 border-l-4 border-[#ff914d] transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
      >
        <div className="flex justify-between items-start mb-2">
          <span className="bg-[#fff1e8] dark:bg-[#5e3520] text-[#ff914d] dark:text-[#ff914d] text-xs font-medium px-2.5 py-0.5 rounded">
            {qualification.code}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {qualification.dateAttribution}
          </span>
        </div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
          {qualification.description.replace(/\(Technicité .+?\)/, '')}
        </h3>
        {technicityLevel && (
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#fff1e8] dark:bg-[#5e3520] text-[#ff914d] dark:text-[#ff914d]">
              Technicité {technicityLevel}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Nos Qualifications Professionnelles</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ERB-BTP est certifié par les organismes les plus reconnus du secteur, garantissant qualité et conformité pour tous vos projets.
          </p>
        </div>
        
        {/* Mobile view: cards */}
        {isMobile ? (
          <div className="space-y-4">
            {qualifications.map((qualification, index) => 
              renderMobileQualificationCard(qualification, index)
            )}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center text-sm text-gray-700 dark:text-gray-300">
              Nombre total de qualifications: {qualifications.length}
            </div>
          </div>
        ) : (
          /* Desktop view: table (unchanged) */
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto border border-gray-200 dark:border-gray-600">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead className="bg-[#ff914d] text-white dark:bg-[#ff914d]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Qualification(s) en cours de validité
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Date d&#39;attribution
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                  {qualifications.map((qualification, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800 hover:bg-[#fff1e8] dark:hover:bg-[#5e3520]/30 transition-colors duration-200' : 'bg-white dark:bg-gray-700 hover:bg-[#fff1e8] dark:hover:bg-[#5e3520]/30 transition-colors duration-200'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-white">
                        {qualification.code}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {qualification.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {qualification.dateAttribution}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-[#fff1e8] dark:bg-[#5e3520]">
                  <tr>
                    <td colSpan={3} className="px-6 py-3 text-sm text-gray-700 dark:text-gray-300">
                      Nombre total de qualifications: {qualifications.length}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualifications;
