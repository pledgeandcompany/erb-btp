'use client';

import React from 'react';
import { Button } from '../ui/Button';

const EnvironnementDetails: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Notre <span className="text-[#ff914d]">engagement environnemental</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Des solutions pratiques pour limiter l&apos;impact de nos chantiers sur l&apos;environnement
            </p>
            <div className="w-24 h-1 bg-[#ff914d] mx-auto mt-6"></div>
          </div>

          {/* Sensibiliser et responsabiliser */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </span>
              Sensibiliser et responsabiliser
            </h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-[#ff914d] mb-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tout chantier génère des impacts et nuisances sur l&apos;environnement.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A cet effet, notre entreprise met en œuvre des solutions pratiques pour limiter l&apos;impact des chantiers sur l&apos;environnement.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Nous sensibilisons notre personnel pour la mise en place d&apos;une charte Chantier Vert, propre à notre activité.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                L&apos;ensemble de notre personnel est responsabilisé aux risques, aux nuisances, au tri sélectif des déchets et au respect de l&apos;environnement.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Notre entreprise s&apos;engage à respecter la réglementation et a pris connaissance des principaux textes relatifs à l&apos;environnement la santé sur les chantiers. Nous faisons tout notre possible pour mettre en place l&apos;organisation technique, financière et humaine pour répondre à ces exigences.
              </p>
            </div>
          </section>

          {/* Charte Chantier Vert */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Charte Chantier Vert
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cette charte a pour objectif de :
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Limiter les risques et les nuisances causés aux riverains du chantier</li>
              <li>Limiter les risques sur la santé des ouvriers</li>
              <li>Limiter les pollutions de proximité lors du chantier</li>
              <li>Limiter la quantité de déchets de chantier mis en décharge</li>
            </ul>
          </section>

          {/* Informations des riverains */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </span>
              Informations des riverains
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Affichage des informations suivantes :
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Durée des travaux</li>
              <li>Horaires de chantier</li>
              <li>Nature des travaux</li>
              <li>Plages horaires des nuisances sonores</li>
              <li>Plages horaires des livraisons</li>
            </ul>
          </section>

          {/* Informations aux personnels */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Informations aux personnels
            </h3>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Formations internes</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Formation et sensibilisation de notre personnel tous les 6 mois, sous forme d&apos;atelier sur les risques liés à l&apos;environnement</li>
              <li>Cette sensibilisation est centrée sur plusieurs points importants :
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Nuisances sonores</li>
                  <li>Risques routiers sur et en dehors du chantier</li>
                  <li>Tri des déchets</li>
                  <li>Sécurité</li>
                  <li>Recyclage des eaux de pluie</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Organisation générale du chantier */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Organisation générale du chantier
            </h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Stationnement</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Le stationnement des véhicules du personnel intervenant sur le chantier s&apos;effectue sur la zone prévue à cet effet. Si, pour cause d&apos;emplacements restreints, le stationnement dans la résidence poserait une gêne aux locataires, les ouvriers auront l&apos;obligation de se garer sur les emplacements prévus à cet effet, en dehors de la résidence.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Circulation et accès des véhicules de livraison</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Les approvisionnements de chantier seront planifiés sur la journée afin d&apos;éviter les livraisons aux heures de pointe ou à des heures susceptibles de créer des nuisances au voisinage.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Niveau acoustique en limite de chantier</h4>
              <p className="text-gray-600 dark:text-gray-400">
                L&apos;entreprise limitera au maximum les nuisances sonores du chantier. Nous privilégierons les équipements électriques plutôt que pneumatiques.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Réduction de la production de déchets sur le chantier</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Tous nos matériaux d&apos;étanchéité, isolant, métallerie ou autres protections, seront livrés au fur et à mesure de l&apos;avancement, afin d&apos;être le plus précis possible par rapport aux quantités nécessaires du chantier, et d&apos;éviter le gaspillage.
              </p>
            </div>
          </section>

          {/* Choix des matériaux */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              Choix des matériaux
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Notre démarche environnementale est traduite par une attention particulière sur le choix des matériaux et le respect des prescriptions du cahier des charges pour les techniques et les matières : les matériaux sont commandés dans les usines au plus proches des chantiers afin d&apos;éviter le surcroît de gas-oil. Des variantes techniques plus élaborées sont proposées au niveau des appels d&apos;offres.
            </p>
          </section>

          {/* Véhicules propres */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Véhicules propres
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous avons fait le choix de renouveler régulièrement nos véhicules répondant aux critères suivants :
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Les émissions de CO2 inférieures à 139 g/km</li>
              <li>Véhicule produit dans une usine certifiée ISO 14001 minimisant l&apos;impact sur l&apos;environnement</li>
              <li>95 % en masse des matériaux qui le constituent bénéficient d&apos;un recyclage et valorisation énergétique et que la dépollution préalable du véhicule en fin de vie (notamment l&apos;extraction des fluides) soit facilitée.</li>
              <li>Contenir plus de 5 % de plastique recyclé sur la masse des plastiques du véhicule</li>
              <li>Les véhicules comportes des pièces réalisées en matière plastiques recyclés et en matériaux renouvelables.</li>
            </ul>
          </section>

          {/* Gestion des déchets */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </span>
              Gestion des déchets
            </h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Notre action</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Le chantier est nettoyé au fur et à mesure de la production de déchets et systématiquement tous les soirs en fin de tâches.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Les divers déchets générés par nos travaux sont récupérés par un prestataire pratiquant le tri sélectif des déchets. Les bordereaux de suivi de déchets nous sont transmis pour tout gravats évacués, sur toutes nos opérations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Notre partenaire effectue ces taches par le biais de mise en place d&apos;éco-bennes soit, si possible, directement sur le site à un emplacement qui vous agréé et après avoir fait les demandes d&apos;autorisations auprès des autorités compétentes, soit à notre dépôt de BONDY.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Les principaux principes sont les suivants :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Lorsqu&apos;il y en a sur les terrasses et qu&apos;ils doivent être enlevés, les gravillons sont triés sur le chantier et évacués dans des bennes spécifiques. Ils sont stockés pour être réutilisés en tant que couche drainante ou réutilisés après lavage à l&apos;eau en tant que protection meuble sur les terrasses, en tant que revêtement dans des allées privatives ou réincorporés dans le béton.</li>
                <li>Les gravats lourds en béton et ciment sont aussi triés. Après enlèvement des ferrailles, ils sont placés dans des bennes spécifiques. Les gravats sont ensuite envoyés sur le site de TREMBLAY EN FRANCE de la société SEMARDEL. Ils y sont concassés puis incorporés aux graves-ciment utilisés comme sous-couche de chaussée.</li>
                <li>Les métaux sont triés et revendus aux ferrailleurs pour être refondus et réutilisés.</li>
                <li>Certains isolants thermiques peuvent être repris par les fabricants afin d&apos;être recyclés. C&apos;est le cas des polystyrènes qui peuvent être recyclés par la société KNAUF.</li>
                <li>ERB-BTP fait appel à la société SOPREVIA de retraitement des membranes en association avec une société de fabrication de béton bitumineux. Les gravats d&apos;étanchéité du chantier seront donc stockés dans des bennes spécifiques. Puis ils seront dirigés sur le site de MEL à VERT LE GRAND (91) pour être pris en charge par SOPREVIA. SOPREVIA dispose de plusieurs machines qui réduisent les matériaux d&apos;étanchéité en petits morceaux. Puis, après broyage et fusion ils sont réintroduits dans les enrobés routiers. ERB-BTP possède actuellement un partenariat avec cette société pour le traitement des déchets d&apos;étanchéité.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Procédure de tri et de valorisation des déchets</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Documents de référence :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Loi N° 75-633 du 15 juillet 1975 relative à l&apos;élimination des déchets et de la récupération des matériaux</li>
                <li>Loi N° 76-633 du 19 juillet 1976 relative aux installations classées pour la protection de l&apos;environnement</li>
                <li>Loi N° 92-646 du 13 juillet 1992 relative à l&apos;élimination des déchets ainsi qu&apos;aux installations classées pour la protection de l&apos;environnement.</li>
                <li>Projet de classification des installations de stockage de « classe 3 » au titre des installations classées pour la protection de l&apos;environnement.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Catégories des déchets</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Le chef de chantier assure un contrôle visuel des déchets évacués et s&apos;assure de la conformité de la destination par rapport aux destinations fixées. Il collecte les bons d&apos;acceptations et/ou de pesées.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Les déchets sont divisés en 3 catégories selon leur nature :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Déchets Inertes (DI) : déchets qui ne subissent pas de modification physique, chimique ou biologique importante en cas de stockage. Exemples : béton, briques, tuiles, céramiques …</li>
                <li>Déchets Industriel Banal (DIB) : Déchets non inertes et non dangereux, assimilables aux déchets ménagers et éliminables dans les mêmes centres.</li>
                <li>Déchet Industriel spécial (DIS) : déchets contenant des produits nocifs en concentration plus ou moins importante dont la toxicité implique des filières d&apos;élimination spécifiques. Exemple (peinture, vernis, colle…)</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Collecte des déchets DIS</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Les déchets industriels spéciaux (DIS) seront évacués et accompagnés obligatoirement d&apos;un bordereau de suivi des déchets.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Préconisations</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Ne pas bruler de déchets sur le site</li>
                <li>Réduire la production des déchets à la source</li>
                <li>Collecter les gravois pré triés dans des sacs réutilisables</li>
                <li>Débarrasser le site de tous les déchets qui auraient pu être oubliés sur place</li>
                <li>Mettre en place des poubelles et bennes sur le site du chantier, adaptées aux besoins et à l&apos;avancement du chantier</li>
                <li>Tenir la voie publique en état de propreté</li>
                <li>Evacuer les gravois en décharge avec tri sélectif</li>
                <li>Traçabilité des déchets de chantier</li>
                <li>Mise à disposition sur demande du client, des bons de décharges.</li>
              </ul>
            </div>
          </section>

          {/* Limitation des pollutions */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              Limitation des pollutions
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Ne pas prélever d&apos;eau sur les poteaux ou bouches d&apos;incendies</li>
              <li>Entretenir les matériels et les véhicules</li>
              <li>Couper les moteurs des véhicules en stationnement (y compris pendant les livraisons si le déchargement ne requiert pas le fonctionnement du moteur)</li>
            </ul>
          </section>

          {/* Limitation du bruit */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </span>
              Limitation du bruit
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Limiter l&apos;usage des avertisseurs sonores au seul risque immédiat</li>
              <li>Poster les matériels très bruyants le plus à l&apos;écart possible des habitations</li>
              <li>Mettre à disposition du personnel présent sur le chantier des protections auditives adaptées</li>
              <li>Rendre obligatoire les protections quand le niveau sonore risque d&apos;atteindre ou de dépasser 90db. Sonomètre à disposition.</li>
              <li>Informer les riverains pour limiter la gêne occasionnée</li>
              <li>Définir des plages horaires de travail et d&apos;activités bruyantes, ainsi que de livraison</li>
              <li>Mettre en place une organisation interentreprises pour concentrer des phases bruyantes sur la même période</li>
              <li>Utiliser tant que possible du matériel insonorisé</li>
              <li>Entretenir le matériel pour assurer son isolation acoustique, avec vérification du capotage</li>
              <li>Réduire la durée totale d&apos;émission des postes bruyants</li>
            </ul>
          </section>

          {/* Nos gestes au quotidien */}
          <section className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-[#ff914d] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Nos gestes au quotidien
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Utilisation de matériaux recyclables</li>
              <li>Limitation des emballages du matériel</li>
              <li>Limitation des volumes et quantité de déchets</li>
              <li>Réduction de la production de déchets à la source</li>
              <li>Nous privilégions les fournisseurs proposant des emballages réduits, aisés à valoriser ou consignés (palette en bois récupérable)</li>
              <li>Tri sélectif des déchets</li>
              <li>Mise en place d&apos;éclairage de chantier avec ampoules basses consommations.</li>
              <li>Mise en œuvre de matériaux labellisés éco-énergie</li>
              <li>Maîtrise des dépenses énergétiques</li>
              <li>Economie des ressources naturelles</li>
              <li>Réduction des nuisances sonores</li>
              <li>Sensibilisation des collaborateurs aux gestes écologiques au quotidien (photocopies recto-verso, usage du papier recyclé, extinction des lumières…)</li>
            </ul>
          </section>
          {/* CTA Section */}
          <section className="mt-20 mb-10 animate-fade-in">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center border border-[#ff914d]/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vous souhaitez en savoir plus sur notre engagement environnemental ?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos projets et découvrir comment notre approche écologique peut bénéficier à votre chantier.  
              </p>
              <Button href="/contact" className="bg-[#ff914d] hover:bg-[#e87f3a] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center">
                Nous contacter
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EnvironnementDetails;
