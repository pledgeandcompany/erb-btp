import React from 'react';

export const metadata = {
  title: "Politique de Cookies | ERB-BTP Construction",
  description: "Informations sur l'utilisation des cookies sur notre site web ERB-BTP Construction."
};

export default function PolitiqueCookies() {
  return (
    <main className="pt-28 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Politique de Cookies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Informations sur l'utilisation des cookies sur notre site
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p className="mb-4">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou téléphone mobile) 
                lors de la visite d'un site web. Il permet au site de mémoriser vos actions et préférences 
                (nom d'utilisateur, langue, taille des caractères et autres paramètres d'affichage) pendant un certain temps, 
                pour que vous n'ayez pas à les réindiquer à chaque fois que vous revenez sur le site ou que vous naviguez de page en page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Comment utilisons-nous les cookies ?</h2>
              <p className="mb-4">
                ERB-BTP utilise différents types de cookies pour améliorer votre expérience sur notre site :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">Cookies essentiels :</span> Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. 
                  Ils ne stockent aucune information personnelle identifiable.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">Cookies de performance :</span> Ces cookies nous permettent de compter les visites et les sources de trafic afin 
                  de mesurer et d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins 
                  populaires et à voir comment les visiteurs se déplacent sur le site.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">Cookies de fonctionnalité :</span> Ces cookies permettent au site de fournir une fonctionnalité et une personnalisation 
                  améliorées. Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">Cookies de ciblage :</span> Ces cookies peuvent être définis par nos partenaires publicitaires via notre site. 
                  Ils peuvent être utilisés par ces entreprises pour établir un profil de vos intérêts et vous proposer des publicités pertinentes 
                  sur d'autres sites.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Comment gérer vos cookies ?</h2>
              <p className="mb-4">
                Vous pouvez contrôler et/ou supprimer des cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies 
                déjà stockés sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour qu'ils bloquent leur stockage. 
                Mais, si vous faites cela, il est possible que vous ayez à ajuster manuellement certaines préférences chaque fois que vous 
                visitez un site, et certains services et fonctionnalités risquent de ne pas être opérationnels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Modification de notre politique de cookies</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Tout changement sera publié sur cette page 
                et prendra effet dès sa publication. Nous vous encourageons à consulter régulièrement cette page pour rester informé des mises à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
              <p className="mb-4">
                Si vous avez des questions concernant notre politique de cookies, veuillez nous contacter à l'adresse suivante : 
                <a href="mailto:contact@erb-btp.fr" className="text-yellow-500 hover:underline ml-1">contact@erb-btp.fr</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
