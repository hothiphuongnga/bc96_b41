"use client";
import {
  ProductActionState,
  saveProductAction,
} from "@/app/admin/products/actions";
import type { ProductType } from "@/types/product.type";
import { useActionState, useState } from "react";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50";
type Props = {
  products: ProductType[];
};
const initState: ProductActionState = { message: "", success: false };
export default function ProductManager({ products }: Props) {

  // chọn sp để sửa
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  // edit
  const onEditProduct = (product: ProductType) => {
    setSelectedProduct(product);
    setShowForm(true);
  };
// console.log("👉 selectedProduct", selectedProduct);
  const [showForm, setShowForm] = useState(false);

  // useActionState
  const [state, formAction, isPending] = useActionState(
    saveProductAction,
    initState,
  );

  // state: nhận kết quả của việc chạy formAction : saveProductAction, bao gồm message và success
  // formAction: hàm để gọi action saveProductAction
  // isPending: trạng thái đang chờ thực hiện action saveProductAction (true/false)
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-indigo-600">
              Store Management
            </p>
            <h1 className="text-3xl font-bold tracking-tight">Sản phẩm</h1>
            <p className="mt-2 text-sm text-slate-500">
              Quản lý thông tin sản phẩm và số lượng tồn kho.
            </p>
          </div>

          <button
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            onClick={() => setShowForm(true)}
          >
            + Thêm sản phẩm
          </button>
        </header>

        {/* form */}
        {showForm && (
          // selectedProduct?.id nếu có thì lấy id, không thì mặc định là 0
          // A ?? B , nếu A khác null hoặc undefined thì lấy A, không thì lấy B
          //  isOpen &&  B   nếu 
          <form className="space-y-4" action={formAction} key={selectedProduct?.id ?? 0}>
            <input type="hidden" name="id" value={selectedProduct?.id ?? 0} /> {/* hỗ trợ form lấy ra id formData.get("id") */}

            <label className="block space-y-2 text-sm font-medium">
              <span>Tên sản phẩm *</span>
              <input
              //nếu  selectedProduct  ! null -> lấy .name
              // không thì để ""
                defaultValue={selectedProduct?.name ?? ""}
                name="name"
                required
                className={inputClass}
                placeholder="VD: Vans Old School"
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block space-y-2 text-sm font-medium">
                <span>Giá ($) *</span>
                <input
                  defaultValue={selectedProduct?.price ?? ""}
                  name="price"
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  className={inputClass}
                />
              </label>

              <label className="block space-y-2 text-sm font-medium">
                <span>Tồn kho *</span>
                <input
                  defaultValue={selectedProduct?.quantity ?? ""}
                  name="quantity"
                  type="number"
                  required
                  min="0"
                  step="1"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm font-medium">
              <span>URL hình ảnh</span>
              <input
                defaultValue={selectedProduct?.imgLink ?? ""}
                name="imgLink"
                type="url"
                className={inputClass}
                placeholder="https://..."
              />
            </label>

            <label className="block space-y-2 text-sm font-medium">
              <span>Mô tả ngắn</span>
              <textarea
                defaultValue={selectedProduct?.shortDescription ?? ""}
                name="shortDescription"
                rows={1}
                className={`${inputClass} resize-y`}
                placeholder="Nhập mô tả ngắn sản phẩm..."
              />
            </label>
            <label className="block space-y-2 text-sm font-medium">
              <span>Mô tả</span>
              <textarea
                defaultValue={selectedProduct?.description ?? ""}
                name="description"
                rows={3}
                className={`${inputClass} resize-y`}
                placeholder="Nhập mô tả sản phẩm..."
              />
            </label>
            <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
              {state.message && (
                <span className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>
                  {state.message}
                </span>
              )}
              <button
                type="button"
                className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium hover:bg-slate-50"
                onClick={() => setShowForm(false)}
              >
                Hủy
              </button>
              <button
                // type="submit"
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Lưu sản phẩm
              </button>
            </div>
          </form>
        )}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Search */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-5">
            <div>
              <h2 className="font-semibold">Danh sách sản phẩm</h2>
              <p className="mt-1 text-xs text-slate-500">
                {products.length} sản phẩm
              </p>
            </div>

            <input
              type="search"
              aria-label="Tìm sản phẩm"
              placeholder="Tìm theo tên sản phẩm..."
              className={`${inputClass} sm:max-w-xs`}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-4">Sản phẩm</th>
                  <th className="px-5 py-4">Giá</th>
                  <th className="px-5 py-4">Tồn kho</th>
                  <th className="px-5 py-4">Nổi bật</th>
                  <th className="px-5 py-4 text-right">Thao tác</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="transition hover:bg-slate-50/80"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-1">
                          {product.image || product.imgLink ? (
                            <img
                              src={product.image || product.imgLink}
                              alt={product.name}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <span className="text-xs text-slate-400">
                              Chưa có ảnh
                            </span>
                          )}
                        </div>

                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            #{product.id}
                          </p>
                          <p className="mt-1 max-w-64 truncate text-xs text-slate-500">
                            {product.shortDescription || product.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 font-semibold">
                      ${product.price.toLocaleString("en-US")}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          (product.quantity ?? 0) > 0
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-600"
                        }`}
                      >
                        {(product.quantity ?? 0) > 0
                          ? `Còn ${product.quantity}`
                          : "Hết hàng"}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      {product.feature ? (
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                          ★ Nổi bật
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-100"
                        onClick={() => onEditProduct(product)}
                        >
                          Sửa
                        </button>
                        <button className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-100">
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {products.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-16 text-center text-slate-400"
                    >
                      Không tìm thấy sản phẩm.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
