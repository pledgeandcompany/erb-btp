import React from 'react';
import Script from 'next/script';

interface QuotePageSchemaProps {
  businessName?: string;
  description?: string;
  serviceTypes?: string[];
  url?: string;
}

const QuotePageSchema: React.FC<QuotePageSchemaProps> = ({
  businessName = 'ERB-BTP',
  description = 'Demandez un devis personnalisé pour vos projets de construction et rénovation avec ERB-BTP.',
  serviceTypes = [
    'Construction neuve',
    'Rénovation',
    'Travaux d\'étanchéité',
    'Isolation',
    'Aménagement extérieur',
    'Ravalement de façades'
  ],
  url = 'https://www.erb-btp.com/devis'
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': `Demande de Devis | ${businessName}`,
    'description': description,
    'url': url,
    'mainEntity': {
      '@type': 'Service',
      'serviceType': 'Construction et Rénovation',
      'provider': {
        '@type': 'Organization',
        'name': businessName,
        'url': 'https://www.erb-btp.com'
      },
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': 48.8589,
          'longitude': 2.3469
        },
        'geoRadius': '50000'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Services de construction et rénovation',
        'itemListElement': serviceTypes.map((service) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': service
          }
        }))
      },
      'potentialAction': {
        '@type': 'RequestQuoteAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': url,
          'inLanguage': 'fr-FR',
          'actionPlatform': [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        },
        'result': {
          '@type': 'Quote',
          'priceSpecification': {
            '@type': 'PriceSpecification',
            'priceCurrency': 'EUR'
          }
        }
      }
    }
  };

  return (
    <Script
      id="quote-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default QuotePageSchema;
