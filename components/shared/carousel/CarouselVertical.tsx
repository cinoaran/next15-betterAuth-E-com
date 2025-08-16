import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const CarouselVertical = () => {
  return (
    <Carousel orientation="vertical">
      <CarouselPrevious />
      <CarouselContent className="max-w-[400px] max-h-[500px] mx-auto">
        <CarouselItem>
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselVertical;
