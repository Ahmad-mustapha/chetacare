import React, { useState } from 'react';

const categories = [
  'All Blog',
  'Mental Health',
  'Nutrition',
  'Chronic Conditions',
  'Medication & Treatment',
  'Preventive Care',
  'Care Tips',
  'Lifestyle & Wellness'
];

const BlogFilters: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Blog');

  return (
    <div className="border-b border-gray-100 mb-12 overflow-x-auto scrollbar-hide">
      <div className="flex items-center space-x-2 pb-4 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
              activeCategory === category
                ? 'bg-[#F2FFF8] text-[#1A7A4A] border-[#D1FADF]'
                : 'bg-white text-[#475467] border-gray-100 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilters;
