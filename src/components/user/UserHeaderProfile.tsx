"use client";
import { ApiError, ApiSuccess } from "@/lib/api-response";
import { ApiResponse } from "@/services/api.serrvice";
import { UserProfile } from "@/types/user.type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function UserHeaderProfile({}: Props) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // viêt funtion trong useEffect
    async function fetchProfile() {
      try {
        const response = await fetch("/api/users/profile", {
          credentials: "include",
        });

        const res = (await response.json()) as
          | ApiSuccess<UserProfile>
          | ApiError;
        if (response.ok && res.success) {
          setProfile(res.data);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);
  if (loading) {
    return (
      <div className="h-10 w-32 animate-pulse rounded-full bg-slate-200" />
    );
  }
  if (!profile) {
    return <Link href="/login">Đăng nhập</Link>;
  }

  return (
    <Link href="/user" className="flex items-center gap-3">
      <Image
        src={profile.avatar}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-full object-cover"
      />
      <span>{profile.name}</span>
    </Link>
  );
}
