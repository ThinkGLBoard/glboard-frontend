"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "./components/Dashboard";
import { getGames, type GameSummary } from "@/services/gamesApi";

export default function ViewAllGamesClient() {
  const router = useRouter();
  const [games, setGames] = useState<GameSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadGames = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      setGames(await getGames());
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? error.message
          : "Não foi possível carregar os jogos.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadGames();
  }, [loadGames]);

  const handleNavigate = (page: string, gameId?: string) => {
    if (page === "details-game" && gameId) {
      router.push(`/details-game/${gameId}`);
      return;
    }

    router.push(`/${page}`);
  };

  const handleDeleteGame = (id: string) => {
    console.log("delete:", id);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p role="status">Carregando jogos...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
        <p role="alert" className="text-destructive">
          Não foi possível carregar os jogos: {loadError}
        </p>
        <button
          type="button"
          onClick={() => void loadGames()}
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <Dashboard
      games={games}
      onNavigate={handleNavigate}
      onDeleteGame={handleDeleteGame}
    />
  );
}
