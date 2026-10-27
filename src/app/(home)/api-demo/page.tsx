"use client";
import ProductManager from "@/components/product/ProductManager";
import ProductSearch from "@/components/product/ProductSearch";
import { productService } from "@/services/product.service";
import { ProductType } from "@/types/product.type";
import React, { useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [message, setMessage] = useState("Bấm nút để gọi API trung gian.");

  // http://localhost:3000/api/products
  async function fetchProducts() {
    setMessage("Đang gọi API...");
    try {
      // nếu khong có https ở đẩu thì mặc định láy url fe hiện tại
      const res = await productService.getProducts();
      const response = await fetch(`api/products`); // http://localhost:3000/api/products
      console.log(response);
      const data = await response.json();
      
      console.log("👉 data", data);

      setProducts(data.data);
      setMessage("Gọi API thành công.");
    } catch (error) {
      setMessage("Gọi API thất bại.");
    }
  }
  return (
    <div className="mx-auto w-4/5 ">
      <p>{message}</p>
      <button
        className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white disabled:opacity-50"
        onClick={fetchProducts}
      >
        Fetch Products
      </button>
     <ProductSearch products={products} />
    </div>
  );
}
