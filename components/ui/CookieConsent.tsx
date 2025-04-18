'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setShowBanner(false);
  };

  const manageCookies = () => {
    // This could open a modal with more detailed cookie settings
    // For now, we'll just link to the cookie policy page
    window.location.href = '/politique-cookies';
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.
              Pour en savoir plus, consultez notre{' '}
              <Link href="/politique-cookies" className="text-yellow-400 hover:underline">
                politique de cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button 
              onClick={acceptEssential} 
              variant="outline" 
              size="sm"
              className="border-white text-white hover:bg-gray-700"
            >
              Cookies essentiels
            </Button>
            <Button 
              onClick={acceptAll} 
              variant="default" 
              size="sm"
            >
              Accepter tout
            </Button>
            <Button 
              onClick={manageCookies} 
              variant="link" 
              size="sm"
              className="text-yellow-400"
            >
              Personnaliser
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
