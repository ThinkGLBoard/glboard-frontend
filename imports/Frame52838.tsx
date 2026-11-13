function Frame() {
  return (
    <div className="absolute bg-[#fdfdfd] h-[26px] left-[52px] top-[64px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[17.333px] relative">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#166095] text-[20.8px] tracking-[0.728px]">Componente currícular</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[64px]">
      <div className="absolute bg-[#fdfdfd] border border-[rgba(112,111,111,0.25)] border-solid h-[352px] left-0 rounded-[10px] top-[76px] w-[1123px]" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#fdfdfd] inset-[-16%_78.04%_86%_3.53%]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[10px] relative">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#706f6f] text-[15px] tracking-[0.525px]">Currículo</p>
        </div>
      </div>
    </div>
  );
}

function CadastroDeJogosObjetivoDeConhecimento() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Cadastro de jogos - Objetivo de Conhecimento">
      <div className="absolute bg-[#fdfdfd] border border-[rgba(112,111,111,0.25)] border-solid inset-[0_-96.08%_0_0] rounded-[5px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[30%_20.34%_22%_5.74%] leading-[normal] not-italic text-[16px] text-[rgba(13,12,11,0.8)] tracking-[0.56px]">{`Gêneros Textuais e  Variedades Linguísticas.`}</p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#fdfdfd] inset-[-16%_81.37%_86%_3.33%]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[10px] relative">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#706f6f] text-[15px] tracking-[0.525px]">Código</p>
        </div>
      </div>
    </div>
  );
}

function CadastroDeJogosObjetivoDeConhecimento1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Cadastro de jogos - Objetivo de Conhecimento">
      <div className="absolute bg-[#fdfdfd] border border-[rgba(112,111,111,0.25)] border-solid inset-[0_-96.08%_0_0] rounded-[5px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[30%_20.34%_22%_5.74%] leading-[normal] not-italic text-[16px] text-[rgba(13,12,11,0.8)] tracking-[0.56px]">{`Gêneros Textuais e  Variedades Linguísticas.`}</p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#fdfdfd] inset-[-16%_76.67%_86%_3.73%]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[10px] relative">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#706f6f] text-[15px] tracking-[0.525px]">Descrição</p>
        </div>
      </div>
    </div>
  );
}

function CadastroDeJogosObjetivoDeConhecimento2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Cadastro de jogos - Objetivo de Conhecimento">
      <div className="absolute bg-[#fdfdfd] border border-[rgba(112,111,111,0.25)] border-solid inset-[0_-96.08%_-76%_0] rounded-[5px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[30%_20.34%_22%_5.74%] leading-[normal] not-italic text-[16px] text-[rgba(13,12,11,0.8)] tracking-[0.56px]">{`Gêneros Textuais e  Variedades Linguísticas.`}</p>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[52px] top-[128px] w-[510px]">
      <CadastroDeJogosObjetivoDeConhecimento />
      <CadastroDeJogosObjetivoDeConhecimento1 />
      <CadastroDeJogosObjetivoDeConhecimento2 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white relative size-full">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[calc(50%-560.5px)] not-italic text-[#166095] text-[20.8px] top-0 tracking-[0.728px]">Currículo</p>
      <Group />
      <Frame4 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#706f6f] text-[15px] top-[24px] tracking-[0.525px]">Se o jogo se alinha com a BNCC ou outro framework, conte aqui</p>
    </div>
  );
}