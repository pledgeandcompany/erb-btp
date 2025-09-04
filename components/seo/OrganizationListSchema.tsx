import React from 'react';
import Script from 'next/script';

interface Organization {
  name: string;
  url?: string;
  logo?: string;
  description?: string;
  category?: string;
}

interface OrganizationListSchemaProps {
  organizations: Organization[];
  mainEntityName?: string;
}

const OrganizationListSchema: React.FC<OrganizationListSchemaProps> = ({
  organizations
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': organizations.map((org, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Organization',
        'name': org.name,
        'description': org.description || '',
        ...(org.url && { 'url': org.url }),
        ...(org.logo && { 
          'logo': {
            '@type': 'ImageObject',
            'url': org.logo
          }
        }),
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://www.erb-btp.com/partenaires#${org.name.toLowerCase().replace(/\s+/g, '-')}`
        }
      }
    }))
  };

  return (
    <Script
      id="organization-list-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default OrganizationListSchema;
