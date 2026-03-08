// const imgFrame527331 = "/images/placeholders/frame527331.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Arial_Rounded_MT_Bold:Regular',sans-serif] relative shrink-0 text-[#b68a2f] text-[24px] w-full">Análise e Visualização</p>
      <p className="css-4hzbpn font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#394151] text-[16px] w-full">Visualize gráficos e obtenha insights com os dashboards</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 pb-[16px] pt-[40px] px-[24px] rounded-[10px] top-[29.78px] w-[242px]">
      <div aria-hidden="true" className="absolute border border-[#d2d5db] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#eaae31] content-stretch flex flex-col h-[60px] items-center justify-center left-1/2 px-[20px] py-[9px] rounded-[30px] top-0 translate-x-[-50%]">
      <p className="css-ew64yg font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[36px] text-center text-white">5</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 h-[230px] ml-0 mt-0 relative row-1 w-[242px]">
      <Frame2 />
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Frame3 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative size-full">
      <div className="aspect-[373.07415771484375/253.22000122070312] relative shrink-0 w-full" data-name="Frame 52733 1">
        {/* <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame527331} /> */}
      </div>
      <Group />
    </div>
  );
}