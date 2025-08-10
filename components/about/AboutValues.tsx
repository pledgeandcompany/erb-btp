'use client';

import React, { useState, useEffect } from 'react';

const AboutValues: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsMobile] = useState(false);
  
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
    };
  }, []);
  
  const values = [
    {
      title: "Qualité",
      description: "Nous nous engageons à fournir un travail de la plus haute qualité, en utilisant les meilleurs matériaux et techniques. Chaque projet est réalisé avec une attention méticuleuse aux détails.",
      icon: <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: "Intégrité",
      description: "Nous agissons avec honnêteté et transparence dans toutes nos interactions. Nos clients peuvent compter sur nous pour tenir nos promesses et respecter nos engagements.",
      icon: <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Innovation",
      description: "Nous recherchons constamment de nouvelles méthodes et technologies pour améliorer nos services et offrir des solutions plus efficaces et durables à nos clients.",
      icon: <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Ponctualité",
      description: "Nous respectons les délais convenus et nous nous efforçons de livrer nos projets dans les temps, sans compromettre la qualité de notre travail.",
      icon: <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "Responsabilité",
      description: "Nous assumons la responsabilité de notre travail et nous nous engageons à résoudre rapidement tout problème qui pourrait survenir pendant ou après la réalisation d'un projet.",
      icon: <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      title: "Durabilité",
      description: "Nous nous efforçons de minimiser notre impact environnemental en utilisant des matériaux durables et des pratiques respectueuses de l'environnement dans tous nos projets.",
      icon: <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    }
  ];
  
  // These functions are used in the mobile swipe handlers
  // but not directly called in the component
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === values.length - 1 ? 0 : prev + 1));
  // };
  
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? values.length - 1 : prev - 1));
  // };
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nos Valeurs</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Les valeurs qui guident nos actions et notre engagement envers nos clients.
          </p>
        </div>
        
        {/* Desktop view - grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile view - carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-6">
                {values[currentSlide].icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{values[currentSlide].title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{values[currentSlide].description}</p>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
