function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Arial_Rounded_MT_Bold:Regular',sans-serif] relative shrink-0 text-[#2b2f3d] text-[30px] w-full">Módulos do GLBoard</p>
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#364153] text-[16px] w-full">O GLBoard é composto por módulos especializados que cobrem todo o ciclo de Game Learning Analytics</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#fcedd4] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[10px] relative w-full">
          <p className="css-ew64yg font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ec7201] text-[24px] text-center">ANÁLISE DE INTERFACE</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[97px] items-start justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ec7201] text-[30px] w-full">PEACH</p>
      <Frame1 />
    </div>
  );
}

function LucideCheck() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FCEDD4)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #EC7201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <LucideCheck />
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-[133px]">Análise de UI/UX</p>
    </div>
  );
}

function LucideCheck1() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FCEDD4)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #EC7201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <LucideCheck1 />
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center w-[133px]">Carga Cognitiva</p>
    </div>
  );
}

function LucideCheck2() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FCEDD4)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #EC7201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck2 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Usabilidade</p>
    </div>
  );
}

function LucideCheck3() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FCEDD4)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #EC7201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck3 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Aprendizagem</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[183px]">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[320px]">
      <Frame2 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <div className="bg-[#ec7201] h-[392px] rounded-[5px] shrink-0 w-[16px]" />
      <Frame8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#fbe2e2] content-stretch flex items-center justify-center px-[15px] py-[10px] relative rounded-[30px] shrink-0">
      <p className="css-ew64yg font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e24342] text-[24px] text-center">MODELAGEM DE DADOS</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[97px] items-start justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#e24342] text-[30px] w-[min-content]">GLORIA</p>
      <Frame13 />
    </div>
  );
}

function LucideCheck4() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FBE2E2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #E24342)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck4 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Modelagem de dados</p>
    </div>
  );
}

function LucideCheck5() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FBE2E2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #E24342)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck5 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Definição de variáveis</p>
    </div>
  );
}

function LucideCheck6() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FBE2E2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #E24342)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck6 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Estruturação pedagógica</p>
    </div>
  );
}

function LucideCheck7() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FBE2E2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #E24342)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck7 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Geração de JSON</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[320px]">
      <Frame14 />
      <Frame19 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <div className="bg-[#e24342] h-[392px] rounded-[5px] shrink-0 w-[16px]" />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#fdf1f2] content-stretch flex items-center justify-center px-[15px] py-[10px] relative rounded-[30px] shrink-0">
      <p className="css-ew64yg font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#961139] text-[24px] text-center">CAPTURA E ANÁLISE</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[97px] items-start justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#961139] text-[30px] w-[min-content]">GLBOARD</p>
      <Frame21 />
    </div>
  );
}

function LucideCheck8() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FDF1F2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #961139)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck8 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Captura de dados em tempo real</p>
    </div>
  );
}

function LucideCheck9() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FDF1F2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #961139)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck9 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Visualização de dashboards</p>
    </div>
  );
}

function LucideCheck10() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FDF1F2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #961139)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck10 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Análise de métricas</p>
    </div>
  );
}

function LucideCheck11() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="lucide/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="lucide/check">
          <rect fill="var(--fill-0, #FDF1F2)" height="34" rx="17" width="34" />
          <path d="M25 11L13.3125 23L8 17.5455" id="Vector" stroke="var(--stroke-0, #961139)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <LucideCheck11 />
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center">Geração de relatórios</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[320px]">
      <Frame22 />
      <Frame27 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
      <div className="bg-[#961139] h-[392px] rounded-[5px] shrink-0 w-[16px]" />
      <Frame28 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[186px] items-center relative shrink-0">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

export default function Component1LandingPageResolucaoMonitorSamsung() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center px-[200px] py-[128px] relative size-full" data-name="1. Landing Page - Resolução Monitor Samsung">
      <Frame />
      <Frame12 />
    </div>
  );
}