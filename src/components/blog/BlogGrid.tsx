import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

interface BlogGridProps {
  limit?: number;
  activeCategory?: string;
}

export default function BlogGrid({ limit, activeCategory = 'All Blog' }: BlogGridProps) {
  const filteredPosts = activeCategory === 'All Blog' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.includes(activeCategory));

  const posts = typeof limit === 'number' ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-[28px] w-full">
      {posts.map((post) => {
        // If a specific filter is active, only show that category tag. 
        // Otherwise, fall back to showing just the first assigned category.
        const tagToDisplay = activeCategory !== 'All Blog' ? activeCategory : post.category[0];

        return (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`}
            className="group block cursor-pointer transition-all duration-300 h-full"
          >
            <article className="flex flex-col bg-white border border-[#F3F3F3] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] rounded-[10px] overflow-hidden h-full">
              {/* Image Container - Hover scale zoom effect is removed */}
              <div className="w-full h-[240px] sm:h-[299px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-t-[8px]"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div className="flex flex-col gap-4">
                  
                  {/* Meta Information Tags Row */}
                  <div className="flex items-center justify-between w-full">
                    <span className="py-2 px-4 bg-[#F2FFF8] text-[#1A7A4A] text-[14px] font-normal rounded-full border border-[#D1FADF] leading-[20px]">
                      {tagToDisplay}
                    </span>
                    <span className="text-[#1F2A24] text-[14px] font-normal leading-[20px] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#555555]" />
                      {post.readTime || '5 min read'}
                    </span>
                  </div>

                  <h3 className="text-[24px] font-medium text-[#1F2A24] leading-[32px] group-hover:text-[#1A7A4A] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[#282828] text-[18px] font-normal leading-[26px] line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="py-2 pr-2 pl-0 flex items-center gap-2 text-[#222222] font-normal text-[16px] leading-[24px] group-hover:gap-3 transition-all mt-auto">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}