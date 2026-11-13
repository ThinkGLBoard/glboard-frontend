import svgPaths from "./svg-flytcjaaqw";

function Frame() {
  return (
    <div className="absolute bg-[#fdfdfd] inset-[48.45%_83.06%_48.27%_8.62%]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[10px] relative">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#706f6f] text-[15px] tracking-[0.525px]">Descrição</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#fdfdfd] inset-[-16%_82.87%_86%_4.58%]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[10px] relative">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#706f6f] text-[15px] tracking-[0.525px]">Título</p>
        </div>
      </div>
    </div>
  );
}

function CadastroDeJogosComponente() {
  return (
    <div className="absolute h-[50px] left-[84.63px] top-[149.4px] w-[510px]" data-name="Cadastro de jogos - Componente">
      <div className="absolute bg-[#fdfdfd] border border-[rgba(112,111,111,0.25)] border-solid inset-[0_-96.08%_0_0] rounded-[5px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[30%_77.4%_30%_5.74%] leading-[20px] not-italic text-[16px] text-[rgba(13,12,11,0.8)] tracking-[0.56px]">Português</p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#fdfdfd] h-[26px] left-[84.63px] top-[99.4px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[17.333px] relative">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#166095] text-[20.8px] tracking-[0.728px]">Etapa 1</p>
        </div>
      </div>
    </div>
  );
}

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

export default function Frame3() {
  return (
    <div className="bg-white relative size-full">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[calc(50%-567.37px)] not-italic text-[#166095] text-[20.8px] top-[32px] tracking-[0.728px]">Etapas do Jogo</p>
      <div className="absolute bg-[#fdfdfd] border border-[rgba(112,111,111,0.25)] border-solid h-[250px] left-[33px] rounded-[10px] top-[111px] w-[1123px]" />
      <div className="absolute bg-[#fdfdfd] border border-[rgba(112,111,111,0.25)] border-solid inset-[50.11%_9.73%_29.76%_7.07%] rounded-[5px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[53.48%_59.16%_41.27%_9.48%] leading-[normal] not-italic text-[16px] text-[rgba(13,12,11,0.8)] tracking-[0.56px]">{`Gêneros Textuais e  Variedades Linguísticas.`}</p>
      <Frame />
      <CadastroDeJogosComponente />
      <Frame2 />
      <div className="absolute h-[40px] left-[33px] top-[385px] w-[160px]" data-name="Adicionar">
        <div className="absolute bg-[#166095] border-0 border-[rgba(0,0,0,0.25)] border-solid inset-0 rounded-[5px]" />
        <Group />
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[34px] not-italic text-[#706f6f] text-[15px] top-[60px] tracking-[0.525px]">Adicione as etapas do jogo na ordem que acontecem</p>
    </div>
  );
}