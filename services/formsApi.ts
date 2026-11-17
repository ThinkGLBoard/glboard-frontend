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
  answer: string | number | boolean | string[] | null;
  comment?: string | null;
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

export interface FormComment {
  id: string;
  comment: string | null;
  questionId: string;
  questionGameFormId: string;
  status: boolean;
  createdAt: string;
}

type FormAnswerValue = string | number | boolean | string[];

interface SaveFormRequest {
  gameId: string;
  answers: Array<{
    questionId: string;
    value: FormAnswerValue;
  }>;
}

interface FormMutationResponse {
  id: string;
  message: string;
  statusCode: number;
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
    let message = errorText;

    if (errorText) {
      try {
        const body = JSON.parse(errorText) as Record<string, unknown>;
        const apiMessage = [body.message, body.Message, body.detail, body.title]
          .find(
            (value): value is string =>
              typeof value === "string" && Boolean(value.trim()),
          );
        if (apiMessage) {
          message = apiMessage;
        }
      } catch {
        message = errorText;
      }
    }

    throw new Error(
      message || `Erro na comunicação com a API (HTTP ${response.status}).`,
    );
  }

  return response.json();
}

function toAnswerValue(question: ApiQuestion): FormAnswerValue | undefined {
  const { answer, type } = question;
  if (
    answer === null ||
    answer === "" ||
    (typeof answer === "string" && !answer.trim()) ||
    (Array.isArray(answer) && answer.length === 0)
  ) {
    return undefined;
  }

  const normalizedType = type.toLowerCase();
  if (normalizedType === "boolean") {
    if (typeof answer === "boolean") {
      return answer;
    }
    if (typeof answer === "string") {
      if (answer.toLowerCase() === "true") return true;
      if (answer.toLowerCase() === "false") return false;
    }
    throw new Error(`Resposta inválida para a pergunta "${question.text}".`);
  }

  if (
    normalizedType === "number" ||
    normalizedType.startsWith("likert")
  ) {
    const value = typeof answer === "number" ? answer : Number(answer);
    if (Number.isFinite(value)) {
      return value;
    }
    throw new Error(`Resposta inválida para a pergunta "${question.text}".`);
  }

  if (normalizedType === "multiplechoice") {
    if (
      typeof answer === "string" &&
      question.options.some((option) => option.value === answer)
    ) {
      return answer;
    }
    throw new Error(`Selecione uma opção válida para "${question.text}".`);
  }

  if (normalizedType === "checkbox") {
    const selectedValues = Array.isArray(answer)
      ? answer
      : typeof answer === "string"
        ? [answer]
        : [];
    if (
      selectedValues.length > 0 &&
      selectedValues.every((value) =>
        question.options.some((option) => option.value === value),
      )
    ) {
      return selectedValues;
    }
    throw new Error(`Selecione opções válidas para "${question.text}".`);
  }

  if (
    (normalizedType === "text" || normalizedType === "file") &&
    typeof answer !== "string"
  ) {
    throw new Error(`Resposta inválida para a pergunta "${question.text}".`);
  }

  return answer;
}

function buildSaveRequest(gameId: string, form: FormResponse): SaveFormRequest {
  const answers: SaveFormRequest["answers"] = [];

  function collectAnswers(
    questions: ApiQuestion[],
    parentAllowsChildren = true,
  ) {
    for (const question of questions) {
      if (!parentAllowsChildren) continue;

      const value = toAnswerValue(question);
      if (value !== undefined) {
        answers.push({ questionId: question.id, value });
      }

      const allowsChildren =
        question.answer === true ||
        question.answer === "true" ||
        question.answer === "Sim" ||
        question.answer === "sim" ||
        question.answer === "1";
      collectAnswers(question.children ?? [], allowsChildren);
    }
  }

  for (const dimension of form.dimensions) {
    for (const category of dimension.categories) {
      collectAnswers(category.questions);
    }
  }

  return { gameId, answers };
}

export async function getForm(gameId: string) {
  const form = await request<FormResponse>(
    `/api/forms/${encodeURIComponent(gameId)}`,
  );

  console.log("Formulário vindo da API:", form);

  return form;
}

export function getFormComments(gameId: string) {
  return request<FormComment[]>(
    `/api/forms/comments/${encodeURIComponent(gameId)}`,
  );
}

export function saveFormDraft(gameId: string, form: FormResponse) {
  return request<FormMutationResponse>("/api/forms/draft", {
    method: "POST",
    body: JSON.stringify(buildSaveRequest(gameId, form)),
  });
}

export function saveFormComment(
  gameId: string,
  questionId: string,
  comment: string,
) {
  return request<string>("/api/forms/comments", {
    method: "POST",
    body: JSON.stringify({ gameId, questionId, comment }),
  });
}

export function submitForm(gameId: string, form: FormResponse) {
  return request<FormMutationResponse>("/api/forms/submit", {
    method: "POST",
    body: JSON.stringify(buildSaveRequest(gameId, form)),
  });
}
