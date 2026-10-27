export const API_CONFIG = {
  // các tên file env được nextjs hỗ trợ đọc
  // .env.local, .env.development, .env.production
  BASE_URL: process.env.NEXT_PUBLIC_API,
  // BASE_URL:"https://apistore.cybersoft.edu.vn/api",
  ENDPOINTS: {
    PRODUCTS: "/Product",
    PRODUCT_ADD: "/Product/addNew",
    PRODUCT_UPDATE: "/Product/updateProduct",
    USERS: {
      GET_ALL: "/Users/getAll",
      DETAIL: "/User/Detail",
      SIGNIN: "/Users/signin",
      GET_PROFILE: "/Users/getProfile",
    },
  },
  OPEN_AI: "",
};
