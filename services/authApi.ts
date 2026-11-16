const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export interface RegisterRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  role: "User";
  birthday: string;
  phoneNumber: string;
}

export interface AuthResponse {
  message: string | null;
  token: string;
  name: string | null;
}

function getUserName(body: unknown, token: string) {
  if (typeof body === "object" && body !== null) {
    const data = body as Record<string, unknown>;
    const user =
      typeof data.user === "object" && data.user !== null
        ? (data.user as Record<string, unknown>)
        : null;
    const name = [data.name, data.userName, user?.name].find(
      (value): value is string =>
        typeof value === "string" && Boolean(value.trim()),
    );

    if (name) {
      return name.trim();
    }
  }

  const encodedPayload = token.split(".")[1];
  if (!encodedPayload) {
    return null;
  }

  try {
    const base64 = encodedPayload
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const bytes = Uint8Array.from(
      atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "=")),
      (character) => character.charCodeAt(0),
    );
    const claims = JSON.parse(new TextDecoder().decode(bytes)) as Record<
      string,
      unknown
    >;
    const fullName = [claims.given_name, claims.family_name]
      .filter((part): part is string => typeof part === "string")
      .join(" ")
      .trim();

    for (const candidate of [
      claims.name,
      claims.unique_name,
      claims.preferred_username,
      fullName,
    ]) {
      if (typeof candidate === "string" && candidate.trim()) {
        return candidate.trim();
      }
    }
  } catch {
    return null;
  }

  return null;
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
    if (typeof data.Message === "string" && data.Message) {
      return data.Message;
    }

    const errors = data.errors;
    if (typeof errors === "object" && errors !== null) {
      for (const messages of Object.values(errors)) {
        if (typeof messages === "string" && messages) {
          return messages;
        }
        if (
          Array.isArray(messages) &&
          typeof messages[0] === "string" &&
          messages[0]
        ) {
          return messages[0];
        }
      }
    }
  }

  return `A API recusou a solicitação (HTTP ${status}).`;
}

async function requestAuth(
  endpoint: "/auth/register" | "/auth/login",
  payload: RegisterRequest | { email: string; password: string },
): Promise<unknown> {
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

  return responseBody;
}

export async function registerUser(
  payload: RegisterRequest,
): Promise<void> {
  await requestAuth("/auth/register", payload);
}

export async function loginUser(payload: {
  email: string;
  password: string;
}) {
  const responseBody = await requestAuth("/auth/login", payload);
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
    name: getUserName(responseBody, responseBody.token),
  } satisfies AuthResponse;
}
