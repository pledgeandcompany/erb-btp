'use client';

import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-[400px] md:h-[500px]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4758012073854!2d2.4406889!3d48.8582385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5c10c7fb5d%3A0x831a50b1c10b64f0!2s86%20Rue%20Voltaire%2C%2093100%20Montreuil!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="ERB-BTP Location"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default ContactMap;
