'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={cn(
      centered ? 'text-center' : 'text-left',
      'mb-12',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          <span className="relative">
            {title}
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#ff914d]"></span>
          </span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;