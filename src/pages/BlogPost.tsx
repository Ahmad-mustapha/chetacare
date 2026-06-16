import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, User, Calendar, Clock } from 'lucide-react';
import ReachOut from '../components/ReachOut';
import { blogPosts } from '../data/blogData';
import Seo from '../components/Seo';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-600">
        <Seo
          title="Chetacare | Article Not Found"
          description="The requested Chetacare article could not be found."
          noIndex
        />
        <p className="text-xl font-medium">Post not found</p>
        <Link to="/blog" className="text-brand-primary font-bold hover:underline">
          Return to blog feed
        </Link>
      </div>
    );
  }

  // Filter out the current post, then pull the top 2 alternatives
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      <Seo
        title={`Chetacare | ${post.title}`}
        description={post.description}
        ogImage={post.image}
        twitterImage={post.image}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          image: `https://chetacare.com${post.image}`,
          author: {
            '@type': 'Organization',
            name: post.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Chetacare',
            logo: {
              '@type': 'ImageObject',
              url: 'https://chetacare.com/assets/chetacarelogo.png',
            },
          },
          datePublished: post.date,
          mainEntityOfPage: `https://chetacare.com/blog/${post.id}`,
        }}
      />

      {/* Global layout container encapsulates both back navigation and article scope */}
      <div className="container-wide w-full max-w-figma px-4 lg:px-100 mx-auto">
        
        {/* Breadcrumb / Back Navigation */}
        <div className="pt-12 pb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors font-medium">
            <ArrowLeft size={18} />
            <span>Back to articles</span>
          </Link>
        </div>

        {/* Main Article Body Scope */}
        <article className="pb-12">
          <div className="max-w-4xl">
            
            {/* DISPLAYING ALL CATEGORIES (MAIN HEADER) - Interactive links connected to URL parameters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.category.map((cat, index) => (
                <Link
                  key={index}
                  to={`/blog?category=${encodeURIComponent(cat)}`}
                  className="px-3 py-1 bg-brand-primary/5 text-brand-primary text-sm font-medium rounded-full border border-brand-primary/10 hover:bg-brand-primary/20 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] mb-8 tracking-tight">
              {post.title}
            </h1>

            {/* Meta Attributes Deck */}
            <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-gray-500 mb-12">
              <div className="flex items-center gap-2">
                <User size={18} className="text-brand-primary" />
                <span className="font-semibold text-brand-dark">By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-brand-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-brand-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Main Hero Image Frame */}
          <div className="w-full aspect-[16/9] md:aspect-[2.4/1] rounded-3xl overflow-hidden mb-12 shadow-sm">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Dynamic Article Section Engine */}
          <div className="max-w-4xl">
            <div className="space-y-12">
              {post.fullContent.map((section, index) => {
                if (section.type === 'heading') {
                  return (
                    <section key={index} className={index === 0 ? "" : "border-t border-gray-100 pt-12"}>
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                        {section.content}
                      </h2>
                    </section>
                  );
                }
                if (section.type === 'paragraph') {
                  return (
                    <div key={index} className="text-gray-600 text-lg leading-relaxed">
                      <p>{section.content}</p>
                    </div>
                  );
                }
                if (section.type === 'list') {
                  return (
                    <ul key={index} className="space-y-4 text-gray-600 text-lg leading-relaxed">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}

              {/* Inline Mid-Article Support Context Callout Box */}
              <div className="pt-12">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
                  <p className="text-brand-dark font-bold text-xl md:text-2xl mb-8 leading-tight">
                    Don't just read about managing hypertension, get support to actually do it.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block border border-brand-primary/20 bg-white text-brand-primary px-10 py-4 rounded-xl font-bold hover:bg-brand-primary/5 transition-all shadow-sm"
                  >
                    Talk to the support team
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles Segment */}
          <div className="pt-8 border-t border-gray-100 mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {relatedPosts.map((rPost) => (
                <Link key={rPost.id} to={`/blog/${rPost.id}`} className="group block cursor-pointer">
                  
                  {/* Article Flex box architecture locks horizontal line heights for title/description changes */}
                  <article className="flex flex-col h-full">
                    
                    <div className="relative aspect-[1.4/1] rounded-3xl overflow-hidden mb-6">
                      <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    {/* Metadata Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      
                      {/* DISPLAYING ALL CATEGORIES (RELATED FEED CARD) */}
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {rPost.category.map((cat, catIdx) => (
                          <span 
                            key={catIdx} 
                            className="px-2.5 py-0.5 bg-brand-primary/5 text-brand-primary text-xs font-semibold rounded-full border border-brand-primary/10"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <span className="text-gray-500 text-xs font-medium flex items-center gap-1.5 shrink-0">
                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                        {rPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                      {rPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                      {rPost.description}
                    </p>
                    
                    {/* mt-auto pushes button flags cleanly into place regardless of card string length splits */}
                    <div className="flex items-center gap-2 text-brand-dark font-bold text-sm group-hover:gap-3 transition-all mt-auto">
                      <span>Read more</span> 
                      <ArrowRight size={16} className="text-brand-primary" />
                    </div>

                  </article>
                </Link>
              ))}
            </div>

            {/* Footer View All Context Action Pivot */}
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-8 py-3 border border-brand-primary text-brand-primary rounded-xl font-medium hover:bg-brand-primary hover:text-white transition-all shadow-sm"
              >
                <span>View all articles</span> 
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </article>
      </div>

      {/* Shared Global ReachOut CTA Block Element */}
      <ReachOut />
    </div>
  );
}