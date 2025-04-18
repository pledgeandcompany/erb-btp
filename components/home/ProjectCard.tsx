'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  imageSrc,
  href,
}) => {
  return (
    <Link href={href} className="block">
      <div className="group relative overflow-hidden rounded-lg shadow-md h-64 bg-white dark:bg-gray-800">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
          <span className="text-yellow-400 text-sm mb-1">{category}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
