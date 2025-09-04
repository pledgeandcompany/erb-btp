import React from 'react';
import Script from 'next/script';

interface EnvironmentPageSchemaProps {
  businessName?: string;
  description?: string;
  initiatives?: Array<{
    name: string;
    description: string;
  }>;
  url?: string;
}

const EnvironmentPageSchema: React.FC<EnvironmentPageSchemaProps> = ({
  businessName = 'ERB-BTP',
  description = 'Découvrez notre engagement environnemental et notre charte Chantier Vert pour des constructions responsables et durables.',
  initiatives = [
    {
      name: 'Charte Chantier Vert',
      description: 'Notre engagement à réduire l\'impact environnemental de nos chantiers'
    },
    {
      name: 'Matériaux écologiques',
      description: 'Utilisation de matériaux durables et respectueux de l\'environnement'
    },
    {
      name: 'Gestion des déchets',
      description: 'Tri sélectif et valorisation des déchets de chantier'
    }
  ],
  url = 'https://www.erb-btp.com/environnement'
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': `Engagement Environnemental | ${businessName}`,
    'description': description,
    'url': url,
    'mainEntity': {
      '@type': 'Article',
      'headline': `Engagement Environnemental de ${businessName}`,
      'description': description,
      'publisher': {
        '@type': 'Organization',
        'name': businessName,
        'url': 'https://www.erb-btp.com'
      },
      'mainEntityOfPage': url,
      'about': {
        '@type': 'Thing',
        'name': 'Développement durable dans la construction',
        'description': 'Pratiques de construction respectueuses de l\'environnement'
      },
      'mentions': initiatives.map(initiative => ({
        '@type': 'Thing',
        'name': initiative.name,
        'description': initiative.description
      }))
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.speakable']
    }
  };

  return (
    <Script
      id="environment-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default EnvironmentPageSchema;
