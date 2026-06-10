import { useState, useMemo } from "react";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { Label } from "@/ui/label";
import { Search, Filter, Download, Copy, Check, ChevronDown, ChevronUp, User, Calendar, FileJson } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

interface GameLogsTabProps {
  gameId: string;
}

interface GLBoardLog {
  playerId: string;
  sessionId: string;
  dateTimeStart: string;
  dateTimeFinish: string;
  phase: number;
  performance: number;
  conclusion: 'victory' | 'defeat' | 'quit';
  gender?: 'male' | 'female' | 'other';
  age?: number;
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
  foodCategory?: string;
  correctPlacements?: number;
  incorrectPlacements?: number;
  attempts?: number;
  levelNumber?: number;
  score?: number;
  hintsUsed?: number;
  timestamp: string;
  gameVersion: string;
}

const mockLogs: GLBoardLog[] = [
  {
    playerId: "P001",
    sessionId: "S2025-001",
    dateTimeStart: "2025-01-15T10:30:00Z",
    dateTimeFinish: "2025-01-15T10:48:00Z",
    phase: 1,
    performance: 85,
    conclusion: "victory",
    gender: "female",
    age: 10,
    experienceLevel: "beginner",
    foodCategory: "vegetables",
    correctPlacements: 17,
    incorrectPlacements: 3,
    attempts: 20,
    levelNumber: 1,
    score: 850,
    hintsUsed: 2,
    timestamp: "2025-01-15T10:48:00Z",
    gameVersion: "1.2.3"
  },
  {
    playerId: "P002",
    sessionId: "S2025-002",
    dateTimeStart: "2025-01-15T11:00:00Z",
    dateTimeFinish: "2025-01-15T11:25:00Z",
    phase: 2,
    performance: 92,
    conclusion: "victory",
    gender: "male",
    age: 12,
    experienceLevel: "intermediate",
    foodCategory: "fruits",
    correctPlacements: 23,
    incorrectPlacements: 2,
    attempts: 25,
    levelNumber: 2,
    score: 1150,
    hintsUsed: 1,
    timestamp: "2025-01-15T11:25:00Z",
    gameVersion: "1.2.3"
  },
  {
    playerId: "P001",
    sessionId: "S2025-003",
    dateTimeStart: "2025-01-15T14:00:00Z",
    dateTimeFinish: "2025-01-15T14:12:00Z",
    phase: 2,
    performance: 45,
    conclusion: "quit",
    gender: "female",
    age: 10,
    experienceLevel: "beginner",
    foodCategory: "proteins",
    correctPlacements: 9,
    incorrectPlacements: 11,
    attempts: 20,
    levelNumber: 2,
    score: 450,
    hintsUsed: 5,
    timestamp: "2025-01-15T14:12:00Z",
    gameVersion: "1.2.3"
  },
  {
    playerId: "P003",
    sessionId: "S2025-004",
    dateTimeStart: "2025-01-16T09:15:00Z",
    dateTimeFinish: "2025-01-16T09:45:00Z",
    phase: 3,
    performance: 78,
    conclusion: "victory",
    gender: "male",
    age: 11,
    experienceLevel: "intermediate",
    foodCategory: "grains",
    correctPlacements: 19,
    incorrectPlacements: 5,
    attempts: 24,
    levelNumber: 3,
    score: 950,
    hintsUsed: 3,
    timestamp: "2025-01-16T09:45:00Z",
    gameVersion: "1.2.3"
  }
];

export function GameLogsTab({ gameId }: GameLogsTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string>("all");
  const [expandedLog, setExpandedLog] = useState<string | null>(null);
  const [copiedLog, setCopiedLog] = useState<string | null>(null);

  const filteredLogs = useMemo(() => {
    return mockLogs.filter(log => {
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const logString = JSON.stringify(log).toLowerCase();
        if (!logString.includes(searchLower)) return false;
      }
      if (selectedPlayer !== "all" && log.playerId !== selectedPlayer) {
        return false;
      }
      return true;
    });
  }, [searchQuery, selectedPlayer]);

  const handleCopyLog = (log: GLBoardLog) => {
    navigator.clipboard.writeText(JSON.stringify(log, null, 2));
    setCopiedLog(log.sessionId);
    setTimeout(() => setCopiedLog(null), 2000);
  };

  const getConclusionBadge = (conclusion: string) => {
    switch (conclusion) {
      case "victory": return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Vitória</span>;
      case "defeat": return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Derrota</span>;
      case "quit": return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Desistência</span>;
      default: return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">{conclusion}</span>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white border-b border-gray-100 pb-6">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Buscar logs (ID, data, status)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-all"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="rounded-full flex-1 sm:flex-none">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex-1 sm:flex-none">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase text-gray-500">Jogador</Label>
              <select 
                value={selectedPlayer}
                onChange={(e) => setSelectedPlayer(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm"
              >
                <option value="all">Todos</option>
                {Array.from(new Set(mockLogs.map(l => l.playerId))).map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Logs List */}
      <div className="space-y-0 divide-y divide-gray-100 border-t border-b border-gray-100">
        {filteredLogs.length === 0 ? (
          <div className="py-20 text-center text-gray-400">
            <FileJson className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>Nenhum log encontrado</p>
          </div>
        ) : (
          filteredLogs.map((log) => (
            <div key={log.sessionId} className="py-6 hover:bg-gray-50/50 transition-colors -mx-4 px-4 sm:mx-0 sm:px-4 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                    {log.phase}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm font-medium text-gray-900">{log.sessionId}</span>
                      {getConclusionBadge(log.conclusion)}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {log.playerId}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {new Date(log.dateTimeStart).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyLog(log)}
                    className="text-gray-400 hover:text-indigo-600 rounded-full h-8 px-3"
                  >
                    {copiedLog === log.sessionId ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedLog(expandedLog === log.sessionId ? null : log.sessionId)}
                    className="text-gray-400 hover:text-gray-900 rounded-full h-8 w-8 p-0"
                  >
                    {expandedLog === log.sessionId ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {expandedLog === log.sessionId && (
                <div className="mt-4 p-4 bg-gray-900 rounded-xl overflow-hidden">
                  <pre className="text-xs text-gray-300 font-mono overflow-x-auto custom-scrollbar">
                    {JSON.stringify(log, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Summary Footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Total</p>
          <p className="text-2xl font-bold text-gray-900">{filteredLogs.length}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Performance Média</p>
          <p className="text-2xl font-bold text-indigo-600">
            {Math.round(filteredLogs.reduce((acc, log) => acc + log.performance, 0) / (filteredLogs.length || 1))}%
          </p>
        </div>
      </div>
    </div>
  );
}