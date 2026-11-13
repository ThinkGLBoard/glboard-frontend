import imgImage19 from "figma:asset/8c4a5dda185a30651dead8d54ea11dbdac58610d.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 w-[519px]">
      <div className="css-g0mm18 font-['Arial_Rounded_MT_Bold:Regular',sans-serif] relative shrink-0 text-[#781d1c] text-[36px]">
        <p className="css-ew64yg mb-0">
          <span className="leading-[normal] text-[#2b2f3d]">Bem-vindo(a) ao</span>
          <span className="leading-[normal]"> </span>
        </p>
        <p className="css-ew64yg leading-[normal]">GLBoard</p>
      </div>
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] min-w-full relative shrink-0 text-[#2b2f3d] text-[0px] text-[16px] w-[min-content]">
        <span className="leading-[normal]">Transforme dados do seu jogo educacional em</span>
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[normal] text-[#ae1b19]">{` insights poderosos`}</span>
        <span className="leading-[normal]">{` sobre a aprendizagem dos seus alunos`}</span>
      </p>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#901a19] content-stretch flex items-center justify-center px-[32px] py-[10px] relative rounded-[30px] shrink-0" data-name="Primary Button">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white">Inicie sua jornada aqui</p>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-center px-[33px] py-[10px] relative rounded-[30px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#706f6f] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#706f6f] text-[14px] text-center">Ver como funciona</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-full items-start justify-center relative shrink-0">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[60px] h-[392px] items-center justify-center relative shrink-0 w-full">
      <Frame2 />
      <div className="h-[566px] relative shrink-0 w-[833px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage19} />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#fdf2f2] content-stretch flex flex-col items-start justify-center pl-[200px] pr-[254px] py-[130px] relative size-full">
      <Frame4 />
    </div>
  );
}