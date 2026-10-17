import Link from 'next/link'
import React from 'react'


export default function ProductNotFound() {
  return (
    <div>
      <h2>Sản phẩm không tồn tại</h2>
      <Link href="/product">Về danh sách</Link>
    </div>
  )
}