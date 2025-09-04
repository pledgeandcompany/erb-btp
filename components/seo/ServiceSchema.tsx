import React from 'react';
import Script from 'next/script';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: {
    name: string;
    url: string;
  };
  serviceType?: string;
  areaServed?: string | string[];
  image?: string;
  url?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  provider = {
    name: 'ERB-BTP',
    url: 'https://www.erb-btp.com'
  },
  serviceType = 'Construction Service',
  areaServed = ['Paris', 'Île-de-France'],
  image = 'https://www.erb-btp.com/images/service-default.jpg',
  url
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url
    },
    serviceType,
    areaServed: Array.isArray(areaServed) 
      ? areaServed.map(_areaItem => ({
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 48.8566,
            longitude: 2.3522
          },
          geoRadius: '50000'
        }))
      : {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 48.8566,
            longitude: 2.3522
          },
          geoRadius: '50000'
        },
    image,
    url: url || `${provider.url}/services/${name.toLowerCase().replace(/\s+/g, '-')}`
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default ServiceSchema;
