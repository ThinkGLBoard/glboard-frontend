import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/ui/alert-dialog";
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

const avatars = [
  Group5169,
  Group4629,
  Group4631,
  Group4639,
  Group4636,
  Frame5114,
  Group4642,
  Group4633,
  Frame4635,
  Group4640,
  Group4632,
  Group4641,
];

interface AvatarSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (avatarId: number) => void;
  currentAvatar?: number;
}

export function AvatarSelectionDialog({
  isOpen,
  onClose,
  onSelect,
  currentAvatar,
}: AvatarSelectionDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Escolha seu avatar</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid grid-cols-4 gap-3">
          {avatars.map((avatar, index) => {
            const avatarId = index + 1;
            return (
              <button
                key={avatarId}
                type="button"
                aria-label={`Selecionar avatar ${avatarId}`}
                aria-pressed={currentAvatar === avatarId}
                onClick={() => {
                  onSelect(avatarId);
                  onClose();
                }}
                className={`overflow-hidden rounded-full border-2 ${
                  currentAvatar === avatarId
                    ? "border-[#166095]"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={avatar.src}
                  alt=""
                  width={96}
                  height={96}
                  className="aspect-square w-full object-cover"
                />
              </button>
            );
          })}
        </div>
        <AlertDialogCancel onClick={onClose}>Cancelar</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
