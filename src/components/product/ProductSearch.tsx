"use client";
import { ProductType } from "@/types/product.type";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

type Props = {
  products: ProductType[];
};

export default function ProductSearch({ products }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="w-full max-w-5xl space-y-6">
      <div className="flex gap-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="flex-1 border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <p className="text-sm text-gray-500">
        Tìm thấy {filteredProducts.length} sản phẩm
      </p>
      <div className="flex gap-3">
        {filteredProducts?.map((product) => (
          //  tach produccard ra ngoài
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
