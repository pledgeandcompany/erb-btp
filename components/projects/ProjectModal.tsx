'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/Dialog';
import { ProjectDetails } from '@/data/projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-gray-700 dark:text-gray-300">
            {project.location} | {project.year}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Maître d&apos;ouvrage</h4>
              <p className="text-gray-700 dark:text-gray-300">{project.client}</p>
            </div>
            {project.duration && (
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Durée</h4>
                <p className="text-gray-700 dark:text-gray-300">{project.duration}</p>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Désignation des travaux</h4>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </div>
          
          {project.amount && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Montant total HT</h4>
              <p className="text-gray-700 dark:text-gray-300">{project.amount} €</p>
            </div>
          )}
          
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Défis</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
          
          {project.solutions && project.solutions.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Solutions</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {project.solutions.map((solution: string, index: number) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          )}
          
          {project.results && project.results.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Résultats</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {project.results.map((result: string, index: number) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
