import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const CarouselHorizontal = () => {
  return (
    <Carousel orientation="horizontal">
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
          <Image
            src="https://picsum.photos/seed/picsum/400/500"
            alt="image"
            width={400}
            height={500}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 lg:basis-1/6">
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

export default CarouselHorizontal;
