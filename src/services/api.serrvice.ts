// type : dinh nghie ket quả tra ve cua api

import { API_CONFIG } from "@/config/api.config";
import { headers } from "next/headers";

// generic type
export type ApiResponse<T> = {
    content: T;
    message: string;
    status: number;
};
type FetchOptions = RequestInit & {
  next?: NextFetchRequestConfig;
};


// endpoint : /Product
export async function apiFetch<T>(endpoint:string, option: FetchOptions ={}) :Promise<T>{
    const res = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`,
         {...option,
         headers:{
            "Content-Type": "application/json",
            ...option.headers
         }
         }
    );
    if(!res.ok){
        throw new Error(`Gọi API thất bại : ${res.status}`);
    }
    return res.json() as Promise<T>;

}