import React from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';
import Seo from '../components/Seo';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Health Blog | Chetacare"
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
          <BlogFilters />
          <BlogGrid />
        </div>
      </section>
    </div>
  );
};

export default Blog;
