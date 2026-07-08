import { ArrowRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
  const visiblePages = Math.max(3, totalPages);

  return (
    <div className="w-full max-w-[1240px] h-12 flex flex-col items-center justify-center self-stretch">
      <nav aria-label="Blog page navigation" className="w-auto h-12 flex items-center justify-center gap-[18.98px]">
        {Array.from({ length: visiblePages }, (_, index) => {
          const pageNumber = index + 1;
          const isActive = pageNumber === currentPage;
          const isDisabled = pageNumber > totalPages;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={isDisabled ? undefined : () => onPageChange(pageNumber)}
              disabled={isDisabled}
              aria-current={isActive ? 'page' : undefined}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 ${
                isDisabled
                  ? 'text-[#9F9F9F]'
                  : isActive
                    ? 'text-[#1F2A24]'
                    : 'text-[#9F9F9F] hover:text-[#1F2A24]'
              }`}
            >
              <span style={{ fontFamily: 'Inter Display' }} className="text-[18px] leading-[26px] font-normal">
                {pageNumber}
              </span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
          className="w-12 h-12 flex items-center justify-center rounded-full text-[#777777] transition-opacity duration-200 disabled:opacity-40"
        >
          <ArrowRight className="h-4 w-[21px]" strokeWidth={1.75} />
        </button>
      </nav>
    </div>
  );
}