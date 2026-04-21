import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BlogGrid from './blog/BlogGrid';

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-wide">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-[#F2FFF8] border border-[#22C55E4D] rounded-md sm:rounded-lg mb-8">
          <p className="text-[#1A7A4A] font-medium text-[12px] xl:text-[14px]">
            Blogs
          </p>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#1F2A24] tracking-[-1px]">
            Latest Insights & Health Tips
          </h2>
        </div>

        {/* Blog Grid Component */}
        <div className="mb-12">
          <BlogGrid limit={2} />
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link 
            to="/blog"
            className="flex items-center gap-2 px-4 md:px-8 py-3 border border-[#1A7A4A] text-[#1A7A4A] rounded-[8px] xl:rounded-[12px] font-medium hover:bg-[#1A7A4A] hover:text-white transition-all shadow-sm"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};


export default BlogSection;
