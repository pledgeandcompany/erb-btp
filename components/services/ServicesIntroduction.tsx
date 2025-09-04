'use client';

import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesIntroduction: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  // Service features data
  const serviceFeatures: ServiceFeature[] = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#ff914d] dark:text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Qualité garantie",
      description: "Nous nous engageons à fournir un travail de qualité, dans le respect des normes et des délais convenus."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#ff914d] dark:text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Respect des délais",
      description: "Nous respectons scrupuleusement les délais convenus pour la réalisation de vos projets."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#ff914d] dark:text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Devis transparent",
      description: "Nous vous proposons des devis détaillés et transparents, sans mauvaises surprises."
    }
  ];
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);
  
  // Autoplay for mobile slider
  useEffect(() => {
    if (isMobile && !isPaused) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === serviceFeatures.length - 1 ? 0 : prev + 1));
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [isMobile, isPaused, serviceFeatures.length]);
  
  // Feature card component
  const FeatureCard = ({ feature }: { feature: ServiceFeature }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="w-12 h-12 bg-[#fff1e8] dark:bg-[#5e3520] rounded-full flex items-center justify-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">
        {feature.description}
      </p>
    </div>
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notre expertise à votre service"
          subtitle="Chez ERB-BTP, nous mettons notre savoir-faire et notre expérience au service de vos projets. Notre équipe de professionnels qualifiés vous accompagne à chaque étape, de la conception à la réalisation."
          centered={true}
        />
        
        {/* Desktop/Tablet View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {serviceFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        
        {/* Mobile View - Slider */}
        <div className="md:hidden mt-12">
          <div className="relative">
            <div className="px-4"
              onTouchStart={(e) => {
                setIsPaused(true);
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchMove={(e) => {
                touchEndX.current = e.touches[0].clientX;
              }}
              onTouchEnd={() => {
                setIsPaused(false);
                if (touchStartX.current && touchEndX.current) {
                  const diff = touchStartX.current - touchEndX.current;
                  if (diff > 50) { // Swipe left - next slide
                    setCurrentSlide((prev) => (prev === serviceFeatures.length - 1 ? 0 : prev + 1));
                  } else if (diff < -50) { // Swipe right - previous slide
                    setCurrentSlide((prev) => (prev === 0 ? serviceFeatures.length - 1 : prev - 1));
                  }
                }
                touchStartX.current = null;
                touchEndX.current = null;
              }}
            >
              <FeatureCard feature={serviceFeatures[currentSlide]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroduction;
