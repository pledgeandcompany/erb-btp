'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { useMediaQuery } from '../../hooks/useMediaQuery';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  imageSrc?: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
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
        <div className="flex items-center mb-4">
          {icon && <div className="text-3xl mr-3">{icon}</div>}
          <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-[#ff914d] transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <Link 
          href={href} 
          className="inline-flex items-center text-[#ff914d] hover:text-[#e67e35] dark:text-[#ff914d] dark:hover:text-[#ffb583] font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 md:block hidden"
          aria-label={`En savoir plus sur ${title}`}
        >
          En savoir plus
          <svg 
            className="ml-2 h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
        
        {/* Always visible on mobile */}
        <Link 
          href={href} 
          className="inline-flex items-center text-[#ff914d] hover:text-[#e67e35] dark:text-[#ff914d] dark:hover:text-[#ffb583] font-medium md:hidden"
          aria-label={`En savoir plus sur ${title}`}
        >
          En savoir plus
          <svg 
            className="ml-2 h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
