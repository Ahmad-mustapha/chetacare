import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogData';
import type { BlogPost } from '../../data/blogData';
import BlogCard from '../blog/BlogCard';

const BlogSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Cap the carousel at 10 posts; anything beyond that lives on the blog page.
  const featuredPosts = blogPosts.slice(0, 10);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const syncArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // 1px tolerance absorbs sub-pixel rounding at the track ends.
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    syncArrows();
    el.addEventListener('scroll', syncArrows, { passive: true });

    // Card widths are breakpoint-dependent, so re-measure when the box resizes.
    // ResizeObserver is missing in older browsers and in non-DOM environments,
    // so fall back to window resize there rather than throwing.
    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncArrows);
      resizeObserver.observe(el);
    } else {
      window.addEventListener('resize', syncArrows);
    }

    return () => {
      el.removeEventListener('scroll', syncArrows);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', syncArrows);
      }
    };
  }, [syncArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('li');
    // Advance by exactly one card plus the 28px gap; fall back to most of a page.
    const step = card ? card.getBoundingClientRect().width + 28 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#FFFFFF] py-12 lg:py-[80px] section-px transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-12 lg:gap-[64px]">
        
        <div className="w-full flex flex-row items-end justify-between gap-4 max-w-[1240px]">
          <div className="flex flex-col items-start text-left gap-4">
            <span className="text-[#1A7A4A] font-bold text-[18px] leading-[150%] uppercase tracking-wider font-sans max-w-[60px]">
              BLOGS
            </span>
            <h2 className="text-[#1F2A24] font-normal text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px] font-sans max-w-[607px]">
              Latest insights & health tips
            </h2>
          </div>

          {/* Pointer affordance for the carousel; touch users swipe instead. */}
          <div className="hidden md:flex flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollLeft}
              aria-label="Show previous articles"
              className="w-12 h-12 rounded-full border border-[#1A7A4A] flex items-center justify-center text-[#1A7A4A] transition-all hover:bg-[#F2FFF8] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollRight}
              aria-label="Show next articles"
              className="w-12 h-12 rounded-full border border-[#1A7A4A] flex items-center justify-center text-[#1A7A4A] transition-all hover:bg-[#F2FFF8] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal carousel: cards keep a fixed width and the row scrolls sideways. */}
        <div ref={scrollerRef} className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-1 px-1">
          <ul className="flex items-stretch gap-[28px] list-none p-0 m-0">
            {featuredPosts.map((post: BlogPost) => (
              <li
                key={post.id}
                className="shrink-0 snap-start w-[260px] sm:w-[300px] lg:w-[380px]"
              >
                <BlogCard post={post} tagLabel={post.category[0]} />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-center mt-2">
          <Link 
            to="/blog"
            className="flex flex-row items-center justify-center gap-2 py-4 px-7 border border-[#1A7A4A] rounded-[12px] hover:bg-gray-50 transition-all text-[#1F2A24] text-[18px] font-medium w-full sm:w-[202.6px] h-[56.05px] text-center whitespace-nowrap"
          >
            <span>View all articles</span>
            <ArrowRight className="w-[24px] h-[24px] text-[#1F2A24]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;