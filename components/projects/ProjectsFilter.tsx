'use client';

import React, { useEffect, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Don't render on mobile
  if (isMobile) {
    return null;
  }
  return (
    <div className="mb-12 hidden md:block">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-[#ff914d] text-white'
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
