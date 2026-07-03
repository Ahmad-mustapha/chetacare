import { useSearchParams } from 'react-router-dom';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';
import Seo from '../components/Seo';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All Blog';

  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All Blog') {
      newParams.delete('category');
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
      
      <BlogHero />

      <section className="py-20">
        <div className="w-full max-w-[1440px] px-4 md:px-[100px] mx-auto flex flex-col gap-16">
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