'use client';

import React from 'react';

interface ProjectsFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === 'all'
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Tous
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
