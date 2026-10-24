"use client";
import { fetchUsers, fetchUsersThunk } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import React, { useEffect } from "react";

type Props = {};

export default function page({}: Props) {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.items);

  console.log("👉 users", users);
  useEffect(() => {
    dispatch(fetchUsersThunk()); // Uncomment this line if you want to fetch users on mount
  }, [dispatch]);
  return <div>
    {users.map((user) => (
      <div key={user.id}>{user.name}</div>
    ))}
  </div>
}
