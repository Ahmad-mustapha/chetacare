import React from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero and Featured Post */}
      <BlogHero />

      {/* Blog Feed Section */}
      <section className="pb-24">
        <div className="container-wide">
          <BlogFilters />
          <BlogGrid />
        </div>
      </section>
    </div>
  );
};

export default Blog;
