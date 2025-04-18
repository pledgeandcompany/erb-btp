import { ProjectItem } from '@/components/projects/ProjectsGrid';
import { ProjectCaseStudyProps } from '@/components/projects/ProjectCaseStudy';

// List of all projects for the grid view
export const projectsList: ProjectItem[] = [
  {
    id: '1',
    title: 'Résidence Mont d\'Eaubonne',
    category: 'Résidentiel',
    location: 'Eaubonne, France',
    year: '2024',
    slug: 'residence-mont-eaubonne'
  },
  {
    id: '2',
    title: 'Résidence La Briche',
    category: 'Résidentiel',
    location: 'Epinay-sur-Seine, France',
    year: '2024',
    slug: 'residence-la-briche'
  },
  {
    id: '3',
    title: 'Résidence Toit et Joie',
    category: 'Résidentiel',
    location: 'Poissy, France',
    year: '2024',
    slug: 'residence-toit-joie-poissy'
  },
  {
    id: '4',
    title: 'Club House Tennis',
    category: 'Public',
    location: 'Paris, France',
    year: '2024',
    slug: 'club-house-tennis-paris'
  },
  {
    id: '5',
    title: 'Atelier Radiguet',
    category: 'Public',
    location: 'Paris, France',
    year: '2024',
    slug: 'atelier-radiguet'
  },
  {
    id: '6',
    title: 'Résidence Hipolyte Pascal',
    category: 'Résidentiel',
    location: 'Paris, France',
    year: '2023',
    slug: 'residence-hipolyte-pascal'
  },
  {
    id: '7',
    title: 'Résidence Le Petit Bois',
    category: 'Résidentiel',
    location: 'Chaville, France',
    year: '2023',
    slug: 'residence-petit-bois'
  },
  {
    id: '8',
    title: 'Centre Commercial Belle Epine',
    category: 'Commercial',
    location: 'Thiais, France',
    year: '2023',
    slug: 'centre-commercial-belle-epine'
  },
  {
    id: '9',
    title: 'Résidence Les Roitelets',
    category: 'Résidentiel',
    location: 'Paris, France',
    year: '2023',
    slug: 'residence-les-roitelets'
  },
  {
    id: '10',
    title: 'Résidence Quai de Stalingrad',
    category: 'Résidentiel',
    location: 'Boulogne-Billancourt, France',
    year: '2023',
    slug: 'residence-quai-stalingrad'
  },
  {
    id: '11',
    title: 'Quartier des Beaudottes',
    category: 'Résidentiel',
    location: 'Sevran, France',
    year: '2022',
    slug: 'quartier-beaudottes'
  },
  {
    id: '12',
    title: 'Résidence Claude Bonnet',
    category: 'Résidentiel',
    location: 'Cachan, France',
    year: '2022',
    slug: 'residence-claude-bonnet'
  }
];

// Categories for filtering
export const projectCategories = [
  'Résidentiel',
  'Commercial',
  'Public',
  'Rénovation',
  'Industriel',
  'Tous'
];

// Project details for case studies
export const projectsDetails: Record<string, ProjectCaseStudyProps> = {
  'residence-mont-eaubonne': {
    id: '1',
    title: 'Résidence du Mont d\'Eaubonne',
    location: 'Eaubonne, France',
    category: 'Résidentiel',
    year: '2024',
    client: 'NEXITY COLOMBES',
    duration: '6 mois',
    imageSrc: '/images/projects/project1.jpg',
    galleryImages: [
      '/images/projects/project1.jpg',
      '/images/projects/project2.jpg',
      '/images/projects/project3.jpg',
    ],
    description: 'Travaux de réfection d\'étanchéité avec amélioration énergétique et sécurisation de 10 bâtiments d\'habitation, soit environ 8 000 m².',
    challenges: ['Ce projet d\'envergure a nécessité une coordination précise entre les différentes équipes pour assurer la réfection complète de l\'étanchéité tout en minimisant les perturbations pour les résidents.'],
    solutions: ['Nous avons mis en place un plan d\'intervention par phases, permettant de traiter chaque bâtiment de manière séquentielle tout en assurant une amélioration énergétique significative.'],
    results: ['Le projet a permis une amélioration notable de l\'efficacité énergétique des bâtiments, tout en assurant une étanchéité parfaite des toitures terrasses. La sécurisation des espaces a également été renforcée.']
  },
  'residence-la-briche': {
    id: '2',
    title: 'Résidence LA BRICHE',
    location: 'Epinay-sur-Seine, France',
    category: 'Résidentiel',
    year: '2024',
    client: 'Cabinet SDC',
    duration: '3 mois',
    imageSrc: '/images/projects/project2.jpg',
    galleryImages: [
      '/images/projects/project2.jpg',
      '/images/projects/project3.jpg',
      '/images/projects/project4.jpg',
    ],
    description: 'Travaux de réfection de 2 terrasses inaccessibles (1200 m²) et pose de 300 ml de garde-corps.',
    challenges: ['La configuration des terrasses et leur inaccessibilité ont représenté un défi technique important pour nos équipes.'],
    solutions: ['Nous avons utilisé des techniques spécifiques et un équipement adapté pour accéder aux zones difficiles tout en garantissant la sécurité de nos équipes.'],
    results: ['Les terrasses bénéficient désormais d\'une étanchéité parfaite et les garde-corps installés assurent une sécurité optimale pour les interventions de maintenance.']
  },
  'residence-toit-joie-poissy': {
    id: '3',
    title: 'Résidence de logements sociaux TOIT et JOIE',
    location: 'Poissy, France',
    category: 'Résidentiel',
    year: '2024',
    client: 'TOIT et JOIE',
    duration: '5 mois',
    imageSrc: '/images/projects/project3.jpg',
    galleryImages: [
      '/images/projects/project3.jpg',
      '/images/projects/project4.jpg',
      '/images/projects/project5.jpg',
    ],
    description: 'Réfection complète de 1 800 m² de complexe iso / étanche sur terrasses inaccessibles de 4 bâtiments d\'habitation, 543 ml de gardes corps et couvertine.',
    challenges: ['La coordination des travaux sur quatre bâtiments différents tout en maintenant l\'habitabilité des logements a constitué un défi majeur.'],
    solutions: ['Nous avons élaboré un planning précis d\'intervention par bâtiment, avec une communication constante avec les résidents pour minimiser les nuisances.'],
    results: ['Le projet a été livré dans les délais prévus, avec une qualité d\'exécution qui a permis d\'améliorer significativement l\'isolation et l\'étanchéité des bâtiments.']
  },
  'centre-commercial-belle-epine': {
    id: '8',
    title: 'Centre Commercial Régional BELLE EPINE',
    location: 'Thiais, France',
    category: 'Commercial',
    year: '2023',
    client: 'SECAR',
    duration: '4 mois',
    imageSrc: '/images/projects/project8.jpg',
    galleryImages: [
      '/images/projects/project8.jpg',
      '/images/projects/project9.jpg',
      '/images/projects/project10.jpg',
    ],
    description: 'Travaux de réfection des commandes de désenfumages des galeries marchandes.',
    challenges: ['Intervenir dans un centre commercial en activité tout en assurant la sécurité des usagers et en minimisant l\'impact sur l\'activité commerciale.'],
    solutions: ['Organisation des travaux principalement en horaires décalés (nuit) et mise en place d\'un phasage précis pour les interventions dans les zones publiques.'],
    results: ['Mise aux normes complète du système de désenfumage, garantissant une sécurité optimale pour les usagers du centre commercial.']
  },
  'residence-les-roitelets': {
    id: '9',
    title: 'Résidence les Roitelets',
    location: 'Paris, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'ICF LA SABLIERE',
    duration: '8 mois',
    imageSrc: '/images/projects/project9.jpg',
    galleryImages: [
      '/images/projects/project9.jpg',
      '/images/projects/project10.jpg',
      '/images/projects/project11.jpg',
    ],
    description: 'Réfection complète de 6 000 m² de complexe iso / étanche sur terrasses inaccessibles de bâtiments d\'habitation, 1 300 ml de gardes corps et contre bardage d\'acrotère.',
    challenges: ['L\'ampleur du projet et la nécessité d\'intervenir sur des terrasses inaccessibles tout en garantissant une parfaite étanchéité.'],
    solutions: ['Utilisation de techniques avancées d\'étanchéité et mise en place d\'équipes spécialisées pour les interventions en hauteur.'],
    results: ['Amélioration significative de l\'isolation thermique des bâtiments et élimination complète des problèmes d\'infiltration.']
  },
  'quartier-beaudottes': {
    id: '11',
    title: 'Quartier des Beaudottes',
    location: 'Sevran, France',
    category: 'Résidentiel',
    year: '2022',
    client: 'France Habitation',
    duration: '5 mois',
    imageSrc: '/images/projects/project11.jpg',
    galleryImages: [
      '/images/projects/project11.jpg',
      '/images/projects/project12.jpg',
      '/images/projects/project1.jpg',
    ],
    description: 'Réfection complète de 2695 m² de complexe iso / étanche sur terrasses inaccessibles de bâtiments d\'habitation.',
    challenges: ['Intervenir sur un ensemble de bâtiments d\'habitation en milieu occupé, avec des contraintes d\'accès importantes.'],
    solutions: ['Planification rigoureuse des interventions et mise en place d\'un système d\'accès sécurisé aux terrasses.'],
    results: ['Amélioration de l\'étanchéité et de l\'isolation thermique des bâtiments, contribuant à une réduction significative des déperditions énergétiques.']
  }
};
