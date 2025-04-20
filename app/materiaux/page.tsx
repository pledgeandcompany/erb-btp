import React from 'react';
import MateriauxDetails from '../../components/materiaux/MateriauxDetails';

export const metadata = {
  title: "Nos Moyens et Matériaux | ERB-BTP",
  description: "Découvrez les ressources humaines et matérielles d'ERB-BTP qui garantissent la qualité de nos prestations en couverture et étanchéité."
};

export default function MateriauxPage() {
  return (
    <main className="pt-20 bg-white dark:bg-gray-900">
      <MateriauxDetails />
    </main>
  );
}
