import ProductManager from "@/components/product/ProductManager";
import { productService } from "@/services/product.service";
import React from "react";

type Props = {};

export default async function page({}: Props) {
    //  lấy ds sản phẩm từ service để render UI
  const products = await productService.getProducts();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Quản lý sản phẩm</h1>
        <p className="mt-1 text-sm text-slate-600">
          Tạo mới hoặc cập nhật sản phẩm trong cửa hàng.
        </p>
      </div>
      {/*  ds sanpham */}
      <ProductManager products={products} />
    </div>
  );
}
