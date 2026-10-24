'use client'
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { fetchProducts } from "@/lib/features/productSlice";
import ProductSearch from "@/components/product/ProductSearch";

type Props = {};

export default function page({}: Props) {
  // chạt fetchProducts để lấy danh sách sản phẩm từ server
  // dữ liệu state nằm ở productSlice trong Redux store
  const dispatch = useAppDispatch();
  // lấy ds sản phẩm từ Redux store
  const products = useAppSelector((state) => state.product.items);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <div>
    <ProductSearch products={products} />
  </div>;
}
