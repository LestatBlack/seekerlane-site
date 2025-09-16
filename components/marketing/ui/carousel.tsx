"use client";

"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel"; // <-- types from base pkg
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  className?: string;
  /** Embla options, e.g. { loop: true } */
  opts?: EmblaOptionsType;
  /** Embla plugins (optional) */
  plugins?: EmblaPluginType[];
  /** Slides go here */
  children: React.ReactNode;
};

export default function Carousel({
  className,
  opts,
  plugins,
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, ...opts },
    plugins
  );

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Container */}
        <div className="flex -ml-4">
          {/* Slides */}
          {React.Children.map(children, (child, i) => (
            <div className="pl-4 basis-full shrink-0 grow-0" key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/50 text-white hover:bg-black/70"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/50 text-white hover:bg-black/70"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
