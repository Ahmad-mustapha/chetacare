import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../../data/blogData';
import type { BlogPost } from '../../data/blogData';

const BlogSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#FFFFFF] py-12 lg:py-[80px] px-4 md:px-8 lg:px-[100px] transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-12 lg:gap-[64px]">
        
        <div className="w-full flex flex-col items-start text-left gap-4 max-w-[1240px]">
          <span className="text-[#1A7A4A] font-bold text-[18px] leading-[150%] uppercase tracking-wider font-sans max-w-[60px]">
            BLOGS
          </span>
          <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px] font-sans max-w-[607px]">
            Latest Insights & Health Tips
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
          {featuredPosts.map((post: BlogPost) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="w-full min-h-[615px] bg-white border border-[#D5D5D8] rounded-[10px] flex flex-col items-start overflow-hidden transition-transform duration-300 hover:scale-[1.01] group text-left"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[299px] object-cover rounded-t-[8px] shrink-0"
              />

              <div className="p-6 flex flex-col items-start gap-4 lg:gap-[10px] w-full flex-grow">
                
                <div className="w-full flex flex-row items-center justify-between gap-[32px] min-h-[36px]">
                  <div className="flex flex-wrap gap-2">
                    {post.category && post.category.length > 0 && (
                      <span className="bg-[#E8F5EE] text-[#1F2A24] text-[14px] font-normal leading-[20px] font-sans px-4 py-2 rounded-[6px]">
                        {post.category[0]}
                      </span>
                    )}
                  </div>
                  <span className="text-[#1F2A24] text-[14px] font-normal leading-[20px] font-sans whitespace-nowrap flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#555555]" />
                    {post.readTime}
                  </span>
                </div>

                <div className="w-full flex flex-col items-start gap-4 lg:gap-[16px] mt-2">
                  <h3 className="text-[#1F2A24] font-medium text-[22px] lg:text-[24px] leading-[32px] font-sans line-clamp-2 h-[64px] group-hover:text-[#1A7A4A] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#282828] font-normal text-[16px] lg:text-[18px] leading-[26px] font-sans line-clamp-3 h-[78px]">
                    {post.description}
                  </p>
                </div>

                {/* Changed to a div to prevent nesting links; responds to full-card hover via parent group */}
                <div 
                  className="mt-auto pt-4 flex flex-row items-center justify-start gap-2 text-[#282828] font-normal text-[18px] leading-[26px] font-sans group-hover:text-[#1A7A4A] transition-colors"
                >
                  <span className="group-hover:text-[#1A7A4A] transition-colors">Read more</span>
                  <ArrowRight className="w-[14px] h-[14px] text-[#1A1A1A] group-hover:translate-x-1 transition-transform group-hover:text-[#1A7A4A]" />
                </div>

              </div>
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-center mt-2">
          <Link 
            to="/blog"
            className="flex flex-row items-center justify-center gap-2 py-4 px-7 border border-[#1A7A4A] rounded-[12px] hover:bg-gray-50 transition-all text-[#1F2A24] text-[18px] font-medium w-full sm:w-[202.6px] h-[56.05px] text-center whitespace-nowrap"
          >
            <span>View all articles</span>
            <ArrowRight className="w-[24px] h-[24px] text-[#1F2A24]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;