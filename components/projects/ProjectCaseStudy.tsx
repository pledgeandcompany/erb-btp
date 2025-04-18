'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export interface ProjectCaseStudyProps {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  duration: string;
  client: string;
  description: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  imageSrc: string;
  galleryImages: string[];
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  id,
  title,
  location,
  category,
  year,
  duration,
  client,
  description,
  challenges,
  solutions,
  results,
  imageSrc,
  galleryImages
}) => {
  return (
    <section id={id} className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
          <p className="text-yellow-600 dark:text-yellow-400 mb-8">{category} | {location} | {year}</p>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl mb-10 h-[400px]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
              <p className="text-gray-600 dark:text-gray-300">{client}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Durée du projet</h3>
              <p className="text-gray-600 dark:text-gray-300">{duration}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Année</h3>
              <p className="text-gray-600 dark:text-gray-300">{year}</p>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Description du projet</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Défis</h4>
                <ul className="space-y-2">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Solutions</h4>
                <ul className="space-y-2">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Résultats</h4>
            <ul className="space-y-2 mb-8">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Galerie du projet</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-md h-[200px]">
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button href="/contact" className="mt-2">
              Discuter de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudy;
