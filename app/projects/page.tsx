'use client';

import React, { useState } from 'react';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsFilter from '@/components/projects/ProjectsFilter';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCollaborations from '@/components/projects/ProjectsCollaborations';
import { projectsList, projectCategories, projectsDetails } from '@/data/projects';
import { Button } from '@/components/ui/Button';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projectsList 
    : projectsList.filter(project => project.category === activeCategory);

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <ProjectsHero />
      
      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Nos Projets</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Découvrez une sélection de nos projets récents. Chaque projet témoigne de notre engagement 
              envers la qualité et l&#39;excellence dans tous les aspects de notre travail.
            </p>
          </div>
          
          {/* Filter */}
          <ProjectsFilter 
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* Projects Grid */}
          <ProjectsGrid 
            projects={filteredProjects} 
            projectDetails={projectsDetails}
          />
          
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
      
      {/* Collaborations Section */}
      <ProjectsCollaborations />
      
      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd&#39;hui pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/devis" size="lg" className="bg-[#ff914d] hover:bg-[#e07e3d] text-white">
                Demander un devis
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
