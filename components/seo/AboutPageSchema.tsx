import React from 'react';
import Script from 'next/script';

interface AboutPageSchemaProps {
  businessName?: string;
  description?: string;
  foundingDate?: string;
  founders?: Array<{
    name: string;
    jobTitle?: string;
  }>;
  url?: string;
}

const AboutPageSchema: React.FC<AboutPageSchemaProps> = ({
  businessName = 'ERB-BTP',
  description = 'ERB-BTP est une entreprise de construction et rénovation basée à Montreuil, spécialisée dans les projets résidentiels et commerciaux en Île-de-France.',
  foundingDate = '1995',
  founders = [
    {
      name: 'Eric Bouygues',
      jobTitle: 'Fondateur et Directeur'
    }
  ],
  url = 'https://www.erb-btp.com/about'
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': `À propos de ${businessName}`,
    'url': url,
    'mainEntity': {
      '@type': 'Organization',
      'name': businessName,
      'description': description,
      'foundingDate': foundingDate,
      'founder': founders.map(founder => ({
        '@type': 'Person',
        'name': founder.name,
        ...(founder.jobTitle && { 'jobTitle': founder.jobTitle })
      })),
      'url': 'https://www.erb-btp.com',
      'sameAs': [
        'https://www.facebook.com/erbbtp',
        'https://www.instagram.com/erb_btp'
      ]
    }
  };

  return (
    <Script
      id="about-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default AboutPageSchema;
