"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/ui/alert-dialog";

interface LogoutConfirmationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export function LogoutConfirmationDialog({
  isOpen,
  onOpenChange,
  onConfirm,
}: LogoutConfirmationDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto border-[#d9e4ec] bg-white p-0 font-['Poppins'] shadow-[0_24px_80px_rgba(13,49,74,0.24)] sm:max-w-[680px]">
        <AlertDialogCancel
          aria-label="Fechar confirmação de saída"
          className="absolute right-3 top-3 z-10 size-10 rounded-full border-0 bg-white/90 p-0 text-[#667784] shadow-sm hover:bg-[#edf5fa] hover:text-[#166095] sm:right-4 sm:top-4"
        >
          <X className="size-5" aria-hidden="true" />
        </AlertDialogCancel>

        <div className="grid sm:grid-cols-[220px_1fr]">
          <div className="relative flex min-h-[180px] items-end justify-center overflow-hidden bg-[#eef7fc] px-6 pt-8 sm:min-h-[390px] sm:items-center sm:px-8 sm:pt-0">
            <div
              className="absolute left-5 top-5 size-3 rounded-full bg-[#58b24d]"
              aria-hidden="true"
            />
            <div
              className="absolute right-8 top-12 size-2 rounded-full bg-[#d04245]"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-9 left-8 size-2.5 rounded-full bg-[#166095]"
              aria-hidden="true"
            />
            <div className="absolute inset-x-7 bottom-4 h-px bg-[#cce1ee] sm:bottom-16" />
            <Image
              src="/logout-character.png"
              alt="Personagem amarelo do GLBoard pensando"
              width={128}
              height={171}
              className="relative z-[1] h-[150px] w-auto object-contain sm:h-[220px]"
            />
          </div>

          <div className="flex flex-col justify-center px-6 pb-7 pt-6 sm:px-9 sm:py-12">
            <AlertDialogHeader className="gap-3 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#166095]">
                Encerrar sessão
              </p>
              <AlertDialogTitle className="font-['Poppins'] text-[1.5rem] font-semibold leading-tight text-[#17384f] sm:text-[1.75rem]">
                Tem certeza que deseja sair?
              </AlertDialogTitle>
              <AlertDialogDescription className="font-['Poppins'] text-sm leading-6 text-[#61727e] sm:text-[0.95rem]">
                Você será desconectado da sua conta. Seus jogos e alterações
                salvas continuarão seguros para o próximo acesso.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="mt-7 flex-col-reverse gap-3 sm:flex-col-reverse">
              <AlertDialogAction
                onClick={onConfirm}
                className="h-11 w-full rounded-full border border-[#c83f43] bg-white text-[#b92f34] shadow-none hover:bg-[#fff2f2] focus-visible:ring-[#c83f43]"
              >
                Sim, sair
              </AlertDialogAction>
              <AlertDialogCancel className="h-11 w-full rounded-full border-[#166095] bg-[#166095] text-white hover:bg-[#104d78] hover:text-white">
                Continuar no GLBoard
              </AlertDialogCancel>
            </AlertDialogFooter>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
