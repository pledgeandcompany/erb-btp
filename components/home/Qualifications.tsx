'use client';

import React from 'react';

interface Qualification {
  code: string;
  description: string;
  dateAttribution: string;
}

const Qualifications: React.FC = () => {
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

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Nos Qualifications Professionnelles</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ERB-BTP est certifié par les organismes les plus reconnus du secteur, garantissant qualité et conformité pour tous vos projets.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
              <thead className="bg-gray-800 text-white dark:bg-gray-900">
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
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}>
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
              <tfoot className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <td colSpan={3} className="px-6 py-3 text-sm text-gray-700 dark:text-gray-300">
                    Nombre total de qualifications: {qualifications.length}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
