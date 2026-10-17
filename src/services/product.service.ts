import { ProductType } from "@/types/product.type";
import { apiFetch, ApiResponse } from "./api.serrvice";
import { API_CONFIG } from "@/config/api.config";

export const productService = {
    async getProducts(): Promise<ProductType[]>{
        const res = await apiFetch<ApiResponse<ProductType[]>>(API_CONFIG.ENDPOINTS.PRODUCTS,{cache: 'no-store'});
        return res.content;
    }
}