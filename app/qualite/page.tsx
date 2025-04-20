import React from 'react';
import QualiteDetails from '../../components/qualite/QualiteDetails';

export const metadata = {
  title: "Qualité | ERB-BTP",
  description: "Découvrez notre engagement pour la qualité et l'excellence dans tous nos projets de construction et rénovation."
};

export default function QualitePage() {
  return (
    <main className="pt-20 bg-white dark:bg-gray-900">
      <QualiteDetails />
    </main>
  );
}
