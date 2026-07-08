"use client";

import Dashboard from "./components/Dashboard"; // ou cola o Dashboard aqui
import { mockGames } from "./mockGames";

export default function ViewAllGamesClient() {
  const handleNavigate = (page: string, gameId?: string) => {
    // por enquanto pode ser console.log
    console.log("navigate:", page, gameId);
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
