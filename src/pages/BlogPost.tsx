import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, User, Calendar, Clock } from 'lucide-react';
import ReachOut from '../components/ReachOut';
import { blogPosts } from '../data/blogData';
import Seo from '../components/Seo';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === Number(id));

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Seo
                    title="Article Not Found | Chetacare"
                    description="The requested Chetacare article could not be found."
                    noIndex
                />
                Post not found
            </div>
        );
    }

    const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

    return (
        <div className="bg-white min-h-screen">
            <Seo
                title={`${post.title} | Chetacare`}
                description={post.description}
                image={post.image}
                type="article"
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
            {/* Breadcrumb / Back Navigation */}
            <div className="container-wide pt-12 pb-8">
                <Link to="/blog" className="flex items-center gap-2 text-[#475467] hover:text-[#1A7A4A] transition-colors font-medium">
                    <ArrowLeft size={18} />
                    Back to articles
                </Link>
            </div>

            {/* Article Header */}
            <article className="pb-12">
                <div className="container-wide">
                    <div className="max-w-4xl">
                        <div className="inline-block px-3 py-1 bg-[#F2FFF8] text-[#1A7A4A] text-sm font-medium rounded-full border border-[#D1FADF] mb-6">
                            {post.category}
                        </div>
                        <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#101828] leading-[1.1] mb-8 tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-[#475467] mb-12">
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-[#1A7A4A]" />
                                <span className="font-semibold text-[#101828]">By {post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#1A7A4A]" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#1A7A4A]" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="w-full aspect-[16/9] md:aspect-[2.4/1] rounded-[32px] overflow-hidden mb-12">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Share Buttons */}
                    {/* <div className="flex items-center gap-4 mb-20">
                        <span className="text-[#101828] font-bold">Share to:</span>
                        <div className="flex gap-3">
                            <button className="p-2 rounded-full border border-gray-100 text-[#475467] hover:text-[#1A7A4A] hover:bg-[#F2FFF8] transition-all">
                                <FaTwitter size={18} />
                            </button>
                            <button className="p-2 rounded-full border border-gray-100 text-[#475467] hover:text-[#1A7A4A] hover:bg-[#F2FFF8] transition-all">
                                <FaLinkedinIn size={18} />
                            </button>
                            <button className="p-2 rounded-full border border-gray-100 text-[#475467] hover:text-[#1A7A4A] hover:bg-[#F2FFF8] transition-all">
                                <FaFacebookF size={18} />
                            </button>
                            <button className="p-2 rounded-full border border-gray-100 text-[#475467] hover:text-[#1A7A4A] hover:bg-[#F2FFF8] transition-all">
                                <Link2 size={18} />
                            </button>
                        </div>
                    </div> */}

                    {/* Article Content */}
                    <div className="max-w-4xl">
                        <div className="space-y-12">
                            {post.fullContent.map((section, index) => {
                                if (section.type === 'heading') {
                                    return (
                                        <section key={index} className={index === 0 ? "" : "border-t border-gray-100 pt-12"}>
                                            <h2 className="text-2xl md:text-[32px] font-bold text-[#101828] mb-6">{section.content}</h2>
                                        </section>
                                    );
                                }
                                if (section.type === 'paragraph') {
                                    return (
                                        <div key={index} className="text-[#475467] text-lg leading-relaxed">
                                            <p>{section.content}</p>
                                        </div>
                                    );
                                }
                                if (section.type === 'list') {
                                    return (
                                        <ul key={index} className="space-y-4 text-[#475467] text-lg leading-relaxed">
                                            {section.items?.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-[#1A7A4A] rounded-full mt-2.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return null;
                            })}

                            <div className="pt-12">
                                <div className="bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl p-8 md:p-10">
                                    <p className="text-[#101828] font-bold text-xl md:text-2xl mb-8 leading-tight">
                                        Don't just read about managing hypertension, get support to actually do it.
                                    </p>
                                    <Link
                                        to="#"
                                        className="inline-block border border-[#D1FADF] bg-[#FFFFFF] text-[#1A7A4A] px-10 py-4 rounded-xl font-bold hover:bg-[#F2FFF8] transition-all shadow-sm"
                                    >
                                        Talk to the support team
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Articles */}
                    <div className="pt-8 border-t border-gray-100 mt-32">
                        <h2 className="text-3xl md:text-[40px] font-bold text-[#101828] mb-12">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {relatedPosts.map((rPost) => (
                                <Link key={rPost.id} to={`/blog/${rPost.id}`} className="group block cursor-pointer">
                                    <div className="relative aspect-[1.4/1] rounded-[24px] overflow-hidden mb-6">
                                        <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-[#F2FFF8] text-[#1A7A4A] text-xs font-semibold rounded-full border border-[#D1FADF]">{rPost.category}</span>
                                        <span className="text-[#475467] text-xs font-medium flex items-center gap-1.5">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                                            {rPost.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#101828] mb-3 group-hover:text-[#1A7A4A] transition-colors leading-snug">{rPost.title}</h3>
                                    <p className="text-[#475467] text-sm mb-6 line-clamp-2">{rPost.description}</p>
                                    <div className="flex items-center gap-2 text-[#101828] font-bold text-sm group-hover:gap-3 transition-all">Read more <ArrowRight size={16} /></div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 px-4 md:px-8 py-3 border border-[#1A7A4A] text-[#1A7A4A] rounded-[8px] xl:rounded-[12px] font-medium hover:bg-[#1A7A4A] hover:text-white transition-all shadow-sm"
                            >
                                View all articles <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* ReachOut CTA */}
            <ReachOut />
        </div>
    );
};

export default BlogPost;
