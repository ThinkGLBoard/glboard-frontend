import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  AlertTriangle,
  Pencil,
  ChevronDown,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";
import { toast } from "sonner";
import { InputWithLabel } from "./ui/input-with-label";
import { DeleteAccountDialog } from "./DeleteAccountDialog";
import { EditConfirmationDialog } from "./EditConfirmationDialog";
import { SaveSuccessDialog } from "./SaveSuccessDialog";
import { AvatarSelectionDialog } from "./AvatarSelectionDialog";
import personagemImg from "../../imports/image-4.png";
import passwordIllustration from "../../imports/Group_4773.png";
import emailMascotImg from "../../imports/Group_5177-2.png";
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

interface UserProfilePageProps {
  userData: {
    name: string;
    email: string;
    avatarSrc?: string;
    profileType?: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    phone?: string;
    institution?: string;
  };
  onUpdate: (data: any) => void;
  onNavigate: (page: string) => void;
}

export function UserProfilePage({
  userData,
  onUpdate,
  onNavigate,
}: UserProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "personal" | "email" | "password"
  >("personal");

  // Reset isEditing when changing sections
  useEffect(() => {
    setIsEditing(false);
  }, [activeSection]);
  const [showDeleteDialog, setShowDeleteDialog] =
    useState(false);
  const [showEditConfirmDialog, setShowEditConfirmDialog] =
    useState(false);
  const [showSaveSuccessDialog, setShowSaveSuccessDialog] =
    useState(false);
  const [showAvatarDialog, setShowAvatarDialog] =
    useState(false);
  const [currentAvatarId, setCurrentAvatarId] = useState<number | undefined>(undefined);

  const [fullUserData, setFullUserData] = useState<any>(null);

  useEffect(() => {
    const usersData = localStorage.getItem("glboard_users");
    if (usersData) {
      const users = JSON.parse(usersData);
      const currentUser = users.find(
        (u: any) => u.email === userData.email,
      );
      if (currentUser) {
        setFullUserData(currentUser);
        setCurrentAvatarId(currentUser.selectedAvatar);
      }
    }
  }, [userData.email]);

  const firstName =
    fullUserData?.firstName ||
    userData.firstName ||
    userData.name?.split(" ")[0] ||
    "";
  const lastName =
    fullUserData?.lastName ||
    userData.lastName ||
    userData.name?.split(" ").slice(1).join(" ") ||
    "";

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    birthDate:
      fullUserData?.birthDate || userData.birthDate || "",
    phone: fullUserData?.phone || userData.phone || "",
    profileType:
      fullUserData?.profileType ||
      userData.profileType ||
      "developer",
    institution:
      fullUserData?.institution || userData.institution || "",
    email: userData.email || "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  useEffect(() => {
    if (fullUserData) {
      setFormData({
        firstName: fullUserData.firstName || firstName,
        lastName: fullUserData.lastName || lastName,
        birthDate: fullUserData.birthDate || "",
        phone: fullUserData.phone || "",
        profileType: fullUserData.profileType || "developer",
        institution: fullUserData.institution || "",
        email: fullUserData.email || userData.email || "",
      });
    }
  }, [fullUserData]);

  const handleEnableEdit = () => setShowEditConfirmDialog(true);
  const handleConfirmEdit = () => {
    setShowEditConfirmDialog(false);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!formData.firstName || !formData.lastName) {
      toast.error("Nome e sobrenome são obrigatórios");
      return;
    }

    const updatedData = {
      ...userData,
      name: `${formData.firstName} ${formData.lastName}`,
      ...formData,
    };

    onUpdate(updatedData);

    const usersData = localStorage.getItem("glboard_users");
    const users = usersData ? JSON.parse(usersData) : [];
    const userIndex = users.findIndex(
      (u: any) => u.email === userData.email,
    );

    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
      };
      localStorage.setItem(
        "glboard_users",
        JSON.stringify(users),
      );
      setFullUserData(users[userIndex]);
    }

    setIsEditing(false);
    setShowSaveSuccessDialog(true);
  };

  const avatarImages: { [key: number]: string } = {
    1: Group5169,
    2: Group4629,
    3: Group4631,
    4: Group4639,
    5: Group4636,
    6: Frame5114,
    7: Group4642,
    8: Group4633,
    9: Frame4635,
    10: Group4640,
    11: Group4632,
    12: Group4641,
  };

  const handleAvatarSelect = (avatarId: number) => {
    const usersData = localStorage.getItem("glboard_users");
    const users = usersData ? JSON.parse(usersData) : [];
    const userIndex = users.findIndex(
      (u: any) => u.email === userData.email,
    );

    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], selectedAvatar: avatarId };
      localStorage.setItem(
        "glboard_users",
        JSON.stringify(users),
      );
      const updatedUserData = { ...fullUserData, selectedAvatar: avatarId };
      setFullUserData(updatedUserData);
      setCurrentAvatarId(avatarId);

      // Atualizar userData no componente pai
      onUpdate({
        ...userData,
        selectedAvatar: avatarId,
      });

      toast.success("Avatar atualizado com sucesso!");
    }
  };

  const handleDeleteAccount = () => {
    const usersData = localStorage.getItem("glboard_users");
    const users = usersData ? JSON.parse(usersData) : [];
    const filteredUsers = users.filter(
      (u: any) => u.email !== userData.email,
    );
    localStorage.setItem(
      "glboard_users",
      JSON.stringify(filteredUsers),
    );

    toast.success("Conta excluída com sucesso");
    onNavigate("landing");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Container Principal que ocupa o restante da tela */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* SIDEBAR CORRIGIDA */}
        <aside className="lg:min-w-[300px] lg:w-full lg:max-w-sm shrink-0 bg-[#FDFDFD] border-r border-gray-100 flex flex-col">
          <nav className="flex-1">
            <button
              onClick={() => setActiveSection("personal")}
              className={`w-full flex items-center gap-4 px-8 py-5 border-b border-gray-100 transition-all ${
                activeSection === "personal"
                  ? "text-[#166095] font-semibold bg-blue-50/40"
                  : "text-[rgba(69,69,69,0.8)] hover:bg-gray-50"
              }`}
            >
              <User className="w-5 h-5" />
              <span className="font-['Poppins'] text-base">
                Informações pessoais
              </span>
            </button>

            <button
              onClick={() => setActiveSection("email")}
              className={`w-full flex items-center gap-4 px-8 py-5 border-b border-gray-100 transition-all ${
                activeSection === "email"
                  ? "text-[#166095] font-semibold bg-blue-50/40"
                  : "text-[rgba(69,69,69,0.8)] hover:bg-gray-50"
              }`}
            >
              <Mail className="w-5 h-5" />
              <span className="font-['Poppins'] text-base">
                Alterar e-mail
              </span>
            </button>

            <button
              onClick={() => setActiveSection("password")}
              className={`w-full flex items-center gap-4 px-8 py-5 border-b border-gray-100 transition-all ${
                activeSection === "password"
                  ? "text-[#166095] font-semibold bg-blue-50/40"
                  : "text-[rgba(69,69,69,0.8)] hover:bg-gray-50"
              }`}
            >
              <Lock className="w-5 h-5" />
              <span className="font-['Poppins'] text-base">
                Alterar senha
              </span>
            </button>
          </nav>

          {/* Botão de excluir colado no rodapé */}
          <div className="mt-auto border-t border-gray-100">
            <button
              onClick={() => setShowDeleteDialog(true)}
              className="w-full flex items-center gap-4 px-8 py-6 text-[#D04245] hover:bg-red-50 transition-colors"
            >
              <AlertTriangle className="w-5 h-5" />
              <span className="font-['Poppins'] text-base font-medium">
                Excluir conta
              </span>
            </button>
          </div>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 py-12 px-6 md:px-12">
          {activeSection === "personal" && (
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {/* Avatar e Header */}
              <div className="flex flex-col items-center gap-6 w-full text-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden">
                    {currentAvatarId && avatarImages[currentAvatarId] ? (
                      <img
                        src={avatarImages[currentAvatarId]}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : userData.avatarSrc ? (
                      <img
                        src={userData.avatarSrc}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0082B9] flex items-center justify-center text-white text-6xl font-bold">
                        <span className="font-['Arial_Rounded_MT_Bold']">
                          {firstName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setShowAvatarDialog(true)}
                    className="absolute bottom-1 right-1 min-w-11 min-h-11 bg-[#EAAE31] border-4 border-white rounded-full flex items-center justify-center text-white hover:bg-[#d19d2a] transition-colors"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <h1 className="font-['Arial_Rounded_MT_Bold'] text-[#166095] text-4xl mb-3">
                    Olá, {userData.name}!
                  </h1>
                  <p className="font-['Poppins'] text-gray-600 text-lg">
                    Edite suas informações pessoais e mantenha
                    seus dados atualizados!
                  </p>
                </div>
                <div className="w-full h-px bg-gray-100 mt-4 mb-8"></div>
              </div>

              {/* Form */}
              <div className="w-full">
                <h2 className="font-['Arial_Rounded_MT_Bold'] text-[#166095] text-2xl mb-8">
                  Informações Pessoais
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <InputWithLabel
                    label="Nome"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                    disabled={!isEditing}
                    className="min-h-14 rounded-xl"
                  />
                  <InputWithLabel
                    label="Sobrenome"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value,
                      })
                    }
                    disabled={!isEditing}
                    className="min-h-14 rounded-xl"
                  />
                  <InputWithLabel
                    label="Data de nascimento"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        birthDate: e.target.value,
                      })
                    }
                    disabled={!isEditing}
                    className="min-h-14 rounded-xl"
                  />
                  <InputWithLabel
                    label="Telefone"
                    placeholder="(92) 123123-21312"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    disabled={!isEditing}
                    className="min-h-14 rounded-xl"
                  />

                  <div className="relative pt-2">
                    <label className="absolute left-4 top-[-2px] bg-white px-2 text-sm text-gray-500 font-['Poppins'] z-10">
                      Identificação
                    </label>
                    <select
                      value={formData.profileType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profileType: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                      className="w-full min-h-14 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-['Poppins'] focus:ring-2 focus:ring-blue-100 outline-none appearance-none disabled:bg-gray-50"
                    >
                      <option value="developer">
                        Desenvolvedor
                      </option>
                      <option value="teacher">Professor</option>
                      <option value="student">Estudante</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-10 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>

                  <InputWithLabel
                    label="Instituição"
                    value={formData.institution}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        institution: e.target.value,
                      })
                    }
                    disabled={!isEditing}
                    className="min-h-14 rounded-xl"
                  />
                </div>

                <div className="flex justify-end mt-12">
                  {!isEditing ? (
                    <button
                      onClick={handleEnableEdit}
                      className="flex items-center gap-2 px-8 py-3 border-2 border-[#166095] text-[#166095] rounded-full font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                      Editar
                    </button>
                  ) : (
                    <div className="flex gap-4">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-8 py-3 text-gray-500 font-medium hover:underline"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-10 py-3 bg-[#166095] text-white rounded-full font-semibold shadow-md hover:bg-[#0f4a71] transition-all"
                      >
                        Salvar alterações
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeSection === "email" && (
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {/* Cabeçalho Centralizado */}
              <div className="flex flex-col items-center gap-6 w-full text-center">
                {/* Ilustração do mascote */}
                <div className="w-36 min-h-40">
                  <img
                    src={emailMascotImg}
                    alt="Mascote pensativo"
                    className="block w-full h-full object-contain"
                  />
                </div>

                {/* Título */}
                <h1 className="font-['Arial_Rounded_MT_Bold'] text-gray-800 text-3xl">
                  Defina um novo e-mail
                </h1>

                {/* Subtítulo */}
                <p className="font-['Poppins'] text-gray-500 text-lg">
                  Edite seu e-mail e mantenha suas informações sempre
                  atualizadas.
                </p>

                {/* Linha divisória */}
                <div className="w-full h-px bg-gray-200 mt-4 mb-8"></div>
              </div>

              {/* Formulário */}
              <div className="w-full">
                <h2 className="font-['Arial_Rounded_MT_Bold'] text-[#166095] text-2xl mb-8">
                  Editar email
                </h2>

                <InputWithLabel
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={!isEditing}
                  className="min-h-14 rounded-xl w-full"
                />

                {/* Botões de Ação */}
                <div className="flex justify-end mt-12">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-8 py-3 border-2 border-[#166095] text-[#166095] rounded-full font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                      Editar
                    </button>
                  ) : (
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setFormData({
                            ...formData,
                            email: userData.email,
                          });
                        }}
                        className="px-8 py-3 text-gray-500 font-medium hover:underline"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => {
                          // Validação de email
                          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                          if (!emailRegex.test(formData.email)) {
                            toast.error("Por favor, insira um e-mail válido");
                            return;
                          }

                          // Atualizar localStorage
                          const usersData = localStorage.getItem("glboard_users");
                          const users = usersData ? JSON.parse(usersData) : [];
                          const userIndex = users.findIndex(
                            (u: any) => u.email === userData.email
                          );

                          if (userIndex !== -1) {
                            users[userIndex].email = formData.email;
                            localStorage.setItem(
                              "glboard_users",
                              JSON.stringify(users)
                            );
                            setFullUserData(users[userIndex]);
                          }

                          onUpdate({ ...userData, email: formData.email });
                          setIsEditing(false);
                          toast.success("E-mail atualizado com sucesso!");
                        }}
                        className="px-10 py-3 bg-[#166095] text-white rounded-full font-semibold shadow-md hover:bg-[#0f4a71] transition-all"
                      >
                        Salvar alterações
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeSection === "password" && (
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {/* Cabeçalho Centralizado */}
              <div className="flex flex-col items-center gap-6 w-full text-center">
                {/* Ilustração do mascote com cadeado e exclamações */}
                <div className="w-48 min-h-48 flex items-center justify-center">
                  <img
                    src={passwordIllustration}
                    alt="Ilustração de cadeado com exclamações"
                    className="block w-full h-full object-contain"
                  />
                </div>

                {/* Título */}
                <h1 className="font-['Arial_Rounded_MT_Bold'] text-gray-800 text-3xl">
                  Defina uma nova senha
                </h1>

                {/* Subtítulo */}
                <p className="font-['Poppins'] text-gray-600 text-lg max-w-[762px]">
                  A senha precisa ter pelo menos 8 caracteres, incluir
                  uma letra maiúscula, um número e ser igual à
                  confirmação.
                </p>

                {/* Linha divisória */}
                <div className="w-full h-px bg-gray-200 mt-4 mb-8"></div>
              </div>

              {/* Formulário */}
              <div className="w-full max-w-lg">
                <div className="space-y-8">
                  {/* Senha Atual */}
                  <div className="relative">
                    <InputWithLabel
                      label="Senha atual"
                      type={showPasswords.current ? "text" : "password"}
                      value={passwordData.currentPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          currentPassword: e.target.value,
                        })
                      }
                      placeholder="Insira sua senha atual"
                      className="min-h-12 rounded-md pr-12"
                      disabled={!isEditing}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPasswords({
                          ...showPasswords,
                          current: !showPasswords.current,
                        })
                      }
                      className="absolute right-4 top-8 text-gray-400 hover:text-gray-600"
                      disabled={!isEditing}
                    >
                      {showPasswords.current ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Nova Senha */}
                  <div className="relative">
                    <InputWithLabel
                      label="Nova senha"
                      type={showPasswords.new ? "text" : "password"}
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          newPassword: e.target.value,
                        })
                      }
                      placeholder="Insira sua nova senha"
                      className="min-h-12 rounded-md pr-12"
                      disabled={!isEditing}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPasswords({
                          ...showPasswords,
                          new: !showPasswords.new,
                        })
                      }
                      className="absolute right-4 top-8 text-gray-400 hover:text-gray-600"
                      disabled={!isEditing}
                    >
                      {showPasswords.new ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Confirme sua nova senha */}
                  <div className="relative">
                    <InputWithLabel
                      label="Confirme sua nova senha"
                      type={showPasswords.confirm ? "text" : "password"}
                      value={passwordData.confirmPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="Insira sua senha novamente"
                      className="min-h-12 rounded-md pr-12"
                      disabled={!isEditing}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPasswords({
                          ...showPasswords,
                          confirm: !showPasswords.confirm,
                        })
                      }
                      className="absolute right-4 top-8 text-gray-400 hover:text-gray-600"
                      disabled={!isEditing}
                    >
                      {showPasswords.confirm ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Link Recuperar senha */}
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate("forgot-password")}
                      className="text-[#166095] text-sm font-['Poppins'] hover:underline"
                    >
                      Recuperar senha?
                    </button>
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="flex justify-center mt-12">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-8 py-3 border-2 border-[#166095] text-[#166095] rounded-full font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <Pencil className="w-4 h-4" />
                      Editar
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        // Validações
                        if (
                          !passwordData.currentPassword ||
                          !passwordData.newPassword ||
                          !passwordData.confirmPassword
                        ) {
                          toast.error("Preencha todos os campos");
                          return;
                        }

                        // Validar senha atual (mock - em produção validar com backend)
                        const usersData = localStorage.getItem("glboard_users");
                        const users = usersData ? JSON.parse(usersData) : [];
                        const user = users.find(
                          (u: any) => u.email === userData.email
                        );

                        if (
                          user &&
                          user.password !== passwordData.currentPassword
                        ) {
                          toast.error("Senha atual incorreta");
                          return;
                        }

                        // Validar formato da nova senha
                        const passwordRegex =
                          /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                        if (!passwordRegex.test(passwordData.newPassword)) {
                          toast.error(
                            "A senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula e um número"
                          );
                          return;
                        }

                        // Validar confirmação
                        if (
                          passwordData.newPassword !==
                          passwordData.confirmPassword
                        ) {
                          toast.error("As senhas não coincidem");
                          return;
                        }

                        // Atualizar senha no localStorage
                        if (user) {
                          const userIndex = users.findIndex(
                            (u: any) => u.email === userData.email
                          );
                          if (userIndex !== -1) {
                            users[userIndex].password =
                              passwordData.newPassword;
                            localStorage.setItem(
                              "glboard_users",
                              JSON.stringify(users)
                            );
                            setFullUserData(users[userIndex]);
                          }
                        }

                        // Limpar campos
                        setPasswordData({
                          currentPassword: "",
                          newPassword: "",
                          confirmPassword: "",
                        });
                        setIsEditing(false);
                        toast.success("Senha alterada com sucesso!");
                      }}
                      className="flex items-center gap-2 px-8 py-3 bg-[#166095] text-white rounded-full font-semibold shadow-md hover:bg-[#0f4a71] transition-all"
                    >
                      <Save className="w-5 h-5" />
                      Salvar
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Dialogs */}
      <DeleteAccountDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDeleteAccount}
      />
      <EditConfirmationDialog
        isOpen={showEditConfirmDialog}
        onClose={() => setShowEditConfirmDialog(false)}
        onConfirm={handleConfirmEdit}
      />
      <SaveSuccessDialog
        isOpen={showSaveSuccessDialog}
        onClose={() => setShowSaveSuccessDialog(false)}
      />
      <AvatarSelectionDialog
        isOpen={showAvatarDialog}
        onClose={() => setShowAvatarDialog(false)}
        onSelect={handleAvatarSelect}
        currentAvatar={currentAvatarId}
      />
    </div>
  );
}