'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { projectsDetails } from '@/data/projects';
import ProjectCaseStudy from '@/components/projects/ProjectCaseStudy';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Get project details from data
  const projectDetail = projectsDetails[slug];
  
  // If project not found
  if (!projectDetail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Projet non trouvé</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
          Désolé, le projet que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <div className="flex gap-4">
          <Button href="/projects" variant="default">
            Voir tous les projets
          </Button>
          <Button href="/" variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800">
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-yellow-600 dark:hover:text-yellow-400">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-yellow-600 dark:hover:text-yellow-400">
              Projets
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">{projectDetail.title}</span>
          </div>
        </div>
      </div>
      
      {/* Project Case Study */}
      <ProjectCaseStudy {...projectDetail} />
      
      {/* Related Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Projets similaires</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Découvrez d'autres projets dans la même catégorie.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button href="/projects" variant="default">
              Voir tous nos projets
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
