'use client';

import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  href,
}) => {
  return (
    <Link href={href} className="block">
      <div className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 h-full p-6 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col h-full">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full mb-3 w-fit">
            {category}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
            {description}
          </p>
          <div className="mt-auto">
            <span className="text-yellow-600 dark:text-yellow-400 font-medium text-sm flex items-center group-hover:underline">
              Voir les détails
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
