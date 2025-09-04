import React from 'react';
import Script from 'next/script';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  url?: string;
  logo?: string;
  image?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  priceRange?: string;
  sameAs?: string[];
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = 'ERB-BTP',
  description = 'Entreprise de construction et rénovation spécialisée en maçonnerie, étanchéité, isolation et ravalement. Plus de 20 ans d\'expertise en Île-de-France.',
  telephone = '+33123456789',
  email = 'contact@erb-btp.com',
  url = 'https://www.erb-btp.com',
  logo = 'https://www.erb-btp.com/logo-main.png',
  image = 'https://www.erb-btp.com/images/building-exterior.jpg',
  address = {
    streetAddress: '123 Avenue de Paris',
    addressLocality: 'Paris',
    postalCode: '75001',
    addressCountry: 'FR'
  },
  geo = {
    latitude: 48.8566,
    longitude: 2.3522
  },
  openingHours = [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  priceRange = '€€',
  sameAs = [
    'https://www.facebook.com/erbbtp',
    'https://www.linkedin.com/company/erb-btp'
  ]
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name,
    description,
    telephone,
    email,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo
    },
    image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes
    })),
    priceRange,
    sameAs
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default LocalBusinessSchema;
