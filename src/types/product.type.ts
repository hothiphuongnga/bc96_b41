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

// {
//   "id": 0,
//   "name": "string",
//   "price": 0,
//   "description": "string",
//   "shortDescription": "string",
//   "quantity": 0,
//   "imgLink": "string"
// }
// omit : lấy tất cả các thuộc tính trừ những thuộc tính được chỉ định từ thằng A
// EX: export type ProductFormType = Omit<ProductType, "id"> : lấy tất cả các thuộc tính của ProductType trừ id
// pick : lấy những thuộc tính được chỉ đinh từ thằng A
export type ProductPayload = Pick<ProductType, "id" | "name" | "price" | "description" | "shortDescription" | "quantity" | "imgLink">;
// chỉ lấy các thuộc tính được liệt kê