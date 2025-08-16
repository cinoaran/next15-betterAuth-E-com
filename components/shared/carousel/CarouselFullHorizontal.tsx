"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const CarouselFullHorizontal = () => {
  return (
    <Carousel orientation="horizontal">
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem className="flex flex-col items-center justify-between">
          <div className="relative mx-auto">
            <Image
              src="/carousel/blue-lily.png"
              alt="image"
              width={500}
              height={500}
              priority={true}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="flex flex-col items-center justify-between">
          <div className="relative mx-auto">
            <Image
              src="/carousel/jacketBlue.webp"
              alt="image"
              width={500}
              height={500}
              priority={true}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="relative flex flex-col items-center justify-between">
          <div className="relative mx-auto">
            <Image
              src="/carousel/womenBlack.webp"
              alt="image women Black"
              width={500}
              height={500}
              loading="lazy"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="relative flex flex-col items-center justify-between">
          <div className="relative mx-auto">
            <Image
              src="/carousel/womenBlack.webp"
              alt="image women Black"
              width={500}
              height={500}
              loading="lazy"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselFullHorizontal;
