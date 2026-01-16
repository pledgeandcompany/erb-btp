import React from 'react';
import RecruitmentHero from '@/components/recruitment/RecruitmentHero';
import RecruitmentPositions from '@/components/recruitment/RecruitmentPositions';

export const metadata = {
  title: 'Recrutement | ERB-BTP - Rejoignez notre équipe',
  description: 'Découvrez nos opportunités de carrière chez ERB-BTP. Postes à pourvoir dans la construction, rénovation, couverture, charpente, électricité, plomberie et plus.',
};

export default function RecruitmentPage() {
  return (
    <main>
      <RecruitmentHero />
      <RecruitmentPositions />
    </main>
  );
}
