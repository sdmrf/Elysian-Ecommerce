import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "../ui/button";

// Slide Data Interface
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

// Slide Data
const slides: Slide[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/600x400?text=Discover+Our+Latest+Collection",
    title: "Discover Our Latest Collection",
    description: "Explore the best offers on our premium products.",
    link: "/collections/latest",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x400?text=Trendy+Styles+for+Every+Occasion",
    title: "Trendy Styles for Every Occasion",
    description: "Shop the latest trends and elevate your wardrobe.",
    link: "/collections/trendy",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x400?text=Unmatched+Quality+Exclusive+Prices",
    title: "Unmatched Quality, Exclusive Prices",
    description: "Get the best deals on top-quality products.",
    link: "/collections/exclusive",
  },
];

// Slide Component
const Slide = React.memo(({ slide }: { slide: Slide }) => (
  <CarouselItem className="flex-shrink-0 w-full relative">
    <Link to={slide.link} className="block relative w-full h-full">
      {/* Wrapper for aspect ratio */}
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
        {/* Slide Background Image */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-primary-foreground text-center p-6 z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
        <p className="text-sm md:text-lg text-secondary-foreground mb-4">
          {slide.description}
        </p>
        <Button
          variant="cartoon_secondary"
          className="z-20 relative px-6 py-2 text-lg font-semibold rounded-lg"
          size="lg"
        >
          Shop Now
        </Button>
      </div>
    </Link>
  </CarouselItem>
));

// Carousel Component
export function CarouselPlugin() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-7xl mx-auto rounded-lg overflow-hidden relative bg-card"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex gap-4">
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-muted text-muted-foreground rounded-full p-2 hover:bg-accent transition" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-muted text-muted-foreground rounded-full p-2 hover:bg-accent transition" />
    </Carousel>
  );
}
