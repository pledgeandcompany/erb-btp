'use client';

import React from 'react';

interface CategoryItem {
  id: string;
  name: string;
}

interface ProjectsFilterProps {
  categories: CategoryItem[];
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
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
