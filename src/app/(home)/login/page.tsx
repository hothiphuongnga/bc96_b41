"use client";
import { ApiSuccess } from "@/lib/api-response";
import { SignInResponse } from "@/types/user.type";
import React, { FormEvent, useState } from "react";

type Props = {};
type LoginResponse = {
  email: string | null;
};
export default function page({}: Props) {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function login(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: formData.get("email"),
      password: formData.get("password")
    };
    
    console.log("👉 payload", payload);
    try{
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const body = await res.json() as ApiSuccess<LoginResponse>;
      setMessage(`${body.message} Tài khoản: ${body.data.email}`);
        
    } catch (error) {
      setMessage((error as Error).message);
    } finally {
      setPending(false);
    }

  }
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 px-4 text-slate-900">
      <form
        onSubmit={login}
        className="w-full max-w-md space-y-5 rounded-3xl bg-white p-8 shadow-xl"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Authentication demo
          </p>
          <h1 className="mt-2 text-3xl font-bold">Đăng nhập</h1>
          <p className="mt-2 text-sm text-slate-500">
            Token sẽ được Next.js lưu trong HttpOnly cookie.
          </p>
        </div>
        <label className="block space-y-2">
          <span className="text-sm font-semibold">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-semibold">Mật khẩu</span>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </label>
        <button
          disabled={pending}
          className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white disabled:opacity-50"
        >
          {pending ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
        {message && (
          <p aria-live="polite" className="text-sm text-slate-600">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}
