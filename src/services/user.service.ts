import { UserType } from "@/types/user.type";
import { apiFetch, ApiResponse } from "./api.serrvice";
import { API_CONFIG } from "@/config/api.config";

export const userService ={
    async getUsers(): Promise<UserType[]>{
        const res = await apiFetch<ApiResponse<UserType[]>>(API_CONFIG.ENDPOINTS.USERS.GET_ALL)
        return res.content
    }
}