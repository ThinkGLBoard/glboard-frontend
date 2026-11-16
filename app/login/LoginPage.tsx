import { useState } from "react";
import {
  ArrowLeft,
  User,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import imgLateral from "../../components/Perfil/imglateral.png";
import { loginUser } from "@/services/authApi";

interface LoginPageProps {
  onLogin: () => void;
  onNavigate: (page: string) => void;
}

export function LoginPage({
  onLogin,
  onNavigate,
}: LoginPageProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmail(formData.email)) {
      setEmailError("Por favor, insira um e-mail válido");
      return;
    }

    if (!formData.password) {
      setEmailError("Senha é obrigatória");
      return;
    }

    setIsLoading(true);
    try {
      const auth = await loginUser({
        email: formData.email.trim(),
        password: formData.password,
      });
      sessionStorage.setItem("glboard_auth_token", auth.token);
      if (auth.name) {
        sessionStorage.setItem("glboard_auth_user_name", auth.name);
      } else {
        sessionStorage.removeItem("glboard_auth_user_name");
      }
      window.dispatchEvent(new Event("glboard-auth-changed"));
      toast.success("Login realizado com sucesso!");
      onLogin();
    } catch (error) {
      setEmailError(
        error instanceof Error
          ? error.message
          : "Não foi possível entrar. Tente novamente.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white flex">
      {/* ── Lado esquerdo — formulário ── */}
      {/*  AQUI FOI A MUDANÇA: trocamos items-start por items-center */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-y-auto h-screen custom-scroll">
        <div className="w-full max-w-[500px] py-10">
          {/* Botão Voltar */}
          <button
            onClick={() => onNavigate("landing")}
            className="flex items-center gap-2 text-[#166095] mb-8 hover:text-[#0f4a71] transition-colors font-semibold text-sm min-h-[44px]"
            style={{
              fontFamily: "Arial Rounded MT Bold, sans-serif",
            }}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar
          </button>

          {/* Título e Subtítulo */}
          <div className="mb-10 mt-4">
            <h1
              className="text-[#2B2F3D] text-center mb-2"
              style={{
                fontFamily: "Arial Rounded MT Bold, sans-serif",
                fontSize: "32px",
                lineHeight: "1.2",
              }}
            >
              Bem-vindo de volta!
            </h1>
            <p
              className="text-[#4A4A4A] text-center text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Entre para continuar sua jornada com GLBoard
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Campo Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                E-mail *
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                    setEmailError("");
                  }}
                  className={`w-full pl-10 pr-4 py-3 min-h-[44px] border-2 rounded-lg text-sm focus:outline-none transition-colors ${
                    emailError
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#166095]"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-xs mt-1 font-['Poppins']">
                  {emailError}
                </p>
              )}
            </div>

            {/* Campo Senha */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Senha *
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="w-full pl-10 pr-12 py-3 min-h-[44px] border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#166095] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Ocultar senha"
                      : "Mostrar senha"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  {showPassword ? (
                    <EyeOff
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                  ) : (
                    <Eye
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={() => onNavigate("forgot-password")}
                  className="text-xs text-[#166095] hover:underline font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Esqueceu sua senha?
                </button>
              </div>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#166095] text-white py-3 min-h-[44px] rounded-lg font-semibold text-base hover:bg-[#0f4a71] transition-colors mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                fontFamily: "Arial Rounded MT Bold, sans-serif",
              }}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          {/* Divisor */}
         
          {/* Link para Cadastro */}
          <p
            className="text-center text-sm text-[#4A4A4A] mt-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Não tem uma conta?{" "}
            <button
              onClick={() => onNavigate("signup")}
              className="text-[#166095] hover:underline font-semibold"
            >
              Cadastre-se aqui
            </button>
          </p>
        </div>
      </div>

      {/* ── Lado direito — imagem fixa ── */}
      <div className="hidden lg:block relative w-[636px] flex-shrink-0 h-screen">
        <Image
          src={imgLateral}
          alt="Interface do sistema"
          aria-hidden="true"
          className="w-full h-full object-cover"
          fill
          sizes="636px"
        />
      </div>
    </div>
  );
}