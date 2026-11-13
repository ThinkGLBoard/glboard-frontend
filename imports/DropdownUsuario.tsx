import svgPaths from "./svg-oq2w96pwnd";

function Group2() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[41px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
        <g id="Group 4630">
          <circle cx="20.5" cy="20.5" fill="var(--fill-0, #0082B9)" id="Ellipse 124" r="20.5" />
          <g id="Group 1690">
            <path d={svgPaths.p2365500} id="Vector 44" stroke="var(--stroke-0, #005274)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p190c8080} id="Vector 45" stroke="var(--stroke-0, #005274)" strokeLinecap="round" strokeWidth="2" />
            <ellipse cx="2.75713" cy="2.78052" fill="var(--fill-0, #005274)" id="Ellipse 78" rx="2.75713" ry="2.78052" transform="matrix(0.638603 -0.764799 0.774871 0.626399 23.7698 17.3873)" />
            <ellipse cx="2.75713" cy="2.78052" fill="var(--fill-0, #005274)" id="Ellipse 79" rx="2.75713" ry="2.78052" transform="matrix(0.638603 -0.764799 0.774871 0.626399 9.1709 17.0127)" />
            <path d={svgPaths.p141d9700} id="Vector 39" stroke="var(--stroke-0, #005274)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p852c900} id="Vector 41" stroke="var(--stroke-0, #005274)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pf1e3f80} id="Vector 40" stroke="var(--stroke-0, #005274)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 text-[rgba(13,12,11,0.8)] w-[162px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[25px] w-full">
        <p className="leading-[1.014]">{`Rodrigo Faro `}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.014]">Desenvolvedor</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[15px] items-center leading-[0] relative shrink-0">
      <Group />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex h-[73px] items-center justify-center relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
      <Frame2 />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="list">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="list">
          <path d="M8 6H21" id="Vector" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 12H21" id="Vector_2" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 18H21" id="Vector_3" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 6H3.01" id="Vector_4" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 12H3.01" id="Vector_5" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 18H3.01" id="Vector_6" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f0f0f0] h-[50px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7px] items-center pl-[27px] pr-[10px] py-[10px] relative size-full">
          <List />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#166095] text-[16px] whitespace-nowrap">
            <p className="leading-[1.014]">Projetos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[17px]">
      <div className="absolute inset-[0_-4.41%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.75 19.5">
          <g id="Group 1679">
            <path d={svgPaths.p1b7bc580} id="Vector" stroke="var(--stroke-0, #0D0C0B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
            <path d={svgPaths.p24bb9680} fill="var(--fill-0, #0D0C0B)" fillOpacity="0.8" id="Intersect" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function DropdownUsuario() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] size-full" data-name="Dropdown - usuario">
      <Frame1 />
      <Frame3 />
      <div className="bg-white h-[50px] relative shrink-0 w-full" data-name="Perfil">
        <div aria-hidden="true" className="absolute border-[#fdfdfd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[7px] items-center pl-[27px] pr-[10px] py-[10px] relative size-full">
            <div className="overflow-clip relative rounded-[100px] shrink-0 size-[24px]" data-name="user">
              <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                <div className="absolute inset-[-4.17%_-5.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 19.5">
                    <g id="Vector">
                      <path d={svgPaths.pb790900} stroke="var(--stroke-0, #0D0C0B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
                      <path d={svgPaths.pa59a600} stroke="var(--stroke-0, #0D0C0B)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(13,12,11,0.8)] whitespace-nowrap">
              <p className="leading-[1.014]">Perfil</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[50px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Sair">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[11px] items-center pl-[31px] pr-[10px] py-[10px] relative size-full">
            <Group1 />
            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(13,12,11,0.8)] whitespace-nowrap">
              <p className="leading-[1.014]">Sair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}