'use client';

import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  // href is not currently used but kept for future linking functionality
  href?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  // href is not used in the current implementation
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 h-full p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full mb-3 w-fit">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
