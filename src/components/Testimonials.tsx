import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
const testimony1 = "/assets/testimony1.png";
const testimony2 = "/assets/testimony2.png";
const testimony3 = "/assets/testimony3.png";
const testimony4 = "/assets/testimony4.png";

const testimonials = [
  {
    id: 1,
    image: testimony1,
    name: 'Grace Adeleke',
    role: '58, peri-urban Nigeria',
    quote:
      'Chetacare helps me manage my blood pressure every day. I get reminders, and I feel safe knowing someone is monitoring me.',
    stars: 5,
  },
  {
    id: 2,
    image: testimony2,
    name: 'Dr. Emeka',
    role: 'Lagos State',
    quote:
      'With Chetacare, I can track my patients remotely. It saves them unnecessary trips to the clinic and keeps them healthier.',
    stars: 5,
  },
  {
    id: 3,
    image: testimony3,
    name: 'Aisha Badmus',
    role: 'HR Manager',
    quote:
      'We implemented Chetacare for our staff, and it\'s already helping reduce absenteeism. Employees feel supported and cared for.',
    stars: 5,
  },
  {
    id: 4,
    image: testimony4,
    name: 'Samuel K.',
    role: 'Program Coordinator',
    quote:
      'Chetacare\'s system allows us to reach communities that previously had little access to chronic care. Early intervention is now possible.',
    stars: 5,
  },
  // Duplicates to fill carousel
  {
    id: 5,
    image: testimony1,
    name: 'Grace Adeleke',
    role: '58, peri-urban Nigeria',
    quote:
      'Chetacare helps me manage my blood pressure every day. I get reminders, and I feel safe knowing someone is monitoring me.',
    stars: 5,
  },
  {
    id: 6,
    image: testimony2,
    name: 'Dr. Emeka',
    role: 'Lagos State',
    quote:
      'With Chetacare, I can track my patients remotely. It saves them unnecessary trips to the clinic and keeps them healthier.',
    stars: 5,
  },
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex items-center gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectionChange = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', handleSelectionChange);
    emblaApi.on('reInit', handleSelectionChange);

    return () => {
      emblaApi.off('select', handleSelectionChange);
      emblaApi.off('reInit', handleSelectionChange);
    };
  }, [emblaApi, handleSelectionChange]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const canScrollPrev = emblaApi ? emblaApi.canScrollPrev() : false;
  const canScrollNext = emblaApi ? emblaApi.canScrollNext() : true;

  return (
    <section className="py-16 lg:py-24 bg-[#F7FBF9] overflow-hidden">
      <div className="container-wide">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-block px-4 py-2 bg-[#22C55E0D] border border-[#22C55E4D] rounded-md sm:rounded-lg mb-8">
            <p className="text-[#1A7A4A] font-medium text-[12px] xl:text-[14px]">Testimonials</p>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] lg:text-[44px] xl:text-[48px] font-medium text-[#1F2A24] leading-[50px] mb-6 tracking-[-2px]">
            What are our users <br className="hidden sm:block" /> saying about us?
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative" data-selected-index={selectedIndex}>
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full border-2 border-[#1A7A4A] bg-white flex items-center justify-center text-[#1A7A4A] hover:bg-[#1A7A4A] hover:text-white transition-all duration-200 shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1A7A4A]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-none w-[85%] sm:w-[48%] lg:w-[31%] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <StarRating count={t.stars} />

                  <p className="text-[#3D4A42] text-[15px] leading-relaxed mb-6 min-h-[72px]">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#E6F4ED]"
                    />
                    <div>
                      <p className="font-semibold text-[#1F2A24] text-[15px]">{t.name}</p>
                      <p className="text-[#6B7C72] text-[13px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 rounded-full bg-[#1A7A4A] border-2 border-[#1A7A4A] flex items-center justify-center text-white hover:bg-[#145f39] transition-all duration-200 shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
