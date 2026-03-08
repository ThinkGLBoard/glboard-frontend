import clsx from "clsx";
type PrimitiveButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PrimitiveButtonText({ text, additionalClassNames = "" }: PrimitiveButtonTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[28.6px] items-center justify-center px-[8.8px] py-[4.8px] rounded-[12px] top-[4.5px] w-[206.4px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] text-center text-nowrap">{text}</p>
    </div>
  );
}

export default function TabList() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.8px] border-solid relative rounded-[16px] size-full" data-name="Tab List">
      <PrimitiveButtonText text="Relatório Geral" additionalClassNames="left-[4px]" />
      <PrimitiveButtonText text="Pontos de Revisão" additionalClassNames="bg-[#f3f3f3] left-[210.4px]" />
      <PrimitiveButtonText text="Comentários" additionalClassNames="left-[416.8px]" />
      <PrimitiveButtonText text="Aprendizagem Multimídia" additionalClassNames="left-[623.2px]" />
      <PrimitiveButtonText text="Game Design" additionalClassNames="left-[829.6px]" />
      <PrimitiveButtonText text="UX/UI Design" additionalClassNames="left-[1036px]" />
    </div>
  );
}