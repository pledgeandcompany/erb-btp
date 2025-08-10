import Hero from '@/components/home/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCarousel from '@/components/ui/ProjectCarousel';
import Qualifications from '@/components/home/Qualifications';
import Collaborations from '@/components/home/Collaborations';
import ServiceCarousel from '@/components/ui/ServiceCarousel';
import { Button } from '@/components/ui/Button';
import Script from 'next/script';

export default function Home() {
  // Services data
  const services = [
    {
      title: "Maçonnerie générale",
      description: "Construction de murs, fondations, et structures en béton armé pour tous types de bâtiments.",
      icon: "🏗️",
      href: "/services#construction",
    },
    {
      title: "Rénovation",
      description: "Rénovation complète ou partielle de bâtiments résidentiels et commerciaux.",
      icon: "🔨",
      href: "/services#renovation",
    },
    {
      title: "Gros œuvre",
      description: "Réalisation de l'ensemble des travaux de structure et d'enveloppe du bâtiment.",
      icon: "🏢",
      href: "/services#construction",
    },
    {
      title: "Aménagement extérieur",
      description: "Création de terrasses, allées, et aménagements paysagers pour valoriser votre propriété.",
      icon: "🌳",
      href: "/services#exterieur",
    },
    {
      title: "Isolation thermique",
      description: "Solutions d'isolation performantes pour améliorer l'efficacité énergétique de votre bâtiment.",
      icon: "❄️",
      href: "/services#isolation",
    },
    {
      title: "Étanchéité",
      description: "Travaux d'étanchéité pour toitures, terrasses et fondations contre les infiltrations d'eau.",
      icon: "💧",
      href: "/services#etancheite",
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

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos Services"
            subtitle="ERB-BTP vous propose une gamme complète de services pour tous vos projets de construction et rénovation."
          />
          
          <ServiceCarousel services={services} />
        </div>
      </section>

      {/* Qualifications Section */}
      <Qualifications />

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
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

      {/* Collaborations Section */}
      <Collaborations />

      {/* Contact CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Prêt à démarrer votre projet?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ERB-BTP",
            "image": "/images/logo-erb-btp.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "86 Rue Voltaire",
              "addressLocality": "Montreuil",
              "addressRegion": "Île-de-France",
              "postalCode": "93100",
              "addressCountry": "France"
            },
            "telephone": "+33 6 29 83 94 71",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.erb-btp.com",
              "https://www.facebook.com/erb-btp",
              "https://www.instagram.com/erb_btp"
            ]
          }),
        }}
      />
    </>
  );
}
