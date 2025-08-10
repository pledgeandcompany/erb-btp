import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact | ERB-BTP Construction et Rénovation',
  description: 'Contactez ERB-BTP pour tous vos projets de construction et rénovation. Demandez un devis gratuit ou obtenez plus d&#39;informations sur nos services.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contactez-nous"
            subtitle="Nous sommes à votre écoute pour tous vos projets de construction et rénovation"
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Notre emplacement"
            subtitle="Venez nous rencontrer à notre bureau"
            centered={true}
          />
          
          <div className="mt-12">
            <ContactMap />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Questions fréquentes"
            subtitle="Trouvez rapidement des réponses à vos questions"
            centered={true}
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <ContactFAQ />
          </div>
        </div>
      </section>

    </main>
  );
}
