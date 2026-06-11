import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BlogGrid from './blog/BlogGrid';

const BlogSection: React.FC = () => {
  // Inline animation logic (0% to 100% opacity, scroll-triggered, 800ms)
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

  return (
    <section
      ref={sectionRef}
      className={`py-[3rem] lg:py-[5rem] bg-[#FFFFFF] flex flex-col items-center transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Main Container - updated spacing to match Figma with rems */}
      <div className="container-wide w-full max-w-[90rem] flex flex-col px-4 lg:px-[6.25rem] gap-[2.5rem] lg:gap-[4rem]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center lg:items-start gap-[1.5rem] lg:gap-[2rem] w-full text-center lg:text-left">
          
          {/* Badge: pill background removed, global colors and rem sizing applied */}
          <h3 className="text-brand-primary font-bold text-[1.125rem] leading-[1.6875rem] uppercase">
            Blogs
          </h3>
          
          <h2 className="text-brand-dark font-medium text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] lg:leading-[3rem]">
            Latest Insights & Health Tips
          </h2>
        </div>

        {/* Blog Grid Component (Updated limit to 3 based on the 3-column Figma layout) */}
        <div className="w-full">
          <BlogGrid limit={3} />
        </div>

        {/* View All Button Container */}
        <div className="flex justify-center w-full mt-4 lg:mt-8">
          <Link 
            to="/blog"
            className="flex flex-row items-center justify-center gap-[0.5rem] py-[1rem] px-[1.75rem] border border-brand-primary rounded-[0.75rem] group hover:bg-[#F8F8F8] transition-colors"
          >
            <span className="text-brand-dark text-[1.125rem] font-medium">
              View all articles
            </span>
            <ArrowRight className="w-[1.5rem] h-[1.5rem] text-brand-dark group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;