'use client';

import React from 'react';

const MoyensHumains: React.FC = () => {
  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Moyens Humains</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Notre équipe qualifiée et expérimentée est notre plus grande force pour garantir la qualité de nos services.
        </p>
      </div>

      {/* Effectifs généraux */}
      <div className="mb-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Effectifs affectés à ce marché</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Employé administratif</div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Chargé d'affaires</div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Chef de chantier</div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">16</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Ouvriers HQ</div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Chauffeurs / livreurs</div>
          </div>
        </div>
      </div>

      {/* Équipes spécialisées */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Nos équipes spécialisées</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Équipe 1 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-yellow-600 text-white p-4">
              <h4 className="text-lg font-semibold">ÉQUIPE 1 : Étanchéité</h4>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 étancheur HQ</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 compagnon</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 fourgonnette du type CITROEN JUMPER</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 Tablette SAMSUNG</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Équipe 2 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-yellow-600 text-white p-4">
              <h4 className="text-lg font-semibold">ÉQUIPE 2 : Étanchéité</h4>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 étancheur HQ</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 compagnon</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 fourgonnette du type CITROEN JUMPER</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 Tablette SAMSUNG</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Équipe 3 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-yellow-600 text-white p-4">
              <h4 className="text-lg font-semibold">ÉQUIPE 3 : Couverture</h4>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 Couvreur HQ</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 compagnon</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 fourgonnette du type CITROEN JUMPER</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 tablette SAMSUNG</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Équipe 4 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-yellow-600 text-white p-4">
              <h4 className="text-lg font-semibold">ÉQUIPE 4 : Petit entretien couverture et étanchéité</h4>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 couvreur</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 étancheur</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 fourgonnette du type CITROEN JUMPER</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">1 tablette SAMSUNG</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Insertion par l'économie */}
      <div className="mb-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Pourcentage réservé à l'insertion par l'économie</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          À chaque chantier, ERB-BTP s'efforce de réserver les emplois de manœuvre à l'insertion sociale par l'économie. En effet, les autres travaux d'étanchéité nécessitent du personnel qualifié qu'il est difficile d'obtenir autrement que par une formation interne de longue durée ou un recrutement de personnel qualifié.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Sur une équipe moyenne de 5 personnes, on compte en général 2 manœuvres. La méthode de recrutement du personnel à insérer est la suivante : Nous nous adressons à la mairie de la ville où est situé le chantier afin d'obtenir les coordonnées des associations ou agence intérimaires spécialisés dans ce type d'action. Puis, nous recevons les candidats à l'insertion.
        </p>
        <p className="text-gray-600 dark:text-gray-400 font-semibold">
          Plusieurs de nos salariés actuels ont été recrutés définitivement par ce biais sous forme de CDI.
        </p>
      </div>

      {/* Gestion des interventions */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Gestion des interventions par une solution Cloud</h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Avantages de notre solution</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">33%</span> du temps de travail effectif des techniciens est économisé par les entreprises disposant d'une solution de gestion d'interventions.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
              <li>Recherche de gains de productivité</li>
              <li>Amélioration de la qualité de service</li>
              <li>Satisfaction client</li>
              <li>Respect des engagements contractuels</li>
              <li>Apporter au client les preuves matérielles</li>
              <li>Répondre efficacement à toutes les demandes d'intervention de nos clients, notamment les urgences</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">3.7%</span> c'est le nombre moyen d'interventions de maintenance que réalise un technicien quotidiennement.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
              <li>Solution d'intervention pertinente pour la mobilité de nos techniciens (tablette ou smartphone)</li>
              <li>Planning, type d'intervention, complexité et détail de l'intervention, interlocuteur, adresse de l'intervention.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Portail accessible au client</h4>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1">
              <li>Identifiant fourni au client</li>
              <li>Liste des sites d'intervention sous contrat répertorié</li>
              <li>Nom des techniciens renseignés</li>
              <li>Type d'intervention entretien ou réparation sur couverture ou étanchéité</li>
              <li>Rapport photo (AVANT/APRES) de l'intervention accessible par le client</li>
              <li>Accès au planning d'intervention sous contrat</li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
              Une solution intuitive et facile d'utilisation avec seulement un navigateur web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoyensHumains;
