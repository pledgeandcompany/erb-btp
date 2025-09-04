import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactFAQ from '@/components/contact/ContactFAQ';
import ContactPageSchema from '@/components/seo/ContactPageSchema';
import { generateMetadata } from '@/lib/seo-utils';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Contact | ERB-BTP Construction et Rénovation',
  description: 'Contactez ERB-BTP pour tous vos projets de construction et rénovation. Demandez un devis gratuit ou obtenez plus d\'informations sur nos services.',
  path: '/contact',
  keywords: ['contact', 'devis', 'ERB-BTP', 'construction', 'rénovation', 'Paris', 'Île-de-France', 'formulaire de contact'],
  openGraph: {
    images: [{
      url: '/images/contact-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Contactez ERB-BTP'
    }],
    type: 'website'
  }
});

export default function ContactPage() {
  return (
    <main>
      <ContactPageSchema />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contactez-nous"
            subtitle="Nous sommes à votre écoute pour tous vos projets de construction et rénovation"
            centered={true}
          />
          
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 relative">
            <div className="lg:shadow-xl lg:rounded-xl lg:overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <ContactForm />
            </div>
            <div className="lg:shadow-xl lg:rounded-xl lg:overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre emplacement"
            subtitle="Venez nous rencontrer à notre bureau"
            centered={true}
          />
          
          <div className="mt-12 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto transform hover:-translate-y-1">
            <ContactMap />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Questions fréquentes"
            subtitle="Trouvez rapidement des réponses à vos questions"
            centered={true}
          />
          
          <div className="mt-12 max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
            <ContactFAQ />
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 dark:text-gray-400">Vous ne trouvez pas la réponse à votre question ?</p>
            <a href="#contact-form" className="inline-flex items-center mt-3 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors duration-300">
              <span>Contactez-nous directement</span>
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
