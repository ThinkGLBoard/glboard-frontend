// const imgImage19 = "/images/placeholders/image19.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start leading-0 not-italic relative shrink-0 w-129.75">
      <div className="css-g0mm18 font-['Arial_Rounded_MT_Bold:Regular',sans-serif] relative shrink-0 text-[#781d1c] text-[36px]">
        <p className="css-ew64yg mb-0">
          <span className="leading-[normal] text-[#2b2f3d]">Bem-vindo(a) ao</span>
          <span className="leading-[normal]"> </span>
        </p>
        <p className="css-ew64yg leading-[normal]">GLBoard</p>
      </div>
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] min-w-full relative shrink-0 text-[#2b2f3d] text-[0px] w-min">
        <span className="leading-[normal]">Transforme dados do seu jogo educacional em</span>
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[normal] text-[#ae1b19]">{`insights poderosos`}</span>
        <span className="leading-[normal]">{`sobre a aprendizagem dos seus alunos`}</span>
      </p>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#901a19] content-stretch flex items-center justify-center px-8 py-2.5 relative rounded-[30px] shrink-0" data-name="Primary Button">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white">Inicie sua jornada aqui</p>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-center px-8.25 py-2.5 relative rounded-[30px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#706f6f] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#706f6f] text-[14px] text-center">Ver como funciona</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-4 items-start relative shrink-0">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-16 h-full items-start justify-center relative shrink-0">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-15 h-98 items-center justify-center relative shrink-0 w-full">
      <Frame2 />
      <div className="h-141.5 relative shrink-0 w-208.25" data-name="image 19">
        {/* <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage19} /> */}
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#fdf2f2] content-stretch flex flex-col items-start justify-center pl-50 pr-63.5 py-32.5 relative size-full">
      <Frame4 />
    </div>
  );
}