
import ProductCard from "@/components/product/ProductCard";
import ProductSearch from "@/components/product/ProductSearch";
import { productData } from "@/data/product.data"; // @ là alias cho thư mục gốc (src)
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black h-screen">
      <h1>Product Page</h1>
      {/*  style button */}
      {/* <div className="flex  gap-2">
        <Link
          href="/product/1"
          className="rounded bg-blue-500 text-white px-4 py-2"
        >
           Detail 1
        </Link>
        <Link
          href="/product/2"
          className="rounded bg-blue-500 text-white px-4 py-2"
        >
           Detail 2
        </Link>
        <Link
          href="/product/3"
          className="rounded bg-blue-500 text-white px-4 py-2"
        >
           Detail 3
        </Link>
      </div> */}

      {/*  tìm kiếm */}
      {/*  input tìm kiếm , useState để quản lý gia trị nhập */}
      <ProductSearch  products={productData} />
      
    </div>
  );
}
