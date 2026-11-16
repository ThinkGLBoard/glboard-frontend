const API_URL = "http://localhost:8080";

export interface ApiOption {
  id: string;
  label: string;
  value: string;
  order: number;
}

export interface ApiQuestion {
  id: string;
  parentQuestionId: string | null;
  text: string;
  type: string;
  order: number;
  options: ApiOption[];
  children: ApiQuestion[];
  answer: string | null;
}

export interface ApiCategory {
  id: string;
  name: string;
  order: number;
  questions: ApiQuestion[];
}

export interface ApiDimension {
  id: string;
  name: string;
  order: number;
  categories: ApiCategory[];
}

export interface FormResponse {
  formVersionId: string;
  dimensions: ApiDimension[];
}

async function request<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const token =
    typeof window === "undefined"
      ? null
      : sessionStorage.getItem("glboard_auth_token");

  if (!token) {
    throw new Error(
      "É necessário estar autenticado para acessar os formulários.",
    );
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Erro na comunicação com a API.");
  }

  return response.json();
}

export async function getForm(gameId: string) {
  const form = await request<FormResponse>(
    `/api/forms?gameId=${encodeURIComponent(gameId)}`
  );

  console.log("Formulário vindo da API:", form);

  return form;
}

// export function getForm() {
//   console.log("Formulário vindo da API:", form);
//   return request<FormResponse>("/api/forms");
// }

export function saveFormDraft(payload: FormResponse) {
  return request<FormResponse>("/api/forms/draft", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function submitForm(payload: FormResponse) {
  return request<FormResponse>("/api/forms/submit", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}