"use client";

import { useRouter } from "next/navigation";
import { GameOverview } from "@/components/GameOverview";
import { mockGames } from "@/app/view-all-games/mockGames";

interface GameDetailsClientProps {
  gameId: string;
}

export default function GameDetailsClient({
  gameId,
}: GameDetailsClientProps) {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    if (page === "view-all-games" || page === "dashboard") {
      router.push("/view-all-games");
      return;
    }

    router.push(`/${page}`);
  };

  return (
    <GameOverview
      gameId={gameId}
      onNavigate={handleNavigate}
      games={mockGames}
    />
  );
}