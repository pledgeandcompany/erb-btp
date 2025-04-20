import React from 'react';
import PartenairesDetails from '../../components/partenaires/PartenairesDetails';

export const metadata = {
  title: "Nos Partenaires | ERB-BTP",
  description: "Découvrez les partenaires légaux, fournisseurs et commerciaux d'ERB-BTP qui contribuent à la qualité de nos services."
};

export default function PartenairesPage() {
  return (
    <main className="pt-20 bg-white dark:bg-gray-900">
      <PartenairesDetails />
    </main>
  );
}
