import type { AuthResponse } from "./authApi";

export function storeAuthSession(
  auth: AuthResponse,
  email: string,
  fallbackName?: string,
) {
  sessionStorage.setItem("glboard_auth_token", auth.token);
  sessionStorage.setItem("glboard_auth_email", email);

  const name = auth.name || fallbackName?.trim();
  if (name) {
    sessionStorage.setItem("glboard_auth_user_name", name);
  } else {
    sessionStorage.removeItem("glboard_auth_user_name");
  }

  window.dispatchEvent(new Event("glboard-auth-changed"));
}
