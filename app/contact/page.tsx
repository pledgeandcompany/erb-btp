import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata = {
  title: 'Contact | ERB-BTP Construction et Rénovation',
  description: 'Contactez ERB-BTP pour tous vos projets de construction et rénovation. Demandez un devis gratuit ou obtenez plus d&#39;informations sur nos services.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16 md:py-24">
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
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Comment demander un devis ?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Vous pouvez demander un devis en remplissant notre formulaire de contact, en nous appelant directement ou en nous envoyant un email. Nous vous répondrons dans les 24-48 heures ouvrables.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quelles zones géographiques couvrez-vous ?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nous intervenons principalement à Paris et en Île-de-France. N&#39;hésitez pas à nous contacter pour vérifier si nous pouvons intervenir dans votre région.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quels types de projets prenez-vous en charge ?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nous prenons en charge tous types de projets de construction et rénovation, qu&#39;il s&#39;agisse de travaux résidentiels, commerciaux ou industriels. Consultez notre page Services pour plus de détails.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quelles sont vos garanties ?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tous nos travaux sont garantis conformément à la législation en vigueur. Nous offrons une garantie décennale pour les gros œuvres et une garantie biennale pour les éléments d&#39;équipement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-yellow-50 dark:bg-yellow-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Vous avez un projet ou une question ? N&#39;hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+33745374621" 
              className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appelez-nous
            </a>
            <a 
              href="mailto:ali.tombari@erb-btp.fr" 
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envoyez un email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
