'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowDown, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

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
  imageSrc, // We'll keep this as a fallback for browsers that don't support video
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Ensure video plays automatically
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <Image
            src={imageSrc}
            alt="Hero construction"
            fill
            className="object-cover"
            priority
          />
        </video>
        
        {/* Video overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Text content */}
          <motion.div 
            className="w-full max-w-4xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg" 
                dangerouslySetInnerHTML={{ __html: title }} 
              />
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {primaryButtonText && primaryButtonHref && (
                <Button 
                  href={primaryButtonHref} 
                  variant="default"
                  size="lg"
                  className="group relative overflow-hidden transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg bg-[#ff914d] hover:bg-[#e07e3d] text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {primaryButtonText}
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              )}
              
              {secondaryButtonText && secondaryButtonHref && (
                <Button 
                  href={secondaryButtonHref} 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:shadow-md"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Video controls */}
      <motion.button
        className="absolute bottom-8 right-8 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-all duration-300"
        onClick={toggleMute}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        title={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </motion.button>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center z-20"
        onClick={scrollToContent}
        initial={{ opacity: 0, y: -10 }}
        animate={isLoaded ? { opacity: 0.8, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ opacity: 1, y: 5 }}
      >
        <span className="text-sm text-white mb-2 drop-shadow-md">Découvrir</span>
        <ArrowDown className="w-5 h-5 text-white animate-bounce drop-shadow-md" />
      </motion.div>
    </section>
  );
};

export default Hero;
