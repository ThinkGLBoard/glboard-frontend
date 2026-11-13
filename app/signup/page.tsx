"use client";

import { useRouter } from "next/navigation";
import { SignupPage, type SignupFormData } from "@/components/SignupPage";
import { registerUser } from "@/services/authApi";

export default function SignupRoute() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(page === "landing" ? "/" : `/${page}`);
  };

  const handleSignup = async (userData: SignupFormData) => {
    await registerUser({
      name: `${userData.firstName.trim()} ${userData.lastName.trim()}`,
      email: userData.email.trim(),
      password: userData.password,
      role: "User",
      birthday: `${userData.birthDate}T00:00:00.000Z`,
      phoneNumber: userData.phone.trim(),
    });

    router.push("/login");
  };

  return (
    <SignupPage
      onSignup={handleSignup}
      onNavigate={handleNavigate}
    />
  );
}
