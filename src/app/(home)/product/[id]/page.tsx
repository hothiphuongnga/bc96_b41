import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;
  if(Number(id) > 3){
    // Nếu id lớn hơn 3 thì hiển thị trang 404
    notFound();
 
  }
  return (
    <div>
      <Link href="/product">← Danh sách sản phẩm</Link>
      <p>Product ID: {id}</p>
    </div>
  );
}
