"use client";
import Header from "@/components/header/Header";
import UserFeed from "@/components/userFeed/UserFeed";
import { UserState } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserHome() {
  const user: UserState = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push("/");
    }
  });
  return (
    <main>
      <Header user={{ name: user.username, email: user.email }} />
      <UserFeed user={user} />
    </main>
  );
}
