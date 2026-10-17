export const API_CONFIG  = {
    // các tên file env được nextjs hỗ trợ đọc
    // .env.local, .env.development, .env.production
    BASE_URL:process.env.NEXT_API_PUBLIC,
    ENDPOINTS: {
        PRODUCTS: "/Product",
        USERS:{
            LIST: "/User",
            DETAIL: "/User/Detail"
        }
    },
    OPEN_AI:""
}