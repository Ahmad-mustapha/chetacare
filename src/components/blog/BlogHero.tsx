import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { blogPosts } from '../../data/blogData';

const BlogHero: React.FC = () => {
  const featuredPost = blogPosts[0]; // Using the first post as featured

  return (
    <section className="pt-20 pb-16">
      <div className="container-wide">
        {/* Blog Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 border border-[#D1FADF] bg-[#ECFDF3] rounded-md mb-6">
            <span className="text-[#039855] font-medium text-sm">Blog</span>
          </div>
          <h1 className="text-[30px] md:text-[50px] lg:text-[64px] font-bold text-[#101828] tracking-tight mb-6 leading-tight">
            Insights for Better Health
          </h1>
          <p className="text-lg md:text-[20px] text-[#475467] max-w-3xl mx-auto">
            Expert advice, practical tips, and insights to help you manage your health, stay consistent with care, and prevent complications before they arise.
          </p>
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.id}`} className="block group">
            <div className="bg-[#F9FAFB] border border-[#EAECF0] rounded-[32px] overflow-hidden transition-all duration-300 hover:border-[#D1FADF] hover:shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-8">
                    <span className="px-3 py-1 bg-[#F2FFF8] text-[#1A7A4A] text-sm font-medium rounded-full border border-[#D1FADF]">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#475467] text-sm flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-[48px] font-bold text-[#101828] leading-[1.1] mb-6 group-hover:text-[#1A7A4A] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-[#475467] text-lg mb-10 leading-relaxed">
                    {featuredPost.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#101828] font-bold text-lg group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-5 h-5 ml-1" />
                  </div>
                </div>

                {/* Image Side */}
                <div className="h-[400px] lg:h-auto overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default BlogHero;

