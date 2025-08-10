'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ProjectDetails } from '@/data/projects';
import ProjectModal from './ProjectModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  slug: string;
}

interface ProjectsGridProps {
  projects: ProjectItem[];
  projectDetails: Record<string, ProjectDetails>;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, projectDetails }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  const projectsPerPage = 9;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
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
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);
  
  // Autoplay for mobile slider
  useEffect(() => {
    if (isMobile && !isPaused) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [isMobile, isPaused, projects.length]);

  const handleProjectClick = (slug: string) => {
    setSelectedProject(projectDetails[slug]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  // These functions are used by the swipe handlers but not directly called in JSX
  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  // };
  
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  // };
  
  // Get current projects for pagination
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Project card component for desktop
  const ProjectCard = ({ project }: { project: ProjectItem }) => (
    <div 
      className="group cursor-pointer"
      onClick={() => handleProjectClick(project.slug)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 h-full">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
              {project.title}
            </h3>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
              {project.category}
            </span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{project.year}</span>
          </div>
          <div className="mt-auto">
            <span className="text-yellow-600 dark:text-yellow-400 font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Voir les détails
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop/Tablet View - Grid with pagination */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Pagination Navigation */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button 
            onClick={prevPage}
            className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-md focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <div className="text-gray-700 dark:text-gray-300">
            Page {currentPage + 1} sur {totalPages}
          </div>
          
          <button 
            onClick={nextPage}
            className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-md focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
      
      {/* Mobile View - Slider */}
      <div className="md:hidden">
        <div className="relative">
          <div className="px-4"
            onTouchStart={(e) => {
              setIsPaused(true);
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchMove={(e) => {
              touchEndX.current = e.touches[0].clientX;
            }}
            onTouchEnd={() => {
              setIsPaused(false);
              if (touchStartX.current && touchEndX.current) {
                const diff = touchStartX.current - touchEndX.current;
                if (diff > 50) { // Swipe left - next slide
                  setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
                } else if (diff < -50) { // Swipe right - previous slide
                  setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
                }
              }
              touchStartX.current = null;
              touchEndX.current = null;
            }}
          >
            <div 
              className="group cursor-pointer"
              onClick={() => handleProjectClick(projects[currentSlide].slug)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {projects[currentSlide].title}
                    </h3>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{projects[currentSlide].location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{projects[currentSlide].year}</span>
                  </div>
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
            </div>
          </div>
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />
    </>
  );
};

export default ProjectsGrid;
