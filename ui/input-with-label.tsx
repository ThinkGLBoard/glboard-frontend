import * as React from "react";
import { cn } from "./utils";
import { Search, Sparkles } from "lucide-react";

export interface InputWithLabelProps
  extends React.ComponentProps<"input"> {
  label: string;
  required?: boolean;
  helperText?: string;
  showSearchIcon?: boolean;
  onAskAI?: () => void;
}

const InputWithLabel = React.forwardRef<
  HTMLInputElement,
  InputWithLabelProps
>(
  (
    {
      className,
      label,
      required,
      helperText,
      showSearchIcon,
      onAskAI,
      type,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId =
      id || (label ? label.toLowerCase().replace(/\s+/g, "-") : "input");

    return (
      <div className="space-y-3 pt-4 w-full">
        <div className="relative">
          {/* Label posicionado sobre a borda com botão AI ao lado */}
          <div className="absolute left-4 -top-3 bg-white px-2 z-10 flex items-center gap-3">
            <label
              htmlFor={inputId}
              className="text-sm font-normal font-[Poppins] text-[#706f6f] p-[0px]"
            >
              {label}
              {required && (
                <span className="text-[#DC2626] ml-1">*</span>
              )}
            </label>

            {/* Botão Perguntar para IA integrado ao label */}
            {onAskAI && (
              <button
                type="button"
                onClick={onAskAI}
                className="flex items-center gap-1.5 text-[#6366F1] hover:text-[#5558E3] transition-colors text-xs font-medium font-[Poppins]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Perguntar para IA</span>
              </button>
            )}
          </div>

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            type={type}
            className={cn(
              "w-full h-[56px] px-4 rounded-[10px] border border-[#E0E0E0] bg-white",
              "text-[#3D3D3C] text-base font-[Poppins]",
              "placeholder:text-[#BDBDBD] placeholder:font-[Poppins]",
              "focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20",
              "transition-all duration-200",
              "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
              showSearchIcon && "pr-12",
              className,
            )}
            {...props}
          />

          {/* Ícone de busca (opcional) */}
          {showSearchIcon && (
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBDBD] pointer-events-none" />
          )}
        </div>

        {/* Texto de ajuda (opcional) */}
        {helperText && (
          null
        )}
      </div>
    );
  },
);

InputWithLabel.displayName = "InputWithLabel";

export { InputWithLabel };