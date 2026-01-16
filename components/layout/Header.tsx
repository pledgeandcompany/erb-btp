'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/favicon-transparent.png" 
              alt="ERB-BTP Logo" 
              width={50} 
              height={50} 
              className="mr-3"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">ERB-BTP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium">
              Groupe
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium">
              Métiers
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium">
              Réalisations
            </Link>
            <Link href="/recrutement" className="text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium">
              Recrutement
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/devis" className="bg-[#ff914d] hover:bg-[#e07e3d] text-white px-4 py-2 rounded-md font-medium transition-colors">
              Devis Rapide
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <nav className="flex flex-col px-4 py-2">
            <Link 
              href="/" 
              className="py-3 text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium border-b border-gray-200 dark:border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className="py-3 text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium border-b border-gray-200 dark:border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              href="/services" 
              className="py-3 text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium border-b border-gray-200 dark:border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className="py-3 text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium border-b border-gray-200 dark:border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Réalisations
            </Link>
            <Link 
              href="/recrutement" 
              className="py-3 text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium border-b border-gray-200 dark:border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Recrutement
            </Link>
            <Link 
              href="/contact" 
              className="py-3 text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 font-medium border-b border-gray-200 dark:border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/devis" 
              className="mt-3 mb-2 bg-[#ff914d] hover:bg-[#e07e3d] text-white px-4 py-2 rounded-md font-medium text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Devis Gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
