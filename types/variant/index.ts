import {OptionType} from "../option";

export type VariantType = {
  id: string;
  productId: string;
  size: string;
  international: string;
  options: OptionType[];
  createdAt: Date;
  updatedAt: Date;
};
