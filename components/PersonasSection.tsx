import { useState, useEffect, useRef } from "react";
import {
  ImageIcon,
  Code,
  GraduationCap,
  BookOpen,
} from "lucide-react";

// Dados organizados (Mantidos iguais)
const PERSONAS = [
  {
    id: "developers",
    label: "DESENVOLVEDORES",
    icon: Code,
    color: "#58B24D",
    bgBadge: "rgba(88, 178, 77, 0.25)",
    activeClass: "bg-[#4AB5FF] text-white",
    title: "Para Devs",
    headline: (
      <>
        Integre análises ao seu jogo
        <br />
        em minutos.
      </>
    ),
    description: (
      <>
        O GLBoard oferece um pacote pronto para Unity.
        <br />
        Receba sua chave de API e visualize métricas técnicas
        <br />
        sem sair do fluxo
      </>
    ),
    steps: [
      {
        num: 1,
        title: "Download do SDK",
        text: (
          <>
            Carlos baixou o pacote e importou
            <br />
            para a Unity.
          </>
        ),
      },
      {
        num: 2,
        title: "Configuração Simples",
        text: (
          <>
            Colou a chave API no painel.
            <br />
            Zero código backend.
          </>
        ),
      },
      {
        num: 3,
        title: "Rastreamento",
        text: (
          <>
            Adicionou um evento para rastrear
            <br />
            mortes por fase.
          </>
        ),
      },
      {
        num: 4,
        title: "Sucesso!",
        text: (
          <>
            O gráfico apareceu no dashboard
            <br />
            instantaneamente.
          </>
        ),
      },
    ],
  },
  {
    id: "teachers",
    label: "PROFESSORES",
    icon: GraduationCap,
    color: "#D04245",
    bgBadge: "rgba(208, 66, 69, 0.25)",
    activeClass: "bg-[#D04245] text-white",
    title: "Para Professores",
    headline: (
      <>
        Avalie o aprendizado além do
        <br />
        "certo ou errado".
      </>
    ),
    description: (
      <>
        Monitore o desempenho da turma em tempo real
        <br />e valide se os objetos pedagógicos estão sendo
        <br />
        alcançados.
      </>
    ),
    steps: [
      {
        num: 1,
        title: "Cadastro rápido",
        text: (
          <>
            Ana cadastrou sua turma em minutos,
            <br />
            sem ajuda de TI.
          </>
        ),
      },
      {
        num: 2,
        title: "Dica da IA",
        text: (
          <>
            O agente sugeriu focar no tempo de
            <br />
            respostas das frações
          </>
        ),
      },
      {
        num: 3,
        title: "Monitoramento",
        text: (
          <>
            Viu em tempo real que a turma travava
            <br />
            na Fase 3.
          </>
        ),
      },
      {
        num: 4,
        title: "Resultado",
        text: (
          <>
            Interveio na aula e as notas da prova
            <br />
            subiram 20%.
          </>
        ),
      },
    ],
  },
  {
    id: "students",
    label: "ESTUDANTES",
    icon: BookOpen,
    color: "#0082B9",
    bgBadge: "rgba(0, 130, 185, 0.25)",
    activeClass: "bg-[#0082B9] text-white",
    title: "Para Estudantes",
    headline: (
      <>
        Seja protagonista da sua
        <br />
        evolução.
      </>
    ),
    description: (
      <>
        Acesse gráficos de vitórias, entenda onde errou
        <br />e transforme o jogo em uma ferramenta consciente
        <br />
        de autoaprendizagem.
      </>
    ),
    steps: [
      {
        num: 1,
        title: "Acesso Fácil",
        text: (
          <>
            Bia entrou no painel com o código da
            <br />
            turma. Sem senhas.
          </>
        ),
      },
      {
        num: 2,
        title: "Autoavaliação",
        text: (
          <>
            Viu que acertava Economia, mas errava
            <br />
            muito em Batalhas.
          </>
        ),
      },
      {
        num: 3,
        title: "Revisão",
        text: (
          <>
            Rejogou as fases de batalha focando nas
            <br />
            dicas do sistema.
          </>
        ),
      },
      {
        num: 4,
        title: "Conquista!",
        text: (
          <>
            Sua barra de progresso chegou a 100%
            <br />e ela se sentiu confiante.
          </>
        ),
      },
    ],
  },
];

export function PersonasSection() {
  const [activePersona, setActivePersona] =
    useState("developers");
  const [showNavBar, setShowNavBar] = useState(false);

  // =========================================================================
  // CONSTANTES DE POSICIONAMENTO
  // =========================================================================
  const FIXED_HEADER_HEIGHT = 160; // Altura do cabeçalho principal
  const EXTRA_GAP = 20; // Gap solicitado

  // Lógica para detectar quando a barra estática sai da tela
  useEffect(() => {
    const handleScroll = () => {
      const staticNav = document.getElementById("static-personas-nav");
      const usuariosSection = document.getElementById("usuarios");
      
      if (staticNav && usuariosSection) {
        const staticNavRect = staticNav.getBoundingClientRect();
        const sectionRect = usuariosSection.getBoundingClientRect();
        const navBarPosition = FIXED_HEADER_HEIGHT + EXTRA_GAP;
        
        // Mostra a barra fixa APENAS quando:
        // 1. A barra estática saiu da visão
        // 2. Ainda estamos dentro da seção de usuários
        const staticNavIsHidden = staticNavRect.bottom < navBarPosition;
        const stillInSection = sectionRect.bottom > navBarPosition;
        
        if (staticNavIsHidden && stillInSection) {
          setShowNavBar(true);
        } else {
          setShowNavBar(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer para detectar a persona ativa (igual ao ManualPage)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const personaId = entry.target.id.replace("persona-", "");
          setActivePersona(personaId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    PERSONAS.forEach((persona) => {
      const element = document.getElementById(`persona-${persona.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Lógica de Clique com cálculo manual
  const scrollToPersona = (personaId: string) => {
    const element = document.getElementById(`persona-${personaId}`);

    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        (FIXED_HEADER_HEIGHT + EXTRA_GAP + 100);

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="usuarios" className="relative bg-white">
      {/* Header with Title */}
      <div className="bg-white py-20">
        <div className="max-w-300 mx-auto px-12 lg:px-16">
          <div className="text-center space-y-4">
            <h2
              style={{
                fontFamily: "Arial Rounded MT Bold, sans-serif",
              }}
              className="text-[#2B2F3D] text-[30px] leading-normal font-bold"
            >
              Uma plataforma, 3 visões sobre
              <br />
              aprendizagem
            </h2>
            <p
              className="text-base text-[#364153]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Conectamos desenvolvimento técnico, acompanhamento
              pedagógico
              <br />e autoavaliação.
            </p>
          </div>
        </div>
      </div>

      {/* Static Navigation (Always Visible) */}
      <div className="bg-white border-b border-gray-200 w-full" id="static-personas-nav">
        <div className="max-w-350 mx-auto px-32 py-4">
          <div
            className="flex items-center gap-3"
            style={{ scrollbarWidth: "none" }}
          >
            {PERSONAS.map((persona) => {
              const isActive = activePersona === persona.id;
              const itemColor = isActive ? persona.color : "#9CA3AF";
              
              return (
                <button
                  key={persona.id}
                  onClick={() => scrollToPersona(persona.id)}
                  className="flex items-center justify-center gap-2 px-5 py-3 flex-1 transition-all rounded-lg hover:bg-gray-50 relative"
                  style={{
                    backgroundColor: isActive ? "rgba(243, 244, 246, 0.5)" : "transparent",
                  }}
                >
                  <persona.icon
                    className="w-4 h-4 transition-colors"
                    style={{ color: itemColor }}
                  />
                  <p
                    className="text-xs whitespace-nowrap transition-colors"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: itemColor,
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {persona.label}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full transition-colors"
                    style={{
                      backgroundColor: isActive ? persona.color : "#E5E7EB",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Navigation (Shows on scroll) */}
      <div
        className={`fixed z-30 bg-white border-b border-gray-200 w-full left-0 transition-opacity duration-300 ${
          showNavBar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: `${FIXED_HEADER_HEIGHT + EXTRA_GAP}px`,
        }}
      >
        <div className="max-w-350 mx-auto px-32 py-4">
          <div
            className="flex items-center gap-3"
            style={{ scrollbarWidth: "none" }}
          >
            {PERSONAS.map((persona) => {
              const isActive = activePersona === persona.id;
              const itemColor = isActive ? persona.color : "#9CA3AF";
              
              return (
                <button
                  key={persona.id}
                  onClick={() => scrollToPersona(persona.id)}
                  className="flex items-center justify-center gap-2 px-5 py-3 flex-1 transition-all rounded-lg hover:bg-gray-50 relative"
                  style={{
                    backgroundColor: isActive ? "rgba(243, 244, 246, 0.5)" : "transparent",
                  }}
                >
                  <persona.icon
                    className="w-4 h-4 transition-colors"
                    style={{ color: itemColor }}
                  />
                  <p
                    className="text-xs whitespace-nowrap transition-colors"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: itemColor,
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {persona.label}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full transition-colors"
                    style={{
                      backgroundColor: isActive ? persona.color : "#E5E7EB",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Personas Content */}
      <div className="bg-white">
        {PERSONAS.map((persona, index) => (
          <div
            key={persona.id}
            id={`persona-${persona.id}`}
            // Removido scroll-mt-48 pois estamos controlando manualmente no scrollToPersona
            className="pt-12 pb-20 border-b border-gray-100 last:border-0"
          >
            <div className="max-w-300 mx-auto px-12 lg:px-16">
              {/* Inverte a ordem visual para Professores (índice 1) */}
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center`}
              >
                {/* Visual (Imagem) */}
                <div
                  className={`flex items-center justify-center ${
                    index % 2 !== 0
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >
                  <div className="bg-[#F9FAFB] aspect-square w-full rounded-lg flex items-center justify-center border border-gray-100">
                    <ImageIcon className="w-32 h-32 text-[#D2D5DB]" />
                  </div>
                </div>

                {/* Conteúdo de Texto */}
                <div
                  className={`space-y-8 ${
                    index % 2 !== 0
                      ? "lg:order-1"
                      : "lg:order-2"
                  }`}
                >
                  <div
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg"
                    style={{ backgroundColor: persona.bgBadge }}
                  >
                    <p
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "24px",
                        color: persona.color,
                      }}
                      className="text-center font-bold"
                    >
                      {persona.title}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "30px",
                      }}
                      className="text-[#2B2F3D] font-bold"
                    >
                      {persona.headline}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                      }}
                      className="text-[#394151]"
                    >
                      {persona.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {persona.steps.map((step, i) => (
                      <div
                        key={i}
                        className="flex gap-6 items-center"
                      >
                        <div
                          className="shrink-0 w-15 h-15 rounded-full border-4 flex items-center justify-center font-bold"
                          style={{ borderColor: persona.color }}
                        >
                          <span
                            style={{
                              fontFamily:
                                "Arial Rounded MT Bold, sans-serif",
                              fontSize: "30px",
                              color: persona.color,
                            }}
                          >
                            {step.num}
                          </span>
                        </div>
                        <div className="space-y-2 flex-1">
                          <h4
                            style={{
                              fontFamily:
                                "Arial Rounded MT Bold, sans-serif",
                              fontSize: "24px",
                            }}
                            className="text-[#2B2F3D] font-bold"
                          >
                            {step.title}
                          </h4>
                          <p
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                            }}
                            className="text-[#394151]"
                          >
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}