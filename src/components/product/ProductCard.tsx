import { ProductType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className=" flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        {product.image ? (
          <Image
            // src=""
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-5 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            No image
          </div>
        )}
        {product.quantity !== undefined && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-slate-200">
            Còn {product.quantity} sản phẩm
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-1 text-lg font-semibold capitalize text-slate-900 dark:text-white">
          {product.name}
        </h2>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500 dark:text-slate-400">
          {product.shortDescription || product.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price.toLocaleString("en-US")}
          </p>
          <Link
            href={`/product/${product.id}`}
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
