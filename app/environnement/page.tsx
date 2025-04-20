import React from 'react';
import EnvironnementDetails from '../../components/environnement/EnvironnementDetails';

export const metadata = {
  title: 'Engagement Environnemental | ERB-BTP',
  description: 'Découvrez notre engagement environnemental et notre charte Chantier Vert pour des constructions responsables et durables.',
};

export default function EnvironnementPage() {
  return (
    <main className="pt-20 bg-white dark:bg-gray-900">
      <EnvironnementDetails />
    </main>
  );
}
