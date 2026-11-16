import { useState, useEffect, useRef } from "react";
import {
  User,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  Home,
  Info,
  BookOpen,
  Layers,
  Monitor,
  Layout,
  Gamepad2,
  Eye,
  MousePointerClick,
  Book,
  LogOut,
  UserCircle,
  FolderOpen,
} from "lucide-react";
import DropdownUsuarioPrincipal from "../imports/DropdownUsuarioPrincipal";
import Frame4635 from "./Perfil/Frame4635.png";
import Frame5114 from "./Perfil/Frame5114.png";
import Group4629 from "./Perfil/Group4629.png";
import Group4631 from "./Perfil/Group4631.png";
import Group4632 from "./Perfil/Group4632.png";
import Group4633 from "./Perfil/Group4633.png";
import Group4636 from "./Perfil/Group4636.png";
import Group4639 from "./Perfil/Group4639.png";
import Group4640 from "./Perfil/Group4640.png";
import Group4641 from "./Perfil/Group4641.png";
import Group4642 from "./Perfil/Group4642.png";
import Group5169 from "./Perfil/Group5169.png";

interface SharedHeaderProps {
  onLogin: () => void;
  onRegister?: () => void;
  onNavigate?: (page: string, section?: string) => void;
  isLoggedIn?: boolean;
  userName?: string;
  currentPage?: string;
  onLogout?: () => void;
  onOpenA11y?: () => void;
  userAvatar?: string;
  userProfileType?: string;
}

export function SharedHeader({
  onLogin,
  onRegister,
  onNavigate,
  isLoggedIn = false,
  userName,
  currentPage,
  onLogout,
  onOpenA11y,
  userAvatar,
  userProfileType,
}: SharedHeaderProps) {
  const displayRole =
    userProfileType === "student"
      ? "Estudante"
      : userProfileType === "teacher"
        ? "Professor"
        : userProfileType === "developer"
          ? "Desenvolvedor"
          : "Usuário";

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(
    null,
  );
  const [isUserDropdownOpen, setIsUserDropdownOpen] =
    useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const avatarImages: { [key: number]: string } = {
  1: Group5169.src,
  2: Group4629.src,
  3: Group4631.src,
  4: Group4639.src,
  5: Group4636.src,
  6: Frame5114.src,
  7: Group4642.src,
  8: Group4633.src,
  9: Frame4635.src,
  10: Group4640.src,
  11: Group4632.src,
  12: Group4641.src,
};

  const [selectedAvatarImage, setSelectedAvatarImage] = useState<string | null>(null);

  // Buscar avatar selecionado do localStorage
  useEffect(() => {
    if (isLoggedIn && userName) {
      const usersData = localStorage.getItem("glboard_users");
      if (usersData) {
        const users = JSON.parse(usersData);
        const currentUser = users.find((u: any) => u.name === userName);
        if (currentUser?.selectedAvatar && avatarImages[currentUser.selectedAvatar]) {
          setSelectedAvatarImage(avatarImages[currentUser.selectedAvatar]);
        }
      }
    }
  }, [isLoggedIn, userName, userAvatar]);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    };

    if (isUserDropdownOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [isUserDropdownOpen]);

  const handleUserButtonClick = () => {
    if (isLoggedIn) {
      setIsUserDropdownOpen(!isUserDropdownOpen);
    } else {
      onLogin();
    }
  };

  const handleLogout = () => {
    setIsUserDropdownOpen(false);
    if (onLogout) {
      onLogout();
    } else {
      onNavigate?.("landing");
    }
  };

  const handleProfileClick = () => {
    setIsUserDropdownOpen(false);
    // Navegar para perfil
    onNavigate?.("user-profile");
  };

  const handleProjectsClick = () => {
    setIsUserDropdownOpen(false);
    onNavigate?.("dashboard");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Função auxiliar para rolar suavemente para âncoras e fechar o menu
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm font-sans">
      {/* ==================================================================
          HEADER MOBILE (Barra Vermelha Fixa)
          ================================================================== */}
      <div className="md:hidden bg-[#781D1C] border-b border-[#631515] relative z-50 min-h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <div
          className="text-2xl text-white cursor-pointer select-none"
          style={{
            fontFamily: "Arial Rounded MT Bold, sans-serif",
          }}
          onClick={() => onNavigate?.("landing")}
        >
          GLBoard
        </div>

        {/* Ações (User + Acessibilidade + Menu) */}
        <div className="flex items-center gap-1">
          {/* Ícone de Usuário */}
          <button
            onClick={handleUserButtonClick}
            className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label={
              isLoggedIn ? "Meu Perfil" : "Entrar na conta"
            }
          >
            <User className="w-6 h-6" />
          </button>

          {/* Botão de Acessibilidade — visível direto na barra */}
          <button
            onClick={() => onOpenA11y?.()}
            className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Abrir opções de acessibilidade"
          >
            {/* Ícone de olho com raios — representa acessibilidade visual */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>

          {/* Botão Menu hamburguer */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Abrir Menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* ==================================================================
          OVERLAY (Fundo Escuro)
          ================================================================== */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ==================================================================
          DRAWER (MENU LATERAL)
          ================================================================== */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-full max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* 1. Cabeçalho do Drawer */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white shrink-0">
          <span
            className="text-xl text-[#781D1C]"
            style={{
              fontFamily: "Arial Rounded MT Bold, sans-serif",
            }}
          >
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-[#781D1C] hover:bg-red-50 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 2. Conteúdo Principal (Scrollável) */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          {/* Barra de Busca */}
          <div className="px-5 pt-5 pb-2">
            <div className="relative group">
              <input
                type="text"
                placeholder="Buscar no GLBoard..."
                className="w-full min-h-11 pl-10 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#781D1C]/20 focus:border-[#781D1C] text-sm transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-[#781D1C]" />
            </div>
          </div>

          {/* Links de Navegação */}
          <nav className="px-4 py-4 space-y-6">
            {/* Seção Explorar */}
            <div>
              <p
                className="text-sm font-semibold text-[#166095] mb-2 px-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Explorar
              </p>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    onNavigate?.("landing");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
                >
                  <Home className="w-5 h-5 text-gray-400 group-hover:text-[#781D1C]" />
                  <span className="font-medium text-sm">
                    Página Inicial
                  </span>
                </button>

                <button
                  onClick={() => {
                    onNavigate?.("manual");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
                >
                  <Book className="w-5 h-5 text-gray-400 group-hover:text-[#781D1C]" />
                  <span className="font-medium text-sm">
                    Manual de Uso
                  </span>
                </button>

                <button
                  onClick={() => {
                    onNavigate?.("about");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
                >
                  <Info className="w-5 h-5 text-gray-400 group-hover:text-[#781D1C]" />
                  <span className="font-medium text-sm">
                    Sobre Nós
                  </span>
                </button>

                {isLoggedIn && (
                  <button
                    onClick={() => {
                      onNavigate?.("dashboard");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-3 text-[#166095] bg-[#F5F9FF] border border-[#E3F2FD] rounded-lg transition-colors mt-2"
                  >
                    <Layout className="w-5 h-5" />
                    <span className="font-bold text-sm">
                      Meus Jogos
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Seção Plataformas */}
            <div>
              <p
                className="text-sm font-semibold text-[#166095] mb-2 px-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Plataformas
              </p>
              <div className="space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
                >
                  <Layers className="w-5 h-5 text-gray-400 group-hover:text-[#781D1C]" />
                  <span className="font-medium text-sm">
                    ThinkLib
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
                >
                  <Monitor className="w-5 h-5 text-gray-400 group-hover:text-[#781D1C]" />
                  <span className="font-medium text-sm">
                    ThinkTest
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
                >
                  <div className="w-5 h-5 flex items-center justify-center font-bold text-[10px] border border-gray-400 rounded text-gray-400 group-hover:border-[#781D1C] group-hover:text-[#781D1C]">
                    GL
                  </div>
                  <span className="font-medium text-sm">
                    GLBoard
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
                >
                  <Gamepad2 className="w-5 h-5 text-gray-400 group-hover:text-[#781D1C]" />
                  <span className="font-medium text-sm">
                    GameTEd
                  </span>
                </a>
              </div>
            </div>

            {/* Documentação */}
            <div>
              <button
                onClick={() => toggleSubmenu("docs")}
                className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#781D1C] rounded-lg transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-[#781D1C]" />
                  <span className="font-medium text-sm">
                    Documentação
                  </span>
                </div>
                {openSubmenu === "docs" ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === "docs" ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="ml-5 flex flex-col border-l border-gray-200 pl-4 gap-2 my-2">
                  <button
                    onClick={() => {
                      onNavigate?.("documentations");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-sm text-gray-500 hover:text-[#781D1C]"
                  >
                    Visão Geral
                  </button>
                  <button
                    onClick={() => {
                      onNavigate?.("documentation-library");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-sm text-gray-500 hover:text-[#781D1C]"
                  >
                    Técnica
                  </button>
                  <button
                    onClick={() => {
                      onNavigate?.("videos");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-sm text-gray-500 hover:text-[#781D1C]"
                  >
                    Vídeos
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Espaçador Flexível */}
          <div className="flex-1 min-h-[20px]"></div>

          {/* 3. Rodapé do Menu (Acessibilidade + Perfil Logado) */}
          <div className="px-5 py-6 bg-gray-50 border-t border-gray-100 mt-auto">
            {/* Se Logado: Mostra info básica (opcional, mas bom UX) */}
            {isLoggedIn && (
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#781D1C] rounded-full flex items-center justify-center overflow-hidden">
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt="Avatar do usuário"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {userName ? (
                        userName.charAt(0).toUpperCase()
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 line-clamp-1">
                    {userName || "Usuário"}
                  </span>
                  <button
                    onClick={() => {
                      onNavigate?.("dashboard");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xs text-[#781D1C] font-semibold hover:underline text-left"
                  >
                    Acessar Painel
                  </button>
                </div>
              </div>
            )}
            {/* Se não logado: Botões removidos conforme solicitado */}

            {/* Acessibilidade */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Acessibilidade
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#main-content"
                  onClick={(e) =>
                    handleAnchorClick(e, "#main-content")
                  }
                  className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#781D1C] py-2 px-1 rounded hover:bg-gray-100 transition-colors"
                >
                  <MousePointerClick className="w-3 h-3" />
                  Ir para conteúdo
                </a>
                <button
                  onClick={() => onOpenA11y?.()}
                  className="hover:text-[#781D1C] transition-colors bg-transparent border-none cursor-pointer"
                  style={{
                    fontFamily:
                      "Arial Rounded MT Bold, sans-serif",
                  }}
                >
                  Acessibilidade
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 text-[10px] text-gray-400 flex justify-between">
                <span>© 2024 GLBoard</span>
                <span>v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================
          VERSÃO DESKTOP (Inalterada)
          ================================================================== */}
      <div className="hidden md:block bg-white">
        <div className="bg-[#F5F9FF] border-b border-gray-200">
          <div className="mx-auto px-6 py-2 flex items-center justify-between">
            <div
              className="flex items-center gap-12 text-xs text-[#2B2F3D]"
              style={{
                fontFamily: "Arial Rounded MT Bold, sans-serif",
              }}
            >
              <a
                href="#main-content"
                className="hover:text-[#781D1C] transition-colors"
              >
                Ir para conteúdo
              </a>
              <a
                href="#search"
                className="hover:text-[#781D1C] transition-colors"
              >
                Ir para busca
              </a>
              <button
                onClick={() => onOpenA11y?.()}
                className="hover:text-[#781D1C] transition-colors bg-transparent border-none cursor-pointer"
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                }}
              >
                Acessibilidade
              </button>
            </div>
            <div className="flex items-center gap-[10px]">
              <button
                className="text-[#166095] hover:text-[#781D1C] transition-colors p-[7px]"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleUserButtonClick}
                  className="flex items-center gap-2 px-2.5 py-0 min-h-8 border-[#166095] border-[1.2px] border-solid rounded-full hover:bg-[#E3F2FD] transition-colors cursor-pointer"
                >
                  <User className="w-3 h-3.5 text-[#166095]" />
                  <span
                    className="text-xs text-[#166095]"
                    style={{
                      fontFamily:
                        "Arial Rounded MT Bold, sans-serif",
                      letterSpacing: "0.42px",
                    }}
                  >
                    {isLoggedIn && userName
                      ? userName
                      : "Entrar"}
                  </span>
                </button>

                {/* Dropdown de Usuário */}
                {isLoggedIn && isUserDropdownOpen && (
                  <div className="absolute top-[calc(100%+12px)] right-0 min-w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                      {/* Cabeçalho com Avatar e Nome */}
                      <div className="bg-white px-6 py-5 border-b border-gray-100">
                        <div className="flex items-center gap-4">
                          {/* Avatar azul com inicial */}
                          <div className="w-14 h-14 bg-[#0082B9] rounded-full flex items-center justify-center overflow-hidden">
                            {selectedAvatarImage ? (
                              <img
                                src={selectedAvatarImage}
                                alt="Avatar do usuário"
                                className="w-full h-full object-cover"
                              />
                            ) : userAvatar ? (
                              <img
                                src={userAvatar}
                                alt="Avatar do usuário"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-white text-2xl font-bold font-['Poppins']">
                                {userName
                                  ? userName
                                      .charAt(0)
                                      .toUpperCase()
                                  : "U"}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 font-semibold text-base leading-tight truncate font-['Poppins']">
                              {userName || "Usuário"}
                            </p>
                            <p className="text-gray-500 text-sm mt-1 font-['Poppins']">
                              {displayRole}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu de opções */}
                      <div className="py-2">
                        {/* Opção: Jogos */}
                        <button
                          onClick={handleProjectsClick}
                          className="w-full px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M8 6H21"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              d="M8 12H21"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              d="M8 18H21"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              d="M3 6H3.01"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              d="M3 12H3.01"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              d="M3 18H3.01"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 font-['Poppins']">
                            Jogos
                          </span>
                        </button>

                        {/* Opção: Perfil */}
                        <button
                          onClick={handleProfileClick}
                          className="w-full px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 20 24"
                          >
                            <path
                              d="M15 8C15 10.2091 13.2091 12 11 12C8.79086 12 7 10.2091 7 8C7 5.79086 8.79086 4 11 4C13.2091 4 15 5.79086 15 8Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              d="M4 19V20C4 21.6569 5.34315 23 7 23H15C16.6569 23 18 21.6569 18 20V19C18 17.3431 16.6569 16 15 16H7C5.34315 16 4 17.3431 4 19Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 font-['Poppins']">
                            Perfil
                          </span>
                        </button>

                        {/* Opção: Sair */}
                        <button
                          onClick={handleLogout}
                          className="w-full px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M9 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              d="M16 17L21 12M21 12L16 7M21 12H9"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 font-['Poppins']">
                            Sair
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FDFDFD] border-b border-gray-200">
          <div className="mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-[61px]">
              <div
                className="text-5xl text-[#781D1C] cursor-pointer"
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                }}
                onClick={() => onNavigate?.("landing")}
              >
                GLBoard
              </div>
              <nav
                className="flex items-center gap-[61px] text-sm text-[#2B2F3D] tracking-[3.5px]"
                aria-label="Navegação principal"
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                }}
              >
                <a
                  href="#"
                  className="hover:text-[#781D1C] transition-colors uppercase"
                >
                  GLBOARD
                </a>
                <a
                  href="#"
                  className="hover:text-[#781D1C] transition-colors uppercase"
                >
                  THINKTEST
                </a>
                <a
                  href="#"
                  className="hover:text-[#781D1C] transition-colors uppercase"
                >
                  THINKLIB
                </a>
                <a
                  href="#"
                  className="hover:text-[#781D1C] transition-colors uppercase"
                >
                  THINKCLASS
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-[#8B1E1E]">
          <div
            className={`mx-auto px-6 py-3 flex items-center gap-6 text-sm text-white ${isLoggedIn ? "justify-between" : ""}`}
            role="navigation"
            aria-label="Navegação secundária"
          >
            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  onClick={() => onNavigate?.("dashboard")}
                  className={`whitespace-nowrap cursor-pointer py-2 relative hover:opacity-80 font-semibold text-sm tracking-wide min-h-11 ${currentPage === "dashboard" ? "pb-3" : ""}`}
                  aria-current={
                    currentPage === "dashboard"
                      ? "page"
                      : undefined
                  }
                >
                  Meus Jogos
                  {currentPage === "dashboard" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full" />
                  )}
                </button>
                <div className="max-w-md w-96">
                  <div className="relative"></div>
                </div>
              </>
            ) : (
              <div className="flex gap-6">
                <button
                  onClick={() => onNavigate?.("landing")}
                  className="whitespace-nowrap py-2 hover:opacity-80 font-semibold text-sm tracking-wide min-h-11"
                  aria-current={
                    currentPage === "landing"
                      ? "page"
                      : undefined
                  }
                >
                  Tela inicial
                </button>
                <button
                  onClick={() => onNavigate?.("manual")}
                  className="whitespace-nowrap py-2 hover:opacity-80 font-semibold text-sm tracking-wide min-h-11"
                  aria-current={
                    currentPage === "manual"
                      ? "page"
                      : undefined
                  }
                >
                  Manual de Uso
                </button>
                <button
                  onClick={() => onNavigate?.("documentations")}
                  className="whitespace-nowrap py-2 hover:opacity-80 font-semibold text-sm tracking-wide min-h-11"
                  aria-current={
                    currentPage === "documentations"
                      ? "page"
                      : undefined
                  }
                >
                  Documentação
                </button>
                <button
                  onClick={() => onNavigate?.("about")}
                  className="whitespace-nowrap py-2 hover:opacity-80 font-semibold text-sm tracking-wide min-h-11"
                  aria-current={
                    currentPage === "about" ? "page" : undefined
                  }
                >
                  Sobre Nós
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}