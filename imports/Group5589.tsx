import svgPaths from "./svg-b0ilmd5t7r";

function Frame() {
  return (
    <div className="content-stretch flex h-[31px] items-center justify-between relative shrink-0 w-[309px]">
      <div className="flex flex-col font-['Arial_Rounded_MT_Bold:Regular',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#2b2f3d] text-[12px] w-[299px]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="css-4hzbpn leading-[normal]">{`Ir para conteúdo     Ir para busca        Acessibilidade`}</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[18px]">
      <div className="absolute inset-[-4.29%_-2.78%_-4.29%_-4.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2515 19">
          <g id="Group 5261">
            <path d={svgPaths.p1b2c2f00} id="Vector" stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="14.7515" cy="13.75" fill="var(--fill-0, #58B24D)" id="Ellipse 227" r="4.25" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconeNotificacao() {
  return (
    <div className="content-stretch flex items-center p-[7px] relative shrink-0" data-name="ícone  - notificação">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 h-[14.061px] ml-0 mt-0 relative row-1 w-[10.936px]" data-name="Vector">
        <div className="absolute inset-[-3.56%_-4.57%]" style={{ "--fill-0": "rgba(22, 96, 149, 1)", "--stroke-0": "rgba(22, 96, 149, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.936 15.0606">
            <g id="Vector">
              <path d={svgPaths.pe0b080} fill="var(--fill-0, #166095)" />
              <path d={svgPaths.p3cacec00} fill="var(--fill-0, #166095)" />
              <path d={svgPaths.pe0b080} stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3cacec00} stroke="var(--stroke-0, #166095)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
      <div className="col-1 css-g0mm18 flex flex-col font-['Arial_Rounded_MT_Bold:Regular',sans-serif] justify-center ml-[18px] mt-[7px] not-italic relative row-1 text-[#166095] text-[12px] text-justify tracking-[0.42px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[normal]">Cristiana</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group4 />
    </div>
  );
}

function Rodrigo() {
  return (
    <div className="content-stretch flex h-[30px] items-center px-[10px] py-0 relative rounded-[100px] shrink-0 w-[100px]" data-name="Rodrigo">
      <div aria-hidden="true" className="absolute border-[#166095] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[142px]">
      <IconeNotificacao />
      <Rodrigo />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-[1520px]">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f5f9ff] content-stretch flex flex-col inset-[0_0_63.57%_0] items-center px-[157px] py-[8px]">
      <Frame3 />
    </div>
  );
}

function BarraDeAcessibilidade() {
  return (
    <div className="absolute contents inset-[0_0_63.57%_0]" data-name="Barra de acessibilidade">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="col-1 content-stretch flex font-['Arial_Rounded_MT_Bold:Regular',sans-serif] gap-[61px] items-center ml-0 mt-0 not-italic relative row-1 text-[#2b2f3d] text-[14px] text-center tracking-[3.5px]">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="css-ew64yg leading-[normal]">GLBOARD</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="css-ew64yg leading-[normal]">THINKTEST</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="css-ew64yg leading-[normal]">THINKLIB</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="css-ew64yg leading-[normal]">THINKCLASS</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <Frame5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <Group2 />
    </div>
  );
}

function BarraDosSistemas() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[282px] mt-[21.25px] relative row-1" data-name="Barra dos sistemas">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <BarraDosSistemas />
      <div className="col-1 css-g0mm18 flex flex-col font-['Arial_Rounded_MT_Bold:Regular',sans-serif] justify-center ml-[104.5px] mt-[28px] not-italic relative row-1 text-[#781d1c] text-[48px] text-center translate-x-[-50%] translate-y-[-50%]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="css-ew64yg leading-[normal]">GLBoard</p>
      </div>
    </div>
  );
}

function NavbarDosSistemas() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex h-[82px] items-center px-0 py-[12px] relative shrink-0 w-[1720px]" data-name="Navbar dos sistemas">
      <Group3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[82px] items-end justify-center left-0 top-[47px] w-[1920px]">
      <NavbarDosSistemas />
    </div>
  );
}

export default function Group6() {
  return (
    <div className="relative size-full">
      <BarraDeAcessibilidade />
      <Frame1 />
    </div>
  );
}