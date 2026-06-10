import GameDetailsClient from "./GameDetailsClient";

interface GameDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GameDetailsPage({
  params,
}: GameDetailsPageProps) {
  const { id } = await params;

  return <GameDetailsClient gameId={id} />;
}