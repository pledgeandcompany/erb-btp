import { ProjectItem } from '@/components/projects/ProjectsGrid';
import { ProjectCaseStudyProps } from '@/components/projects/ProjectCaseStudy';

// List of all projects for the grid view
export const projectsList: ProjectItem[] = [
  {
    id: '1',
    title: 'Résidence Les Ormes',
    category: 'Résidentiel',
    location: 'Paris, France',
    year: '2023',
    imageSrc: '/images/projects/project1.jpg',
    slug: 'residence-les-ormes'
  },
  {
    id: '2',
    title: 'Centre Commercial Étoile',
    category: 'Commercial',
    location: 'Lyon, France',
    year: '2022',
    imageSrc: '/images/projects/project2.jpg',
    slug: 'centre-commercial-etoile'
  },
  {
    id: '3',
    title: 'Rénovation Haussmannienne',
    category: 'Rénovation',
    location: 'Paris, France',
    year: '2022',
    imageSrc: '/images/projects/project3.jpg',
    slug: 'renovation-haussmannienne'
  },
  {
    id: '4',
    title: 'Immeuble de Bureaux Horizon',
    category: 'Commercial',
    location: 'Marseille, France',
    year: '2021',
    imageSrc: '/images/projects/project4.jpg',
    slug: 'immeuble-bureaux-horizon'
  },
  {
    id: '5',
    title: 'Villa Méditerranée',
    category: 'Résidentiel',
    location: 'Nice, France',
    year: '2021',
    imageSrc: '/images/projects/project5.jpg',
    slug: 'villa-mediterranee'
  },
  {
    id: '6',
    title: 'Rénovation Énergétique Collectif',
    category: 'Rénovation',
    location: 'Lille, France',
    year: '2020',
    imageSrc: '/images/projects/project6.jpg',
    slug: 'renovation-energetique-collectif'
  },
  {
    id: '7',
    title: 'Complexe Sportif Municipal',
    category: 'Public',
    location: 'Bordeaux, France',
    year: '2020',
    imageSrc: '/images/projects/project7.jpg',
    slug: 'complexe-sportif-municipal'
  },
  {
    id: '8',
    title: 'Réhabilitation Ancienne Usine',
    category: 'Industriel',
    location: 'Nantes, France',
    year: '2019',
    imageSrc: '/images/projects/project8.jpg',
    slug: 'rehabilitation-ancienne-usine'
  },
  {
    id: '9',
    title: 'Résidence Seniors Les Tilleuls',
    category: 'Résidentiel',
    location: 'Strasbourg, France',
    year: '2019',
    imageSrc: '/images/projects/project9.jpg',
    slug: 'residence-seniors-tilleuls'
  }
];

// Detailed case studies for individual project pages
export const projectsDetails: Record<string, ProjectCaseStudyProps> = {
  'residence-les-ormes': {
    id: '1',
    title: 'Résidence Les Ormes',
    location: 'Paris, France',
    category: 'Résidentiel',
    year: '2023',
    duration: '18 mois',
    client: 'Groupe Immobilier Parisien',
    description: 'Construction d\'un ensemble résidentiel de 45 appartements haut de gamme répartis sur 6 étages, avec parking souterrain et espaces verts communs. Le projet a été conçu pour s\'intégrer harmonieusement dans le quartier tout en offrant un confort moderne et une efficacité énergétique optimale.',
    challenges: [
      'Terrain exigu en milieu urbain dense',
      'Contraintes architecturales strictes liées au plan local d\'urbanisme',
      'Exigences élevées en matière de performance énergétique',
      'Délai de livraison serré'
    ],
    solutions: [
      'Utilisation de techniques de construction modulaire pour optimiser le temps de chantier',
      'Collaboration étroite avec les architectes et les autorités locales pour respecter les contraintes urbanistiques',
      'Mise en œuvre de solutions d\'isolation thermique et acoustique de pointe',
      'Planification rigoureuse et coordination efficace des différents corps de métier'
    ],
    results: [
      'Livraison du projet dans les délais impartis',
      'Obtention de la certification BBC (Bâtiment Basse Consommation)',
      'Satisfaction des futurs résidents lors des visites pré-livraison',
      'Intégration réussie dans le paysage urbain existant'
    ],
    imageSrc: '/images/projects/project1.jpg',
    galleryImages: [
      '/images/projects/project1-gallery1.jpg',
      '/images/projects/project1-gallery2.jpg',
      '/images/projects/project1-gallery3.jpg',
      '/images/projects/project1-gallery4.jpg',
      '/images/projects/project1-gallery5.jpg',
      '/images/projects/project1-gallery6.jpg'
    ]
  },
  'centre-commercial-etoile': {
    id: '2',
    title: 'Centre Commercial Étoile',
    location: 'Lyon, France',
    category: 'Commercial',
    year: '2022',
    duration: '24 mois',
    client: 'Développement Commercial Rhône',
    description: 'Construction d\'un centre commercial de 25 000 m² comprenant 60 boutiques, un hypermarché, des restaurants et un parking de 800 places. Le projet visait à créer un lieu de shopping moderne et attractif tout en respectant des normes environnementales strictes.',
    challenges: [
      'Gestion d\'un chantier de grande envergure',
      'Coordination de nombreux intervenants et sous-traitants',
      'Respect des normes de sécurité pour les établissements recevant du public',
      'Intégration de technologies intelligentes pour la gestion du bâtiment'
    ],
    solutions: [
      'Mise en place d\'une équipe dédiée à la gestion du projet avec des réunions hebdomadaires',
      'Utilisation d\'un logiciel BIM pour optimiser la coordination entre les différents corps de métier',
      'Collaboration avec des experts en sécurité dès la phase de conception',
      'Installation de systèmes de gestion technique centralisée pour optimiser la consommation énergétique'
    ],
    results: [
      'Ouverture du centre commercial selon le calendrier prévu',
      'Obtention de la certification BREEAM Excellent pour la performance environnementale',
      'Taux d\'occupation des espaces commerciaux de 95% à l\'ouverture',
      'Réduction de 30% de la consommation énergétique par rapport aux standards du secteur'
    ],
    imageSrc: '/images/projects/project2.jpg',
    galleryImages: [
      '/images/projects/project2-gallery1.jpg',
      '/images/projects/project2-gallery2.jpg',
      '/images/projects/project2-gallery3.jpg',
      '/images/projects/project2-gallery4.jpg',
      '/images/projects/project2-gallery5.jpg',
      '/images/projects/project2-gallery6.jpg'
    ]
  },
  'renovation-haussmannienne': {
    id: '3',
    title: 'Rénovation Haussmannienne',
    location: 'Paris, France',
    category: 'Rénovation',
    year: '2022',
    duration: '12 mois',
    client: 'SCI Patrimoine Parisien',
    description: 'Rénovation complète d\'un immeuble haussmannien du 8ème arrondissement de Paris, comprenant la restauration des façades, la rénovation des parties communes et la restructuration de 8 appartements de prestige tout en préservant les éléments architecturaux d\'origine.',
    challenges: [
      'Préservation des éléments patrimoniaux (moulures, parquets, cheminées)',
      'Mise aux normes techniques tout en respectant l\'architecture d\'origine',
      'Travaux en site occupé pour certains appartements',
      'Contraintes logistiques liées à la situation en centre-ville'
    ],
    solutions: [
      'Collaboration avec des artisans spécialisés dans la restauration du patrimoine',
      'Intégration discrète des nouvelles technologies et normes de sécurité',
      'Planification minutieuse des interventions pour minimiser les nuisances',
      'Organisation logistique adaptée aux contraintes urbaines'
    ],
    results: [
      'Restauration fidèle des éléments patrimoniaux',
      'Modernisation réussie des équipements et installations techniques',
      'Valorisation significative du bien immobilier',
      'Satisfaction des propriétaires et des occupants'
    ],
    imageSrc: '/images/projects/project3.jpg',
    galleryImages: [
      '/images/projects/project3-gallery1.jpg',
      '/images/projects/project3-gallery2.jpg',
      '/images/projects/project3-gallery3.jpg',
      '/images/projects/project3-gallery4.jpg',
      '/images/projects/project3-gallery5.jpg',
      '/images/projects/project3-gallery6.jpg'
    ]
  }
};

// Categories for filtering
export const projectCategories = [
  'Résidentiel',
  'Commercial',
  'Rénovation',
  'Public',
  'Industriel'
];
