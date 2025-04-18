import React from 'react';

export const metadata = {
  title: "Mentions Légales | ERB-BTP Construction",
  description: "Informations légales concernant notre site web ERB-BTP Construction."
};

export default function MentionsLegales() {
  return (
    <main className="pt-28 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Mentions Légales
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Informations légales concernant notre site web
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Éditeur du site</h2>
              <p className="mb-4">
                Le site web erb-btp.fr est édité par :
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="mb-1"><span className="font-medium text-gray-900 dark:text-white">ERB-BTP Construction</span></p>
                <p className="mb-1">Société par actions simplifiée (SAS)</p>
                <p className="mb-1">Capital social : 50 000 €</p>
                <p className="mb-1">Siège social : 123 Avenue des Bâtisseurs, 75000 Paris</p>
                <p className="mb-1">SIRET : 123 456 789 00012</p>
                <p className="mb-1">RCS Paris B 123 456 789</p>
                <p className="mb-1">TVA Intracommunautaire : FR 12 123456789</p>
                <p className="mb-1">Téléphone : 01 23 45 67 89</p>
                <p className="mb-1">Email : <a href="mailto:contact@erb-btp.fr" className="text-yellow-500 hover:underline">contact@erb-btp.fr</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Directeur de la publication</h2>
              <p className="mb-4">
                Le directeur de la publication est M. Jean Dupont, en sa qualité de Président de la société ERB-BTP Construction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Hébergement</h2>
              <p className="mb-4">
                Le site web erb-btp.fr est hébergé par :
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="mb-1"><span className="font-medium text-gray-900 dark:text-white">Vercel Inc.</span></p>
                <p className="mb-1">340 S Lemon Ave #4133</p>
                <p className="mb-1">Walnut, CA 91789</p>
                <p className="mb-1">États-Unis</p>
                <p className="mb-1"><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">https://vercel.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Propriété intellectuelle</h2>
              <p className="mb-4">
                L&apos;utilisateur du site est invité à signaler toute omission, erreur ou correction.
              </p>
              <p className="mb-4">
                Le site ERB-BTP constitue une œuvre protégée par les lois en vigueur sur la propriété intellectuelle. Aucune reproduction ou représentation ne peut être réalisée en contravention avec les droits de l&apos;auteur.
              </p>
              <p className="mb-4">
                Toute reproduction totale ou partielle du site ERB-BTP est strictement interdite sauf autorisation expresse de l&apos;éditeur, en violation de l&apos;article L.122-4 du Code de la propriété intellectuelle.
              </p>
              <p className="mb-4">
                L&apos;utilisateur reconnaît que :
                <br />
                - L&apos;utilisation du site est régie par les présentes conditions d&apos;utilisation.
              </p>
              <p className="mb-4">
                Les informations et documents du site sont présentés à titre indicatif, sans caractère exhaustif, et ne peuvent engager la responsabilité de l&apos;éditeur. L&apos;éditeur se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Liens hypertextes</h2>
              <p className="mb-4">
                Le site web erb-btp.fr peut contenir des liens hypertextes vers d&apos;autres sites internet. ERB-BTP Construction n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Protection des données personnelles</h2>
              <p className="mb-4">
                ERB-BTP Construction s&apos;engage à respecter la confidentialité des données personnelles communiquées par les utilisateurs du site web erb-btp.fr. Pour plus d&apos;informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-yellow-500 hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cookies</h2>
              <p className="mb-4">
                Le site web erb-btp.fr utilise des cookies pour améliorer l&apos;expérience utilisateur. Pour plus d&apos;informations sur l&apos;utilisation des cookies, veuillez consulter notre <a href="/politique-cookies" className="text-yellow-500 hover:underline">Politique de Cookies</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Droit applicable et juridiction compétente</h2>
              <p className="mb-4">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
              <p className="mb-4">
                Pour toute question concernant les présentes mentions légales, veuillez nous contacter à l&apos;adresse suivante : 
                <a href="mailto:contact@erb-btp.fr" className="text-yellow-500 hover:underline ml-1">contact@erb-btp.fr</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
