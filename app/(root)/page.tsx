import {getLatestProducts} from "@/actions/products";
import ProductCarousel from "@/components/shared/products/Carousel";
import Products, {
  ProductWithVariants,
} from "@/components/shared/products/products";
import {APP_NAME_FIRST} from "@/lib/constants";

import React from "react";

const HomePage = async () => {
  const products = await getLatestProducts();

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full relative">
        <h1 className="company-name absolute hidden md:block md:text-[28rem] bottom-26 left-10 tangerine">
          {APP_NAME_FIRST}
        </h1>
        <ProductCarousel />
      </div>
      <div>
        <Products data={products as ProductWithVariants[]} title="new" />
      </div>
    </div>
  );
};

export default HomePage;
