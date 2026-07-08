import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

const BlogHero: React.FC = () => {
  const featuredPost = blogPosts[0];

  return (
    <section className="pt-20 pb-0 px-4 md:px-[100px] flex flex-col items-center gap-20 w-full max-w-[1440px] mx-auto">
      <div className="text-center flex flex-col items-center gap-4 max-w-[800px] w-full">
        <p className="text-[#1A7A4A] font-bold text-[18px] leading-[27px] uppercase tracking-wider">
          Blog
        </p>
        
        <div className="flex flex-col items-center gap-8 w-full">
          <h1 className="p-0 text-4xl md:text-6xl lg:text-[64px] font-bold text-[#1F2A24] tracking-[-2px] leading-tight lg:leading-[75px]">
            Insights for Better Health
          </h1>
          <p className="text-base md:text-[20px] font-normal text-[#282828] leading-relaxed md:leading-[24px] max-w-[720px]">
            Expert advice, practical tips, and insights to help you manage your health, stay consistent with care, and prevent complications before they arise.
          </p>
        </div>
      </div>

      {featuredPost && (
        <Link to={`/blog/${featuredPost.id}`} className="block group w-full">
          <div className="bg-[#F9FAFB] border border-[#F3F3F3] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-8 flex flex-col justify-between gap-8">
                <div className="flex items-center justify-between gap-4 w-full">
                  <span className="px-4 py-2 bg-[#F2FFF8] text-[#1A7A4A] text-[14px] font-semibold rounded-full border border-[#D1FADF] leading-[20px]">
                    {featuredPost.category[0] || 'Chronic Conditions'}
                  </span>
                  <span className="text-[#4F4F4F] text-base font-normal leading-6 flex items-center gap-4">
                    <Clock className="w-5 h-5 text-[#555555]" />
                    {featuredPost.readTime || '7 min read'}
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl md:text-3xl lg:text-[48px] font-medium text-[#1F2A24] leading-tight lg:leading-[48px] group-hover:text-[#1A7A4A] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#1F2A24] text-base md:text-[18px] font-normal leading-relaxed lg:leading-[26px] lg:mt-2">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#1F2A24] text-[18px] font-normal leading-[26px] py-2 group-hover:gap-3 transition-all lg:mt-10">
                  Read more <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <div className="h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </Link>
      )}
    </section>
  );
};

export default BlogHero;