import React from 'react'

// app/products/loading.tsx
export default function loading() {
  return (
    <div>
      <h2>Đang tải sản phẩm...</h2>

      {[1, 2, 3].map((id) => (
        <div
          key={id}
          style={{
            height: 80,
            background: "#eee",
            marginBottom: 12,
            borderRadius: 8,
          }}
        />
      ))}
    </div>
  );
}