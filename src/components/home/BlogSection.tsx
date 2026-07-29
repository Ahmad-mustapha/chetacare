import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogData';
import type { BlogPost } from '../../data/blogData';
import BlogCard from '../blog/BlogCard';

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
      className={`w-full bg-[#FFFFFF] py-12 lg:py-[80px] section-px transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-12 lg:gap-[64px]">
        
        <div className="w-full flex flex-col items-start text-left gap-4 max-w-[1240px]">
          <span className="text-[#1A7A4A] font-bold text-[18px] leading-[150%] uppercase tracking-wider font-sans max-w-[60px]">
            BLOGS
          </span>
          <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px] font-sans max-w-[607px]">
            Latest insights & health tips
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
          {featuredPosts.map((post: BlogPost) => (
            <BlogCard
              key={post.id}
              post={post}
              tagLabel={post.category[0]}
            />
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