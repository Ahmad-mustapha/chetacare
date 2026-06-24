import { useSearchParams } from 'react-router-dom';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';
import Seo from '../components/Seo';

export default function Blog() {
  // Synchronize state with URL query parameters for perfect preservation
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read category from URL, default to 'All Blog' if empty
  const activeCategory = searchParams.get('category') || 'All Blog';

  // Handler passed down to BlogFilters to update the URL parameter safely
  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All Blog') {
      newParams.delete('category'); // Keep URL clean if viewing all
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

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
          description: 'Explore Chetacare articles on hypertension, diabetes, preventive health, and chronic disease care.',
        }}
      />
      
      {/* Hero and Featured Post */}
      <BlogHero />

      {/* Blog Feed Section */}
      <section className="py-16 lg:py-24">
        {/* Uniform layout token container applied directly */}
        <div className="container-wide w-full max-w-figma px-4 lg:px-100 mx-auto">
          
          {/* Passed the URL state handlers down as props */}
          <BlogFilters 
            activeCategory={activeCategory} 
            setActiveCategory={handleCategoryChange} 
          />
          
          <BlogGrid activeCategory={activeCategory} />
          
        </div>
      </section>
    </div>
  );
}