import React from 'react';

export const metadata = {
  title: "Politique de Confidentialité | ERB-BTP Construction",
  description: "Informations sur la protection de vos données personnelles par ERB-BTP Construction."
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-28 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Protection de vos données personnelles
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="mb-4">
                La présente politique de confidentialité a pour objet d&apos;informer les utilisateurs du site web erb-btp.fr sur la manière dont leurs données personnelles sont collectées et traitées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Données collectées</h2>
              <p className="mb-4">
                ERB-BTP Construction s&apos;engage à respecter la confidentialité des données personnelles des utilisateurs de son site web.
              </p>
              <p className="mb-4">
                Nous collectons et traitons des données personnelles pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Gestion des demandes d&apos;information et de devis</li>
                <li>Communication avec l&apos;utilisateur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Utilisation des données</h2>
              <p className="mb-4">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Répondre à vos demandes de contact ou de devis</li>
                <li>Vous fournir les services que vous avez demandés</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des communications marketing si vous y avez consenti</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Base légale du traitement</h2>
              <p className="mb-4">
                Nous traitons vos données personnelles sur les bases légales suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Votre consentement</li>
                <li>L&apos;exécution d&apos;un contrat auquel vous êtes partie</li>
                <li>Le respect de nos obligations légales</li>
                <li>Nos intérêts légitimes, à condition qu&apos;ils ne prévalent pas sur vos droits et libertés fondamentaux</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Conservation des données</h2>
              <p className="mb-4">
                Nous ne conservons vos données que pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Partage des données</h2>
              <p className="mb-4">
                Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos données avec :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Nos sous-traitants et prestataires de services qui agissent pour notre compte</li>
                <li>Les autorités publiques lorsque la loi l&apos;exige</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Vos droits</h2>
              <p className="mb-4">
                Vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, de limitation et d&apos;opposition au traitement de vos données personnelles.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l&apos;effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d&apos;opposition au traitement</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                personnelles contre la perte, l&apos;accès non autorisé, la divulgation, l&apos;altération et la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Modifications de notre politique</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur le site web. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
              <p className="mb-4">
                Pour exercer vos droits ou pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter à l&apos;adresse suivante : <a href="mailto:contact@erb-btp.fr" className="text-yellow-500 hover:underline">contact@erb-btp.fr</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
