'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { useMediaQuery } from '../../hooks/useMediaQuery';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  href,
}) => {
  // This was used for carousel implementation but is now handled at a higher level
  // const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-[#ff914d] transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="mt-4">
          <Link 
            href={href} 
            className="inline-block px-3 py-1 bg-[#ff914d] text-white text-sm font-medium rounded-full hover:bg-[#e67e35] dark:bg-[#ff914d] dark:hover:bg-[#ffb583] transition-colors duration-300"
            aria-label={`Voir ${title}`}
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
