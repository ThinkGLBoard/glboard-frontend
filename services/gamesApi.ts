import type { GameFormValues, UploadedFile } from "@/app/register-game/schema";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export interface GameSummary {
  id: string;
  name: string;
  createdDate: string;
  phases: number;
  genre: string;
  status: "development" | "testing" | "completed";
}

export interface GamePlatform {
  id: string;
  name: string;
}

interface ArchiveDto {
  downloadLink: string;
  fileId: string;
  linkType: "Document" | "Image";
  order: number;
}

interface UploadedArchive {
  fileId: string;
  fileName: string;
  downloadLink: string;
}

interface CreateGamePayload {
  name: string;
  targetAudience: string;
  genre: string;
  history: string;
  gameplay: string;
  gameFlow: string;
  learningMechanics: string;
  learningObjectives: string;
  curricularComponent: string | null;
  status: "InDevelopment" | "InTesting" | "Completed";
  archives: ArchiveDto[];
  platformIds: string[];
}

function getToken() {
  const token =
    typeof window === "undefined"
      ? null
      : sessionStorage.getItem("glboard_auth_token");

  if (!token) {
    throw new Error("Faça login para acessar seus jogos.");
  }

  return token;
}

async function sendRequest(
  endpoint: string,
  options: RequestInit = {},
): Promise<Response> {
  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${getToken()}`);

  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text();
    let message = text;

    if (text) {
      try {
        const body = JSON.parse(text) as Record<string, unknown>;
        const details = [body.detail, body.title, body.message, body.Message];
        message =
          details.find(
            (value): value is string =>
              typeof value === "string" && Boolean(value.trim()),
          ) ?? text;

        if (message === text && typeof body.errors === "object" && body.errors) {
          const firstError = Object.values(
            body.errors as Record<string, unknown>,
          ).flatMap((value) => (Array.isArray(value) ? value : [value]))
            .find((value): value is string => typeof value === "string");
          if (firstError) {
            message = firstError;
          }
        }
      } catch {
        message = text;
      }
    }

    throw new Error(
      message || `Falha na comunicação com a API (HTTP ${response.status}).`,
    );
  }

  return response;
}

async function requestJson<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await sendRequest(endpoint, options);
  const text = await response.text();

  if (!text) {
    throw new Error("A API não retornou os dados esperados.");
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error("A API retornou uma resposta inválida.");
  }
}

function toGameStatus(status: unknown): GameSummary["status"] {
  if (typeof status !== "string") {
    throw new Error("A API retornou um jogo sem status válido.");
  }

  switch (status.toLowerCase()) {
    case "indevelopment":
    case "development":
    case "em desenvolvimento":
      return "development";
    case "intesting":
    case "testing":
    case "em teste":
      return "testing";
    case "completed":
    case "concluído":
    case "concluido":
      return "completed";
    default:
      throw new Error(`Status de jogo não reconhecido: ${status}.`);
  }
}

function toGameSummary(game: Record<string, unknown>): GameSummary {
  if (
    typeof game.id !== "string" ||
    typeof game.name !== "string" ||
    typeof game.createdDate !== "string" ||
    Number.isNaN(Date.parse(game.createdDate))
  ) {
    throw new Error("A API retornou dados inválidos para um jogo.");
  }

  return {
    id: game.id,
    name: game.name,
    createdDate: new Date(game.createdDate).toLocaleDateString("pt-BR"),
    phases: 0,
    genre: typeof game.genre === "string" ? game.genre : "",
    status: toGameStatus(game.status),
  };
}

export async function getGames(): Promise<GameSummary[]> {
  const pageSize = 50;
  const games: GameSummary[] = [];
  let pageNumber = 1;
  let totalCount: number | null = null;
  let currentPageLength = 0;

  do {
    const page = await requestJson<{
      content?: unknown;
      totalCount?: number | null;
    }>(`/api/games?page=${pageNumber}&size=${pageSize}`);

    if (!Array.isArray(page.content)) {
      throw new Error("A API retornou uma lista de jogos inválida.");
    }

    currentPageLength = page.content.length;
    if (typeof page.totalCount === "number") {
      totalCount = page.totalCount;
    }

    games.push(
      ...page.content.map((game) => {
        if (typeof game !== "object" || game === null) {
          throw new Error("A API retornou dados inválidos para um jogo.");
        }
        return toGameSummary(game as Record<string, unknown>);
      }),
    );
    pageNumber += 1;
  } while (
    currentPageLength === pageSize &&
    (totalCount === null || games.length < totalCount)
  );

  return games;
}

export async function getGamePlatforms(): Promise<GamePlatform[]> {
  const platforms = await requestJson<unknown>("/api/platforms");

  if (!Array.isArray(platforms)) {
    throw new Error("A API retornou uma lista de plataformas inválida.");
  }

  return platforms.map((platform) => {
    if (
      typeof platform !== "object" ||
      platform === null ||
      typeof platform.id !== "string" ||
      typeof platform.name !== "string"
    ) {
      throw new Error("A API retornou uma plataforma inválida.");
    }

    return { id: platform.id, name: platform.name };
  });
}

async function uploadArchive(
  file: File,
  fileType: UploadedFile["type"],
  order: number,
): Promise<ArchiveDto> {
  const formData = new FormData();
  formData.append("File", file);
  formData.append(
    "ArchiveType",
    fileType === "screenshot" ? "Image" : "Document",
  );

  const uploaded = await requestJson<UploadedArchive>("/api/storage", {
    method: "POST",
    body: formData,
  });

  if (
    typeof uploaded.fileId !== "string" ||
    typeof uploaded.downloadLink !== "string"
  ) {
    throw new Error("A API não retornou os dados do arquivo enviado.");
  }

  return {
    fileId: uploaded.fileId,
    downloadLink: uploaded.downloadLink,
    linkType: fileType === "screenshot" ? "Image" : "Document",
    order,
  };
}

export async function deleteUploadedArchive(fileId: string): Promise<void> {
  await sendRequest(`/api/storage/${encodeURIComponent(fileId)}`, {
    method: "DELETE",
  });
}

export async function createGame(
  values: GameFormValues,
  files: Map<string, File>,
): Promise<void> {
  const archives: ArchiveDto[] = [];

  try {
    for (const [index, fileMetadata] of (values.files ?? []).entries()) {
      const file = files.get(fileMetadata.id);
      if (!file) {
        throw new Error(
          `O arquivo "${fileMetadata.name}" não está mais disponível para envio.`,
        );
      }
      archives.push(await uploadArchive(file, fileMetadata.type, index));
    }

    const statuses: Record<
      GameFormValues["status"],
      CreateGamePayload["status"]
    > = {
      development: "InDevelopment",
      testing: "InTesting",
      completed: "Completed",
    };

    const payload: CreateGamePayload = {
      name: values.name.trim(),
      targetAudience: values.targetAudience.trim(),
      genre: values.genre.trim(),
      history: values.story.trim(),
      gameplay: values.gameplay.trim(),
      gameFlow: values.gameFlow.trim(),
      learningMechanics: values.learningMechanics.trim(),
      learningObjectives: values.learningObjectives.trim(),
      curricularComponent: values.bnccSkills?.trim() || null,
      status: statuses[values.status],
      archives,
      platformIds: values.platformId ? [values.platformId] : [],
    };

    await requestJson<unknown>("/api/games", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (error) {
    let cleanupFailed = false;
    for (const archive of archives) {
      try {
        await deleteUploadedArchive(archive.fileId);
      } catch {
        cleanupFailed = true;
      }
    }

    if (cleanupFailed) {
      const message =
        error instanceof Error ? error.message : "Não foi possível cadastrar o jogo.";
      throw new Error(
        `${message} Não foi possível remover todos os arquivos enviados; contate o suporte.`,
      );
    }

    throw error;
  }
}
