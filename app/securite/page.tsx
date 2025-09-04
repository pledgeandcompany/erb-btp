import React from 'react';
import SecuriteHero from '../../components/securite/SecuriteHero';
import SecuriteDetails from '../../components/securite/SecuriteDetails';

export const metadata = {
  title: "Sécurité | ERB-BTP",
  description: "Découvrez notre engagement pour la sécurité sur nos chantiers et les mesures que nous mettons en place pour protéger notre personnel et le public."
};

export default function SecuritePage() {
  return (
    <main className="pt-20 bg-white dark:bg-gray-900">
      <SecuriteHero />
      <SecuriteDetails />
    </main>
  );
}
