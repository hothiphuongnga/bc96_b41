"use client";

import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // gọi hàm trong redux toolkit

export const useAppSelector = useSelector.withTypes<RootState>(); // lấy state từ redux toolkit

export const useAppStore = useStore.withTypes<AppStore>();
