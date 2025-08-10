import React from 'react';

export const metadata = {
  title: "Mentions Légales | ERB-BTP",
  description: "Informations légales concernant notre site web ERB-BTP."
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
                <p className="mb-1"><span className="font-medium text-gray-900 dark:text-white">ERB-BTP</span></p>
                <p className="mb-1">Société par actions simplifiée (SAS)</p>
                <p className="mb-1">Capital social : 40 500,00 € (fixe)</p>
                <p className="mb-1">Siège social : 86 RUE VOLTAIRE 93100 MONTREUIL</p>
                <p className="mb-1">SIREN : 912 731 858</p>
                <p className="mb-1">SIRET : 912 731 858 00011</p>
                <p className="mb-1">TVA Intracommunautaire : FR46 912 731 858</p>
                <p className="mb-1">Activité principale : Travaux de couverture par éléments (Code NAF/APE : 43.91B)</p>
                <p className="mb-1">Date de création : 07/04/2022</p>
                <p className="mb-1">Immatriculation au RNE : 21/04/2022</p>
                <p className="mb-1">Convention collective : IDCC 1596</p>
                <p className="mb-1">Durée de la personne morale : 99 ans, jusqu&apos;au 21/04/2121</p>
                <p className="mb-1">Clôture de l&apos;exercice comptable : 31/12</p>
                <p className="mb-1">Email : <a href="mailto:ali.tombari@erb-btp.fr" className="text-yellow-500 hover:underline">ali.tombari@erb-btp.fr</a></p>
                <p className="mb-1">Téléphone : +33 7 45 37 46 21</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Directeur de la publication</h2>
              <p className="mb-4">
                Le directeur de la publication est M. Ali Tombari, en sa qualité de Président de la société ERB-BTP.
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
                Le site web erb-btp.fr peut contenir des liens hypertextes vers d&apos;autres sites internet. ERB-BTP n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Protection des données personnelles</h2>
              <p className="mb-4">
                ERB-BTP s&apos;engage à respecter la confidentialité des données personnelles communiquées par les utilisateurs du site web erb-btp.fr. Pour plus d&apos;informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-yellow-500 hover:underline">Politique de Confidentialité</a>.
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
                <a href="mailto:ali.tombari@erb-btp.fr" className="text-yellow-500 hover:underline ml-1">ali.tombari@erb-btp.fr</a>
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mise à jour</h2>
              <p className="mb-4">
                Les présentes mentions légales ont été mises à jour le 20/04/2025.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
