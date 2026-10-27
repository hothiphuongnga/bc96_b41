import { SignInPayload, SignInResponse, UserProfile, UserType } from "@/types/user.type";
import { apiFetch, ApiResponse } from "./api.serrvice";
import { API_CONFIG } from "@/config/api.config";

export const userService = {
  async getUsers(): Promise<UserType[]> {
    const res = await apiFetch<ApiResponse<UserType[]>>(
      API_CONFIG.ENDPOINTS.USERS.GET_ALL,
    );
    return res.content;
  },
  async signIn(payload: SignInPayload): Promise<ApiResponse<SignInResponse>> {
    const res = await apiFetch<ApiResponse<SignInResponse>>(
      API_CONFIG.ENDPOINTS.USERS.SIGNIN,
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
    );
    
    console.log("👉 res", res);
    return res;
  },
   getProfile(accessToken: string) {
    return apiFetch<ApiResponse<UserProfile>>(API_CONFIG.ENDPOINTS.USERS.GET_PROFILE, {
      method: "POST",
      headers: {
        Authorization: `${accessToken}`,
      },
      cache: "no-store",
    });
  },
};
