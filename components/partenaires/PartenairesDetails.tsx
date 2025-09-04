'use client';

import React from 'react';
import PartnersDisplay from './PartnersDisplay';
import OrganizationListSchema from '../seo/OrganizationListSchema';

const PartenairesDetails: React.FC = () => {
  // Partner data for structured data
  const partners = [
    {
      name: "Qualibat",
      description: "Organisme de qualification et certification des entreprises de construction, garantissant notre expertise et notre savoir-faire",
      url: "https://www.qualibat.com",
      logo: "https://www.erb-btp.com/qualibat.webp",
      category: "legal"
    },
    {
      name: "PLEDGE AND GROW",
      description: "Agence de développement informatique partenaire qui nous accompagne dans la création et l'amélioration de nos solutions digitales.",
      url: "https://pledgeandgrow.com",
      logo: "https://www.erb-btp.com/pledge-logo.png",
      category: "commercial"
    }
  ];

  return (
    <>
      <PartnersDisplay />
      <OrganizationListSchema organizations={partners} />
    </>
  );
};

export default PartenairesDetails;
