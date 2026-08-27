import { blogPosts, type BlogPost } from '../../data/blogData';
import BlogCard from './BlogCard';

interface BlogGridProps {
  limit?: number;
  activeCategory?: string;
  posts?: BlogPost[];
}

export default function BlogGrid({ limit, activeCategory = 'All Blog', posts }: BlogGridProps) {
  const filteredPosts = activeCategory === 'All Blog'
    ? blogPosts
    : blogPosts.filter((post) => post.category.includes(activeCategory));

  const visiblePosts = posts ?? filteredPosts;
  const postsToRender = typeof limit === 'number' ? visiblePosts.slice(0, limit) : visiblePosts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-[28px] w-full">
      {postsToRender.map((post) => {
        // If a specific filter is active, only show that category tag. 
        // Otherwise, fall back to showing just the first assigned category.
        const tagToDisplay = activeCategory !== 'All Blog' ? activeCategory : post.category[0];

        return <BlogCard key={post.id} post={post} tagLabel={tagToDisplay} />;
      })}
    </div>
  );
}