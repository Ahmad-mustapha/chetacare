import React from 'react';

const categories = [
  'All Blog',
  // 'Mental Health',
  'Nutrition',
  'Chronic Conditions',
  'Medication & Treatment',
  'Preventive Care',
  'Care Tips',
  'Lifestyle & Wellness'
];

interface BlogFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="border-b border-[#E5E7EB] mb-8 overflow-x-auto scrollbar-hide w-full">
      <div className="flex items-center gap-2 pb-3 min-w-max">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-3 px-6 rounded-[8px] text-[14px] font-semibold leading-[20px] transition-all duration-200 border ${
                isActive
                  ? 'bg-[#E8F5EE] text-[#1A7A4A] border-transparent'
                  : 'bg-white text-[#777777] border-[#F3F3F3] hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BlogFilters;