"use server";
import {prisma} from "@/lib/prisma";
import {convertToPlainObject} from "@/lib/utils";
import {Product} from "@/lib/generated/prisma";
import {LATEST_PRODUCTS_LIMIT} from "@/lib/constants";

// Get latest products
export async function getLatestProducts(): Promise<Product[]> {
  const latestProducts = await prisma.product.findMany({
    include: {
      variants: {
        include: {
          options: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCTS_LIMIT,
  });

  return convertToPlainObject(latestProducts);
}
