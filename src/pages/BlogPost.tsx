import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
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
        <Link to="/blog" className="text-[#1A7A4A] font-bold hover:underline">
          Return to blog feed
        </Link>
      </div>
    );
  }

  // Increased slice to display exactly 3 related posts
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

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

      <div className="w-full max-w-[1440px] mx-auto flex flex-col">
        
        {/* Topic / Header Section (Read More (Blog) ---> Topic) */}
        <section className="py-20 px-4 md:px-[100px] flex flex-col gap-10 w-full">
          
          <div className="flex flex-col gap-10 w-full">
            {/* Back Navigation Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 py-2 pr-2 pl-0 text-[#4F4F4F] transition-colors text-[18px] leading-[26px] font-normal w-max">
              <ArrowLeft className="w-4 h-5" />
              <span>Back to articles</span>
            </Link>

            {/* Title and Category Badges Frame */}
            <div className="flex flex-col gap-8 items-start w-full">
              {/* Displaying ALL assigned categories for the post */}
              <div className="flex flex-wrap gap-2">
                {post.category.map((cat, index) => (
                  <div key={index} className="py-2 px-4 bg-[#E8F5EE] rounded-full flex items-center justify-center">
                    <span className="text-[#1A7A4A] text-[14px] font-semibold leading-[20px]">
                      {cat}
                    </span>
                  </div>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[48px] font-medium text-[#1F2A24] leading-tight lg:leading-[48px]">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Info Block with Custom Logo Asset */}
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full h-[1px] bg-[#E5E7EB]" />
            
            <div className="flex flex-wrap items-center gap-4 text-[#4F4F4F] text-[18px] leading-[26px] font-normal">
              <div className="flex items-center gap-2">
                {/* Embedded the explicit checkmark icon component before the author name */}
                <img 
                  src="/assets/Checkmark-part-of-logo.png" 
                  alt="Chetacare Team" 
                  className="w-[28px] h-[25px] object-contain shrink-0" 
                />
                <span>By {post.author || 'Chetacare Team'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-[25px] h-[25px] text-[#555555]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-[25px] h-[25px] text-[#555555]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Main Hero Image Container Frame */}
          <div className="w-full h-[350px] md:h-[698px] rounded-[20px] overflow-hidden mt-8">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Socials Share Bar */}
          <div className="flex items-center gap-8 py-2">
            <span className="text-[20px] font-medium leading-[24px] text-[#1F2A24]">
              Share to
            </span>
            <div className="flex items-center gap-2">
              <button aria-label="Share on X" className="w-12 h-12 bg-white border border-[#B4B4B4] rounded-[12px] flex items-center justify-center text-[#B4B4B4] hover:text-[#1F2A24] hover:border-[#1F2A24] transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </button>
              <button aria-label="Share on Facebook" className="w-12 h-12 bg-white border border-[#B4B4B4] rounded-[12px] flex items-center justify-center text-[#B4B4B4] hover:text-[#1F2A24] hover:border-[#1F2A24] transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </button>
              <button aria-label="Share on LinkedIn" className="w-12 h-12 bg-white border border-[#B4B4B4] rounded-[12px] flex items-center justify-center text-[#B4B4B4] hover:text-[#1F2A24] hover:border-[#1F2A24] transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Content Section (Read More (Blog) ---> Content) */}
        <section className="pt-0 px-4 md:px-[100px] pb-20 flex flex-col gap-8 w-full max-w-[915px]">
          {post.fullContent.map((section, index) => {
            if (section.type === 'heading') {
              return (
                <div key={index} className="w-full flex flex-col gap-8">
                  {index !== 0 && <div className="w-full h-[1px] bg-[#E5E7EB]" />}
                  <h2 className="text-[32px] font-normal leading-[40px] text-black">
                    {section.content}
                  </h2>
                </div>
              );
            }
            if (section.type === 'paragraph') {
              return (
                <p key={index} className="text-[18px] font-normal leading-[26px] text-[#222222] w-full">
                  {section.content}
                </p>
              );
            }
            if (section.type === 'list') {
              return (
                <ul key={index} className="flex flex-col gap-4 text-[18px] font-normal leading-[26px] text-[#222222] pl-4 list-disc">
                  {section.items?.map((item, i) => (
                    <li key={i} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}

          {/* Callout Action Box */}
          <div className="w-full flex flex-col gap-8 mt-4">
            <div className="w-full h-[1px] bg-[#E5E7EB]" />
            <p className="text-black font-normal text-[32px] leading-[40px]">
              Don’t just read about managing hypertension, get support to actually do it.
            </p>
            <Link
              to="/contact"
              className="w-max py-4 px-8 bg-[#1A7A4A] text-white text-[18px] font-bold leading-[27px] rounded-[12px] flex items-center justify-center text-center transition-colors hover:bg-[#15613c]"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Related Articles Segment Area */}
        <section className="pt-0 px-4 md:px-[100px] pb-20 flex flex-col gap-8 w-full border-t border-[#E5E7EB]">
          <div className="pt-8">
            <h2 className="text-[40px] font-medium leading-[48px] text-[#1F2A24]">
              Related Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] w-full">
            {relatedPosts.map((rPost) => (
              <Link key={rPost.id} to={`/blog/${rPost.id}`} className="block h-full">
                <article className="flex flex-col bg-white border border-[#F3F3F3] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] rounded-[10px] overflow-hidden h-full">
                  
                  {/* Zoom scale transition removed */}
                  <div className="w-full h-[299px] overflow-hidden">
                    <img 
                      src={rPost.image} 
                      alt={rPost.title} 
                      className="w-full h-full object-cover rounded-t-[8px]" 
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-[10px] flex-grow justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between w-full">
                        {/* Strictly displaying ONLY the first category tag in related card form */}
                        <div className="py-2 px-4 bg-[#F2FFF8] text-[#1A7A4A] border border-[#D1FADF] rounded-full text-[14px] font-semibold leading-[20px]">
                          {rPost.category[0] || 'Mental Health'}
                        </div>
                        <span className="text-[#1F2A24] text-[14px] font-normal leading-[20px] flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#555555]" />
                          {rPost.readTime || '5 min read'}
                        </span>
                      </div>

                      <h3 className="text-[24px] font-medium leading-[32px] text-[#222222] group-hover:text-[#1A7A4A] transition-colors line-clamp-2">
                        {rPost.title}
                      </h3>

                      <p className="text-[#222222] text-[18px] font-normal leading-[26px] line-clamp-3">
                        {rPost.description}
                      </p>
                    </div>

                    <div className="py-2 pr-2 pl-0 flex items-center gap-2 text-[#222222] font-normal text-[16px] leading-[24px] group-hover:gap-3 transition-all mt-auto">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
                    </div>

                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              to="/blog"
              className="py-4 px-7 border border-[#1A7A4A] text-[#1F2A24] text-[18px] font-medium leading-[27px] rounded-[12px] flex items-center justify-center gap-2 transition-colors hover:bg-gray-50"
            >
              <span>View all articles</span>
              <ArrowRight className="w-5 h-5 text-[#1F2A24]" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}