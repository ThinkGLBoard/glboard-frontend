import { Check } from "lucide-react";

interface ModuleFeature {
  text: string;
}

interface Module {
  id: string;
  name: string;
  badge: string;
  color: string;
  bgBadge: string;
  features: ModuleFeature[];
}

const MODULES: Module[] = [
  {
    id: "peach",
    name: "PEACH",
    badge: "ANÁLISE DE INTERFACE",
    color: "#EC7201",
    bgBadge: "#FCEDD4",
    features: [
      { text: "Análise de UI/UX" },
      { text: "Carga Cognitiva" },
      { text: "Usabilidade" },
      { text: "Aprendizagem" },
    ],
  },
  {
    id: "gloria",
    name: "GLORIA",
    badge: "MODELAGEM DE DADOS",
    color: "#E24342",
    bgBadge: "#FBE2E2",
    features: [
      { text: "Modelagem de dados" },
      { text: "Definição de variáveis" },
      { text: "Estruturação pedagógica" },
      { text: "Geração de JSON" },
    ],
  },
  {
    id: "glboard",
    name: "GLBOARD",
    badge: "CAPTURA E ANÁLISE",
    color: "#961139",
    bgBadge: "#FDF1F2",
    features: [
      { text: "Captura de dados em tempo real" },
      { text: "Visualização de dashboards" },
      { text: "Análise de métricas" },
      { text: "Geração de relatórios" },
    ],
  },
];

export function ModulesSection() {
  return (
    <section id="modulos" className="bg-white py-32">
      <div className="max-w-300 mx-auto px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2
            style={{
              fontFamily: "Arial Rounded MT Bold, sans-serif",
              fontSize: "30px",
            }}
            className="text-[#2B2F3D]"
          >
            Módulos do GLBoard
          </h2>
          <p
            className="text-base text-[#364153]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            O GLBoard é composto por módulos especializados que cobrem todo o
            ciclo de Game Learning Analytics
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {MODULES.map((module) => (
            <div
              key={module.id}
              className="flex gap-6 items-start"
            >
              {/* Vertical Bar */}
              <div
                className="shrink-0 w-2 rounded-[5px] self-stretch"
                style={{ backgroundColor: module.color }}
              />

              {/* Content */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Title & Badge */}
                <div className="flex flex-col gap-5">
                  <h3
                    style={{
                      fontFamily: "Arial Rounded MT Bold, sans-serif",
                      fontSize: "30px",
                      color: module.color,
                    }}
                  >
                    {module.name}
                  </h3>
                  <div
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-[30px] self-start"
                    style={{ backgroundColor: module.bgBadge }}
                  >
                    <p
                      style={{
                        fontFamily: "Arial Rounded MT Bold, sans-serif",
                        fontSize: "14px",
                        color: module.color,
                        letterSpacing: "0.5px",
                      }}
                      className="text-center font-bold whitespace-nowrap"
                    >
                      {module.badge}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-3.5">
                  {module.features.map((feature, i) => (
                    <div key={i} className="flex gap-3.5 items-center">
                      {/* Custom Check Icon */}
                      <div className="shrink-0 w-7.5 h-7.5">
                        <svg
                          className="block size-full"
                          fill="none"
                          viewBox="0 0 30 30"
                        >
                          <rect
                            fill={module.bgBadge}
                            height="30"
                            rx="15"
                            width="30"
                          />
                          <path
                            d="M22 10L12 20L7 15"
                            stroke={module.color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                          />
                        </svg>
                      </div>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px",
                        }}
                        className="text-[#2B2F3D]"
                      >
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
