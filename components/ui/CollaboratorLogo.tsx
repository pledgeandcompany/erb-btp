'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CollaboratorLogoProps {
  src: string;
  alt: string;
}

const CollaboratorLogo: React.FC<CollaboratorLogoProps> = ({ src, alt }) => {
  const [imgError, setImgError] = useState(false);

  // Handle image load error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setImgError(true);
  };

  // If image fails to load, show alt text
  if (imgError) {
    return <div className="text-center text-sm">{alt}</div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={handleError}
      width={150}
      height={64}
      className="max-h-16 max-w-full object-contain"
    />
  );
};

export default CollaboratorLogo;
