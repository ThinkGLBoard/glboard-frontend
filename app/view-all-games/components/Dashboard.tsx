"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Input } from "./input";
import { Badge } from "./badge";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Gamepad2,
  Gauge,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Grid3x3,
  List,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Tag,
  Filter,
  ArrowUpDown,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface Game {
  id: string;
  name: string;
  createdDate: string;
  phases: number;
  genre?: string;
  status: "development" | "testing" | "completed";
}

interface DashboardProps {
  onNavigate: (page: string, gameId?: string) => void;
  games: Game[];
  onDeleteGame: (id: string) => void;
}

const gameImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY4ODQyOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "2": "https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY4ODQyOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "3": "https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY4ODQyOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

const statusLabels: Record<string, string> = {
  development: "Em Desenvolvimento",
  testing: "Em Teste",
  completed: "Concluído",
};

const statusColors: Record<string, string> = {
  development: "bg-[#6366F1] text-white",
  testing: "bg-[#D97706] text-white",
  completed: "bg-[#15803D] text-white",
};

export default function Dashboard({
  onNavigate,
  games = [],
  onDeleteGame,
}: Partial<DashboardProps>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);
  const [gameToDelete, setGameToDelete] = useState<
    string | null
  >(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    "grid",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<
    number | "all"
  >(6);
  const [statusFilter, setStatusFilter] =
    useState<string>("all");
  const [genreFilter, setGenreFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Get unique genres from games
  const uniqueGenres = Array.from(
    new Set(games.map((g) => g.genre).filter((g): g is string => Boolean(g))),
  );

  // Apply filters and sorting
  let filteredGames = games.filter((game) => {
    const matchesStatus =
      statusFilter === "all" || game.status === statusFilter;
    const matchesGenre =
      genreFilter === "all" || game.genre === genreFilter;
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesGenre && matchesSearch;
  });

  // Apply sorting
  filteredGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.createdDate).getTime() -
          new Date(a.createdDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.createdDate).getTime() -
          new Date(b.createdDate).getTime()
        );
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages =
    itemsPerPage === "all"
      ? 1
      : Math.ceil(filteredGames.length / itemsPerPage);
  const startIndex =
    itemsPerPage === "all"
      ? 0
      : (currentPage - 1) * itemsPerPage;
  const endIndex =
    itemsPerPage === "all"
      ? filteredGames.length
      : startIndex + itemsPerPage;
  const paginatedGames = filteredGames.slice(
    startIndex,
    endIndex,
  );

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(value === "all" ? "all" : parseInt(value));
    setCurrentPage(1);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setGameToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleEdit = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    // onNavigate("game-registration", id);
  };

  const confirmDelete = () => {
    if (gameToDelete) {
      // onDeleteGame(gameToDelete);
    }
    setDeleteDialogOpen(false);
    setGameToDelete(null);
  };

  return (
    <div className="p-8 bg-[rgb(255,255,255)] min-h-screen px-[32px] py-[0px]">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Meus Jogos Educacionais
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Gerencie e analise seus projetos de game learning
              analytics
            </p>
          </div>
        </div>

        {games.length === 0 ? (
          /* Empty State - First Time User */
          <Card className="rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="flex flex-col items-center justify-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <Gamepad2 className="w-16 h-16 text-primary" />
              </div>
              <h2 className="mb-3 text-center text-2xl font-semibold">
                Você ainda não possui jogos cadastrados
              </h2>
              <p className="text-muted-foreground mb-8 text-center max-w-lg text-lg">
                Clique no botão abaixo para criar o seu primeiro
                jogo educacional e começar a utilizar o GLBoard
                para análise de aprendizagem!
              </p>
              <Button
                onClick={() => onNavigate?.("register-game")}
                size="lg"
                className="rounded-xl shadow-lg h-14 px-8 text-lg"
              >

                <Plus className="mr-2 w-5 h-5" />
                Novo Jogo
              </Button>
            </CardContent>
          </Card>
        ) : (
          /* Games Grid */
          <>
            {/* Dashboard Metrics - Consolidated Overview */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-10 border border-gray-100 px-[32px] py-[16px]">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
                {/* Métrica 1 - Total de Jogos */}
                <div className="px-6 first:pl-0 last:pr-0 text-center">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
                    TOTAL DE JOGOS
                  </p>
                  <div className="text-5xl font-bold text-[#8B5CF6] mb-2">
                    {games.length}
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    {
                      games.filter(
                        (g) => g.status === "completed",
                      ).length
                    }{" "}
                    concluído
                  </p>
                </div>

                {/* Métrica 2 - Jogadores Ativos */}
                <div className="px-6 first:pl-0 last:pr-0 text-center">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
                    JOGADORES ATIVOS
                  </p>
                  <div className="text-5xl font-bold text-[#14B8A6] mb-2">
                    {games.length * 47}
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    +12% mês
                  </p>
                </div>

                {/* Métrica 3 - Sessões TOTAIS */}
                <div className="px-6 first:pl-0 last:pr-0 text-center">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
                    SESSÕES TOTAIS
                  </p>
                  <div className="text-5xl font-bold text-[#2563EB] mb-2">
                    {games.length * 234}
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    30 dias
                  </p>
                </div>

                {/* Métrica 4 - Tempo Médio */}
                <div className="px-6 first:pl-0 last:pr-0 text-center">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
                    TEMPO MÉDIO
                  </p>
                  <div className="text-5xl font-bold text-[#F97316] mb-2">
                    24m
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    por sessão
                  </p>
                </div>
              </div>
            </div>

            {/* Filters, Sort and View Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8">
              {/* Filtros */}
              <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto items-start md:items-center">
                {/* Filtros Container */}
                <div className="flex gap-3 items-center flex-wrap">
                  {/* Filtro por Status */}
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <Label className="text-sm text-gray-600 font-medium hidden md:block">
                      Status:
                    </Label>
                    <Select
                      value={statusFilter}
                      onValueChange={(value) => {
                        setStatusFilter(value);
                        setCurrentPage(1);
                      }}
                    >
                      <SelectTrigger className="w-[160px] h-10 rounded-lg border-gray-200 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={5}
                        className="w-[160px]"
                      >
                        <SelectItem value="all">
                          Todos
                        </SelectItem>
                        <SelectItem value="development">
                          Desenvolvimento
                        </SelectItem>
                        <SelectItem value="testing">
                          Teste
                        </SelectItem>
                        <SelectItem value="completed">
                          Concluído
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Filtro por Gênero */}
                  {uniqueGenres.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-gray-500" />
                      <Label className="text-sm text-gray-600 font-medium hidden md:block">
                        Gênero:
                      </Label>
                      <Select
                        value={genreFilter}
                        onValueChange={(value) => {
                          setGenreFilter(value);
                          setCurrentPage(1);
                        }}
                      >
                        <SelectTrigger className="w-[160px] h-10 rounded-lg border-gray-200 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          sideOffset={5}
                          className="w-[160px]"
                        >
                          <SelectItem value="all">
                            Todos
                          </SelectItem>
                          {uniqueGenres.map((genre) => (
                            <SelectItem
                              key={genre}
                              value={genre}
                            >
                              {genre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Ordenação */}
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    <Label className="text-sm text-gray-600 font-medium hidden md:block">
                      Ordenar:
                    </Label>
                    <Select
                      value={sortBy}
                      onValueChange={(value) => {
                        setSortBy(value);
                        setCurrentPage(1);
                      }}
                    >
                      <SelectTrigger className="w-[160px] h-10 rounded-lg border-gray-200 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={5}
                        className="w-[160px]"
                      >
                        <SelectItem value="newest">
                          Mais Recentes
                        </SelectItem>
                        <SelectItem value="oldest">
                          Mais Antigos
                        </SelectItem>
                        <SelectItem value="name-asc">
                          Nome (A-Z)
                        </SelectItem>
                        <SelectItem value="name-desc">
                          Nome (Z-A)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Botão Novo Jogo e View Mode Toggle */}
              <div className="flex gap-3 items-center self-end lg:self-auto">
                <Button
                  // onClick={() => onNavigate("game-registration")}
                  className="rounded-xl h-10 px-5 bg-[#6366F1] hover:bg-[#5558E3] text-white"
                >
                  <Plus className="mr-2 w-4 h-4" />
                  Novo Jogo
                </Button>

                <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                  <Button
                    variant={
                      viewMode === "grid" ? "default" : "ghost"
                    }
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-lg"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={
                      viewMode === "list" ? "default" : "ghost"
                    }
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-lg"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Games Display - Grid or List View */}
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedGames.length === 0 ? (
                  /* Empty Search Results */
                  <div className="col-span-full">
                    <Card className="rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardContent className="flex flex-col items-center justify-center py-16">
                        <div className="w-48 h-48 mb-6 rounded-2xl overflow-hidden">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1564878954365-ce84ffc09f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGdhbWUlMjBjb250cm9sbGVyfGVufDF8fHx8MTc2Mjg3MTIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Nenhum jogo encontrado"
                            className="w-full h-full object-cover opacity-60"
                          />
                        </div>
                        <h2 className="mb-3 text-center text-xl font-semibold">
                          Nenhum jogo encontrado
                        </h2>
                        <p className="text-muted-foreground text-center max-w-md">
                          Não encontramos jogos com o termo {"\""}
                          {searchQuery}
                          {"\""}. Tente buscar por outro nome.
                        </p>

                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  paginatedGames.map((game) => (
                    <Card
                      key={game.id}
                      className="rounded-2xl overflow-hidden transition-all cursor-pointer border border-gray-200 bg-white group hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 duration-300"
                    // onClick={() =>
                    //   onNavigate("game-overview", game.id)
                    // }
                    >
                      {/* Thumbnail */}
                      <div className="relative h-52 bg-gray-100 overflow-hidden">
                        <img
                          src={gameImages[game.id] || ""}
                          alt={game.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <div
                            className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm ${statusColors[game.status]}`}
                          >
                            {statusLabels[game.status]}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-xl font-bold text-gray-900 line-clamp-1">
                          {game.name}
                        </h3>

                        {/* Metadata */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <div className="p-1.5 bg-gray-100 rounded-md">
                              <Calendar className="w-4 h-4 text-gray-600" />
                            </div>
                            <span className="font-medium">
                              {game.createdDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <div className="p-1.5 bg-gray-100 rounded-md">
                              <Tag className="w-4 h-4 text-gray-600" />
                            </div>
                            <span className="font-medium">
                              {game.genre || "Não especificado"}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) =>
                              handleEdit(e, game.id)
                            }
                            className="flex-1 rounded-xl border-indigo-100 text-[#6366F1] hover:bg-[#6366F1] hover:text-white hover:border-[#6366F1] transition-all h-10 font-medium"
                          >
                            <Edit2 className="mr-2 w-4 h-4" />
                            Editar
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) =>
                              handleDelete(e, game.id)
                            }
                            className="rounded-xl border-red-100 text-[#DC2626] hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all px-3 h-10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {paginatedGames.length === 0 ? (
                  <Card className="rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardContent className="flex flex-col items-center justify-center py-16">
                      <div className="w-48 h-48 mb-6 rounded-2xl overflow-hidden">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1564878954365-ce84ffc09f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGdhbWUlMjBjb250cm9sbGVyfGVufDF8fHx8MTc2Mjg3MTIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Nenhum jogo encontrado"
                          className="w-full h-full object-cover opacity-60"
                        />
                      </div>
                      <h2 className="mb-3 text-center">
                        Nenhum jogo encontrado
                      </h2>
                      <p className="text-muted-foreground text-center max-w-md">
                        Não encontramos jogos com o termo {"\""}
                        {searchQuery}
                        {"\""}. Tente buscar por outro nome.
                      </p>

                    </CardContent>
                  </Card>
                ) : (
                  paginatedGames.map((game) => (
                    <Card
                      key={game.id}
                      className="rounded-xl hover:shadow-lg transition-all cursor-pointer border hover:border-primary/50 group"
                    // onClick={() =>
                    //   onNavigate("game-overview", game.id)
                    // }
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-6">
                          {/* Thumbnail */}
                          <div className="relative w-28 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                            <img
                              src={gameImages[game.id] || ""}
                              alt={game.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold group-hover:text-primary transition-colors truncate">
                                {game.name}
                              </h3>
                              <Badge
                                className={`rounded-full px-2.5 ${statusColors[game.status]}`}
                              >
                                {statusLabels[game.status]}
                              </Badge>

                            </div>
                            <div className="flex gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Criado em: {game.createdDate}
                              </div>
                              <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                {game.genre ||
                                  "Não especificado"}
                              </div>
                            </div>
                          </div>
                          {/* Actions */}
                          <div className="flex gap-2 flex-shrink-0">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) =>
                                handleEdit(e, game.id)
                              }
                              className="rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors h-10 px-4"
                            >
                              <Edit2 className="mr-2 w-4 h-4" />
                              Editar
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) =>
                                handleDelete(e, game.id)
                              }
                              className="rounded-lg text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors h-10 w-10 p-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between mt-10 border-t pt-6 border-gray-100">
              <div className="flex items-center">
                <Label className="mr-3 text-gray-500">
                  Itens por página:
                </Label>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={handleItemsPerPageChange}
                >
                  <SelectTrigger className="w-24 h-9 rounded-lg">
                    <SelectValue>
                      {itemsPerPage === "all"
                        ? "Todos"
                        : itemsPerPage}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    sideOffset={5}
                    className="z-50"
                  >
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="all">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  className="rounded-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="mx-2 text-sm font-medium text-gray-600">
                  Página {currentPage} de {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage(currentPage + 1)
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir Jogo?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. Isso excluirá
              permanentemente o jogo e todos os dados
              associados.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}