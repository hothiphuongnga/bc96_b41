import { ProductType } from '@/types/product.type'
import Link from 'next/link'
import React from 'react'

type Props = {
product:ProductType
}

export default function ProductCard({product}: Props) {
  return (
    <div className="border p-4 m-2">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <br />
          <Link
            href={`/product/${product.id}`}
            className="rounded bg-blue-500 text-white px-4 py-2"
          >
            Detail
          </Link>
        </div>
  )
}