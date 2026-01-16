import Hero from '@/components/home/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCarousel from '@/components/ui/ProjectCarousel';
import Qualifications from '@/components/home/Qualifications';
import Collaborations from '@/components/home/Collaborations';
import About from '@/components/home/About';
import { Button } from '@/components/ui/Button';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { generateMetadata } from '@/lib/seo-utils';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'ERB-BTP | Construction et Rénovation à Paris et Île-de-France',
  description: 'Entreprise de construction et rénovation spécialisée en maçonnerie, étanchéité, isolation et ravalement. Plus de 20 ans d\'expertise en Île-de-France.',
  keywords: ['construction', 'rénovation', 'maçonnerie', 'étanchéité', 'isolation', 'ravalement', 'BTP', 'Paris', 'Île-de-France'],
  openGraph: {
    images: [{
      url: '/og-logo.png',
      width: 1200,
      height: 630,
      alt: 'ERB-BTP Construction et Rénovation'
    }],
    type: 'website'
  }
});

export default function Home() {
  // Services data
  const services = [
    {
      title: "Maçonnerie générale",
      href: "/services#construction",
    },
    {
      title: "Rénovation",
      href: "/services#renovation",
    },
    {
      title: "Gros œuvre",
      href: "/services#construction",
    },
    {
      title: "Aménagement extérieur",
      href: "/services#exterieur",
    },
    {
      title: "Isolation thermique",
      href: "/services#isolation",
    },
    {
      title: "Étanchéité",
      href: "/services#etancheite",
    },
    {
      title: "Ravalement de façades",
      href: "/services#facades",
    },
    {
      title: "Couverture",
      href: "/services#couverture",
    },
    {
      title: "Charpente",
      href: "/services#charpente",
    },
    {
      title: "Ornementation",
      href: "/services#ornementation",
    },
    {
      title: "Électricité",
      href: "/services#electricite",
    },
    {
      title: "Plomberie",
      href: "/services#plomberie",
    },
    {
      title: "CVC (Chauffage, Ventilation, Climatisation)",
      href: "/services#cvc",
    },
    {
      title: "Serrurerie et métallerie",
      href: "/services#serrurerie",
    },
    {
      title: "Pierre de taille et marbrerie",
      href: "/services#pierre",
    },
    {
      title: "Bardage",
      href: "/services#bardage",
    },
    {
      title: "Murs ossature bois",
      href: "/services#ossature-bois",
    },
    {
      title: "Traitement amiante",
      href: "/services#amiante",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Résidence Mont d'Eaubonne",
      category: "Résidentiel",
      description: "Réfection d'étanchéité avec amélioration énergétique sur 10 bâtiments",
      href: "/projects/residence-mont-eaubonne",
    },
    {
      title: "Centre Commercial Belle Epine",
      category: "Commercial",
      description: "Réfection des commandes de désenfumages des galeries marchandes",
      href: "/projects/centre-commercial-belle-epine",
    },
    {
      title: "Résidence Les Roitelets",
      category: "Résidentiel",
      description: "Réfection de 6 000 m² de complexe iso/étanche et 1 300 ml de garde-corps",
      href: "/projects/residence-les-roitelets",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="ERB-BTP"
        subtitle="Votre partenaire de confiance pour tous vos projets de construction et rénovation"
        primaryButtonText="Découvrir nos services"
        primaryButtonHref="/services"
        imageSrc="/images/hero-construction.png"
      />
      
      {/* About Section */}
      <About />
      
      {/* Collaborations Section */}
      <Collaborations />

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos Services"
            subtitle="ERB-BTP vous propose une gamme complète de services pour tous vos projets de construction et rénovation."
          />
          
          <div className="grid grid-cols-4 gap-3">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700 text-center"
                aria-label={`Voir ${service.title}`}
              >
                <span className="inline-block text-xs font-medium text-gray-900 dark:text-white group-hover:text-[#ff914d] transition-colors duration-300">
                  {service.title}
                </span>
                <div className="h-1 w-0 bg-[#ff914d] group-hover:w-full transition-all duration-300 mt-2"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos Réalisations"
            subtitle="Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise et de notre savoir-faire."
          />
          
          <ProjectCarousel projects={projects} />
          
          <div className="text-center mt-10">
            <Button 
              href="/projets" 
              variant="default"
              size="lg"
            >
              Voir tous nos projets
            </Button>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <Qualifications />

      {/* Contact CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Prêt à démarrer votre projet?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd&#39;hui pour discuter de votre projet et découvrir comment ERB-BTP peut vous aider à le réaliser.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              href="/contact" 
              variant="default"
              size="lg"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>
      <LocalBusinessSchema 
        name="ERB-BTP"
        description="Entreprise de construction et rénovation spécialisée en maçonnerie, étanchéité, isolation et ravalement."
        telephone="+33 6 29 83 94 71"
        email="contact@erb-btp.com"
        url="https://www.erb-btp.com"
        logo="/images/logo-erb-btp.png"
        image="/images/hero-construction.png"
        address={{
          streetAddress: "86 Rue Voltaire",
          addressLocality: "Montreuil",
          postalCode: "93100",
          addressCountry: "FR"
        }}
        openingHours={[
          {
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          }
        ]}
        sameAs={[
          "https://www.erb-btp.com",
          "https://www.facebook.com/erb-btp",
          "https://www.instagram.com/erb_btp"
        ]}
      />
    </>
  );
}
