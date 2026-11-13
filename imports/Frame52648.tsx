import imgFrame526310 from "figma:asset/585ca1c8f3fa37131c5310b71cdd31fa40bead2e.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 w-[627px]">
      <p className="css-4hzbpn font-['Arial_Rounded_MT_Bold:Regular',sans-serif] leading-[0] relative shrink-0 text-[#2b2f3d] text-[30px] w-full">
        <span className="leading-[normal]">{`O que é o `}</span>
        <span className="leading-[normal] text-[#901a19]">GLBoard</span>
        <span className="leading-[normal]">?</span>
      </p>
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#364153] text-[16px] w-full">Uma plataforma de Game Learning Analytics que permite modelar quais dados coletar, capturar logs durante o jogo e analisar o aprendizado por meio de dashboards e gráficos interativos. Com um agente conversacional baseado em IA, você recebe orientação em cada etapa do processo.</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[167px] items-center justify-center px-0 py-[128px] relative size-full">
      <div className="h-[391px] relative shrink-0 w-[558px]" data-name="Frame 5263 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame526310} />
      </div>
      <Frame />
    </div>
  );
}