'use client';

import React from 'react';

const SecuriteDetails: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              La sécurité du personnel intervenant sur le chantier, demeure notre priorité.
            </p>

            {/* Section 8.1 - PPSPS */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Plan Particulier de Sécurité et de Protection de la Santé</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Suivant le PGC, et suite à la visite d&apos;inspection commune, nous établirons un PPSPS spécifique 
                  aux travaux à réaliser sur le chantier.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  L&apos;ensemble de notre personnel intervenant aura pris connaissance du PPSPS avant le démarrage 
                  des travaux.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Les PPSPS sera soumis au Coordonnateur de Sécurité pour validation.
                </p>
              </div>
            </div>

            {/* Section 8.2 - Locaux d'hygiène */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Locaux d&apos;hygiène</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Base vie</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Une zone sera délimitée afin d&apos;y installer une base-vie destinée aux personnels intervenant, 
                  elle comprendra un bungalow avec réfectoire et vestiaires ainsi qu&apos;un WC chimique, 
                  l&apos;ensemble sera conforme aux dispositions d&apos;hygiène et de sécurité en vigueur.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Balisage</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Cette enceinte sera délimitée par des clôtures de chantier type HERAS, de 2ml de hauteur, 
                  réalisée en éléments tubulaires galvanisés avec mailles 10X10, montés sur des plots en béton 
                  et restant amovible.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Nettoyage</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Les locaux de la base vie seront nettoyés et entretenus quotidiennement, pendant toute la 
                  durée des travaux. Il en sera de même pour les abords de la base vie, de l&apos;immeuble et du 
                  parking.
                </p>
              </div>
            </div>

            {/* Section 8.3 - Zone de stockage */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Zone de stockage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Une zone de stockage tampon sera matérialisée par des clôtures de chantier. Elle se situe 
                généralement en pied de façade, à l&apos;aplomb du treuil. C&apos;est une zone de stockage provisoire, 
                car aucun matériau n&apos;y reste stocké après le départ des ouvriers. Tous matériaux 
                d&apos;étanchéité, isolant ou gaz, livrés sur chantier, est monté le jour même en terrasse.
              </p>
            </div>

            {/* Section 8.4 - Matériels d'hygiène et de sécurité */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Matériels d&apos;hygiène et de sécurité</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Equipement de travail du personnel</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Chaque ouvrier est muni d&apos;un coffret de sécurité comprenant :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Combinaisons de travail, avec sérigraphie de l&apos;entreprise, permettant une identification 
                    aisée par les gardiens et les résidents</li>
                  <li>Chaussures ou bottes de sécurité</li>
                  <li>Combinaisons jetables utilisées lors de manipulations d&apos;isolants minéraux</li>
                  <li>Gant néoprène pour manipulations chimiques</li>
                  <li>Gant en cuirs pour manutention</li>
                  <li>Casque de chantier (surtout pour le personnel se trouvant en pied du bâtiment, à 
                    l&apos;aplomb du treuil)</li>
                  <li>Paire de lunette de protection pour travaux de meulage</li>
                  <li>Casque antibruit ou bouchons d&apos;oreille</li>
                  <li>Masques jetable anti poussière</li>
                  <li>Masques confort avec cartouches pour travaux avec émanation de vapeurs toxiques</li>
                  <li>Equipement de pluie</li>
                  <li>Gilet jaune fluo</li>
                  <li>Ligne de vie</li>
                  <li>Harnais de sécurité</li>
                  <li>Stop chute</li>
                  <li>Mousqueton</li>
                  <li>Pinces, potelets et filets pour travaux de sécurités collectives</li>
                  <li>Extincteurs</li>
                  <li>Rallonge électrique équipée de disjoncteur différentiel 40A</li>
                </ul>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  1 trousse à pharmacie, composée de :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Une attelle gouttière</li>
                  <li>Une paire de ciseaux</li>
                  <li>Des pansements absorbants</li>
                  <li>Des pansements (lavables)</li>
                  <li>Des compresses GAZE 20 x 20</li>
                  <li>Un tube de gel apaisant</li>
                  <li>Des paires de gants</li>
                  <li>Une couverture de survie</li>
                  <li>Une bande extensible cohésive</li>
                  <li>Une pince à écharde à bout pointu</li>
                  <li>Une paire de ciseaux</li>
                  <li>Des compresses imprégnées : Teinture d&apos;arnica, Mercurescéine, Antiseptique, Alcool</li>
                  <li>Une solution pour lavage ophtalmique</li>
                  <li>Un rouleau de ruban adhésif</li>
                  <li>Des épingles</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Equipement de protection individuelle (E.P.I.)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  L&apos;ensemble des équipements de protections individuelles est inventorié une fois par mois.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Les ouvriers le vérifient chaque jour avant d&apos;intervenir.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Le matériel manquant ou hors d&apos;usage est remplacé sous 24 heures.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Les boites à pharmacie sont remplacées dès qu&apos;elles sont utilisées, elles sont vérifiées une fois 
                  par mois, et remplacées si besoin.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Protections collectives</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Mise en place de garde-corps escamotables au droit des zones ne pouvant pas recevoir de 
                    protection collective (provisoire).</li>
                  <li>Mise en place de pinces avec potelets, filets et main courante rigide au droit des 
                    acrotères.</li>
                  <li>Pose de points d&apos;accroche pour harnais de sécurité et système antichute.</li>
                  <li>Mise en place d&apos;échafaudage de sécurité aux normes CE.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Protections du public</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Clôtures de chantier grillagées de 2 m de hauteur sur zones emprises chantier</li>
                  <li>Signalisation par panneaux, affichage, rubalise, clôture,…</li>
                  <li>Nettoyage régulier et quotidien des abords du chantier</li>
                  <li>Pose d&apos;éclairage ou de points clignotants pour baliser l&apos;emprise du chantier</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Engin de levage</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  L&apos;approvisionnement des terrasses à étancher est effectué par l&apos;extérieur à partir de grue de 
                  terrasse du type TRACTEL, véhicule nacelle allant jusqu&apos;à 30m de haut, monte matériaux ou 
                  grue mobile.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  L&apos;emprise au sol est sécurisée par la mise en place de barrières amovibles de 2m de hauteur, 
                  posées sur plots béton ; elles sont liées par des menottes afin d&apos;éviter le déplacement 
                  par des tiers.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  L&apos;inscription &quot;interdit au public&quot; est affichée sur les clôtures.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Maintien de la propreté sur les zones de travail (en terrasse)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Tous gravats en terrasse est évacués dans les 48h. En fin de journée, les ouvriers ont pour 
                  obligation de ranger leurs matériels, ainsi que de nettoyer leur poste de travail. Il est 
                  impératif que tout matériau « léger » doive être lesté.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  L&apos;approvisionnement et l&apos;évacuation s&apos;effectuent par tranche de 100 à 200 m² afin d&apos;éviter 
                  toutes surcharges sur la terrasse.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Sécurité incendie</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Le nombre d&apos;extincteurs en terrasse est égale au nombre de points chaud (nombre de 
                  chalumeau). Tout stockage ou gravats doit se trouver à plus de 10 m des zones de travail.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Les bouteilles de gaz (propane) doivent être debout, attachés entre elles ou installés dans 
                  des raques.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Plus un chantier est propre et organisé, moins il y a de risques incendie.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Document unique</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Il a pour but de renseigner toute personne travaillant dans l&apos;entreprise sur les risques 
                  encourus pour chaque tâche et de noter tous les moyens de prévention à mettre en œuvre.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Il est consultable au siège de l&apos;entreprise et les consignes de sécurité sont régulièrement 
                  rappelées aux ouvriers.
                </p>
              </div>
            </div>

            {/* Section 8.5 - Risques sur la santé liés aux produits et matériaux */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Risques sur la santé liés aux produits et matériaux</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Notre entreprise respecte les recommandations des fiches de données sécurité des produits 
                ou techniques mis en œuvre sur le chantier. Les fiches de données de sécurité sont 
                distribuées aux ouvriers.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                La FDS (Fiche de donnée de sécurité) comprend obligatoirement les 16 points règlementaires 
                suivants :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <ul className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Identification du produit</li>
                    <li>Identification des dangers</li>
                    <li>Composition/informations sur les composants</li>
                    <li>Premiers secours</li>
                    <li>Mesures de lutte contre l&apos;incendie</li>
                    <li>Mesures à prendre en cas de dispersion accidentelle</li>
                    <li>Manipulation et stockage</li>
                    <li>Contrôles de l&apos;exposition/protection individuelle</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <ul className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2 start-value-9">
                    <li value="9">Propriétés physiques et chimiques</li>
                    <li>Stabilité et réactivité</li>
                    <li>Informations toxicologiques</li>
                    <li>Informations écologiques</li>
                    <li>Considérations relatives à l&apos;élimination</li>
                    <li>Informations relatives au transport</li>
                    <li>Informations relatives à la réglementation</li>
                    <li>Autres informations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuriteDetails;
