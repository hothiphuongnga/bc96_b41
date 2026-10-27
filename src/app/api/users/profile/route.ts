import { Fail, Ok } from "@/lib/api-response";
import { userService } from "@/services/user.service";
import { ApiError } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

// api/users/profile GET
export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return Fail("UNAUTHENTICATED", "Bạn chưa đăng nhập", 401);
  }

  try {
    const payload = await userService.getProfile(accessToken);
    return Ok(
      payload.content,
      undefined,
      "Lấy thông tin người dùng thành công",
    );
  } catch (error) {
    if (error instanceof ApiError) {
        // i18n
      if (error.statusCode === 401 || error.statusCode === 403) {
      return Fail("INVALID_SESSION",  "Phiên đăng nhập đã hết hạn hoặc không hợp lệ",
          401,);
        }
    }
    return Fail("INTERNAL_ERROR", (error as Error).message, 500);
  }
}
