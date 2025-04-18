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
                ERB-BTP s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, 
                utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web et nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Données collectées</h2>
              <p className="mb-4">
                Nous pouvons collecter les types d'informations suivants :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">Informations personnelles :</span> Nom, prénom, adresse e-mail, numéro de téléphone, adresse postale 
                  lorsque vous remplissez un formulaire de contact ou de devis.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">Informations sur votre projet :</span> Type de projet, surface, budget, délais et autres détails 
                  spécifiques que vous nous communiquez.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">Données de navigation :</span> Informations sur votre visite de notre site, y compris les pages 
                  consultées, la durée de la visite et votre parcours sur le site.
                </li>
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
                <li>L'exécution d'un contrat auquel vous êtes partie</li>
                <li>Le respect de nos obligations légales</li>
                <li>Nos intérêts légitimes, à condition qu'ils ne prévalent pas sur vos droits et libertés fondamentaux</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Conservation des données</h2>
              <p className="mb-4">
                Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour 
                lesquelles elles ont été collectées, sauf si la loi exige ou permet une période de conservation plus longue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Partage des données</h2>
              <p className="mb-4">
                Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos données avec :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Nos sous-traitants et prestataires de services qui agissent pour notre compte</li>
                <li>Les autorités publiques lorsque la loi l'exige</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Vos droits</h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération et la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Modifications de notre politique</h2>
              <p className="mb-4">
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera 
                publiée sur cette page et prendra effet dès sa publication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
              <p className="mb-4">
                Si vous avez des questions concernant notre politique de confidentialité ou si vous souhaitez exercer 
                vos droits, veuillez nous contacter à l'adresse suivante : 
                <a href="mailto:contact@erb-btp.fr" className="text-yellow-500 hover:underline ml-1">contact@erb-btp.fr</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
