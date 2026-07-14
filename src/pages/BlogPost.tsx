import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
// import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { blogPosts } from '../data/blogData';
import Seo from '../components/Seo';
import BlogCard from '../components/blog/BlogCard';

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

              <h1 className="text-3xl md:text-5xl lg:text-[48px] font-medium text-[#1F2A24] leading-tight md:leading-[48px] lg:w-[70vw] xl:w-[50vw]">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Info Block with Custom Logo Asset */}
          <div className="flex flex-col gap-6 w-full">
            {/* Horizontal Separator Line */}
            <div className="w-full h-[1px] bg-[#E5E7EB]" />
            
            {/* Metadata Row Container */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[#4F4F4F] text-[18px] leading-none font-normal">
              {/* Author Info Block */}
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/Checkmark-part-of-logo.png" 
                  alt="Chetacare Team" 
                  className="w-[28px] h-[25px] object-contain shrink-0" 
                />
                <span className="transform translate-y-[1px]">By {post.author || 'Chetacare Team'}</span>
              </div>

              {/* Date Info Block */}
              <div className="flex items-center gap-2">
                <Calendar className="w-[25px] h-[25px] text-[#555555] shrink-0" />
                <span className="transform translate-y-[1px]">{post.date}</span>
              </div>

              {/* Read Time Info Block */}
              <div className="flex items-center gap-2">
                <Clock className="w-[25px] h-[25px] text-[#555555] shrink-0" />
                <span className="transform translate-y-[1px]">{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Main Hero Image Container Frame */}
          <div className="w-full h-[350px] md:h-[698px] rounded-[20px] overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover object-center" 
            />
          </div>

          {/* Socials Share Bar */}
          <div className="flex items-center gap-8 py-2">
            <span className="text-[20px] font-medium leading-[24px] text-[#1F2A24]">
              Share to
            </span>
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <button 
                aria-label="Share on Facebook" 
                className="w-12 h-12 bg-white border border-[#B4B4B4] rounded-[12px] flex items-center justify-center text-[#B4B4B4] hover:text-[#1F2A24] hover:border-[#1F2A24] transition-colors"
              >
                <FaFacebook className="w-7 h-7" />
              </button>

              {/* LinkedIn */}
              <button 
                aria-label="Share on LinkedIn" 
                className="w-12 h-12 bg-white border border-[#B4B4B4] rounded-[12px] flex items-center justify-center text-[#B4B4B4] hover:text-[#1F2A24] hover:border-[#1F2A24] transition-colors"
              >
                <FaLinkedin className="w-7 h-7" />
              </button>

              {/* X (Twitter) */}
              <button 
                aria-label="Share on X" 
                className="w-12 h-12 bg-white border border-[#B4B4B4] rounded-[12px] flex items-center justify-center text-[#B4B4B4] hover:text-[#1F2A24] hover:border-[#1F2A24] transition-colors"
              >
                <FaXTwitter className="w-7 h-7" />
              </button>
            </div>
          </div>
        </section>

        {/* Content Section (Read More (Blog) ---> Content) */}
        <section className="pt-0 px-4 md:px-[100px] pb-8 flex flex-col gap-8 w-full max-w-[915px]">
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
        <section className="pt-0 px-4 md:px-[100px] pb-20 flex flex-col gap-8 w-full">
          <div className="pt-0">
            <div className="w-full h-[1px] bg-[#E5E7EB] mb-20" />
            <h2 className="text-[40px] font-medium leading-[48px] text-[#1F2A24]">
              Related Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] w-full">
            {relatedPosts.map((rPost) => (
              <BlogCard
                key={rPost.id}
                post={rPost}
                tagLabel={rPost.category[0] || 'Mental Health'}
              />
            ))}
          </div>

          <div className="flex justify-center pt-8">
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