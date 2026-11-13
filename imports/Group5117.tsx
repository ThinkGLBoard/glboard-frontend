import svgPaths from "./svg-jkwk9hlcxx";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[27px] not-italic text-[#166095] text-[12px] top-[2px] tracking-[0.42px]">Conte-nos sobre o enredo, mecânicas, estilo de gameplay e ambientação.</p>
      <div className="absolute left-0 overflow-clip size-[21px] top-0" data-name="info-circle">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.25 17.25">
              <path d={svgPaths.p215fb700} id="Vector" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}