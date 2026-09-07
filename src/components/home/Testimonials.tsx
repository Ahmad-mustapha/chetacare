import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import testimony1 from '/assets/testimony1.png';
import testimony2 from '/assets/testimony2.png';
import testimony3 from '/assets/testimony3.png';
import testimony4 from '/assets/testimony4.png';
import testimony5 from '/assets/User3.png';

const testimonialsData = [
  {
    id: 1,
    image: testimony1,
    name: 'Grace Adeleke',
    role: 'peri-urban Nigeria',
    quote: 'Chetacare helps me manage my blood pressure every day. I get reminders, and I feel safe knowing someone is monitoring me.',
    stars: 5,
  },
  {
    id: 2,
    image: testimony2,
    name: 'Dr. Emeka',
    role: 'Lagos State',
    quote: 'With Chetacare, I can track my patients remotely. It saves them unnecessary trips to the clinic and keeps them healthier.',
    stars: 5,
  },
  {
    id: 3,
    image: testimony3,
    name: 'Aisha Badmus',
    role: 'HR Manager',
    quote: "We implemented Chetacare for our staff, and it's already helping reduce absenteeism. Employees feel supported and cared for.",
    stars: 5,
  },
  {
    id: 4,
    image: testimony4,
    name: 'Samuel K.',
    role: 'Program Coordinator',
    quote: "Chetacare's system allows us to reach communities that previously had little access to chronic care. Early intervention is now possible.",
    stars: 5,
  },
  {
    id: 5,
    image: testimony5,
    name: 'Chimeremma Osayi',
    role: 'peri-urban Nigeria',
    quote: 'Chetacare has helped me personally to manage diabetes, now I know what food to take and how to manage my health properly.',
    stars: 5,
  },
  {
    id: 6,
    image: testimony2,
    name: 'Dr. Emeka',
    role: 'Lagos State',
    quote: 'With Chetacare, I can track my patients remotely. It saves them unnecessary trips to the clinic and keeps them healthier.',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] overflow-hidden">
      <div className="container-wide w-full mx-auto">
        
        {/* Header Section - Matches BlogSection alignment and scale rules */}
        <div className="flex flex-col items-center gap-6 lg:gap-8 w-full text-center mb-12">
          <p className="section-kicker">
            Testimonials
          </p>
          <h2 className="text-[#1F2A24] font-medium text-[28px] md:text-[32px] leading-[40px]">
            What are our users saying about us?
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4">
          
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border-2 border-[#1A7A4A] bg-white flex items-center justify-center text-[#1A7A4A] hover:bg-[#1A7A4A] hover:text-white transition-all duration-200 shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1A7A4A]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {testimonialsData.map((t) => (
                <div
                  key={t.id}
                  className="flex-none w-[85%] sm:w-[48%] lg:w-[31%] bg-[#F9FAFB] border border-[#F3F3F3] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <StarRating count={t.stars} />

                  <p className="text-[#3D4A42] text-sm md:text-base leading-relaxed mb-6">
                    "{t.quote}"
                  </p>

                  {/* Profile section forces horizontal line uniformity regardless of quote length */}
                  <div className="flex items-center gap-3 mt-auto pt-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#E6F4ED]"
                    />
                    <div>
                      <p className="font-semibold text-[#1F2A24] text-base">{t.name}</p>
                      <p className="text-[#6B7C72] text-xs md:text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#1A7A4A] border-2 border-[#1A7A4A] flex items-center justify-center text-white hover:bg-[#145f39] transition-all duration-200 shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}