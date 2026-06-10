import React, { useState } from "react";
import {
  Gamepad2,
  Layout,
  Box,
  LayoutDashboard,
  ScrollText,
} from "lucide-react";

// import { GameDataTab } from "./GameDataTab";
// import { ModelingTab } from "./ModelingTab";
import { GameDashboardTab } from "./GameDashboardTab";
import { GameLogsTab } from "./GameLogsTab";
import { InterfaceEvaluationTab } from "@/components/InterfaceEvaluationTab";

export interface DataVariable {
  id: string;
  name: string;
  type: string;
  example: string;
  justification: string;
}

interface GameOverviewProps {
  gameId: string;
  onNavigate: (page: string) => void;
  games?: any[];
}

// Configuração das Abas com Ícones
const TAB_ITEMS = [
  { id: "data", label: "Dados do Jogo", icon: Gamepad2 },
  {
    id: "interface",
    label: "Avaliação da Interface",
    icon: Layout,
  },
  { id: "modeling", label: "Modelagem e Captura", icon: Box },
  {
    id: "dashboard",
    label: "Painel de Controle",
    icon: LayoutDashboard,
  },
  { id: "logs", label: "Logs do Jogo", icon: ScrollText },
];

export function GameOverview({
  gameId,
  onNavigate,
  games,
}: GameOverviewProps) {
  const [activeTab, setActiveTab] = useState<string>("data");

  // Buscar o jogo atual para exibir informações no header
  const currentGame = games?.find((g) => g.id === gameId);

  const [dataVariables, setDataVariables] = useState<
    DataVariable[]
  >([
    {
      id: "1",
      name: "player_id",
      type: "string",
      example: "P001",
      justification:
        "Unique identifier for each player to track individual progress",
    },
    {
      id: "2",
      name: "session_id",
      type: "string",
      example: "S2025-001",
      justification: "Track individual gameplay sessions",
    },
    {
      id: "3",
      name: "food_category",
      type: "string",
      example: "vegetables",
      justification:
        "Record which food category the player is working with",
    },
    {
      id: "4",
      name: "correct_placements",
      type: "integer",
      example: "15",
      justification:
        "Count successful categorizations to measure learning",
    },
    {
      id: "5",
      name: "incorrect_placements",
      type: "integer",
      example: "3",
      justification: "Identify areas where students struggle",
    },
    {
      id: "6",
      name: "completion_time",
      type: "integer",
      example: "120",
      justification: "Time in seconds to complete the level",
    },
    {
      id: "7",
      name: "level_number",
      type: "integer",
      example: "3",
      justification:
        "Track progression through difficulty levels",
    },
  ]);

  const [captureStructure, setCaptureStructure] = useState(`{
  "player_id": "string",
  "session_id": "string",
  "timestamp": "ISO8601",
  "game_data": {
    "level_number": "integer",
    "food_category": "string",
    "correct_placements": "integer",
    "incorrect_placements": "integer",
    "completion_time": "integer",
    "score": "integer"
  },
  "events": [
    {
      "event_type": "string",
      "timestamp": "ISO8601",
      "event_data": {}
    }
  ]
}`);

  const handleUpdateVariables = (
    updatedVariables: DataVariable[],
  ) => {
    setDataVariables(updatedVariables);
  };

  return (
    <div className="w-full min-h-screen bg-[rgb(255,255,255)]">
      <div className="max-w-[1200px] xl:max-w-[1500px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-[32px]">
        <div className="py-2 md:py-[8px]">
          {/* Header do Jogo */}
          <div className="mb-8">
            <h1 className="font-['Arial_Rounded_MT_Bold'] leading-tight m-[0px] text-[32px] sm:text-[40px] md:text-[48px] text-[#166095] mb-3">
              {currentGame?.name || "Hello Food"}
            </h1>
            <p className="font-['Poppins'] text-[16px] sm:text-[18px] text-[rgba(112,111,111,0.75)] leading-relaxed">
              Quebra-cabeça Educacional • Em Desenvolvimento
            </p>
          </div>

          {/* ÁREA DE TABS */}
          <div className="w-full mt-8">
            {/* Header das Tabs */}
            <div className="relative border-b border-[rgba(112,111,111,0.15)] mb-8">
              <div className="flex w-full overflow-x-auto gap-6 no-scrollbar">
                {TAB_ITEMS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        group relative flex items-center gap-2 px-1 py-4 text-[14px] font-['Poppins'] font-medium transition-colors whitespace-nowrap
                        ${isActive ? "text-[#166095]" : "text-[rgba(112,111,111,0.6)] hover:text-[#166095]"}
                      `}
                    >
                      <Icon
                        size={18}
                        className={`transition-colors ${isActive ? "text-[#166095]" : "text-[rgba(112,111,111,0.5)] group-hover:text-[#166095]"}`}
                      />
                      {tab.label}

                      {/* Linha indicadora animada */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#166095]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Conteúdo das Tabs */}
            <div className="min-h-[500px] animate-in fade-in slide-in-from-bottom-2 duration-500">
              {activeTab === "data" && (
                // <GameDataTab
                //   gameId={gameId}
                //   onNavigate={onNavigate}
                //   games={games}
                // />
                <h1>Tab1</h1>
              )}

              {activeTab === "interface" && (
                <InterfaceEvaluationTab
                  gameId={gameId}
                  onNavigateBack={() => onNavigate("dashboard")}
                />
              )}

              {activeTab === "modeling" && (
                // <ModelingTab
                //   dataVariables={dataVariables}
                //   onUpdateVariables={setDataVariables}
                //   captureStructure={captureStructure}
                //   onUpdateCaptureStructure={setCaptureStructure}
                // />
                <h1>Tab2</h1>
              )}

              {activeTab === "dashboard" && (
                <GameDashboardTab gameId={gameId} />
              )}

              {activeTab === "logs" && (
                <GameLogsTab gameId={gameId} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}