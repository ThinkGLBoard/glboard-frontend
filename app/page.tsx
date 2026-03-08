"use client";

import {
  Database,
  Settings,
  BarChart3,
  Brain,
  Lightbulb,
  BotMessageSquare,
} from "lucide-react";
import imgHeroImage from "@/assets/imgHero.png";
import imgWhatIsGLBoard from "@/assets/whatIsGLBoard.png";
import imgWhyUsingGLBoard from "@/assets/whyUsingGLBoard.svg";
import Frame52748, {
  Frame22,
  Frame23,
  Frame24,
  Frame25,
  Frame26,
  CloudBackground,
} from "@/imports/Frame52748";
import { PersonasSection } from "@/components/PersonasSection";
import { ModulesSection } from "@/components/ModulesSection";
import { useEffect } from "react";
import Image from "next/image";

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
  onNavigate?: (page: string) => void;
  scrollToSection?: string | null;
  onScrollComplete?: () => void;
}

export function LandingPage({
  onLogin,
  onSignup,
  onNavigate,
  scrollToSection: scrollToSectionProp,
  onScrollComplete,
}: LandingPageProps) {
  useEffect(() => {
    if (scrollToSectionProp) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.getElementById(
          scrollToSectionProp,
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          onScrollComplete?.();
        }
      }, 100);
    }
  }, [scrollToSectionProp, onScrollComplete]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#8B1E1E] focus:text-white focus:rounded"
      >
        Pular para o conteúdo principal
      </a>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-[#FDF2F2] overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div
          className="relative max-w-300 mx-auto px-6 py-24 md:py-32"
          id="main-content"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h1
                  id="hero-title"
                  style={{
                    fontFamily:
                      "Arial Rounded MT Bold, sans-serif",
                    fontSize: "48px",
                    lineHeight: "normal",
                  }}
                >
                  <span className="text-[#2B2F3D]">
                    Bem-vindo(a) ao
                  </span>
                  <br />
                  <span className="text-[#781D1C]">
                    GLBoard
                  </span>
                </h1>
                <p
                  className="text-base text-[#2B2F3D] leading-normal"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Transforme dados do seu jogo educacional em
                  <span className="font-semibold text-[#AE1B19]">
                    {" "}
                    insights poderosos
                  </span>{" "}
                  sobre a aprendizagem dos seus alunos
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onSignup}
                  className="bg-[#901A19] text-white px-8 py-2.5 rounded-[30px] font-semibold text-sm hover:bg-[#7F1010] transition-all"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Inicie sua jornada aqui
                </button>
                <button
                  onClick={() =>
                    scrollToSection("como-funciona")
                  }
                  className="bg-[#FDFDFD] text-[#706F6F] px-8 py-2.5 rounded-[30px] border border-[#706F6F] font-semibold text-sm hover:border-[#8B1E1E] hover:text-[#8B1E1E] transition-all"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Ver como funciona
                </button>
              </div>
            </div>

            {/* Right Visual - Hero Image */}
            <div
              className="relative flex items-center justify-center"
              aria-hidden="true"
            >
              <Image
                src={imgHeroImage}
                alt="Ilustração de personagens interagindo com gráficos educacionais"
                className="w-full h-auto max-w-208.25 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is GLBoard Section */}
      <section id="o-que-e" className="bg-white py-24">
        <div className="max-w-300 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Visual - Game Image */}
            <div
              aria-hidden="true"
              className="flex items-center justify-center"
            >
              <Image
                src={imgWhatIsGLBoard}
                alt="Ilustração de um personagem de jogo interagindo com código JSON"
                className="w-full h-auto max-w-139.5 object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h2
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                  fontSize: "30px",
                  lineHeight: "normal",
                }}
              >
                <span className="text-[#2B2F3D]">
                  O que é o{" "}
                </span>
                <span className="text-[#901A19]">GLBoard</span>
                <span className="text-[#2B2F3D]">?</span>
              </h2>
              <p
                className="text-base text-[#2B2F3D] leading-normal"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Uma plataforma de Game Learning Analytics que
                permite modelar quais dados coletar, capturar
                logs durante o jogo e analisar o aprendizado por
                meio de dashboards e gráficos interativos. Com
                um agente conversacional baseado em IA, você
                recebe orientação em cada etapa do processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="como-funciona"
        className="relative bg-white overflow-hidden py-24"
      >
        {/* Cloud Background - Fixed to be full width and lower */}
        <div className="absolute bottom-[-1%] lg:bottom-[-1%] left-0 w-full h-150 z-0 pointer-events-none">
          <CloudBackground className="w-full h-full object-cover text-[#F3F4F6]" />
        </div>

        {/* Mobile/Tablet View (Vertical Stack) */}
        <div className="lg:hidden relative z-10 flex flex-col items-center gap-16 px-4">
          <div className="text-center mb-8 space-y-4">
            <h2
              style={{
                fontFamily: "Arial Rounded MT Bold, sans-serif",
                fontSize: "30px",
                lineHeight: "normal",
              }}
              className="text-[#2B2F3D]"
            >
              Como funciona o GLBoard
            </h2>
            <p
              className="text-base text-[#364153]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sua jornada de Game Learning Analytics começa
              aqui!
            </p>
          </div>

          {/* Container dos passos */}
          <div className="scale-[0.8] sm:scale-100 flex flex-col gap-4 items-center relative w-full max-w-md py-4">
            {/* SVG "DE LADO" (Vertical):
                - Recriei a onda do desktop (Sine Wave) mas descendo verticalmente.
                - Usei a cor cinza (#d1d5db) para bater com o seu print do desktop.
                - strokeDasharray="0 20" + strokeWidth="10" cria as "bolinhas" grandes iguais ao desktop.
             */}
            <svg
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
              viewBox="0 0 400 1300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Caminho da cobra (S-Curve) descendo */}
              <path
                d="M 200 0 
                     Q 300 125 200 250 
                     T 200 500 
                     T 200 750 
                     T 200 1000 
                     T 200 1250"
                stroke="#d1d5db"
                strokeWidth="10"
                strokeDasharray="0 20"
                strokeLinecap="round"
              />
            </svg>

            {/* Cards - Adicionei bg-white e uma margem leve para a linha passar por trás e entre eles */}
            <div className="relative z-10 bg-white p-2 rounded-2xl">
              <Frame22 />
            </div>

            <div className="relative z-10 bg-white p-2 rounded-2xl">
              <Frame23 />
            </div>

            <div className="relative z-10 bg-white p-2 rounded-2xl">
              <Frame24 />
            </div>

            <div className="relative z-10 bg-white p-2 rounded-2xl">
              <Frame25 />
            </div>

            <div className="relative z-10 bg-white p-2 rounded-2xl">
              <Frame26 />
            </div>
          </div>
        </div>

        {/* Desktop View (Wave) - Mantido intocado */}
        <div className="hidden lg:block relative z-10 w-full overflow-hidden h-125 xl:h-162.5 2xl:h-200">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-497.5 h-237.5 origin-top scale-[0.5] xl:scale-[0.65] 2xl:scale-[0.8]">
            <Frame52748 />
          </div>
        </div>
      </section>

      {/* Why Use GLBoard Section */}
      <section id="por-que-usar" className="bg-white py-24">
        <div className="max-w-300 mx-auto px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content - Benefits List */}
            <div className="space-y-8 lg:space-y-12">
              {/* Title */}
              <div className="space-y-2">
                <h2
                  style={{
                    fontFamily:
                      "Arial Rounded MT Bold, sans-serif",
                    fontSize: "30px",
                    lineHeight: "normal",
                  }}
                  className="text-[#2B2F3D]"
                >
                  Por que usar o GLBoard?
                </h2>
                <p
                  className="text-base text-[#364153]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Democratizando o acesso ao Game Learning
                  Analytics
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="space-y-8">
                {/* Benefit 1 - Acessível */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-[20px] bg-[#69CC00] flex items-center justify-center">
                    <Brain
                      className="w-16 h-16 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "20px",
                      }}
                      className="text-[#2B2F3D]"
                    >
                      Acessível
                    </h3>
                    <p
                      className="text-base text-[#2B2F3D] leading-normal"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Criado para professores e iniciantes
                      <br />
                      em Game Learning Analytics
                    </p>
                  </div>
                </div>

                {/* Benefit 2 - Agente Inteligente */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-[20px] bg-[#51B1F8] flex items-center justify-center">
                    <BotMessageSquare
                      className="w-16 h-16 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "20px",
                      }}
                      className="text-[#2B2F3D]"
                    >
                      Agente Inteligente
                    </h3>
                    <p
                      className="text-base text-[#2B2F3D] leading-normal"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Responde e explica conceitos
                      <br />
                      em tempo real
                    </p>
                  </div>
                </div>

                {/* Benefit 3 - Suporte Especializado */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-[20px] bg-[#CA83FF] flex items-center justify-center">
                    <Settings
                      className="w-16 h-16 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "20px",
                      }}
                      className="text-[#2B2F3D]"
                    >
                      Suporte Especializado
                    </h3>
                    <p
                      className="text-base text-[#2B2F3D] leading-normal"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Oferece orientação adaptada ao seu jogo
                      <br />
                      sem exigir o uso de LLMs com
                      <br />
                      prompts complexos
                    </p>
                  </div>
                </div>

                {/* Benefit 4 - Análise Completa */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-[20px] bg-[#F49500] flex items-center justify-center">
                    <BarChart3
                      className="w-16 h-16 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "20px",
                      }}
                      className="text-[#2B2F3D]"
                    >
                      Análise Completa
                    </h3>
                    <p
                      className="text-base text-[#2B2F3D] leading-normal"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Do planejamento à visualização:
                      <br />
                      fluxo completo de GLA em uma
                      <br />
                      única plataforma
                    </p>
                  </div>
                </div>

                {/* Benefit 5 - Orientado à Aprendizagem */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-[20px] bg-[#F7C700] flex items-center justify-center">
                    <Lightbulb
                      className="w-16 h-16 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "20px",
                      }}
                      className="text-[#2B2F3D]"
                    >
                      Orientado à Aprendizagem
                    </h3>
                    <p
                      className="text-base text-[#2B2F3D] leading-normal"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Cada decisão é explicada
                      <br />
                      pedagogicamente, promovendo
                      <br />
                      compreensão profunda
                    </p>
                  </div>
                </div>

                {/* Benefit 6 - Modelagem Guiada */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-[20px] bg-[#F14A49] flex items-center justify-center">
                    <Database
                      className="w-16 h-16 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3
                      style={{
                        fontFamily:
                          "Arial Rounded MT Bold, sans-serif",
                        fontSize: "20px",
                      }}
                      className="text-[#2B2F3D]"
                    >
                      Modelagem Guiada
                    </h3>
                    <p
                      className="text-base text-[#2B2F3D] leading-normal"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      O agente conduz você passo a passo
                      <br />
                      na criação de estruturas de dados
                      <br />
                      eficazes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual - Characters Image */}
            <div className="flex items-center justify-center lg:justify-end pr-8">
              <Image
                src={imgWhyUsingGLBoard}
                alt="Ilustração de personagens educacionais coloridos"
                className="w-full h-auto max-w-139.5 object-contain"
              /> 
            </div>
          </div>
        </div>
      </section>

      {/* 3 Visions Section */}
      <PersonasSection />

      {/* Modules Section */}
      <ModulesSection />

      {/* Final CTA Section */}
      <section className="relative bg-white py-32 overflow-hidden">
        {/* Wave Bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2"
          aria-hidden="true"
        >
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 200 Q300 100 600 200 T1200 200 L1200 400 L0 400 Z"
              fill="#FCE8E8"
            />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h2 className="text-[#8B1E1E] mb-6">Comece agora!</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Pronto para transformar seu jogo em uma experiência
            de aprendizagem baseada em dados?
          </p>
          <button
            onClick={onSignup}
            className="rounded-full px-10 h-12 bg-white border-2 border-[#706F6F] text-[#706F6F] hover:border-[#8B1E1E] hover:text-[#8B1E1E] hover:bg-[#FDF2F2] transition-all font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Cadastre-se gratuitamente
          </button>
        </div>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <LandingPage
      onLogin={() => {}}
      onSignup={() => {}}
    />
  );
}