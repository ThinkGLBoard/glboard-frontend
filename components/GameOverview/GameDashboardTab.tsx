import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Target, Clock, TrendingUp, Award, AlertCircle, CheckCircle, Flag, Play, Search, Filter, Plus, X, BarChart3, Download, FileSpreadsheet, Image as ImageIcon, FileText, MessageCircle, Send, Bot, Sparkles } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { Checkbox } from "@/ui/checkbox";
import { Label } from "@/ui/label";
import { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

interface GameDashboardTabProps {
  gameId: string;
}

function ChartExportButton({ chartName }: { chartName: string }) {
  const handleExport = (format: string) => {
    window.alert(`✅ Gráfico "${chartName}" exportado como ${format}!`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Download className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        <DropdownMenuItem onClick={() => handleExport('CSV')} className="rounded-lg cursor-pointer">
          <FileSpreadsheet className="w-4 h-4 mr-2" /> CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('PNG')} className="rounded-lg cursor-pointer">
          <ImageIcon className="w-4 h-4 mr-2" /> PNG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const availableVariables = [
  { id: 'gender', label: 'Gênero', category: 'demographic' },
  { id: 'age', label: 'Idade', category: 'demographic' },
  { id: 'phase', label: 'Fase', category: 'generic' },
  { id: 'performance', label: 'Performance', category: 'generic' },
  { id: 'correct_placements', label: 'Acertos', category: 'specific' },
];

const performanceByPhase = [
  { fase: "Fase 1", performance: 75, tempo_medio: 180 },
  { fase: "Fase 2", performance: 82, tempo_medio: 165 },
  { fase: "Fase 3", performance: 78, tempo_medio: 170 },
  { fase: "Fase 4", performance: 88, tempo_medio: 150 },
  { fase: "Fase 5", performance: 92, tempo_medio: 142 },
];

const conclusionData = [
  { name: "Vitória", value: 68, color: "#22c55e" },
  { name: "Derrota", value: 22, color: "#ef4444" },
  { name: "Desistência", value: 10, color: "#f59e0b" },
];

const phasesProgressData = [
  { fase: "Fase 1", desbloqueada: 47, concluida: 45 },
  { fase: "Fase 2", desbloqueada: 42, concluida: 38 },
  { fase: "Fase 3", desbloqueada: 35, concluida: 30 },
  { fase: "Fase 4", desbloqueada: 28, concluida: 22 },
  { fase: "Fase 5", desbloqueada: 18, concluida: 15 },
];

const categoryData = [
  { name: "Vegetais", value: 35, color: "#22c55e" },
  { name: "Frutas", value: 28, color: "#f59e0b" },
  { name: "Proteínas", value: 22, color: "#3b82f6" },
  { name: "Grãos", value: 15, color: "#8b5cf6" },
];

const engagementData = [
  { dia: "Seg", sessoes: 45 },
  { dia: "Ter", sessoes: 52 },
  { dia: "Qua", sessoes: 48 },
  { dia: "Qui", sessoes: 61 },
  { dia: "Sex", sessoes: 55 },
  { dia: "Sáb", sessoes: 38 },
  { dia: "Dom", sessoes: 35 },
];

export function GameDashboardTab({ gameId }: GameDashboardTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const defaultCharts = [
    { id: 'performance-phase', title: 'Performance por Fase', section: 'generic' },
    { id: 'conclusion', title: 'Status de Conclusão', section: 'generic' },
    { id: 'phases-progress', title: 'Progresso nas Fases', section: 'generic' },
    { id: 'category-performance', title: 'Desempenho por Categoria', section: 'specific' },
    { id: 'engagement', title: 'Engajamento Semanal', section: 'specific' },
  ];

  const filteredCharts = useMemo(() => {
    if (!searchQuery) return defaultCharts;
    return defaultCharts.filter(chart => 
      chart.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="space-y-8 pb-20">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white sticky top-0 z-10 py-4 border-b border-gray-100">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Buscar gráficos..."
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
            <Plus className="w-4 h-4 mr-2" />
            Customizar
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase text-gray-500">Período</Label>
              <select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm">
                <option>Últimos 30 dias</option>
                <option>Últimos 7 dias</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase text-gray-500">Gênero</Label>
              <select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm">
                <option>Todos</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Charts */}
      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12">
        {/* Performance Chart */}
        <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Performance por Fase</h3>
              <p className="text-sm text-gray-500">Média de pontuação e tempo</p>
            </div>
            <ChartExportButton chartName="Performance" />
          </div>
          <div className="min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceByPhase}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="fase" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Area 
                  key="performance-area"
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#6366F1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPerf)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conclusion Status */}
        <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Status de Conclusão</h3>
              <p className="text-sm text-gray-500">Distribuição de resultados</p>
            </div>
            <ChartExportButton chartName="Conclusão" />
          </div>
          <div className="min-h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  key="conclusion-pie"
                  data={conclusionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {conclusionData.map((entry, index) => (
                    <Cell key={`cell-conclusion-${entry.name}-${index}`} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip key="tooltip-conclusion" />
                <Legend key="legend-conclusion" verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Categories Performance */}
        <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Desempenho por Categoria</h3>
              <p className="text-sm text-gray-500">Distribuição de acertos por tipo de alimento</p>
            </div>
            <ChartExportButton chartName="Categorias" />
          </div>
          <div className="min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData} barSize={60}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} dy={10} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar key="category-bar" dataKey="value" radius={[8, 8, 0, 0]}>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-category-${entry.name}-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement */}
        <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Engajamento Semanal</h3>
              <p className="text-sm text-gray-500">Sessões ativas por dia da semana</p>
            </div>
            <ChartExportButton chartName="Engajamento" />
          </div>
          <div className="min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="dia" axisLine={false} tickLine={false} dy={10} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line 
                  key="engagement-line"
                  type="monotone" 
                  dataKey="sessoes" 
                  stroke="#14B8A6" 
                  strokeWidth={4} 
                  dot={{r: 4, fill: '#14B8A6', strokeWidth: 2, stroke: '#fff'}}
                  activeDot={{r: 6}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}