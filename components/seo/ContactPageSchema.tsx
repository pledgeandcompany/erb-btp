import React from 'react';
import Script from 'next/script';

interface ContactPageSchemaProps {
  businessName?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours?: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  url?: string;
}

const ContactPageSchema: React.FC<ContactPageSchemaProps> = ({
  businessName = 'ERB-BTP',
  telephone = '+33 6 29 83 94 71',
  email = 'contact@erb-btp.com',
  address = {
    streetAddress: '86 Rue Voltaire',
    addressLocality: 'Montreuil',
    postalCode: '93100',
    addressCountry: 'FR'
  },
  openingHours = [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  url = 'https://www.erb-btp.com/contact'
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': `Contact ${businessName}`,
    'url': url,
    'mainEntity': {
      '@type': 'Organization',
      'name': businessName,
      'telephone': telephone,
      'email': email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': address.streetAddress,
        'addressLocality': address.addressLocality,
        'postalCode': address.postalCode,
        'addressCountry': address.addressCountry
      },
      'openingHoursSpecification': openingHours.map(hours => ({
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': hours.dayOfWeek,
        'opens': hours.opens,
        'closes': hours.closes
      })),
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': telephone,
        'contactType': 'customer service',
        'availableLanguage': ['French']
      }
    }
  };

  return (
    <Script
      id="contact-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default ContactPageSchema;
