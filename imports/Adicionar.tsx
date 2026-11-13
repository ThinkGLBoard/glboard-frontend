import svgPaths from "./svg-ofh97sbued";

function Group() {
  return (
    <div className="absolute contents inset-[20%_15%]">
      <p className="absolute bottom-1/4 font-['Poppins:Medium',sans-serif] leading-[20px] left-[33.13%] not-italic right-[15%] text-[#fdfdfd] text-[16px] top-1/4 tracking-[0.56px]">Adicionar</p>
      <div className="absolute inset-[20%_70%_20%_15%] overflow-clip" data-name="\ add-square">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <path d={svgPaths.p24232200} id="Vector" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Adicionar() {
  return (
    <div className="relative size-full" data-name="Adicionar">
      <div className="absolute bg-[#166095] border-0 border-[rgba(0,0,0,0.25)] border-solid inset-0 rounded-[5px]" />
      <Group />
    </div>
  );
}