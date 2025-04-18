import Hero from '@/components/home/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/home/ServiceCard';
import ProjectCard from '@/components/home/ProjectCard';
import TestimonialCard from '@/components/home/TestimonialCard';
import Qualifications from '@/components/home/Qualifications';
import { Button } from '@/components/ui/Button';

export default function Home() {
  // Services data
  const services = [
    {
      title: "Maçonnerie générale",
      description: "Construction de murs, fondations, et structures en béton armé pour tous types de bâtiments.",
      icon: "🏗️",
      href: "/services/maconnerie-generale",
    },
    {
      title: "Rénovation",
      description: "Rénovation complète ou partielle de bâtiments résidentiels et commerciaux.",
      icon: "🔨",
      href: "/services/renovation",
    },
    {
      title: "Gros œuvre",
      description: "Réalisation de l'ensemble des travaux de structure et d'enveloppe du bâtiment.",
      icon: "🏢",
      href: "/services/gros-oeuvre",
    },
    {
      title: "Aménagement extérieur",
      description: "Création de terrasses, allées, et aménagements paysagers pour valoriser votre propriété.",
      icon: "🌳",
      href: "/services/amenagement-exterieur",
    },
    {
      title: "Isolation thermique",
      description: "Solutions d'isolation performantes pour améliorer l'efficacité énergétique de votre bâtiment.",
      icon: "❄️",
      href: "/services/isolation-thermique",
    },
    {
      title: "Étanchéité",
      description: "Travaux d'étanchéité pour toitures, terrasses et fondations contre les infiltrations d'eau.",
      icon: "💧",
      href: "/services/etancheite",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Résidence Les Oliviers",
      category: "Construction neuve",
      imageSrc: "/images/project1.jpg",
      href: "/projets/residence-les-oliviers",
    },
    {
      title: "Rénovation Haussmannienne",
      category: "Rénovation",
      imageSrc: "/images/project2.jpg",
      href: "/projets/renovation-haussmannienne",
    },
    {
      title: "Centre Commercial Atlantis",
      category: "Bâtiment commercial",
      imageSrc: "/images/project3.jpg",
      href: "/projets/centre-commercial-atlantis",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Propriétaire",
      testimonial: "ERB-BTP a réalisé la rénovation complète de notre maison avec professionnalisme et dans les délais. Nous sommes ravis du résultat!",
    },
    {
      name: "Jean Martin",
      role: "Architecte",
      testimonial: "Je travaille régulièrement avec ERB-BTP pour mes projets. Leur équipe est compétente, réactive et propose des solutions innovantes.",
    },
    {
      name: "Société Immobilière Provence",
      role: "Client professionnel",
      testimonial: "Pour notre résidence de 40 logements, ERB-BTP a su respecter le cahier des charges et livrer un travail de grande qualité.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="ERB-BTP <span class='text-yellow-400'>Construction</span>"
        subtitle="Votre partenaire de confiance pour tous vos projets de construction et rénovation"
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText="Nos services"
        secondaryButtonHref="/services"
        imageSrc="/images/hero-construction.png"
      />

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos Services"
            subtitle="ERB-BTP vous propose une gamme complète de services pour tous vos projets de construction et rénovation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                href={project.href}
              />
            ))}
          </div>
          
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

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre priorité absolue. Voici ce qu'ils pensent de notre travail."
            className="dark:text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

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
            <Button 
              href="tel:+33123456789" 
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:bg-transparent dark:text-white dark:border-white"
            >
              +33 1 23 45 67 89
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
