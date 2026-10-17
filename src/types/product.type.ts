export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  // bổ sung
  sizes?: number[];
  alias?: string;
  size?: string;
  shortDescription?: string;
  quantity?: number;
  deleted?: boolean;
  categories?: string;
  relatedProducts?: string;
  feature?: boolean;
  image?: string;
  imgLink?: string;
};