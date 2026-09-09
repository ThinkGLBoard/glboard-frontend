import { useState, useEffect } from "react";
import { Button } from "@/ui/button";
import {
  CheckCircle2,
  BookOpen,
  Gamepad2,
  Laptop,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import {
  getForm,
  saveFormDraft,
  submitForm,
  FormResponse,
  ApiQuestion,
} from "../services/formsApi";

// ─── Design tokens (aligned with GLBoard) ────────────────────────────────────
// Primary:  #8B1A1A  (dark red, from GLBoard header)
// Text:     #1a1a1a / #4a4a4a / #717171
// Border:   #e5e5e5
// Bg page:  #f8f8f8  |  Bg card: #ffffff
// No shadows anywhere.

// ─── Types ────────────────────────────────────────────────────────────────────

interface Question {
  id: string;
  text: string;
  category: string;
}

interface MultimediaPrinciple {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

type DimensionKey =
  | "aprendizagemMultimidia"
  | "gameDesign"
  | "uxui";

interface EvaluationProgress {
  selectedDimensions: DimensionKey[];
  currentDimensionIndex: number;
  currentPrincipleIndex: number;
  aprendizagemMultimidia: Record<string, number>;
  gameDesign: Record<string, number>;
  uxui: Record<string, number>;
  screeningAnswers: Record<string, boolean>;
  completed: boolean;
  completedDimensions: DimensionKey[]; // tracks each finished dimension
}

type Screen = "selector" | "evaluation" | "report";

// ─── Data ─────────────────────────────────────────────────────────────────────

const multimediaPrinciples: MultimediaPrinciple[] = [
  {
    id: "coerencia",
    title: "Coerência",
    description:
      "Exclusão de informações desnecessárias, irrelevantes ou decorativas.",
    questions: [
      {
        id: "coe1",
        text: "O jogo evita incluir elementos visuais puramente decorativos que não contribuem para a aprendizagem?",
        category: "Coerência",
      },
      {
        id: "coe2",
        text: "As informações apresentadas são relevantes e essenciais para os objetivos de aprendizagem?",
        category: "Coerência",
      },
      {
        id: "coe3",
        text: "O design evita sobrecarregar o jogador com detalhes desnecessários?",
        category: "Coerência",
      },
    ],
  },
  {
    id: "modalidade",
    title: "Modalidade",
    description:
      "Uso de áudio falado em vez de texto escrito quando acompanhado de imagens.",
    questions: [
      {
        id: "mod1",
        text: "O jogo utiliza narração em áudio para explicar conceitos quando acompanhados de imagens?",
        category: "Modalidade",
      },
      {
        id: "mod2",
        text: "A informação é distribuída entre os canais visual e auditivo de forma equilibrada?",
        category: "Modalidade",
      },
      {
        id: "mod3",
        text: "O áudio complementa as imagens em vez de simplesmente repeti-las?",
        category: "Modalidade",
      },
    ],
  },
  {
    id: "redundancia",
    title: "Redundância",
    description:
      "Evitar a apresentação da mesma informação em múltiplas formas simultaneamente.",
    questions: [
      {
        id: "red1",
        text: "O jogo evita apresentar texto escrito e áudio falado com o mesmo conteúdo simultaneamente?",
        category: "Redundância",
      },
      {
        id: "red2",
        text: "As informações são apresentadas no formato mais adequado, evitando repetições desnecessárias?",
        category: "Redundância",
      },
      {
        id: "red3",
        text: "A interface minimiza a sobrecarga cognitiva causada por informações redundantes?",
        category: "Redundância",
      },
    ],
  },
  {
    id: "contiguidade_espacial",
    title: "Contiguidade Espacial",
    description:
      "Apresentação de palavras e imagens relacionadas próximas umas das outras.",
    questions: [
      {
        id: "cesp1",
        text: "Textos explicativos estão posicionados próximos às imagens que descrevem?",
        category: "Contiguidade Espacial",
      },
      {
        id: "cesp2",
        text: "Os elementos relacionados estão agrupados visualmente de forma clara?",
        category: "Contiguidade Espacial",
      },
      {
        id: "cesp3",
        text: "O layout facilita a conexão mental entre informações complementares?",
        category: "Contiguidade Espacial",
      },
    ],
  },
  {
    id: "contiguidade_temporal",
    title: "Contiguidade Temporal",
    description:
      "Apresentação simultânea de palavras e imagens que se complementam.",
    questions: [
      {
        id: "ctem1",
        text: "Explicações visuais e verbais são apresentadas ao mesmo tempo?",
        category: "Contiguidade Temporal",
      },
      {
        id: "ctem2",
        text: "O jogo evita longas pausas entre informações relacionadas?",
        category: "Contiguidade Temporal",
      },
      {
        id: "ctem3",
        text: "A sincronia entre diferentes mídias facilita a compreensão do conteúdo?",
        category: "Contiguidade Temporal",
      },
    ],
  },
  {
    id: "segmentacao",
    title: "Segmentação",
    description:
      "Divisão de conteúdos complexos em partes menores.",
    questions: [
      {
        id: "seg1",
        text: "O conteúdo complexo é dividido em partes gerenciáveis?",
        category: "Segmentação",
      },
      {
        id: "seg2",
        text: "O jogador tem controle sobre o ritmo de progressão no conteúdo?",
        category: "Segmentação",
      },
      {
        id: "seg3",
        text: "As informações são apresentadas gradualmente, evitando sobrecarga?",
        category: "Segmentação",
      },
    ],
  },
  {
    id: "pre_formacao",
    title: "Pré-formação",
    description:
      "Apresentação prévia de conceitos-chave antes de tarefas complexas.",
    questions: [
      {
        id: "pre1",
        text: "Conceitos fundamentais são apresentados antes de tarefas complexas?",
        category: "Pré-formação",
      },
      {
        id: "pre2",
        text: "O jogador é familiarizado com termos-chave antes de usá-los em contextos mais avançados?",
        category: "Pré-formação",
      },
      {
        id: "pre3",
        text: "Existe uma preparação adequada antes da introdução de novos desafios?",
        category: "Pré-formação",
      },
    ],
  },
  {
    id: "personalizacao",
    title: "Personalização",
    description:
      "Uso de uma linguagem mais conversacional e próxima do jogador.",
    questions: [
      {
        id: "per1",
        text: "A linguagem utilizada é conversacional e acessível?",
        category: "Personalização",
      },
      {
        id: "per2",
        text: "O jogo se comunica com o jogador de forma direta e próxima?",
        category: "Personalização",
      },
      {
        id: "per3",
        text: "O tom da comunicação favorece o engajamento e a compreensão?",
        category: "Personalização",
      },
    ],
  },
  {
    id: "imagem",
    title: "Imagem",
    description:
      "Inclusão de personagens visuais apenas quando possuem um propósito claro.",
    questions: [
      {
        id: "img1",
        text: "Personagens e elementos gráficos têm um propósito claro de aprendizagem?",
        category: "Imagem",
      },
      {
        id: "img2",
        text: "Os elementos visuais contribuem diretamente para a compreensão do conteúdo?",
        category: "Imagem",
      },
      {
        id: "img3",
        text: "O jogo evita incluir imagens apenas por questões estéticas sem função educacional?",
        category: "Imagem",
      },
    ],
  },
  {
    id: "voz",
    title: "Voz",
    description: "Uso de vozes humanas reais para narração.",
    questions: [
      {
        id: "voz1",
        text: "Quando há narração, são utilizadas vozes humanas reais?",
        category: "Voz",
      },
      {
        id: "voz2",
        text: "A qualidade da narração facilita a compreensão do conteúdo?",
        category: "Voz",
      },
      {
        id: "voz3",
        text: "A voz utilizada contribui para o engajamento do jogador?",
        category: "Voz",
      },
    ],
  },
  {
    id: "multimidia",
    title: "Multimídia",
    description:
      "Combinação de palavras e imagens para apresentar informações.",
    questions: [
      {
        id: "mul1",
        text: "O jogo combina palavras e imagens para apresentar informações?",
        category: "Multimídia",
      },
      {
        id: "mul2",
        text: "A integração entre diferentes mídias favorece a aprendizagem?",
        category: "Multimídia",
      },
      {
        id: "mul3",
        text: "O uso de multimídia é mais eficaz do que o uso de apenas um tipo de mídia?",
        category: "Multimídia",
      },
    ],
  },
  {
    id: "sinalizacao",
    title: "Sinalização",
    description:
      "Uso de elementos para direcionar a atenção do jogador.",
    questions: [
      {
        id: "sin1",
        text: "O jogo utiliza recursos visuais (cores, destaques, setas) para chamar atenção ao que é importante?",
        category: "Sinalização",
      },
      {
        id: "sin2",
        text: "Elementos sonoros são usados para sinalizar informações relevantes?",
        category: "Sinalização",
      },
      {
        id: "sin3",
        text: "A sinalização ajuda o jogador a focar nos aspectos essenciais do conteúdo?",
        category: "Sinalização",
      },
    ],
  },
];

const gdQuestions: Question[] = [
  {
    id: "gd1",
    text: "A interface motiva o usuário a explorar as funcionalidades do sistema?",
    category: "Engajamento",
  },
  {
    id: "gd2",
    text: "O sistema fornece feedback claro sobre as ações realizadas?",
    category: "Feedback",
  },
  {
    id: "gd3",
    text: "A progressão através das tarefas é clara e recompensadora?",
    category: "Progressão",
  },
  {
    id: "gd4",
    text: "Os desafios apresentados são apropriados para o público-alvo?",
    category: "Desafio",
  },
  {
    id: "gd5",
    text: "A interface incentiva a autonomia e tomada de decisão do usuário?",
    category: "Autonomia",
  },
  {
    id: "gd6",
    text: "Elementos de gamificação (se presentes) são bem integrados e relevantes?",
    category: "Gamificação",
  },
  {
    id: "gd7",
    text: "O sistema mantém o interesse do usuário ao longo da experiência?",
    category: "Retenção",
  },
];

const uxQuestions: Question[] = [
  {
    id: "ux1",
    text: "A navegação pela interface é intuitiva e fácil de aprender?",
    category: "Navegação",
  },
  {
    id: "ux2",
    text: "Os elementos interativos são facilmente identificáveis?",
    category: "Affordance",
  },
  {
    id: "ux3",
    text: "O design visual é consistente em todas as telas?",
    category: "Consistência",
  },
  {
    id: "ux4",
    text: "A interface responde de forma adequada às ações do usuário?",
    category: "Responsividade",
  },
  {
    id: "ux5",
    text: "Os erros são prevenidos ou tratados de forma clara?",
    category: "Prevenção de Erros",
  },
  {
    id: "ux6",
    text: "A interface é acessível e utilizável por diferentes perfis de usuários?",
    category: "Acessibilidade",
  },
];

const ALL_DIMENSIONS: DimensionKey[] = [
  "aprendizagemMultimidia",
  "gameDesign",
  "uxui",
];

const dimensionMeta: Record<
  DimensionKey,
  {
    label: string;
    shortLabel: string;
    description: string;
    icon: React.ElementType;
    accentText: string;
    accentBg: string;
    accentBorder: string;
    dotColor: string;
  }
> = {
  aprendizagemMultimidia: {
    label: "Aprendizagem Multimídia",
    shortLabel: "TCAM",
    description:
      "Avalia como o jogo integra texto, imagem, áudio e vídeo para melhorar o aprendizado com base na Teoria Cognitiva.",
    icon: BookOpen,
    accentText: "text-[#8B1A1A]",
    accentBg: "bg-[#fdf5f5]",
    accentBorder: "border-[#e8c5c5]",
    dotColor: "#8B1A1A",
  },
  gameDesign: {
    label: "Game Design Educacional",
    shortLabel: "Game Design",
    description:
      "Avalia mecânicas, feedback, desafios e elementos motivacionais que influenciam o engajamento.",
    icon: Gamepad2,
    accentText: "text-[#1a4d8b]",
    accentBg: "bg-[#f5f7fd]",
    accentBorder: "border-[#c5cfe8]",
    dotColor: "#1a4d8b",
  },
  uxui: {
    label: "UX/UI Design",
    shortLabel: "UX/UI",
    description:
      "Avalia usabilidade, navegação, hierarquia visual e acessibilidade da interface.",
    icon: Laptop,
    accentText: "text-[#1a6b3a]",
    accentBg: "bg-[#f5fdf7]",
    accentBorder: "border-[#c5e8d0]",
    dotColor: "#1a6b3a",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildEmptyProgress(): EvaluationProgress {
  return {
    selectedDimensions: [],
    currentDimensionIndex: 0,
    currentPrincipleIndex: 0,
    aprendizagemMultimidia: {},
    gameDesign: {},
    uxui: {},
    screeningAnswers: {},
    completed: false,
    completedDimensions: [],
  };
}

function calcDimensionScore(
  dimKey: DimensionKey,
  p: EvaluationProgress,
): number {
  if (dimKey === "aprendizagemMultimidia") {
    const scores: number[] = [];
    for (const pr of multimediaPrinciples) {
      if (p.screeningAnswers[pr.id] === false) continue;
      const vals = pr.questions
        .map((q) => p.aprendizagemMultimidia[q.id])
        .filter((v) => v !== undefined) as number[];
      if (vals.length)
        scores.push(
          vals.reduce((a, b) => a + b, 0) / vals.length,
        );
    }
    return scores.length
      ? scores.reduce((a, b) => a + b, 0) / scores.length
      : 0;
  }
  const qs =
    dimKey === "gameDesign" ? gdQuestions : uxQuestions;
  const vals = qs
    .map((q) => p[dimKey][q.id])
    .filter((v) => v !== undefined) as number[];
  return vals.length
    ? vals.reduce((a, b) => a + b, 0) / vals.length
    : 0;
}

function calcOverallScore(p: EvaluationProgress): number {
  const scores = p.selectedDimensions.map((d) =>
    calcDimensionScore(d, p),
  );
  return scores.length
    ? scores.reduce((a, b) => a + b, 0) / scores.length
    : 0;
}

function getDimensionProgress(
  dimKey: DimensionKey,
  p: EvaluationProgress,
): number {
  if (dimKey === "aprendizagemMultimidia") {
    let total = 0;
    let answered = 0;
    for (const pr of multimediaPrinciples) {
      if (p.screeningAnswers[pr.id] === false) {
        total += 1;
        answered += 1;
        continue;
      }
      if (p.screeningAnswers[pr.id] === undefined) {
        total += 1 + pr.questions.length;
        continue;
      }
      total += 1 + pr.questions.length;
      answered += 1;
      answered += pr.questions.filter(
        (q) => p.aprendizagemMultimidia[q.id] !== undefined,
      ).length;
    }
    return total === 0
      ? 100
      : Math.round((answered / total) * 100);
  }
  const qs =
    dimKey === "gameDesign" ? gdQuestions : uxQuestions;
  const answered = qs.filter(
    (q) => p[dimKey][q.id] !== undefined,
  ).length;
  return Math.round((answered / qs.length) * 100);
}

function isDimensionComplete(
  dimKey: DimensionKey,
  p: EvaluationProgress,
): boolean {
  return getDimensionProgress(dimKey, p) === 100;
}

// ─── Shared UI pieces ─────────────────────────────────────────────────────────

/** Sticky top progress header — zero horizontal padding, caller handles container */
function EvalHeader({
  label,
  sublabel,
  pct,
}: {
  label: string;
  sublabel: string;
  pct: number;
}) {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-[#e5e5e5] py-3 -mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex items-center justify-between mb-2 gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#717171] leading-none mb-0.5 truncate">
            {label}
          </p>
          <p className="text-sm font-semibold text-[#1a1a1a] leading-snug truncate">
            {sublabel}
          </p>
        </div>
        <span className="text-base font-bold text-[#8B1A1A] flex-shrink-0">
          {pct}%
        </span>
      </div>
      <div className="h-[3px] w-full bg-[#ebebeb] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#8B1A1A] rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/** 1–5 Likert buttons */
const LIKERT_LABELS = [
  "Discordo totalmente",
  "Discordo",
  "Neutro",
  "Concordo",
  "Concordo totalmente",
];

function LikertInput({
  value,
  onChange,
}: {
  value?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mt-4">
      <div className="flex items-start justify-center gap-2 sm:gap-4">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            onClick={() => onChange(score)}
            aria-label={LIKERT_LABELS[score - 1]}
            className="flex flex-col items-center gap-2 flex-1 max-w-[80px] group"
          >
            <div
              className={[
                "w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center",
                "text-sm font-semibold transition-colors",
                value === score
                  ? "bg-[#8B1A1A] border-[#8B1A1A] text-white"
                  : "border-[#d4d4d4] text-[#717171] hover:border-[#8B1A1A] hover:text-[#8B1A1A] bg-white",
              ].join(" ")}
            >
              {score}
            </div>
            <span
              className={[
                "text-[10px] leading-tight text-center transition-colors",
                value === score
                  ? "text-[#8B1A1A] font-semibold"
                  : "text-[#a0a0a0]",
              ].join(" ")}
            >
              {LIKERT_LABELS[score - 1]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Bottom nav — sticky while scrolling, inline when content ends, never overlaps page footer */
function NavBar({
  onBack,
  onNext,
  nextLabel,
  nextDisabled,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
  nextDisabled: boolean;
}) {
  return (
    <div className="sticky bottom-0 z-20 mt-8 -mx-4 sm:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-8 lg:px-12 xl:px-16 py-3 bg-white border-t border-[#e5e5e5] flex items-center justify-between gap-3">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm font-medium text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors py-2"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Voltar</span>
      </button>
      <Button
        onClick={onNext}
        disabled={nextDisabled}
        className="bg-[#8B1A1A] hover:bg-[#7a1616] active:bg-[#6a1212] text-white rounded-lg px-4 sm:px-6 py-2 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        {nextLabel}
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}

// ─── Score chips and bars (report) ───────────────────────────────────────────

function scoreClass(value: number, max = 5) {
  const pct = (value / max) * 100;
  if (pct >= 70)
    return {
      chip: "bg-[#f0faf4] text-[#1a6b3a] border border-[#c5e8d0]",
      bar: "bg-[#1a6b3a]",
    };
  if (pct >= 50)
    return {
      chip: "bg-[#fdf9f0] text-[#7a5010] border border-[#e8d090]",
      bar: "bg-[#c8900a]",
    };
  return {
    chip: "bg-[#fdf5f5] text-[#8B1A1A] border border-[#e8c5c5]",
    bar: "bg-[#8B1A1A]",
  };
}

function ScoreChip({ value }: { value: number }) {
  const cls = scoreClass(value);
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded ${cls.chip}`}
    >
      {value.toFixed(1)}
    </span>
  );
}

function ScoreBar({ value }: { value: number }) {
  const cls = scoreClass(value);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-[3px] bg-[#ebebeb] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${cls.bar}`}
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <ScoreChip value={value} />
    </div>
  );
}



// ─── Screen: Dimension Selector ───────────────────────────────────────────────

function DimensionSelector({
  progress,
  onConfirm,
}: {
  progress: EvaluationProgress;
  onConfirm: (dims: DimensionKey[]) => void;
}) {
  // One dimension at a time — exclusive selection
  // Don't pre-select completed or in-progress ones; user makes a fresh choice
  const [selected, setSelected] = useState<DimensionKey | null>(
    null,
  );
  const [manualOpen, setManualOpen] = useState(false);

  const manualSteps = [
    {
      icon: "01",
      title: "Escolha a dimensão",
      desc: "Selecione uma das três dimensões de avaliação. Cada dimensão cobre um aspecto diferente do jogo educacional e pode ser realizada de forma independente.",
    },
    {
      icon: "02",
      title: "Responda as perguntas",
      desc: "Para a dimensão TCAM, indique primeiro se o princípio se aplica ao jogo. Se sim, avalie cada afirmação numa escala de 1 (Discordo totalmente) a 5 (Concordo totalmente).",
    },
    {
      icon: "03",
      title: "Navegue pelos princípios",
      desc: "Use os botões Voltar e Avançar para percorrer as categorias. Seu progresso é salvo automaticamente — você pode pausar e retomar quando quiser.",
    },
    {
      icon: "04",
      title: "Visualize o resultado",
      desc: "Ao concluir, acesse o relatório com as pontuações por categoria e dimensão. Você pode refazer a avaliação a qualquer momento.",
    },
  ];

  const tips = {
    do: [
      "Interaja com o jogo antes de avaliar",
      "Seja criterioso nas respostas Likert",
      "Marque 'Não aplicável' quando o princípio não fizer sentido para o jogo",
      "Revise antes de finalizar",
    ],
    dont: [
      "Avaliar sem conhecer o jogo",
      "Marcar tudo com a mesma nota",
      "Apressar o processo",
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
      {/* ── Dimension cards ── */}
      <div className="mb-2">
        <p className="text-sm font-semibold text-[#1a1a1a] mb-1">
          Selecionar dimensão
        </p>
        <p className="text-sm text-[#717171]">
          Escolha uma dimensão para avaliar. Cada dimensão é
          respondida separadamente.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 mt-4">
        {ALL_DIMENSIONS.map((dimKey) => {
          const meta = dimensionMeta[dimKey];
          const Icon = meta.icon;
          const isSelected = selected === dimKey;
          const isCompleted = (
            progress.completedDimensions ?? []
          ).includes(dimKey);
          const pct = isCompleted
            ? 100
            : progress.selectedDimensions.includes(dimKey)
              ? getDimensionProgress(dimKey, progress)
              : 0;
          const isInProgress = pct > 0 && pct < 100;

          return (
            <button
              key={dimKey}
              onClick={() => setSelected(dimKey)}
              className={[
                "relative w-full text-left rounded-xl border-2 transition-all p-5 flex flex-col gap-4",
                isSelected
                  ? `${meta.accentBg} ${meta.accentBorder}`
                  : "bg-white border-[#e5e5e5] hover:border-[#c0c0c0]",
              ].join(" ")}
            >
              {/* Radio indicator */}
              <div className="flex items-start justify-between gap-2">
                <div
                  className={[
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    isSelected
                      ? `${meta.accentBg} ${meta.accentText}`
                      : "bg-[#f2f2f2] text-[#a8a8a8]",
                  ].join(" ")}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div
                  className={[
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                    isSelected
                      ? "border-[#8B1A1A]"
                      : "border-[#d0d0d0]",
                  ].join(" ")}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8B1A1A]" />
                  )}
                </div>
              </div>

              {/* Labels */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                  <span
                    className={`text-sm font-semibold leading-snug ${isSelected ? "text-[#1a1a1a]" : "text-[#4a4a4a]"}`}
                  >
                    {meta.label}
                  </span>
                  <span
                    className={[
                      "text-[11px] font-semibold px-1.5 py-0.5 rounded",
                      isSelected
                        ? `${meta.accentBg} ${meta.accentText} border ${meta.accentBorder}`
                        : "bg-[#f2f2f2] text-[#717171]",
                    ].join(" ")}
                  >
                    {meta.shortLabel}
                  </span>
                </div>
                <p className="text-xs text-[#717171] leading-relaxed">
                  {meta.description}
                </p>
              </div>

              {/* Status badges + progress */}
              <div className="space-y-2">
                {isCompleted && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded bg-[#f0faf4] text-[#1a6b3a] border border-[#c5e8d0]">
                    <CheckCircle2 className="w-3 h-3" />{" "}
                    Concluída
                  </span>
                )}
                {isInProgress && (
                  <>
                    <span className="inline-block text-[11px] text-[#a0a0a0]">
                      {pct}% preenchida
                    </span>
                    <div className="h-[2px] w-full bg-[#e5e5e5] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#8B1A1A] rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </>
                )}
                {!isCompleted && pct === 0 && (
                  <span className="inline-block text-[11px] text-[#c0c0c0]">
                    Não iniciada
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <Button
        onClick={() => selected && onConfirm([selected])}
        disabled={!selected}
        className="w-full bg-[#8B1A1A] hover:bg-[#7a1616] text-white rounded-lg h-11 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors mb-8"
      >
        {!selected
          ? "Selecione uma dimensão para continuar"
          : (progress.completedDimensions ?? []).includes(
            selected,
          )
            ? `Refazer — ${dimensionMeta[selected].label}`
            : `Iniciar — ${dimensionMeta[selected].label}`}
      </Button>

      {/* ── Manual section ── */}
      <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
        <button
          onClick={() => setManualOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#fafafa] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-[#fdf5f5] border border-[#e8c5c5] flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#8B1A1A]"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2 3h12M2 6h8M2 9h10M2 12h6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#1a1a1a]">
              Como usar o PEACH
            </span>
          </div>
          <ChevronRight
            className={`w-4 h-4 text-[#717171] transition-transform ${manualOpen ? "rotate-90" : ""}`}
          />
        </button>

        {manualOpen && (
          <div className="border-t border-[#e5e5e5] px-5 py-5 bg-[#fafafa] space-y-6">
            {/* Aviso */}
            <div className="flex gap-3 bg-[#fdf5f5] border border-[#e8c5c5] rounded-lg px-4 py-3">
              <div className="w-1 rounded-full bg-[#8B1A1A] flex-shrink-0 self-stretch" />
              <p className="text-sm text-[#4a4a4a] leading-relaxed">
                <span className="font-semibold text-[#8B1A1A]">
                  Antes de começar:
                </span>{" "}
                certifique-se de ter o jogo aberto ou capturas
                de tela disponíveis. A avaliação funciona melhor
                quando você pode interagir diretamente com a
                interface sendo analisada.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {manualSteps.map((step) => (
                <div
                  key={step.icon}
                  className="bg-white border border-[#e5e5e5] rounded-lg px-4 py-4 flex gap-3"
                >
                  <span className="text-[11px] font-bold text-[#8B1A1A] bg-[#fdf5f5] border border-[#e8c5c5] rounded px-1.5 py-0.5 flex-shrink-0 self-start mt-0.5">
                    {step.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a] mb-1">
                      {step.title}
                    </p>
                    <p className="text-xs text-[#717171] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white border border-[#e5e5e5] rounded-lg px-4 py-4">
                <p className="text-xs font-semibold text-[#1a6b3a] uppercase tracking-widest mb-2">
                  ✓ Faça
                </p>
                <ul className="space-y-1.5">
                  {tips.do.map((t) => (
                    <li
                      key={t}
                      className="flex gap-2 text-xs text-[#4a4a4a]"
                    >
                      <span className="text-[#1a6b3a] flex-shrink-0">
                        •
                      </span>{" "}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-[#e5e5e5] rounded-lg px-4 py-4">
                <p className="text-xs font-semibold text-[#8B1A1A] uppercase tracking-widest mb-2">
                  ✗ Evite
                </p>
                <ul className="space-y-1.5">
                  {tips.dont.map((t) => (
                    <li
                      key={t}
                      className="flex gap-2 text-xs text-[#4a4a4a]"
                    >
                      <span className="text-[#8B1A1A] flex-shrink-0">
                        •
                      </span>{" "}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#717171] uppercase tracking-widest mb-3">
                Perguntas frequentes
              </p>
              {[
                {
                  q: "Preciso avaliar todas as dimensões?",
                  a: "Não. Cada dimensão é independente. Você pode avaliar apenas as que forem relevantes para seu objetivo, mas uma avaliação das três fornece um diagnóstico mais completo.",
                },
                {
                  q: "Posso pausar e continuar depois?",
                  a: "Sim. Seu progresso é salvo automaticamente no navegador. Basta voltar à aba de Avaliação da Interface para retomar de onde parou.",
                },
                {
                  q: "Como funciona a escala Likert?",
                  a: "1 significa Discordo totalmente e 5 significa Concordo totalmente. Use os valores intermediários para nuances — não existe resposta certa ou errada.",
                },
                {
                  q: "Posso refazer a avaliação?",
                  a: "Sim. No relatório final há um botão para refazer. Isso apaga as respostas anteriores e reinicia o processo para aquele jogo.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white border border-[#e5e5e5] rounded-lg px-4 py-3"
                >
                  <p className="text-sm font-semibold text-[#1a1a1a] mb-1">
                    {faq.q}
                  </p>
                  <p className="text-xs text-[#717171] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Screen: TCAM (principle by principle) ────────────────────────────────────

function TCAMStep({
  progress,
  principleIndex,
  onAnswer,
  onScreening,
  onNext,
  onBack,
}: {
  progress: EvaluationProgress;
  principleIndex: number;
  onAnswer: (qId: string, val: number) => void;
  onScreening: (pId: string, applies: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const principle = multimediaPrinciples[principleIndex];
  const applies = progress.screeningAnswers[principle.id];
  const pct = getDimensionProgress(
    "aprendizagemMultimidia",
    progress,
  );
  const isLast =
    principleIndex === multimediaPrinciples.length - 1;

  const principleQsDone =
    applies === false ||
    (applies === true &&
      principle.questions.every(
        (q) =>
          progress.aprendizagemMultimidia[q.id] !== undefined,
      ));
  const canAdvance = applies !== undefined && principleQsDone;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-6">
      <EvalHeader
        label={`Aprendizagem Multimídia · ${principleIndex + 1} / ${multimediaPrinciples.length}`}
        sublabel={principle.title}
        pct={pct}
      />

      <div className="pt-5 lg:grid lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] lg:gap-8 space-y-3 lg:space-y-0">
        {/* Left col (sticky on large screens): principle info + screening */}
        <div className="space-y-3 lg:sticky lg:top-[68px] lg:self-start">
          {/* Principle card */}
          <div className="rounded-lg border border-[#e8c5c5] bg-[#fdf5f5] px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8B1A1A] mb-1">
              Princípio
            </p>
            <p className="text-sm font-semibold text-[#1a1a1a] mb-0.5">
              {principle.title}
            </p>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              {principle.description}
            </p>
          </div>

          {/* Screening */}
          <div className="rounded-lg border border-[#e5e5e5] bg-white px-4 py-4">
            <p className="text-sm font-medium text-[#1a1a1a] mb-3">
              Este princípio se aplica ao jogo avaliado?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => onScreening(principle.id, true)}
                className={[
                  "flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 text-sm font-semibold transition-colors",
                  applies === true
                    ? "bg-[#8B1A1A] border-[#8B1A1A] text-white"
                    : "bg-white border-[#d4d4d4] text-[#4a4a4a] hover:border-[#8B1A1A] hover:text-[#8B1A1A]",
                ].join(" ")}
              >
                <span
                  className={[
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                    applies === true
                      ? "border-white"
                      : "border-[#b0b0b0]",
                  ].join(" ")}
                >
                  {applies === true && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </span>
                Sim
              </button>
              <button
                onClick={() => onScreening(principle.id, false)}
                className={[
                  "flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 text-sm font-semibold transition-colors",
                  applies === false
                    ? "bg-[#4a4a4a] border-[#4a4a4a] text-white"
                    : "bg-white border-[#d4d4d4] text-[#4a4a4a] hover:border-[#4a4a4a] hover:text-[#1a1a1a]",
                ].join(" ")}
              >
                <span
                  className={[
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                    applies === false
                      ? "border-white"
                      : "border-[#b0b0b0]",
                  ].join(" ")}
                >
                  {applies === false && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </span>
                Não
              </button>
            </div>
            {applies === false && (
              <p className="mt-3 text-xs text-[#717171] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                Princípio marcado como não aplicável — perguntas
                ignoradas.
              </p>
            )}
          </div>
        </div>

        {/* Right col: questions */}
        <div>
          {applies === true && (
            <div className="space-y-3">
              {principle.questions.map((q, idx) => {
                const val =
                  progress.aprendizagemMultimidia[q.id];
                return (
                  <div
                    key={q.id}
                    className="rounded-lg border border-[#e5e5e5] bg-white px-4 py-4"
                  >
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold text-[#a0a0a0] mt-0.5 flex-shrink-0">
                        {idx + 1}.
                      </span>
                      <p className="text-sm text-[#1a1a1a] leading-relaxed">
                        {q.text}
                      </p>
                    </div>
                    <LikertInput
                      value={val}
                      onChange={(v) => onAnswer(q.id, v)}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {applies === undefined && (
            <div className="rounded-lg border border-dashed border-[#d4d4d4] bg-[#fafafa] px-4 py-8 flex items-center justify-center">
              <p className="text-sm text-[#a0a0a0]">
                Responda a pergunta ao lado para continuar.
              </p>
            </div>
          )}
          {applies === false && (
            <div className="rounded-lg border border-dashed border-[#d4d4d4] bg-[#fafafa] px-4 py-8 flex items-center justify-center">
              <p className="text-sm text-[#a0a0a0]">
                Princípio não aplicável — nenhuma pergunta
                necessária.
              </p>
            </div>
          )}
        </div>
      </div>

      <NavBar
        onBack={onBack}
        onNext={onNext}
        nextLabel={
          isLast ? "Concluir dimensão" : "Próximo princípio"
        }
        nextDisabled={!canAdvance}
      />
    </div>
  );
}

// ─── Screen: Generic Step (GD / UX/UI) ───────────────────────────────────────

function GenericStep({
  dimKey,
  progress,
  onAnswer,
  onNext,
  onBack,
  isLastDimension,
}: {
  dimKey: "gameDesign" | "uxui";
  progress: EvaluationProgress;
  onAnswer: (qId: string, val: number) => void;
  onNext: () => void;
  onBack: () => void;
  isLastDimension: boolean;
}) {
  const qs =
    dimKey === "gameDesign" ? gdQuestions : uxQuestions;
  const meta = dimensionMeta[dimKey];
  const pct = getDimensionProgress(dimKey, progress);
  const answers = progress[dimKey];

  const grouped = qs.reduce<Record<string, Question[]>>(
    (acc, q) => {
      if (!acc[q.category]) acc[q.category] = [];
      acc[q.category].push(q);
      return acc;
    },
    {},
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-6">
      <EvalHeader
        label={meta.label}
        sublabel={meta.shortLabel}
        pct={pct}
      />

      <div className="pt-5 space-y-6">
        {Object.entries(grouped).map(([cat, catQs]) => (
          <div key={cat}>
            {/* Category header */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: meta.dotColor }}
              />
              <p
                className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest ${meta.accentText}`}
              >
                {cat}
              </p>
            </div>
            <div className="space-y-3">
              {catQs.map((q, idx) => (
                <div
                  key={q.id}
                  className="rounded-lg border border-[#e5e5e5] bg-white px-4 py-4"
                >
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-[#a0a0a0] mt-0.5 flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <p className="text-sm text-[#1a1a1a] leading-relaxed">
                      {q.text}
                    </p>
                  </div>
                  <LikertInput
                    value={answers[q.id]}
                    onChange={(v) => onAnswer(q.id, v)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <NavBar
        onBack={onBack}
        onNext={onNext}
        nextLabel={
          isLastDimension
            ? "Finalizar avaliação"
            : "Próxima dimensão"
        }
        nextDisabled={pct < 100}
      />
    </div>
  );
}

// ─── Screen: Report ───────────────────────────────────────────────────────────

function Report({
  progress,
  onBackToSelector,
  onResetDimension,
}: {
  progress: EvaluationProgress;
  onBackToSelector: () => void;
  onResetDimension: (dimKey: DimensionKey) => void;
}) {
  // Show all completed dimensions, not just the last one
  const completedDims =
    (progress.completedDimensions ?? []).length > 0
      ? progress.completedDimensions
      : progress.selectedDimensions; // fallback for old saves

  const allDone =
    completedDims.length === ALL_DIMENSIONS.length;
  const overall =
    completedDims.length > 0
      ? completedDims.reduce(
        (sum, d) => sum + calcDimensionScore(d, progress),
        0,
      ) / completedDims.length
      : 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
      {/* Banner */}
      <div className="flex items-center justify-between gap-4 rounded-lg border border-[#c5e8d0] bg-[#f0faf4] px-4 py-3 mb-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#1a6b3a] flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-[#1a1a1a]">
              {allDone
                ? "Todas as dimensões avaliadas"
                : `${completedDims.length} de ${ALL_DIMENSIONS.length} dimensões concluídas`}
            </p>
            <p className="text-xs text-[#717171]">
              Resultados da avaliação PEACH
            </p>
          </div>
        </div>
        {!allDone && (
          <Button
            onClick={onBackToSelector}
            className="flex-shrink-0 bg-[#8B1A1A] hover:bg-[#7a1616] text-white rounded-lg px-4 py-2 text-xs font-semibold transition-colors"
          >
            Avaliar outra dimensão
          </Button>
        )}
      </div>

      {/* Overall score — only if more than one dimension done */}
      {completedDims.length > 1 && (
        <div className="lg:grid lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr] lg:gap-8 mb-6">
          <div className="rounded-lg border border-[#e5e5e5] bg-white px-5 py-5 mb-4 lg:mb-0 flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#717171] mb-3">
              Pontuação geral
            </p>
            <div className="flex items-end gap-1.5 mb-4">
              <span className="text-6xl font-bold text-[#8B1A1A] leading-none">
                {overall.toFixed(1)}
              </span>
              <span className="text-base text-[#a0a0a0] mb-1">
                / 5
              </span>
            </div>
            <div className="h-[3px] bg-[#ebebeb] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8B1A1A] rounded-full transition-all"
                style={{ width: `${(overall / 5) * 100}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
            {completedDims.map((dimKey) => {
              const meta = dimensionMeta[dimKey];
              const Icon = meta.icon;
              const score = calcDimensionScore(
                dimKey,
                progress,
              );
              return (
                <div
                  key={dimKey}
                  className={`rounded-lg border px-4 py-3 flex items-center gap-3 ${meta.accentBorder} ${meta.accentBg}`}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${meta.accentText}`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#1a1a1a] truncate">
                      {meta.shortLabel}
                    </p>
                    <div className="mt-1 h-[2px] bg-[#e5e5e5] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(score / 5) * 100}%`,
                          backgroundColor: meta.dotColor,
                        }}
                      />
                    </div>
                  </div>
                  <ScoreChip value={score} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Per dimension detailed breakdown */}
      <div className="space-y-4 mb-6">
        {completedDims.map((dimKey) => {
          const meta = dimensionMeta[dimKey];
          const Icon = meta.icon;
          const score = calcDimensionScore(dimKey, progress);

          return (
            <div
              key={dimKey}
              className="rounded-lg border border-[#e5e5e5] bg-white overflow-hidden"
            >
              <div
                className={`flex items-center gap-3 px-4 py-3 border-b ${meta.accentBorder} ${meta.accentBg}`}
              >
                <Icon
                  className={`w-4 h-4 flex-shrink-0 ${meta.accentText}`}
                />
                <p className="text-sm font-semibold text-[#1a1a1a] flex-1 min-w-0 truncate">
                  {meta.label}
                </p>
                <ScoreChip value={score} />
              </div>

              <div className="px-4 pt-3 pb-2">
                <ScoreBar value={score} />
              </div>

              {/* TCAM breakdown */}
              {dimKey === "aprendizagemMultimidia" && (
                <div className="px-4 pb-4 pt-1 border-t border-[#f2f2f2]">
                  <div className="space-y-1.5 pt-2">
                    {multimediaPrinciples.map((pr) => {
                      if (
                        progress.screeningAnswers[pr.id] ===
                        false
                      ) {
                        return (
                          <div
                            key={pr.id}
                            className="flex items-center justify-between py-0.5 gap-3"
                          >
                            <span className="text-xs text-[#b0b0b0] flex-1 min-w-0">
                              {pr.title}
                            </span>
                            <span className="text-[11px] text-[#b0b0b0] italic flex-shrink-0">
                              Não aplicável
                            </span>
                          </div>
                        );
                      }
                      const vals = pr.questions
                        .map(
                          (q) =>
                            progress.aprendizagemMultimidia[
                            q.id
                            ],
                        )
                        .filter(
                          (v) => v !== undefined,
                        ) as number[];
                      const avg = vals.length
                        ? vals.reduce((a, b) => a + b, 0) /
                        vals.length
                        : null;
                      return (
                        <div
                          key={pr.id}
                          className="flex items-center justify-between py-0.5 gap-3"
                        >
                          <span className="text-xs text-[#4a4a4a] flex-1 min-w-0">
                            {pr.title}
                          </span>
                          {avg !== null ? (
                            <ScoreChip value={avg} />
                          ) : (
                            <span className="text-xs text-[#d0d0d0]">
                              —
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* GD / UX breakdown */}
              {dimKey !== "aprendizagemMultimidia" &&
                (() => {
                  const qs =
                    dimKey === "gameDesign"
                      ? gdQuestions
                      : uxQuestions;
                  const answers = progress[dimKey];
                  const cats = Array.from(
                    new Set(qs.map((q) => q.category)),
                  );
                  return (
                    <div className="px-4 pb-3 pt-1 border-t border-[#f2f2f2]">
                      <div className="space-y-1.5 pt-2">
                        {cats.map((cat) => {
                          const catQs = qs.filter(
                            (q) => q.category === cat,
                          );
                          const vals = catQs
                            .map((q) => answers[q.id])
                            .filter(
                              (v) => v !== undefined,
                            ) as number[];
                          const avg = vals.length
                            ? vals.reduce((a, b) => a + b, 0) /
                            vals.length
                            : null;
                          return (
                            <div
                              key={cat}
                              className="flex items-center justify-between py-0.5 gap-3"
                            >
                              <span className="text-xs text-[#4a4a4a] flex-1 min-w-0">
                                {cat}
                              </span>
                              {avg !== null ? (
                                <ScoreChip value={avg} />
                              ) : (
                                <span className="text-xs text-[#d0d0d0]">
                                  —
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

              {/* Reset this dimension */}
              <div className="px-4 pb-3 border-t border-[#f9f9f9]">
                <button
                  onClick={() => onResetDimension(dimKey)}
                  className="mt-2 flex items-center gap-1.5 text-xs text-[#a0a0a0] hover:text-[#717171] transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Refazer esta dimensão
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pending dimensions */}
      {!allDone && (
        <div className="rounded-lg border border-dashed border-[#d0d0d0] px-4 py-4 mb-4">
          <p className="text-xs font-semibold text-[#717171] uppercase tracking-widest mb-2">
            Dimensões pendentes
          </p>
          <div className="flex flex-wrap gap-2">
            {ALL_DIMENSIONS.filter(
              (d) => !completedDims.includes(d),
            ).map((dimKey) => {
              const meta = dimensionMeta[dimKey];
              const Icon = meta.icon;
              return (
                <span
                  key={dimKey}
                  className="flex items-center gap-1.5 text-xs text-[#717171] bg-[#f2f2f2] px-2.5 py-1.5 rounded-lg"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {meta.shortLabel}
                </span>
              );
            })}
          </div>
        </div>
      )}

      <Button
        onClick={onBackToSelector}
        variant="outline"
        className="w-full border-[#e5e5e5] text-[#4a4a4a] hover:bg-[#f8f8f8] rounded-lg h-10 text-sm font-medium transition-colors"
      >
        {allDone
          ? "Ver seletor de dimensões"
          : "Avaliar outra dimensão"}
      </Button>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function InterfaceEvaluationTab({
  gameId,
}: {
  gameId: string;
}) {
  const [apiForm, setApiForm] = useState<FormResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [screen, setScreen] = useState<"selector" | "evaluation" | "report">(
    "selector",
  );

  const [selectedDimensionId, setSelectedDimensionId] = useState<string | null>(
    null,
  );

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // useEffect(() => {
  //   async function loadForm() {
  //     try {
  //       setLoading(true);

  //       const form = await getForm();

  //       console.log("Formulário vindo da API:", form);

  //       setApiForm(form);
  //     } catch (error) {
  //       console.error("Erro ao carregar formulário:", error);
  //       toast.error("Erro ao carregar formulário da API.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadForm();
  // }, []);

  useEffect(() => {
    async function loadForm() {
      try {
        setLoading(true);

        const form = await getForm(gameId);

        console.log("Game ID:", gameId);
        console.log("Formulário vindo da API:", form);

        setApiForm(form);
      } catch (error) {
        console.error("Erro ao carregar formulário:", error);
        toast.error("Erro ao carregar formulário da API.");
      } finally {
        setLoading(false);
      }
    }

    if (gameId) {
      loadForm();
    }
  }, [gameId]);

  const selectedDimension = apiForm?.dimensions.find(
    (dimension) => dimension.id === selectedDimensionId,
  );

  const currentCategory =
    selectedDimension?.categories[currentCategoryIndex] ?? null;

  function flattenQuestions(questions: ApiQuestion[]): ApiQuestion[] {
    return questions.flatMap((question) => [
      question,
      ...flattenQuestions(question.children ?? []),
    ]);
  }

  function updateQuestionAnswer(questionId: string, answer: string) {
  function updateQuestions(questions: ApiQuestion[]): ApiQuestion[] {
    return questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          answer,
        };
      }

      return {
        ...question,
        children: updateQuestions(question.children ?? []),
      };
    });
  }

  setApiForm((current) => {
    if (!current) return current;

    return {
      ...current,
      dimensions: current.dimensions.map((dimension) => ({
        ...dimension,
        categories: dimension.categories.map((category) => ({
          ...category,
          questions: updateQuestions(category.questions),
        })),
      })),
    };
  });
}

  function shouldShowQuestion(
  question: ApiQuestion,
  allQuestions: ApiQuestion[],
): boolean {
  if (!question.parentQuestionId) return true;

  const parent = allQuestions.find(
    (item) => item.id === question.parentQuestionId,
  );

  if (!parent) return false;

  const parentAllowsChildren =
    parent.answer === "true" ||
    parent.answer === "Sim" ||
    parent.answer === "sim" ||
    parent.answer === "1";

  if (!parentAllowsChildren) return false;

  return shouldShowQuestion(parent, allQuestions);
}

  function getVisibleQuestions() {
  if (!currentCategory) return [];

  const allQuestions = flattenQuestions(currentCategory.questions);

  return allQuestions.filter((question) =>
    shouldShowQuestion(question, allQuestions),
  );
}

  function isCurrentCategoryComplete() {
  const visibleQuestions = getVisibleQuestions();

  return visibleQuestions.every((question) => {
    return (
      question.answer !== undefined &&
      question.answer !== null &&
      question.answer !== ""
    );
  });
}

  function getDimensionProgress() {
  if (!selectedDimension) return 0;

  const allQuestions = selectedDimension.categories.flatMap(
    (category) => flattenQuestions(category.questions),
  );

  const visibleQuestions = allQuestions.filter((question) =>
    shouldShowQuestion(question, allQuestions),
  );

  if (visibleQuestions.length === 0) return 0;

    const answered = visibleQuestions.filter(
      (question) => question.answer !== undefined && question.answer !== "",
    ).length;
  const answered = visibleQuestions.filter(
    (question) =>
      question.answer !== undefined &&
      question.answer !== null &&
      question.answer !== "",
  ).length;

  return Math.round((answered / visibleQuestions.length) * 100);
}

  async function handleSaveDraft() {
    if (!apiForm) return;

    try {
      await saveFormDraft(apiForm);
      toast.success("Progresso salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar rascunho:", error);
      toast.error("Erro ao salvar progresso.");
    }
  }

  async function handleSubmit() {
    if (!apiForm) return;

    try {
      await submitForm(apiForm);
      toast.success("Avaliação enviada com sucesso!");
      setScreen("report");
    } catch (error) {
      console.error("Erro ao enviar avaliação:", error);
      toast.error("Erro ao enviar avaliação.");
    }
  }

  function handleSelectDimension(dimensionId: string) {
    setSelectedDimensionId(dimensionId);
    setCurrentCategoryIndex(0);
    setScreen("evaluation");
    window.scrollTo(0, 0);
  }

  function handleNextCategory() {
    if (!selectedDimension) return;

    if (!isCurrentCategoryComplete()) {
      toast.error("Responda as perguntas obrigatórias antes de continuar.");
      return;
    }

    const isLastCategory =
      currentCategoryIndex === selectedDimension.categories.length - 1;

    if (isLastCategory) {
      handleSubmit();
      return;
    }

    setCurrentCategoryIndex((current) => current + 1);
    window.scrollTo(0, 0);
  }

  function handleBack() {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex((current) => current - 1);
      window.scrollTo(0, 0);
      return;
    }

    setScreen("selector");
    setSelectedDimensionId(null);
    setCurrentCategoryIndex(0);
    window.scrollTo(0, 0);
  }

  function renderQuestionInput(question: ApiQuestion) {
    const type = question.type?.toLowerCase();

    if (type === "boolean") {
      return (
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => updateQuestionAnswer(question.id, "true")}
            className={[
              "flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 text-sm font-semibold transition-colors",
              question.answer === "true"
                ? "bg-[#8B1A1A] border-[#8B1A1A] text-white"
                : "bg-white border-[#d4d4d4] text-[#4a4a4a] hover:border-[#8B1A1A] hover:text-[#8B1A1A]",
            ].join(" ")}
          >
            Sim
          </button>

          <button
            onClick={() => updateQuestionAnswer(question.id, "false")}
            className={[
              "flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 text-sm font-semibold transition-colors",
              question.answer === "false"
                ? "bg-[#4a4a4a] border-[#4a4a4a] text-white"
                : "bg-white border-[#d4d4d4] text-[#4a4a4a] hover:border-[#4a4a4a] hover:text-[#1a1a1a]",
            ].join(" ")}
          >
            Não
          </button>
        </div>
      );
    }

    if (type === "likert" || type === "scale" || type === "number") {
      return (
        <LikertInput
          value={question.answer ? Number(question.answer) : undefined}
          onChange={(value) => updateQuestionAnswer(question.id, String(value))}
        />
      );
    }

    if (type === "text" || type === "textarea" || type === "longtext") {
      return (
        <textarea
          value={question.answer ?? ""}
          onChange={(event) =>
            updateQuestionAnswer(question.id, event.target.value)
          }
          className="mt-4 w-full min-h-[100px] rounded-lg border border-[#d4d4d4] px-3 py-2 text-sm text-[#1a1a1a] outline-none focus:border-[#8B1A1A]"
          placeholder="Digite sua resposta..."
        />
      );
    }

    return (
      <LikertInput
        value={question.answer ? Number(question.answer) : undefined}
        onChange={(value) => updateQuestionAnswer(question.id, String(value))}
      />
    );
  }

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
        <p className="text-sm text-[#717171]">
          Carregando formulário da API...
        </p>
      </div>
    );
  }

  if (!apiForm) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
        <p className="text-sm text-[#8B1A1A]">
          Não foi possível carregar o formulário.
        </p>
      </div>
    );
  }

  if (screen === "selector") {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
        <div className="mb-2">
          <p className="text-sm font-semibold text-[#1a1a1a] mb-1">
            Selecionar dimensão
          </p>

          <p className="text-sm text-[#717171]">
            Escolha uma dimensão para avaliar. Cada dimensão é respondida
            separadamente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 mt-4">
          {apiForm.dimensions.map((dimension) => {
            const isSelected = selectedDimensionId === dimension.id;

            return (
              <button
                key={dimension.id}
                onClick={() => setSelectedDimensionId(dimension.id)}
                className={[
                  "relative w-full text-left rounded-xl border-2 transition-all p-5 flex flex-col gap-4",
                  isSelected
                    ? "bg-[#fdf5f5] border-[#e8c5c5]"
                    : "bg-white border-[#e5e5e5] hover:border-[#c0c0c0]",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#f2f2f2] text-[#8B1A1A]">
                    <BookOpen className="w-5 h-5" />
                  </div>

                  <div
                    className={[
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                      isSelected ? "border-[#8B1A1A]" : "border-[#d0d0d0]",
                    ].join(" ")}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#8B1A1A]" />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-sm font-semibold leading-snug text-[#1a1a1a]">
                    {dimension.name}
                  </span>

                  <p className="text-xs text-[#717171] leading-relaxed mt-2">
                    {dimension.categories.length} categorias disponíveis para
                    avaliação.
                  </p>
                </div>

                <span className="inline-block text-[11px] text-[#c0c0c0]">
                  Ordem {dimension.order}
                </span>
              </button>
            );
          })}
        </div>

        <Button
          onClick={() =>
            selectedDimensionId && handleSelectDimension(selectedDimensionId)
          }
          disabled={!selectedDimensionId}
          className="w-full bg-[#8B1A1A] hover:bg-[#7a1616] text-white rounded-lg h-11 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors mb-8"
        >
          {!selectedDimensionId
            ? "Selecione uma dimensão para continuar"
            : `Iniciar avaliação`}
        </Button>
      </div>
    );
  }

  if (screen === "report") {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
        <div className="flex items-center gap-3 rounded-lg border border-[#c5e8d0] bg-[#f0faf4] px-4 py-3 mb-6">
          <CheckCircle2 className="w-5 h-5 text-[#1a6b3a]" />

          <div>
            <p className="text-sm font-semibold text-[#1a1a1a]">
              Avaliação enviada
            </p>

            <p className="text-xs text-[#717171]">
              As respostas foram enviadas para a API.
            </p>
          </div>
        </div>

        <Button
          onClick={() => {
            setScreen("selector");
            setSelectedDimensionId(null);
            setCurrentCategoryIndex(0);
          }}
          className="bg-[#8B1A1A] hover:bg-[#7a1616] text-white rounded-lg px-4 py-2 text-sm font-semibold"
        >
          Voltar para seleção de dimensão
        </Button>
      </div>
    );
  }

  if (!selectedDimension || !currentCategory) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
        <p className="text-sm text-[#8B1A1A]">
          Dimensão ou categoria não encontrada.
        </p>
      </div>
    );
  }

  const visibleQuestions = getVisibleQuestions();
  const progress = getDimensionProgress();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-6">
      <EvalHeader
        label={`${selectedDimension.name} · ${currentCategoryIndex + 1} / ${selectedDimension.categories.length}`}
        sublabel={currentCategory.name}
        pct={progress}
      />

      <div className="pt-5 lg:grid lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] lg:gap-8 space-y-3 lg:space-y-0">
        <div className="space-y-3 lg:sticky lg:top-[68px] lg:self-start">
          <div className="rounded-lg border border-[#e8c5c5] bg-[#fdf5f5] px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8B1A1A] mb-1">
              Categoria
            </p>

            <p className="text-sm font-semibold text-[#1a1a1a] mb-0.5">
              {currentCategory.name}
            </p>

            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              Responda as perguntas desta categoria para continuar.
            </p>
          </div>

          <button
            onClick={handleSaveDraft}
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-sm font-semibold text-[#4a4a4a] hover:bg-[#fafafa] transition-colors"
          >
            Salvar e continuar depois
          </button>
        </div>

        <div>
          {visibleQuestions.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[#d4d4d4] bg-[#fafafa] px-4 py-8 flex items-center justify-center">
              <p className="text-sm text-[#a0a0a0]">
                Nenhuma pergunta disponível para esta categoria.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {visibleQuestions.map((question, index) => (
                <div
                  key={question.id}
                  className="rounded-lg border border-[#e5e5e5] bg-white px-4 py-4"
                >
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-[#a0a0a0] mt-0.5 flex-shrink-0">
                      {index + 1}.
                    </span>

                    <div className="flex-1">
                      <p className="text-sm text-[#1a1a1a] leading-relaxed">
                        {question.text}
                      </p>

                      <p className="text-[11px] text-[#a0a0a0] mt-1">
                        Tipo: {question.type}
                      </p>
                    </div>
                  </div>

                  {renderQuestionInput(question)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <NavBar
        onBack={handleBack}
        onNext={handleNextCategory}
        nextLabel={
          currentCategoryIndex === selectedDimension.categories.length - 1
            ? "Finalizar dimensão"
            : "Próxima categoria"
        }
        nextDisabled={!isCurrentCategoryComplete()}
      />
    </div>
  );
}