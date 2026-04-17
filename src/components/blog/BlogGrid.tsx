import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

const BlogGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Link 
          key={post.id} 
          to={`/blog/${post.id}`}
          className="group block cursor-pointer transition-all duration-300"
        >
          <div className="relative aspect-[16/10] rounded-[12px] xl:rounded-[20px] overflow-hidden mb-6">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#F2FFF8] text-[#1A7A4A] text-[10px] xl:text-xs font-medium rounded-full border border-[#D1FADF]">
              {post.category}
            </span>
            <span className="text-gray-500 text-[10px] xl:text-xs flex items-center gap-1">
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-[#101828] mb-3 group-hover:text-[#1A7A4A] transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-[#475467] text-xs lg:text-sm xl:text-base mb-6 line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center gap-2 text-[#101828] font-bold text-xs lg:text-sm xl:text-base group-hover:gap-3 transition-all">
            Read more <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogGrid;

