import { Fail, Ok } from "@/lib/api-response";
import { productService } from "@/services/product.service";
import { NextResponse } from "next/server";

// http://localhost:3000/api/products
export async function GET(request: Request){
    try{
        const products = await productService.getProducts();
        return Ok(products) // Trả về danh sách sản phẩm với status 200
    }
    catch (error) {
        console.error("GET /api/products", error);
        return Fail("SERVER_ERROR","Internal Server Error",500,);
    }
}
// src/app/api/products/route.ts  → /api/products

// export async function POST(request: Request) {}
// export async function PUT(request: Request) {}
// export async function DELETE(request: Request) {}
