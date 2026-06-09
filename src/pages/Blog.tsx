// src/pages/Blog.tsx
import React, { useState } from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';
import Seo from '../components/Seo';

const Blog: React.FC = () => {
  // 1. Lift the state up to the parent
  const [activeCategory, setActiveCategory] = useState('All Blog');

  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Chetacare | Health Blog"
        description="Explore Chetacare articles on hypertension, diabetes, preventive health, and chronic disease care."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Chetacare Health Blog',
          url: 'https://chetacare.com/blog',
          description:
            'Explore Chetacare articles on hypertension, diabetes, preventive health, and chronic disease care.',
        }}
      />
      {/* Hero and Featured Post */}
      <BlogHero />

      {/* Blog Feed Section */}
      <section className="pb-24">
        <div className="container-wide">
          {/* 2. Pass the state and updater function as props */}
          <BlogFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          {/* 3. Pass the active category to the grid to filter the posts */}
          <BlogGrid activeCategory={activeCategory} />
        </div>
      </section>
    </div>
  );
};

export default Blog;