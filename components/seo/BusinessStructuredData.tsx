import React from 'react';
import JsonLd from './JsonLd';

const BusinessStructuredData: React.FC = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ERB-BTP",
    "url": "https://www.erb-btp.com",
    "logo": "https://www.erb-btp.com/logo.png",
    "description": "Entreprise de construction et rénovation spécialisée dans le bâtiment et les travaux publics.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Avenue de la Construction",
      "addressLocality": "Paris",
      "postalCode": "75000",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "email": "contact@erb-btp.com"
    },
    "sameAs": [
      "https://www.facebook.com/erbbtp",
      "https://www.linkedin.com/company/erb-btp",
      "https://www.instagram.com/erb_btp"
    ]
  };

  return <JsonLd data={businessData} />;
};

export default BusinessStructuredData;
