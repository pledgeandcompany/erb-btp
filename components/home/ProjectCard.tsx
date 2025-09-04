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
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-[#fff1e8] dark:bg-[#5e3520] text-[#ff914d] dark:text-[#ff914d] rounded-full mb-3 w-fit">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#ff914d] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
          {description}
        </p>
        <div className="h-1 w-0 bg-[#ff914d] group-hover:w-full transition-all duration-300 mt-auto"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
