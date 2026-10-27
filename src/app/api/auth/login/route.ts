import { Fail, Ok } from "@/lib/api-response";
import { userService } from "@/services/user.service";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    // if(res.statusCode !== 200) {
    //     return Fail("ERR", res.message, res.statusCode || 400);
    // }\
    
    var payload = await request.json();
    
    const res = await userService.signIn(payload);

    var token = res.content.accessToken;
    // lấy cookies
    const cookie = await cookies();
    cookie.set("accessToken",token,{
        httpOnly: true, // chỉ có thể truy cập từ server, không truy cập từ js 
        maxAge: 60 * 60 * 24 // 1 day in seconds
    })
    return Ok({email:res.content.email})

  } catch (error) {
    return Fail("ERR", (error as Error).message, 500);
  }
}
