"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const ProductCarousel = () => {
  type CarouselItem = {
    id: number;
    title: string;
    descriptionTitle: string;
    image: string;
    href: string;
  };

  const carouselData: CarouselItem[] = [
    {
      id: 1,
      title: "Fashionized 2025",
      descriptionTitle: "Explore new in Spring",
      image: "/carousel/jacketBlue.webp",
      href: "/products/hoodie",
    },
    {
      id: 2,
      title: "Fashionized 2025",
      descriptionTitle: "Sommer Collection",
      image: "/carousel/blue-lily.png",
      href: "/products/hoodie",
    },
    {
      id: 3,
      title: "Newest 2025",
      descriptionTitle: "Spring Collection",
      image: "/carousel/womenBlack.webp",
      href: "/products/hoodie",
    },
  ];

  return (
    <Carousel
      orientation="horizontal"
      opts={{loop: true}}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselPrevious className="ring-2 ring-white hover:ring-accent/20 shadow-md p-0 md:p-2 hover:bg-primary/10 cursor-pointer z-20" />
      <CarouselContent className="carousel-horizontal-full">
        {carouselData.map((item) => (
          <CarouselItem
            className="relative flex flex-col items-center justify-center"
            key={item.id}
          >
            <div className="mx-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={item.id === 1}
                className="object-cover md:object-contain object-top rounded-md"
              />
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center w-full">
              <Link href={item.href}>
                <h1 className="bg-primary hover:bg-primary/10 text-primary-foreground p-1 md:p-3 rounded-md transition-colors font-medium font-roboto">
                  Explore
                </h1>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="ring-2 ring-white hover:ring-accent/20 shadow-md p-0 md:p-2 hover:bg-primary/10 cursor-pointer z-20" />
    </Carousel>
  );
};

export default ProductCarousel;
