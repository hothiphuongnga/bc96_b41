import { ProductPayload, ProductType } from "@/types/product.type";
import { apiFetch, ApiResponse } from "./api.serrvice";
import { API_CONFIG } from "@/config/api.config";

export const productService = {
    async getProducts(): Promise<ProductType[]>{
        const res = await apiFetch<ApiResponse<ProductType[]>>(API_CONFIG.ENDPOINTS.PRODUCTS,{cache: 'no-store'});
        return res.content;
    },
    async addProduct(payload: ProductPayload) : Promise<ApiResponse<ProductType>>{
        
        console.log("👉 payload", payload);
        return await apiFetch<ApiResponse<ProductType>>(API_CONFIG.ENDPOINTS.PRODUCT_ADD,{
            method:"POST",
            body: JSON.stringify(payload)
        })
    },
     async updateProduct(payload: ProductPayload) : Promise<ApiResponse<ProductType>>{
        return await apiFetch<ApiResponse<ProductType>>(API_CONFIG.ENDPOINTS.PRODUCT_UPDATE,{
            method:"PUT",
            body: JSON.stringify(payload)
        })
    },
}
