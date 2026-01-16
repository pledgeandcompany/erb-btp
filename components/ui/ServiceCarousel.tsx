'use client';

import React, { useState, useEffect } from 'react';
import ServiceCard from '@/components/home/ServiceCard';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Service {
  title: string;
  description: string;
  imageSrc?: string;
  href: string;
}

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Reset index when switching between mobile and desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // If not mobile, render the grid layout
  if (!isMobile) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            href={service.href}
          />
        ))}
      </div>
    );
  }

  // Mobile carousel view
  return (
    <div className="relative px-8"> {/* Added padding to make room for arrows outside */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2"> {/* Reduced horizontal padding */}
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                href={service.href}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation arrows - positioned outside cards */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCarousel;
