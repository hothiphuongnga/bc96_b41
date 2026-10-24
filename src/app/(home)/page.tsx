"use client";
import { useTheme } from "@/context/ThemeContext";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/features/couterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const name = "Next.js";
  const [count, setCount] = useState(10);

  // laay gia trij trong reduxtoolkit
  const couterRedux = useAppSelector((state) => state.couter.value);
  const dispatch = useAppDispatch();
  // lấy theme từ context
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      className={`flex flex-col flex-1 items-center justify-center  font-sans  ${isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-950"}`}
    >
      <p> Hello, {name}</p>
      <p>Count: {count}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      {/* =============== REDUX TOOLKIT ============== */}
      <div className="my-8">
        {/*  dung gia tri trong state cua redux toolkit */}
        <p className="text-5xl font-black text-indigo-600">{couterRedux}</p>

        {/*  dungf hamf trong  couterSlice*/}
        <div className="flex justify-between gap-3">
          <button
            className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white"
            onClick={() => dispatch(increment())}
          >
            Tang
          </button>
          <button
            className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white"
            onClick={() => dispatch(decrement())}
          >
            Giam
          </button>
          <button
            className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            +5
          </button>
        </div>
        <button
          className="my-4 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
          onClick={toggleTheme}
        >
          Chuyển sang {isDark ? "light" : "dark"} mode
        </button>
      </div>
    </div>
  );
}
