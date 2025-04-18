'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  imageSrc,
}) => {
  return (
    <section className="relative h-auto py-16 md:py-24 bg-white dark:bg-gray-800 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 md:pr-12 text-gray-900 dark:text-white mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonHref && (
              <Button 
                href={primaryButtonHref} 
                variant="default"
                size="lg"
              >
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Button 
                href={secondaryButtonHref} 
                variant="outline"
                size="lg"
                className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/5 relative">
          <div className="aspect-[4/3] relative rounded-lg shadow-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt="Hero construction"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              quality={85}
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 md:hidden z-0">
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          className="object-cover opacity-15"
          quality={60}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
