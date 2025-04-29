'use client';

import React, { useState } from 'react';

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
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className="max-h-16 max-w-full object-contain"
    />
  );
};

export default CollaboratorLogo;
