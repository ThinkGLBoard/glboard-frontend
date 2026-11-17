"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GameOverview } from "@/components/GameOverview";
import { getGames, type GameSummary } from "@/services/gamesApi";

interface GameDetailsClientProps {
  gameId: string;
}

export default function GameDetailsClient({
  gameId,
}: GameDetailsClientProps) {
  const router = useRouter();
  const [games, setGames] = useState<GameSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    if (page === "view-all-games" || page === "dashboard") {
      router.push("/view-all-games");
      return;
    }

    router.push(`/${page}`);
  };

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

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p role="status">Carregando jogo...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
        <p role="alert" className="text-destructive">
          Não foi possível carregar o jogo: {loadError}
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
    <GameOverview
      gameId={gameId}
      onNavigate={handleNavigate}
      games={games}
    />
  );
}