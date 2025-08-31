import {Decimal} from "@prisma/client/runtime/library";

export interface OptionType {
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
  // Add other properties as needed
}
