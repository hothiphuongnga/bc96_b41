import { productService } from "@/services/product.service";
import { ProductPayload } from "@/types/product.type";

export type ProductActionState = {
  message: string;
  success: boolean;
};

export async function saveProductAction(
    _previousState  : ProductActionState,
  formData: FormData,
): Promise<ProductActionState> {
  // formdata sẽ khác so với json  -> cần dùng formData.get("key") để lấy giá trị
  const id = Number(formData.get("id"));
  const name = formData.get("name");
  const price = Number(formData.get("price"));
  const quantity = Number(formData.get("quantity"));
  const imgLink = formData.get("imgLink");
  const shortDescription = formData.get("shortDescription");
  const description = formData.get("description");

  // kiểm tra rỗng
   
   console.log("👉 !name ", !name ); 
   console.log("👉 !price ", !price );
   console.log("👉 !quantity ", !quantity );
   console.log("👉 !imgLink ", !imgLink );
   console.log("👉 !shortDescription ", !shortDescription );
   console.log("👉 !description ", !description );
  if (
    !name ||
    !price ||
    !quantity ||
    !imgLink ||
    !shortDescription ||
    !description
  ) {
    return { message: "Vui lòng điền đầy đủ thông tin.", success: false };
  }

  const payload: ProductPayload = {
    id: Number.isFinite(id) ? id : 0,
    //isFinite: số có là số hợp lệ hay không
    name: name as string,
    price,
    quantity,
    imgLink: imgLink as string,
    shortDescription: shortDescription as string,
    description: description as string,
  };
  // nếu id =0 => thêm mới
  // ADD
  try {
    if (payload.id == 0) {
      await productService.addProduct(payload);
    } else {
      await productService.updateProduct(payload);
    } 
    return { message: "Đã lưu sản phẩm.", success: true };
  } catch (error) {
    return { message: "Lỗi khi lưu sản phẩm.", success: false };
  }

  //  await productService.addProduct(payload);
}
// http://localhost:3000/admin/undefined/Product/addNew
