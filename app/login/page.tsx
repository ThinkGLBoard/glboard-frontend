"use client";

import { useRouter } from "next/navigation";
import { LoginPage } from "./LoginPage";

export default function LoginRoute() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(page === "landing" ? "/" : `/${page}`);
  };

  return (
    <LoginPage
      onLogin={() => router.push("/")}
      onNavigate={handleNavigate}
    />
  );
}
