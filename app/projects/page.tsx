'use client';

import React, { useState } from 'react';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsFilter from '@/components/projects/ProjectsFilter';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { projectsList, projectCategories } from '@/data/projects';
import { Button } from '@/components/ui/Button';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projectsList 
    : projectsList.filter(project => project.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <ProjectsHero />
      
      {/* Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nos Projets</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Découvrez une sélection de nos projets récents. Chaque projet témoigne de notre engagement 
              envers la qualité et l'excellence dans tous les aspects de notre travail.
            </p>
          </div>
          
          {/* Filter */}
          <ProjectsFilter 
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* Projects Grid */}
          <ProjectsGrid projects={filteredProjects} />
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Aucun projet ne correspond à cette catégorie pour le moment.
              </p>
              <Button onClick={() => setActiveCategory('all')} variant="outline">
                Voir tous les projets
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ce que disent nos clients</h2>
            <p className="text-gray-600 dark:text-gray-300">
              La satisfaction de nos clients est notre priorité. Voici ce qu'ils pensent de notre travail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "ERB-BTP a réalisé la rénovation complète de notre appartement avec un professionnalisme exemplaire. 
                Le résultat dépasse nos attentes et le chantier a été livré dans les délais prévus."
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Marie et Pierre Dupont</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Rénovation d'appartement, Paris</p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Nous avons fait appel à ERB-BTP pour la construction de nos nouveaux bureaux. Leur expertise 
                et leur capacité à gérer un projet complexe ont été déterminantes dans la réussite de ce projet."
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Jean-Marc Leroy</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Directeur, Entreprise XYZ</p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "L'équipe d'ERB-BTP a fait preuve d'un grand professionnalisme et d'une réactivité exemplaire 
                tout au long de notre projet de rénovation énergétique. Un grand merci pour la qualité du travail réalisé."
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Syndicat de Copropriété Résidence Les Fleurs</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Rénovation énergétique, Lyon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-yellow-50 dark:bg-yellow-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Demander un devis
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
