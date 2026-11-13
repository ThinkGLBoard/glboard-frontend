export default function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full">
      <div className="content-stretch flex h-[30px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[109px]" data-name="Rascunho">
        <div aria-hidden="true" className="absolute border border-[#166095] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#166095] text-[16px] text-center tracking-[0.56px] whitespace-nowrap">
          <p className="leading-[normal]">Rascunho</p>
        </div>
      </div>
      <div className="bg-[#58b24d] content-stretch flex h-[30px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[109px]" data-name="Proximo">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center tracking-[0.56px] whitespace-nowrap">
          <p className="leading-[normal]">Próximo</p>
        </div>
      </div>
    </div>
  );
}