'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/favicon-transparent.png" 
                alt="ERB-BTP Logo" 
                width={50} 
                height={50} 
                className="mr-3"
              />
              <span className="text-xl font-bold">ERB-BTP</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Votre partenaire de confiance pour tous vos projets de construction et rénovation depuis 1995.
            </p>
            {/* Social icons removed as requested */}
          </div>

          {/* Quick Links and Nos Engagements - side by side on mobile */}
          {isMobile ? (
            <div className="grid grid-cols-2 gap-6">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Projets
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Nos Engagements */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Engagements</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/qualite" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Qualité
                    </Link>
                  </li>
                  <li>
                    <Link href="/securite" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Sécurité
                    </Link>
                  </li>
                  <li>
                    <Link href="/environnement" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Environnement
                    </Link>
                  </li>
                  <li>
                    <Link href="/materiaux" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Matériaux
                    </Link>
                  </li>
                  <li>
                    <Link href="/partenaires" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Partenaires
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              {/* Quick Links - Desktop */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Projets
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Nos Engagements - Desktop */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Nos Engagements</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/qualite" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Qualité
                    </Link>
                  </li>
                  <li>
                    <Link href="/securite" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Sécurité
                    </Link>
                  </li>
                  <li>
                    <Link href="/environnement" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Environnement
                    </Link>
                  </li>
                  <li>
                    <Link href="/materiaux" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Matériaux
                    </Link>
                  </li>
                  <li>
                    <Link href="/partenaires" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      Partenaires
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            
            {/* Address and SIRET */}
            <div className="flex items-start mb-4">
              <svg className="h-6 w-6 mr-2 text-[#ff914d] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="text-gray-600 dark:text-gray-400">86 Rue Voltaire, 93100 MONTREUIL</span>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  SIRET : 912 731 858 00011<br/>
                  TVA : FR46 912 731 858
                </div>
              </div>
            </div>
            
            {/* Service sections in two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 dark:border-gray-700 pt-3">
              {/* Service commercial */}
              <div>
                <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-300 mb-2">Service commercial :</h4>
                <div className="flex items-center mb-1">
                  <svg className="h-4 w-4 mr-2 text-[#ff914d] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-xs">+33 6 35 30 15 07</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-[#ff914d] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-xs truncate max-w-[140px]">commercial@erb-btp.fr</span>
                </div>
              </div>
              
              {/* Service travaux */}
              <div>
                <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-300 mb-2">Service travaux :</h4>
                <div className="flex items-center mb-1">
                  <svg className="h-4 w-4 mr-2 text-[#ff914d] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-xs">+33 6 29 83 94 71</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-[#ff914d] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-xs truncate max-w-[140px]">contact@erb-btp.fr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {currentYear} ERB-BTP. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/politique-confidentialite" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/politique-cookies" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors">
                    Politique de cookies
                  </Link>
                </li>
                <li>
                  <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors">
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;