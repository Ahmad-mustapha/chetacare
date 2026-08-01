import { useSearchParams } from 'react-router-dom';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';
import BlogPagination from '../components/blog/BlogPagination';
import Seo from '../components/Seo';
import { blogPosts } from '../data/blogData';

const POSTS_PER_PAGE = 9;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All Blog';
  const parsedPage = Number.parseInt(searchParams.get('page') || '1', 10);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  const filteredPosts = activeCategory === 'All Blog'
    ? blogPosts
    : blogPosts.filter((post) => post.category.includes(activeCategory));

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const pagedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All Blog') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    newParams.delete('page');
    setSearchParams(newParams);
  };

  const handlePageChange = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    const newParams = new URLSearchParams(searchParams);
    if (nextPage <= 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', String(nextPage));
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

      <section className="py-16 sm:py-20">
        <div className="w-full max-w-[1440px] section-px mx-auto flex flex-col gap-16">
          <BlogFilters 
            activeCategory={activeCategory} 
            setActiveCategory={handleCategoryChange} 
          />
          <BlogGrid activeCategory={activeCategory} posts={pagedPosts} />
          <BlogPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
}