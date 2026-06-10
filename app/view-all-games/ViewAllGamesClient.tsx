"use client";

import { useRouter } from "next/navigation";
import Dashboard from "./components/Dashboard"; // ou cola o Dashboard aqui
import { mockGames } from "./mockGames";

export default function ViewAllGamesClient() {
  // const handleNavigate = (page: string, gameId?: string) => {
  //   // por enquanto pode ser console.log
  //   console.log("navigate:", page, gameId);
  // };
  const router = useRouter();

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

  return (
    <Dashboard
      games={mockGames}
      onNavigate={handleNavigate}
      onDeleteGame={handleDeleteGame}
    />
  );
}
