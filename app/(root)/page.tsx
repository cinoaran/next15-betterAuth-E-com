import ProductCarousel from "@/components/shared/products/Carousel";
import {APP_NAME_FIRST} from "@/lib/constants";
import {formatPriceEUR} from "@/lib/formater/formatPrice";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full relative">
        <h1 className="company-name absolute hidden md:block md:text-[28rem] bottom-26 left-10 tangerine">
          {APP_NAME_FIRST}
        </h1>
        <ProductCarousel />
      </div>
      {/* <div>
        <p>{formatPriceEUR(299.99)}</p>
      </div> */}
    </div>
  );
};

export default HomePage;
