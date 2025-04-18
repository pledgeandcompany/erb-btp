'use client';

import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold text-black">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-black dark:text-white">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
