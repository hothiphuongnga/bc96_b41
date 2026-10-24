import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./features/couterSlice";
import productReducer from "./features/productSlice";
import userReducer from "./features/userSlice";
export const makeStore = () => {
  return configureStore({ // đăng ký các reducer cho store
    reducer: {
      couter: couterReducer,
      product: productReducer,
      user: userReducer,
    },
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];