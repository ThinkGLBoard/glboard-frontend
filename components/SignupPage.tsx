import { useState } from "react";
import {
  ArrowLeft,
  Lock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  Calendar,
  Building,
  User,
} from "lucide-react";
import avatar1 from "./Perfil/Frame4635.png";
import avatar2 from "./Perfil/Frame5114.png";
import avatar3 from "./Perfil/Group4629.png";
import avatar4 from "./Perfil/Group4631.png";
import avatar5 from "./Perfil/Group4632.png";
import avatar6 from "./Perfil/Group4633.png";
import avatar7 from "./Perfil/Group4636.png";
import avatar8 from "./Perfil/Group4639.png";
import avatar9 from "./Perfil/Group4640.png";
import avatar10 from "./Perfil/Group4641.png";
import avatar11 from "./Perfil/Group4642.png";
import avatar12 from "./Perfil/Group5169.png";
import imgLateral from "./Perfil/imglateral.png";

const AVATARS = [
  { id: "a1", src: avatar1, label: "Avatar 1" },
  { id: "a2", src: avatar2, label: "Avatar 2" },
  { id: "a3", src: avatar3, label: "Avatar 3" },
  { id: "a4", src: avatar4, label: "Avatar 4" },
  { id: "a5", src: avatar5, label: "Avatar 5" },
  { id: "a6", src: avatar6, label: "Avatar 6" },
  { id: "a7", src: avatar7, label: "Avatar 7" },
  { id: "a8", src: avatar8, label: "Avatar 8" },
  { id: "a9", src: avatar9, label: "Avatar 9" },
  { id: "a10", src: avatar10, label: "Avatar 10" },
  { id: "a11", src: avatar11, label: "Avatar 11" },
  { id: "a12", src: avatar12, label: "Avatar 12" },
];

interface SignupPageProps {
  onSignup: (userData: any) => void;
  onNavigate: (page: string) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  phone: string;
  password: string;
  confirmPassword: string;
  profileType: "student" | "teacher" | "developer" | "";
  institution: string;
  goal: "play" | "submit" | "";
  termsAccepted: boolean;
  avatar: string;
}

export function SignupPage({
  onSignup,
  onNavigate,
}: SignupPageProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profileType: "",
    institution: "",
    goal: "",
    termsAccepted: false,
    avatar: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const updateField = (
    field: keyof FormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field])
      setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.firstName.trim())
      e.firstName = "Nome é obrigatório";
    if (!formData.lastName.trim())
      e.lastName = "Sobrenome é obrigatório";
    if (!formData.email.trim()) {
      e.email = "Email é obrigatório";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      e.email = "Email inválido";
    } else {
      // Verificar se o email já está cadastrado
      const usersData = localStorage.getItem("glboard_users");
      const users = usersData ? JSON.parse(usersData) : [];
      const emailExists = users.some((u: any) => u.email === formData.email);

      if (emailExists) {
        e.email = "Este e-mail já está cadastrado";
      }
    }
    if (!formData.birthDate)
      e.birthDate = "Data de nascimento é obrigatória";
    if (!formData.phone.trim())
      e.phone = "Telefone é obrigatório";
    if (!formData.password) {
      e.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      e.password = "Senha deve ter pelo menos 6 caracteres";
    }
    if (formData.password !== formData.confirmPassword)
      e.confirmPassword = "As senhas não coincidem";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.profileType)
      e.profileType = "Selecione como você se identifica";
    if (!formData.institution.trim())
      e.institution = "Instituição é obrigatória";
    if (!formData.goal) e.goal = "Selecione seu objetivo";
    if (!formData.termsAccepted)
      e.termsAccepted =
        "Você deve aceitar os Termos de Serviço";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.avatar) e.avatar = "Selecione um avatar";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFinalize = async () => {
    if (!validateStep3()) return;
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 300));
      const avatarSrc =
        AVATARS.find((a) => a.id === formData.avatar)?.src ||
        "";
      onSignup({ ...formData, avatarSrc });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as 1 | 2 | 3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onNavigate("landing");
    }
  };

  return (
    <div className="h-screen bg-white flex">
      {/* ── Lado esquerdo — formulário ── */}
      <div className="flex-1 flex items-start justify-center p-6 py-10 overflow-y-auto h-screen custom-scroll">
        <div className="w-full max-w-[500px]">
          {/* Botão Voltar */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#166095] mb-8 hover:text-[#0f4a71] transition-colors font-semibold text-sm min-h-[44px]"
            style={{
              fontFamily: "Arial Rounded MT Bold, sans-serif",
            }}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar
          </button>

          {/* Título e progresso */}
          <div className="mb-8">
            <h1
              className="text-[#2B2F3D] text-center mb-2"
              style={{
                fontFamily: "Arial Rounded MT Bold, sans-serif",
                fontSize: "32px",
                lineHeight: "1.2",
              }}
            >
              Cadastro de Usuário
            </h1>
            <p
              className="text-[#4A4A4A] text-center text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Etapa {currentStep} de 3
            </p>
            <div
              className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={currentStep}
              aria-valuemin={1}
              aria-valuemax={3}
              aria-label={`Etapa ${currentStep} de 3`}
            >
              <div
                className="h-full bg-[#166095] transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* ── Etapa 1 ── */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <fieldset>
                <legend
                  className="text-base font-semibold text-[#2B2F3D] mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Dados pessoais
                </legend>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Nome *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Nome"
                        value={formData.firstName}
                        onChange={(e) =>
                          updateField(
                            "firstName",
                            e.target.value,
                          )
                        }
                        aria-invalid={!!errors.firstName}
                        aria-describedby={
                          errors.firstName
                            ? "err-firstName"
                            : undefined
                        }
                        className={`w-full pl-10 pr-4 py-3 min-h-[44px] border-2 ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      />
                    </div>
                    {errors.firstName && (
                      <p
                        id="err-firstName"
                        className="mt-1 text-red-600 text-xs"
                        role="alert"
                      >
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Sobrenome *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Sobrenome"
                      value={formData.lastName}
                      onChange={(e) =>
                        updateField("lastName", e.target.value)
                      }
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName
                          ? "err-lastName"
                          : undefined
                      }
                      className={`w-full px-4 py-3 min-h-[44px] border-2 ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    />
                    {errors.lastName && (
                      <p
                        id="err-lastName"
                        className="mt-1 text-red-600 text-xs"
                        role="alert"
                      >
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "err-email" : undefined
                      }
                      className={`w-full pl-10 pr-4 py-3 min-h-[44px] border-2 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    />
                  </div>
                  {errors.email && (
                    <p
                      id="err-email"
                      className="mt-1 text-red-600 text-xs"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="birthDate"
                      className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Data de nascimento *
                    </label>
                    <div className="relative">
                      <Calendar
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) =>
                          updateField(
                            "birthDate",
                            e.target.value,
                          )
                        }
                        aria-invalid={!!errors.birthDate}
                        aria-describedby={
                          errors.birthDate
                            ? "err-birthDate"
                            : undefined
                        }
                        className={`w-full pl-10 pr-4 py-3 min-h-[44px] border-2 ${errors.birthDate ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      />
                    </div>
                    {errors.birthDate && (
                      <p
                        id="err-birthDate"
                        className="mt-1 text-red-600 text-xs"
                        role="alert"
                      >
                        {errors.birthDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          updateField("phone", e.target.value)
                        }
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "err-phone" : undefined
                        }
                        className={`w-full pl-10 pr-4 py-3 min-h-[44px] border-2 ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      />
                    </div>
                    {errors.phone && (
                      <p
                        id="err-phone"
                        className="mt-1 text-red-600 text-xs"
                        role="alert"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
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
                      placeholder="Mínimo 6 caracteres"
                      value={formData.password}
                      onChange={(e) =>
                        updateField("password", e.target.value)
                      }
                      aria-invalid={!!errors.password}
                      aria-describedby={
                        errors.password
                          ? "err-password"
                          : "hint-password"
                      }
                      className={`w-full pl-10 pr-12 py-3 min-h-[44px] border-2 ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
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
                  <p
                    id="hint-password"
                    className="mt-1 text-xs text-gray-500"
                  >
                    Mínimo de 6 caracteres
                  </p>
                  {errors.password && (
                    <p
                      id="err-password"
                      className="mt-1 text-red-600 text-xs"
                      role="alert"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-1 text-sm font-semibold text-[#2B2F3D]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Confirmar senha *
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Repita a senha"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        updateField(
                          "confirmPassword",
                          e.target.value,
                        )
                      }
                      aria-invalid={!!errors.confirmPassword}
                      aria-describedby={
                        errors.confirmPassword
                          ? "err-confirmPassword"
                          : undefined
                      }
                      className={`w-full pl-10 pr-12 py-3 min-h-[44px] border-2 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword,
                        )
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Ocultar confirmação de senha"
                          : "Mostrar confirmação de senha"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      {showConfirmPassword ? (
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
                  {errors.confirmPassword && (
                    <p
                      id="err-confirmPassword"
                      className="mt-1 text-red-600 text-xs"
                      role="alert"
                    >
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </fieldset>

              <button
                onClick={handleNextStep}
                className="w-full bg-[#166095] text-white py-3 min-h-[44px] rounded-lg font-semibold text-base hover:bg-[#0f4a71] transition-colors mt-6"
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                }}
              >
                Prosseguir
              </button>

              <p
                className="text-center text-sm text-[#4A4A4A] mt-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Já tem uma conta?{" "}
                <button
                  onClick={() => onNavigate("login")}
                  className="text-[#166095] hover:underline font-semibold"
                >
                  Faça login aqui
                </button>
              </p>
            </div>
          )}

          {/* ── Etapa 2 ── */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <fieldset>
                <legend
                  className="block mb-3 text-sm font-semibold text-[#2B2F3D]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Me identifico como: *
                </legend>
                <div className="space-y-3">
                  {[
                    { value: "student", label: "Estudante" },
                    { value: "teacher", label: "Professor" },
                    {
                      value: "developer",
                      label: "Desenvolvedor",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 p-4 min-h-[44px] border-2 ${formData.profileType === option.value ? "border-[#166095] bg-blue-50" : "border-gray-300"} rounded-lg cursor-pointer hover:border-[#166095] transition-colors`}
                    >
                      <input
                        type="radio"
                        name="profileType"
                        value={option.value}
                        checked={
                          formData.profileType === option.value
                        }
                        onChange={(e) =>
                          updateField(
                            "profileType",
                            e.target.value,
                          )
                        }
                        className="w-5 h-5 text-[#166095]"
                      />
                      <span
                        className="text-sm text-[#2B2F3D]"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.profileType && (
                  <p
                    className="mt-2 text-red-600 text-xs"
                    role="alert"
                  >
                    {errors.profileType}
                  </p>
                )}
              </fieldset>

              <div>
                <label
                  htmlFor="institution"
                  className="block mb-2 text-sm font-semibold text-[#2B2F3D]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Qual instituição você participa? *
                </label>
                <div className="relative">
                  <Building
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="institution"
                    type="text"
                    placeholder="Nome da instituição"
                    value={formData.institution}
                    onChange={(e) =>
                      updateField("institution", e.target.value)
                    }
                    aria-invalid={!!errors.institution}
                    aria-describedby={
                      errors.institution
                        ? "err-institution"
                        : undefined
                    }
                    className={`w-full pl-10 pr-4 py-3 min-h-[44px] border-2 ${errors.institution ? "border-red-500" : "border-gray-300"} rounded-lg text-sm focus:outline-none focus:border-[#166095]`}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  />
                </div>
                {errors.institution && (
                  <p
                    id="err-institution"
                    className="mt-1 text-red-600 text-xs"
                    role="alert"
                  >
                    {errors.institution}
                  </p>
                )}
              </div>

              <fieldset>
                <legend
                  className="block mb-3 text-sm font-semibold text-[#2B2F3D]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  O que você procura na plataforma? *
                </legend>
                <div className="space-y-3">
                  {[
                    {
                      value: "play",
                      label:
                        "Quero apenas jogar e avaliar jogos educacionais disponíveis no site.",
                    },
                    {
                      value: "submit",
                      label:
                        "Desejo submeter jogos educacionais no intuito de avaliá-los e obter dados personalizados.",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-start gap-3 p-4 border-2 ${formData.goal === option.value ? "border-[#166095] bg-blue-50" : "border-gray-300"} rounded-lg cursor-pointer hover:border-[#166095] transition-colors`}
                    >
                      <input
                        type="radio"
                        name="goal"
                        value={option.value}
                        checked={formData.goal === option.value}
                        onChange={(e) =>
                          updateField("goal", e.target.value)
                        }
                        className="w-5 h-5 text-[#166095] mt-0.5 flex-shrink-0"
                      />
                      <span
                        className="text-sm text-[#2B2F3D] leading-relaxed"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.goal && (
                  <p
                    className="mt-2 text-red-600 text-xs"
                    role="alert"
                  >
                    {errors.goal}
                  </p>
                )}
              </fieldset>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) =>
                      updateField(
                        "termsAccepted",
                        e.target.checked,
                      )
                    }
                    aria-describedby={
                      errors.termsAccepted
                        ? "err-terms"
                        : undefined
                    }
                    className="w-5 h-5 text-[#166095] mt-0.5 flex-shrink-0"
                  />
                  <span
                    className="text-sm text-[#2B2F3D] leading-relaxed"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Li e aceito todos os{" "}
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate("consent-terms")
                      }
                      className="text-[#166095] hover:underline font-semibold"
                    >
                      Termos de Serviços
                    </button>
                  </span>
                </label>
                {errors.termsAccepted && (
                  <p
                    id="err-terms"
                    className="mt-2 text-red-600 text-xs"
                    role="alert"
                  >
                    {errors.termsAccepted}
                  </p>
                )}
              </div>

              <button
                onClick={handleNextStep}
                className="w-full bg-[#166095] text-white py-3 min-h-[44px] rounded-lg font-semibold text-base hover:bg-[#0f4a71] transition-colors"
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                }}
              >
                Prosseguir
              </button>
            </div>
          )}

          {/* ── Etapa 3 ── */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2
                  className="text-[#2B2F3D] mb-2"
                  style={{
                    fontFamily:
                      "Arial Rounded MT Bold, sans-serif",
                    fontSize: "26px",
                    lineHeight: "1.3",
                  }}
                >
                  Estamos quase lá!
                </h2>
                <p
                  className="text-[#4A4A4A] text-base leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Escolha um avatar para o seu perfil
                </p>
              </div>

              <fieldset>
                <div
                  className="grid grid-cols-4 gap-3"
                  role="group"
                  aria-label="Selecione um avatar"
                >
                  {AVATARS.map((avatar) => (
                    <button
                      key={avatar.id}
                      type="button"
                      onClick={() =>
                        updateField("avatar", avatar.id)
                      }
                      aria-pressed={
                        formData.avatar === avatar.id
                      }
                      aria-label={avatar.label}
                      className={`transition-all ${formData.avatar === avatar.id ? "ring-4 ring-[#166095] scale-110" : "hover:scale-105 ring-2 ring-gray-300"}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        display: "block",
                        padding: 0,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={avatar.src}
                        alt=""
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </button>
                  ))}
                </div>
                {errors.avatar && (
                  <p
                    className="mt-4 text-center text-red-600 text-xs"
                    role="alert"
                  >
                    {errors.avatar}
                  </p>
                )}
              </fieldset>

              <button
                onClick={handleFinalize}
                disabled={isLoading}
                className="w-full bg-[#166095] text-white py-3 min-h-[44px] rounded-lg font-semibold text-base hover:bg-[#0f4a71] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                }}
              >
                {isLoading
                  ? "Criando conta..."
                  : "Finalizar cadastro"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Lado direito — imagem fixa ── */}
      <div className="hidden lg:block w-[636px] flex-shrink-0 h-screen">
        <img
          src={imgLateral}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}