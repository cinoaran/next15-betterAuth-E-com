"use client";

import {Clock11Icon} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import {VariantType} from "@/types/variant";
import {Product as PrismaProduct} from "@/lib/generated/prisma";
import {formatPriceEUR} from "@/lib/formater/formatPrice";

export type ProductWithVariants = PrismaProduct & {
  variants: VariantType[];
};

type LatestProductsProps = {
  data: ProductWithVariants[];
  title?: string;
};

const LatestProducts: React.FC<LatestProductsProps> = ({data, title}) => {
  const [currentVariant, setCurrentVariantState] = useState({
    id: "",
    sku: "",
    international: "",
    image: "",
    url: "",
    sellPrice: Number(0),
  });

  return (
    <div className="relative max-w-[90%] mx-auto my-24">
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {data.map((product) => (
            <div
              key={product.name}
              className="relative backdrop-blur-2xl bg-card/30 border-[0.2px] border-foreground/15 rounded-md p-5 hover:border-accent/30  overflow-clip"
            >
              <h2 className="absolute text-foreground/20 translate-y-[6vh] -left-2 h2-rotate -rotate-90 d-block w-12 h-[auto]">
                030
              </h2>
              <span className="absolute flex-center gap-2 top-1/2 -translate-y-1/2 text-accent/25 text-8xl right-10 rotate-90 w-12 h-[auto] flex-center uppercase font-bold">
                {product.brand}
              </span>
              <div>
                <div className="relative mt-10">
                  <div className="absolute flex-start items-center gap-2 -top-12 right-0">
                    <Clock11Icon size={40} className="text-accent" />
                    <h2 className="text-sm font-bold text-foreground uppercase">
                      {title}
                    </h2>
                  </div>
                  <Image
                    key={product.id}
                    src={
                      product.id === currentVariant.id
                        ? currentVariant.url + "" + currentVariant.image
                        : product.variants[0].options[0].url +
                          "" +
                          product.variants[0].options[0].image[0]
                    }
                    alt={product.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-[28em] object-contain aspect-square"
                    priority={true}
                  />
                </div>

                <div className="flex items-center justify-center gap-5 my-5">
                  <div className="flex items-center justify-center text-foreground rounded-md px-4 w-full">
                    <h3 className="text-center h-10 text-lg font-semibold my-3 uppercase text-foreground border-[0.3px] rounded-tl rounded-bl border-foreground/30 py-1 px-5">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {product.variants.map((variant: VariantType) => (
                  <div key={variant.international}>
                    <div
                      className="flex items-center justify-center border-[0.3px] border-primary/50 cursor-pointer rounded-md p-2 bg-primary/20"
                      onClick={() => {
                        setCurrentVariantState({
                          id: product.id,
                          international: variant.international,
                          sku: variant.options[0].sku,
                          image: variant.options[0].image[0],
                          url: variant.options[0].url,
                          sellPrice: Number(variant.options[0].sellPrice),
                        });
                      }}
                    >
                      <span
                        className={`flex items-center justify-center cursor-pointer w-fit h-5 text-sm rounded-md `}
                      >
                        {variant.international}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1 flex-wrap h-16 mb-10">
                      {variant.options.map((option) => (
                        <div
                          key={option.color}
                          className={`flex items-center justify-center`}
                          onClick={() =>
                            setCurrentVariantState({
                              id: product.id,
                              international: variant.international,
                              sku: option.sku,
                              image: option.image[0],
                              url: option.url,
                              sellPrice: Number(option.sellPrice),
                            })
                          }
                        >
                          <Image
                            src={option.url + "" + option.image[0]}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className={`w-8 h-8 cursor-pointer rounded-sm ${currentVariant.image === option.image[0] && "scale-110"}`}
                            priority={true}
                            alt={`Product image ${option.image}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {currentVariant.id === product.id ? (
                <p className="w-[max-content] h-5 bg-primary/30 text-white text-extrabold flex items-center justify-center py-5 rounded-tr-md rounded-br-md rounded-md text-lg">
                  <span className="border-r-[0.1px] border-primary py-1 px-2">
                    {currentVariant.international}
                  </span>
                  <span className="py-1 px-2">
                    {formatPriceEUR(Number(currentVariant.sellPrice))}
                  </span>
                </p>
              ) : (
                <p className="w-[max-content] h-5 bg-primary/30 text-accent-foreground text-bold flex items-center justify-center gap-0 py-5 rounded-tr-md rounded-br-md rounded-md text-lg">
                  <span className="border-r-[0.1px] border-primary py-1 px-2">
                    {product.variants[0].international}
                  </span>
                  <span className="py-1 px-2">
                    {formatPriceEUR(
                      Number(product.variants[0].options[0].sellPrice)
                    )}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">No products found</h2>
        </div>
      )}
    </div>
  );
};

export default LatestProducts;
