const API_URL = "http://localhost:5208";

const TEMP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJuYW1laWQiOiJiNWVjZTEzYS0wODNkLTQ2YmEtOWRkZC04YTdlZTY5NmQxYzkiLCJuYW1lIjoic3RyaW5nIiwibmJmIjoxNzgxMDUzOTAzLCJleHAiOjE3ODEwNTc1MDMsImlhdCI6MTc4MTA1MzkwMywiaXNzIjoiQVBJLUV4ZW1wbG8iLCJhdWQiOiJDbGllbnQtRXhlbXBsbyJ9.7qbSCcovKwonV-zymompPGwCvf4QaTFB_8Q5PFcy39U";

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
  children: string[];
  answer: string;
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
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TEMP_TOKEN}`,
      ...(options?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Erro na comunicação com a API.");
  }

  return response.json();
}

export function getForm() {
  return request<FormResponse>("/api/forms");
}

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