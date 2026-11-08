"use client";

import { useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  PREVIOUS_NEWS,
  PREVIOUS_NEWS_HEADING,
  PUBLICATION_LABELS,
} from "@/constants/publications";
import { PublicationCard } from "./PublicationCard";

/** Horizontal carousel of past publications; swipe/scroll or use the dots to move */
export function PreviousNews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideWidth = () => {
    const firstSlide = trackRef.current?.firstElementChild as HTMLElement | null;
    return firstSlide ? firstSlide.offsetWidth : 0;
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const slideWidth = getSlideWidth();
    if (!track || slideWidth === 0) return;
    setActiveIndex(Math.round(track.scrollLeft / slideWidth));
  };

  const scrollToSlide = (slideIndex: number) => {
    trackRef.current?.scrollTo({ left: slideIndex * getSlideWidth(), behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader heading={PREVIOUS_NEWS_HEADING} />
        <div
          ref={trackRef}
          onScroll={handleScroll}
          aria-label={PUBLICATION_LABELS.carouselAriaLabel}
          className="mt-8 -mr-4 flex snap-x snap-mandatory overflow-x-auto pb-2 [scrollbar-width:none]"
        >
          {PREVIOUS_NEWS.map((publication) => (
            <div key={publication.id} className="w-[85%] shrink-0 snap-start pr-5 sm:w-1/2 lg:w-[36%]">
              <PublicationCard publication={publication} />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-1.5">
          {PREVIOUS_NEWS.map((publication, index) => (
            <button
              key={publication.id}
              onClick={() => scrollToSlide(index)}
              aria-label={`${PUBLICATION_LABELS.goToSlideAriaLabel} ${index + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeIndex ? "w-7 bg-brand" : "w-1.5 bg-ink",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
