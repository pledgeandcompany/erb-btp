'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface CanonicalUrlProps {
  path?: string;
}

// For use in client components if needed
const CanonicalUrl: React.FC<CanonicalUrlProps> = ({ path }) => {
  const pathname = usePathname();
  const canonicalUrl = `https://www.erb-btp.com${path || pathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
};

export default CanonicalUrl;
