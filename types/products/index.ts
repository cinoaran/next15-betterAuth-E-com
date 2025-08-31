// Define the Product interface manually or import from the correct path if available
import {Decimal} from "@prisma/client/runtime/library";
import {Product} from "@/lib/generated/prisma";

export interface LatestProducts extends Product {
  variants: {
    id: string;
    productId: string;
    size: string;
    international: string;
    createdAt: Date;
    updatedAt: Date;
    options: {
      id: string;
      variantId: string;
      color: string;
      entryPrice: Decimal;
      sellPrice: Decimal;
      quantity: number;
      sku: string;
      url: string;
      image: string[];
      weight: number;
      stockLevel: number;
    }[];
  }[];
}
