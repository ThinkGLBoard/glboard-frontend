"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { UserProfilePage } from "@/components/UserProfilePage";

interface ProfileUserData {
  name: string;
  email: string;
  avatarSrc?: string;
  profileType?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  phone?: string;
  institution?: string;
  selectedAvatar?: number;
}

function subscribeToAuth(callback: () => void) {
  window.addEventListener("glboard-auth-changed", callback);
  return () => window.removeEventListener("glboard-auth-changed", callback);
}

function getAuthSnapshot() {
  if (typeof window === "undefined") {
    return null;
  }

  const token = sessionStorage.getItem("glboard_auth_token");
  const email = sessionStorage.getItem("glboard_auth_email");
  if (!token || !email) {
    return null;
  }

  return JSON.stringify({
    name: sessionStorage.getItem("glboard_auth_user_name") || "Usuário",
    email,
  });
}

export default function UserProfileRoute() {
  const router = useRouter();
  const userSnapshot = useSyncExternalStore(
    subscribeToAuth,
    getAuthSnapshot,
    () => null,
  );
  const userData = useMemo(
    () => (userSnapshot ? (JSON.parse(userSnapshot) as ProfileUserData) : null),
    [userSnapshot],
  );

  useEffect(() => {
    if (!userSnapshot) {
      router.replace("/login");
    }
  }, [router, userSnapshot]);

  const handleUpdate = (updatedData: ProfileUserData) => {
    if (updatedData.name) {
      sessionStorage.setItem("glboard_auth_user_name", updatedData.name);
    }
    if (updatedData.email) {
      sessionStorage.setItem("glboard_auth_email", updatedData.email);
    }
    window.dispatchEvent(new Event("glboard-auth-changed"));
  };

  const handleNavigate = (page: string) => {
    router.push(page === "landing" ? "/" : `/${page}`);
  };

  if (!userData) {
    return <main className="min-h-screen bg-white" aria-busy="true" />;
  }

  return (
    <UserProfilePage
      userData={userData}
      onUpdate={handleUpdate}
      onNavigate={handleNavigate}
    />
  );
}
