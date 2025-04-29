import { ProjectItem } from '@/components/projects/ProjectsGrid';

export interface ProjectDetails {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  client: string;
  duration?: string;
  description: string;
  amount?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

// List of all projects for the grid view
export const projectsList: ProjectItem[] = [
  {
    id: '1',
    title: 'Résidence du Mont d\'Eaubonne',
    category: 'Résidentiel',
    location: 'Eaubonne, France',
    year: '2024',
    slug: 'residence-mont-eaubonne'
  },
  {
    id: '2',
    title: 'Résidence Rue d\'Aigremont',
    category: 'Résidentiel',
    location: 'Poissy, France',
    year: '2024',
    slug: 'residence-aigremont-poissy'
  },
  {
    id: '3',
    title: 'Club House Tennis',
    category: 'Public',
    location: 'Paris, France',
    year: '2024',
    slug: 'club-house-tennis-paris'
  },
  {
    id: '4',
    title: 'Maternelle Marie Laurencin',
    category: 'Public',
    location: 'Montesson, France',
    year: '2024',
    slug: 'maternelle-montesson'
  },
  {
    id: '5',
    title: 'Singapore Airlines',
    category: 'Commercial',
    location: 'Paris, France',
    year: '2024',
    slug: 'singapore-airlines-paris'
  },
  {
    id: '6',
    title: 'École Pierre Curie',
    category: 'Public',
    location: 'Bondy, France',
    year: '2024',
    slug: 'ecole-pierre-curie-bondy'
  },
  {
    id: '7',
    title: 'Résidence La Briche',
    category: 'Résidentiel',
    location: 'Épinay-sur-Seine, France',
    year: '2024',
    slug: 'residence-la-briche'
  },
  {
    id: '8',
    title: 'Atelier Radiguet',
    category: 'Public',
    location: 'Paris, France',
    year: '2024',
    slug: 'atelier-radiguet-paris'
  },
  {
    id: '9',
    title: 'Résidence Le Barceleau',
    category: 'Résidentiel',
    location: 'Les Ulis, France',
    year: '2016',
    slug: 'residence-barceleau-ulis'
  },
  {
    id: '10',
    title: 'Groupe Scolaire Henri Barbusse',
    category: 'Public',
    location: 'Garges-lès-Gonesse, France',
    year: '2016',
    slug: 'gs-barbusse-garges'
  },
  {
    id: '11',
    title: 'École Pasteur',
    category: 'Public',
    location: 'Villejuif, France',
    year: '2016',
    slug: 'ecole-pasteur-villejuif'
  },
  {
    id: '12',
    title: 'Hyper Casino',
    category: 'Commercial',
    location: 'Nemours, France',
    year: '2016',
    slug: 'hyper-casino-nemours'
  },
  {
    id: '13',
    title: 'Résidence Avenue du 14 Juillet',
    category: 'Résidentiel',
    location: 'Aulnay-sous-Bois, France',
    year: '2016',
    slug: 'residence-14juillet-aulnay'
  },
  {
    id: '14',
    title: 'Résidence Rue Letellier',
    category: 'Résidentiel',
    location: 'Paris, France',
    year: '2016',
    slug: 'residence-letellier-paris'
  },
  {
    id: '15',
    title: 'Résidence Rue Georges Buffon',
    category: 'Résidentiel',
    location: 'Mantes-la-Jolie, France',
    year: '2016',
    slug: 'residence-buffon-mantes'
  },
  {
    id: '16',
    title: 'Bâtiment Commercial Rue de la Haie Coq',
    category: 'Commercial',
    location: 'Aubervilliers, France',
    year: '2016',
    slug: 'batiment-haie-coq-aubervilliers'
  },
  {
    id: '17',
    title: 'Groupe Scolaire Éco-Quartier',
    category: 'Public',
    location: 'Louvres, France',
    year: '2016',
    slug: 'gs-eco-quartier-louvres'
  },
  {
    id: '18',
    title: 'Immeuble Kupka C',
    category: 'Commercial',
    location: 'Puteaux, France',
    year: '2016',
    slug: 'immeuble-kupka-puteaux'
  },
  {
    id: '19',
    title: 'Quartier des Beaudottes',
    category: 'Résidentiel',
    location: 'Sevran, France',
    year: '2022',
    slug: 'quartier-beaudottes'
  },
  {
    id: '20',
    title: 'Résidence Claude Bonnet',
    category: 'Résidentiel',
    location: 'Cachan, France',
    year: '2022',
    slug: 'residence-claude-bonnet'
  },
  {
    id: '21',
    title: 'Résidence Quai de Stalingrad',
    category: 'Résidentiel',
    location: 'Boulogne-Billancourt, France',
    year: '2023',
    slug: 'residence-quai-stalingrad'
  },
  {
    id: '22',
    title: 'Résidence la Villeparc',
    category: 'Résidentiel',
    location: 'Maurepas, France',
    year: '2023',
    slug: 'residence-villeparc'
  },
  {
    id: '23',
    title: 'Rue Gaston le Cousin',
    category: 'Résidentiel',
    location: 'Conflans-Sainte-Honorine, France',
    year: '2023',
    slug: 'rue-gaston-cousin'
  },
  {
    id: '24',
    title: 'Rue Georges Pittard',
    category: 'Résidentiel',
    location: 'Paris, France',
    year: '2023',
    slug: 'rue-georges-pittard'
  },
  {
    id: '25',
    title: 'Rue Marcel Sembat',
    category: 'Résidentiel',
    location: 'Athis-Mons, France',
    year: '2023',
    slug: 'rue-marcel-sembat'
  },
  {
    id: '26',
    title: 'Résidence Le Petit Bois',
    category: 'Résidentiel',
    location: 'Chaville, France',
    year: '2023',
    slug: 'residence-petit-bois'
  },
  {
    id: '27',
    title: 'Résidence Hipolyte Pascal',
    category: 'Résidentiel',
    location: 'Paris, France',
    year: '2023',
    slug: 'residence-hipolyte-pascal'
  },
  {
    id: '28',
    title: 'Rue des Grimettes',
    category: 'Résidentiel',
    location: 'Meudon, France',
    year: '2023',
    slug: 'rue-grimettes'
  },
  {
    id: '29',
    title: 'Rue Henri Dunant',
    category: 'Résidentiel',
    location: 'Savigny-sur-Orge, France',
    year: '2023',
    slug: 'rue-henri-dunant'
  },
  {
    id: '30',
    title: 'Résidence les Roitelets',
    category: 'Résidentiel',
    location: 'Paris, France',
    year: '2023',
    slug: 'residence-roitelets'
  },
  {
    id: '31',
    title: 'Centre Commercial Belle Epine',
    category: 'Commercial',
    location: 'Thiais, France',
    year: '2023',
    slug: 'centre-belle-epine'
  }
];

// List of project categories for filtering
export const projectCategories = [
  { id: 'all', name: 'Tous' },
  { id: 'Résidentiel', name: 'Résidentiel' },
  { id: 'Commercial', name: 'Commercial' },
  { id: 'Public', name: 'Public' }
];

// Detailed information for each project
export const projectsDetails: Record<string, ProjectDetails> = {
  'residence-mont-eaubonne': {
    id: '1',
    title: 'Résidence du Mont d\'Eaubonne',
    location: 'Eaubonne, France',
    category: 'Résidentiel',
    year: '2024',
    client: 'NEXITY COLOMBES',
    description: 'Travaux de réfection d\'étanchéité avec amélioration énergétique et sécurisation de 10 bâtiments d\'habitation, soit environ 8 000 m².',
    amount: '1 026 000'
  },
  'residence-aigremont-poissy': {
    id: '2',
    title: 'Résidence Rue d\'Aigremont',
    location: 'Poissy, France',
    category: 'Résidentiel',
    year: '2024',
    client: 'TOIT et JOIE',
    description: 'Réfection complète de 1 800 m² de complexe iso / étanche sur terrasses inaccessibles de 4 bâtiments d\'habitation, 543 ml de gardes corps et couvertine.',
    amount: '314 000'
  },
  'club-house-tennis-paris': {
    id: '3',
    title: 'Club House Tennis',
    location: 'Paris, France',
    category: 'Public',
    year: '2024',
    client: 'Mairie de Vincennes',
    description: 'Réfection complète d\'une terrasse accessible de 200 m², y compris protection par dalles sur plots et remplacement de 12 coupoles d\'éclairages zénithale.',
    amount: '38 831'
  },
  'maternelle-montesson': {
    id: '4',
    title: 'Maternelle Marie Laurencin',
    location: 'Montesson, France',
    category: 'Public',
    year: '2024',
    client: 'Mairie de Montesson',
    description: 'Travaux de réfection d\'une terrasse accessible de 72 m², ainsi que d\'une terrasse inaccessible auto protégée de 78 m².',
    amount: '28 804'
  },
  'singapore-airlines-paris': {
    id: '5',
    title: 'Singapore Airlines',
    location: 'Paris, France',
    category: 'Commercial',
    year: '2024',
    client: 'COFIMA',
    description: 'Travaux de réfection de la toiture terrasse inaccessible de 190 m² et pose de 45 ml de garde-corps.',
    amount: '33 853'
  },
  'ecole-pierre-curie-bondy': {
    id: '6',
    title: 'École Pierre Curie',
    location: 'Bondy, France',
    category: 'Public',
    year: '2024',
    client: 'Ville de BONDY',
    description: 'Travaux de réfection de 2 terrasses inaccessibles (1000 m²) et pose de 250 ml de garde-corps.',
    amount: '89 000'
  },
  'residence-la-briche': {
    id: '7',
    title: 'Résidence La Briche',
    location: 'Épinay-sur-Seine, France',
    category: 'Résidentiel',
    year: '2024',
    client: 'Cabinet SDC',
    description: 'Travaux de réfection de 2 terrasses inaccessibles (1200 m²) et pose de 300 ml de garde-corps.',
    amount: '174 000'
  },
  'atelier-radiguet-paris': {
    id: '8',
    title: 'Atelier Radiguet',
    location: 'Paris, France',
    category: 'Public',
    year: '2024',
    client: 'MAIRIE DE PARIS',
    description: 'Ravalement et isolation thermique par l\'extérieur de l\'immeuble (ITE), soit environ 1 025 m².',
    amount: '122 000'
  },
  'residence-barceleau-ulis': {
    id: '9',
    title: 'Résidence Le Barceleau',
    location: 'Les Ulis, France',
    category: 'Résidentiel',
    year: '2016',
    client: 'TOIT ET JOIE',
    description: 'Réfection complète de 11 000 m² de complexe iso / étanche sur toitures terrasses inaccessibles de 42 bâtiments d\'habitation, 2 200 ml de gardes corps et couvertines.',
    amount: '850 000'
  },
  'gs-barbusse-garges': {
    id: '10',
    title: 'Groupe Scolaire Henri Barbusse',
    location: 'Garges-lès-Gonesse, France',
    category: 'Public',
    year: '2016',
    client: 'Ville de Garges les Gonesse',
    description: 'Réfection complète de 7 000 m² de complexe iso / étanche sur toitures terrasses inaccessible et accessibles',
    amount: '762 000'
  },
  'ecole-pasteur-villejuif': {
    id: '11',
    title: 'École Pasteur',
    location: 'Villejuif, France',
    category: 'Public',
    year: '2016',
    client: 'Ville de Villejuif',
    description: 'Réfection de 2 200 m² de complexe iso / étanche sur toitures terrasse inaccessible et accessible, 462 ml de gardes corps et couvertines.',
    amount: '324 000'
  },
  'hyper-casino-nemours': {
    id: '12',
    title: 'Hyper Casino',
    location: 'Nemours, France',
    category: 'Commercial',
    year: '2016',
    client: 'SUDECO',
    description: 'Rechapage par membranes synthétique de 5000 m² de toiture terrasse inaccessible sur support Bac Acier, 200 ml de gardes corps et couvertines',
    amount: '142 000'
  },
  'residence-14juillet-aulnay': {
    id: '13',
    title: 'Résidence Avenue du 14 Juillet',
    location: 'Aulnay-sous-Bois, France',
    category: 'Résidentiel',
    year: '2016',
    client: 'Cabinet Marlier',
    description: 'Réfection de 600 m² de couverture zinc.',
    amount: '254 000'
  },
  'residence-letellier-paris': {
    id: '14',
    title: 'Résidence Rue Letellier',
    location: 'Paris, France',
    category: 'Résidentiel',
    year: '2016',
    client: 'Syndic de copropriété',
    description: 'Réfection de 300 m² de couverture Zinc.',
    amount: '157 000'
  },
  'residence-buffon-mantes': {
    id: '15',
    title: 'Résidence Rue Georges Buffon',
    location: 'Mantes-la-Jolie, France',
    category: 'Résidentiel',
    year: '2016',
    client: 'Syndic de copropriété',
    description: 'Réfection complète de 1250 m² de complexe iso / étanche sur toitures terrasses inaccessibles de 1 bâtiments d\'habitation, 270 ml de gardes corps et couvertines.',
    amount: '137 000'
  },
  'batiment-haie-coq-aubervilliers': {
    id: '16',
    title: 'Bâtiment Commercial Rue de la Haie Coq',
    location: 'Aubervilliers, France',
    category: 'Commercial',
    year: '2016',
    client: 'ICADE',
    description: 'Réfection complète de 1000 m² de complexe iso / étanche sur toitures terrasses inaccessibles de 1 bâtiment d\'exploitation commercial, avec remplacement de 11 voutes, lanterneaux de désenfumages, 200 ml de gardes corps et couvertines.',
    amount: '247 000'
  },
  'gs-eco-quartier-louvres': {
    id: '17',
    title: 'Groupe Scolaire Éco-Quartier',
    location: 'Louvres, France',
    category: 'Public',
    year: '2016',
    client: 'Mairie de LOUVRES',
    description: 'Construction d\'un groupe scolaire de 18 classes et d\'une crèche de 60 berceaux. Notre mission comprend l\'exécution et la mise en œuvre de tous les ouvrages de toiture étanchéité à réaliser dans le cadre de la construction du groupe scolaire et de la crèche situé dans la ZAC ECO-QUARTIER.',
    amount: '420 000'
  },
  'immeuble-kupka-puteaux': {
    id: '18',
    title: 'Immeuble Kupka C',
    location: 'Puteaux, France',
    category: 'Commercial',
    year: '2016',
    client: 'ARTELIA',
    description: 'Réfection complète de l\'étanchéité de l\'immeuble KUPKA C La réfection complète de l\'étanchéité de 2 immeubles sur une surface de 1046 m².',
    amount: '220 000'
  },
  'quartier-beaudottes': {
    id: '19',
    title: 'Quartier des Beaudottes',
    location: 'Sevran, France',
    category: 'Résidentiel',
    year: '2022',
    client: 'Immobilière 3F',
    description: 'Rénovation complète des toitures et terrasses de plusieurs bâtiments résidentiels dans le quartier des Beaudottes.'
  },
  'residence-claude-bonnet': {
    id: '20',
    title: 'Résidence Claude Bonnet',
    location: 'Cachan, France',
    category: 'Résidentiel',
    year: '2022',
    client: 'Immobilière 3F',
    description: 'Travaux d\'étanchéité et d\'isolation thermique sur les toitures terrasses de la résidence.'
  },
  'residence-quai-stalingrad': {
    id: '21',
    title: 'Résidence Quai de Stalingrad',
    location: 'Boulogne-Billancourt, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'Syndic de copropriété',
    description: 'Réfection complète de l\'étanchéité des terrasses et balcons avec mise en place d\'un nouveau système d\'évacuation des eaux pluviales.'
  },
  'residence-villeparc': {
    id: '22',
    title: 'Résidence la Villeparc',
    location: 'Maurepas, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'Syndic de copropriété',
    description: 'Rénovation des toitures terrasses avec amélioration de l\'isolation thermique et mise aux normes des garde-corps.'
  },
  'rue-gaston-cousin': {
    id: '23',
    title: 'Rue Gaston le Cousin',
    location: 'Conflans-Sainte-Honorine, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'Foncia Burel - 78 700 Conflans St Honorine',
    description: 'Réfection complète de 700 m² de complexe iso / étanche sur terrasses inaccessibles de bâtiments d\'habitation, ainsi que 150 ml de garde-corps.',
    amount: '93 600'
  },
  'rue-georges-pittard': {
    id: '24',
    title: 'Rue Georges Pittard',
    location: 'Paris, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'Cabinet Liebert – 75008',
    description: 'Réfection complète de 530 m² de complexe iso / étanche sur terrasses inaccessibles de bâtiments d\'habitation.',
    amount: '61 500'
  },
  'rue-marcel-sembat': {
    id: '25',
    title: 'Rue Marcel Sembat',
    location: 'Athis-Mons, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'SCI SEMBAT – 75015 PARIS',
    description: 'Réfection complète de 620 m² de complexe iso / étanche avec protection végétalisée.',
    amount: '120 000'
  },
  'residence-petit-bois': {
    id: '26',
    title: 'Résidence Le Petit Bois',
    location: 'Chaville, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'G. IMMO – 75010 PARIS',
    description: 'Réfection complète de 700 m² de complexe iso / étanche sur terrasses inaccessibles de bâtiments d\'habitation.',
    amount: '135 000'
  },
  'residence-hipolyte-pascal': {
    id: '27',
    title: 'Résidence Hipolyte Pascal',
    location: 'Paris, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'CT CLARDIM – 92 120 MONTROUGE',
    description: 'Réfection complète de 1 700 m² de complexe iso / étanche sur terrasses inaccessibles de bâtiments d\'habitation.',
    amount: '234 000'
  },
  'rue-grimettes': {
    id: '28',
    title: 'Rue des Grimettes',
    location: 'Meudon, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'SCHUWER-ANJUERE – 92140 clamart',
    description: 'Réfection complète de 300 m² de complexe iso / étanche auto protégée avec 100 ml de garde-corps auto portant.',
    amount: '45 000'
  },
  'rue-henri-dunant': {
    id: '29',
    title: 'Rue Henri Dunant',
    location: 'Savigny-sur-Orge, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'SCCV Henri Dunant',
    description: 'Ravalement et isolation thermique par l\'extérieur de l\'immeuble (ITE).',
    amount: '50 000'
  },
  'residence-roitelets': {
    id: '30',
    title: 'Résidence les Roitelets',
    location: 'Paris, France',
    category: 'Résidentiel',
    year: '2023',
    client: 'ICF LA SABLIERE',
    description: 'Réfection complète de 6 000 m² de complexe iso / étanche sur terrasses inaccessibles de bâtiments d\'habitation, 1 300 ml de gardes corps et contre bardage d\'acrotère.',
    amount: '822 000'
  },
  'centre-belle-epine': {
    id: '31',
    title: 'Centre Commercial Belle Epine',
    location: 'Thiais, France',
    category: 'Commercial',
    year: '2023',
    client: 'SECAR - 75116 Paris',
    description: 'Travaux de réfection des commandes de désenfumages des galeries marchandes.',
    amount: '319 051'
  }
};
