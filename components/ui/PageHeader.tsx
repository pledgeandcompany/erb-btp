'use client';

import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description: string;
  imagePath: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, imagePath }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-down">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-up">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
