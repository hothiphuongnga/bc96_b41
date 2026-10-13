import Link from "next/link";

// next # nest
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <aside className="bg-slate-900 text-white md:w-64 md:shrink-0">
        <div className="border-b border-slate-700 px-6 py-5">
          <h1>Admin Sidebar</h1>
          <Link href="/" className="text-2xl font-bold">
            Home
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
