import { NextResponse } from "next/server";

// <T> là kiểu dữ liệu của dữ liệu trả về khi API thành công, có thể là bất kỳ kiểu nào
export type ApiSuccess<T> = {
  success: true;
  data: T;
  message?: string; // thông điệp tùy chọn khi API thành công
};

export type ApiError = {
  // kiểu dữ liệu trả về khi API thất bại
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};
export function Ok<T>(data: T, init?: ResponseInit, message?: string){
    return NextResponse.json<ApiSuccess<T>>({
        success: true,
        data,
        message
    }, init)
}

export function Fail(
  code: string,
  message: string,
  status: number,
  details?: unknown,
) {
  return NextResponse.json<ApiError>(
    {
      success: false,
      error: { code, message, ...(details === undefined ? {} : { details }) },
    },
    { status },
  );
}
