import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '../../data/blogData';

interface BlogCardProps {
  post: BlogPost;
  tagLabel: string;
}

export default function BlogCard({ post, tagLabel }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block cursor-pointer transition-all duration-300 h-full"
    >
      <article className="flex flex-col bg-white border border-[#F3F3F3] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] rounded-[10px] overflow-hidden h-full">
        <div className="w-full h-[180px] lg:h-[299px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-t-[8px]"
          />
        </div>

        <div className="p-4 lg:p-6 flex flex-col flex-grow justify-between gap-4 lg:gap-6">
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="flex items-center justify-between w-full gap-4">
              {/* Below lg the pill can wrap; w-min keeps it hugging its longest
                  line instead of leaving dead space on the right. */}
              <span className="py-2 px-4 bg-[#F2FFF8] text-[#1A7A4A] text-[14px] font-semibold rounded-full border border-[#D1FADF] leading-[20px] w-min lg:w-auto text-center">
                {tagLabel}
              </span>
              <span className="text-[#1F2A24] text-[14px] font-normal leading-[20px] flex items-center gap-2 whitespace-nowrap">
                <Clock className="w-4 h-4 text-[#555555]" />
                {post.readTime || '5 min read'}
              </span>
            </div>

            <h3 className="text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] font-medium text-[#1F2A24] group-hover:text-[#1A7A4A] transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-[#282828] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[26px] font-normal line-clamp-3">
              {post.description}
            </p>
          </div>

          <div className="py-2 pr-2 pl-0 flex items-center gap-2 text-[#222222] font-normal text-[16px] leading-[24px] group-hover:gap-3 transition-all mt-auto">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
          </div>
        </div>
      </article>
    </Link>
  );
}