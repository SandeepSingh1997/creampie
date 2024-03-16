"use client";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Main() {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const router = useRouter();
  useEffect(() => {
    console.log(isUserLoggedIn);
    if (!isUserLoggedIn) {
      router.push("/register");
    } else {
      router.push("/user-home");
    }
  });
  return (
    <main>
      <LoadingScreen />
    </main>
  );
}
