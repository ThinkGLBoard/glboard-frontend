const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: "User";
  birthday: string;
  phoneNumber: string;
}

export interface AuthResponse {
  message: string | null;
  token: string;
}

function getErrorMessage(body: unknown, status: number) {
  if (typeof body === "string" && body.trim()) {
    return body;
  }

  if (typeof body === "object" && body !== null) {
    const data = body as Record<string, unknown>;
    for (const key of ["detail", "title", "message"]) {
      if (typeof data[key] === "string" && data[key]) {
        return data[key];
      }
    }
  }

  return `A API recusou a solicitação (HTTP ${status}).`;
}

async function requestAuth(
  endpoint: "/auth/register" | "/auth/login",
  payload: RegisterRequest | { email: string; password: string },
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  let responseBody: unknown = responseText;
  if (responseText) {
    try {
      responseBody = JSON.parse(responseText);
    } catch {
      responseBody = responseText;
    }
  }

  if (!response.ok) {
    throw new Error(getErrorMessage(responseBody, response.status));
  }

  if (
    typeof responseBody !== "object" ||
    responseBody === null ||
    !("token" in responseBody) ||
    typeof responseBody.token !== "string" ||
    !responseBody.token
  ) {
    throw new Error("A API não retornou um token de autenticação.");
  }

  return {
    message:
      "message" in responseBody &&
      typeof responseBody.message === "string"
        ? responseBody.message
        : null,
    token: responseBody.token,
  };
}

export function registerUser(payload: RegisterRequest) {
  return requestAuth("/auth/register", payload);
}

export function loginUser(payload: {
  email: string;
  password: string;
}) {
  return requestAuth("/auth/login", payload);
}
