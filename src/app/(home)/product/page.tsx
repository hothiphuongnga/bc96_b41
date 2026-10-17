import ProductCard from "@/components/product/ProductCard";
import ProductSearch from "@/components/product/ProductSearch";
import { productData } from "@/data/product.data"; // @ là alias cho thư mục gốc (src)
import { productService } from "@/services/product.service";
import { ProductType } from "@/types/product.type";
import Link from "next/link";
import React, { Suspense } from "react";

type Props = {};

export default async function page({}: Props) {
  // lấy dữ liệu từ api https://apistore.cybersoft.edu.vn/api/Product
  // fetch
  // axios - phải cài
  // tacsh file
  // caasu hinhf fetch / axios
  // ds api cuar product

  // const response = await fetch("https://apistore.cybersoft.edu.vn/api/Product",{
  //   method: "GET"
  // })
  // const data = await response.json();
  const products = await productService.getProducts();
  // console.log("👉 data", data.content);

  console.log("👉 ", process.env.NEXT_API_PUBLIC);

  return (
    // <Suspense>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black h-screen">
      <Suspense>
        <h1>Product Page</h1>
      </Suspense>
      {/*  style button */}

      {/*  tìm kiếm */}
      {/*  input tìm kiếm , useState để quản lý gia trị nhập */}
      <ProductSearch products={products} />
    </div>
    // </Suspense>
  );
}
