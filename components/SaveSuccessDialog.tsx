import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/ui/alert-dialog";

interface SaveSuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SaveSuccessDialog({
  isOpen,
  onClose,
}: SaveSuccessDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Alterações salvas</AlertDialogTitle>
          <AlertDialogDescription>
            Suas informações foram atualizadas.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction onClick={onClose}>Fechar</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
