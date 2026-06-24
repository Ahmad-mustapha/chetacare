import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogData';

interface BlogGridProps {
  limit?: number;
  activeCategory?: string;
}

export default function BlogGrid({ limit, activeCategory = 'All Blog' }: BlogGridProps) {
  // Filter logic remains solid
  const filteredPosts = activeCategory === 'All Blog' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.includes(activeCategory));

  const posts = typeof limit === 'number' ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {posts.map((post) => (
        <Link 
          key={post.id} 
          to={`/blog/${post.id}`}
          className="group block cursor-pointer transition-all duration-300"
        >
          {/* Article wrapper handles flex distribution to keep rows aligned */}
          <article className="flex flex-col h-full">
            
            {/* Image Container - Replaced arbitrary bracket values with clean tokens */}
            <div className="relative aspect-[16/10] rounded-xl lg:rounded-2xl overflow-hidden mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Meta Tags Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-wrap gap-2">
                {post.category.map((cat, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-brand-primary/5 text-brand-primary text-xs font-medium rounded-full border border-brand-primary/10"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-xs flex items-center gap-1">
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                {post.readTime}
              </span>
            </div>

            {/* Blog Title - Replaced hex values with brand tokens */}
            <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors leading-snug">
              {post.title}
            </h3>

            {/* Description - flex-grow ensures this block absorbs uneven space */}
            <p className="text-gray-600 text-sm lg:text-base mb-6 line-clamp-2 flex-grow">
              {post.description}
            </p>

            {/* Read More Anchor - mt-auto guarantees horizontal alignment across rows */}
            <div className="flex items-center gap-2 text-brand-dark font-bold text-sm lg:text-base group-hover:gap-3 transition-all mt-auto">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4 text-brand-primary" />
            </div>

          </article>
        </Link>
      ))}
    </div>
  );
}