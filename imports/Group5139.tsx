export default function Group() {
  return (
    <div className="not-italic relative size-full text-[rgba(13,12,11,0.8)]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[15px] left-[calc(50%-563px)] text-[22px] top-0 tracking-[0.77px]">Detalhes do jogo</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[calc(50%-563px)] text-[16px] top-[30px] tracking-[0.56px] w-[1126px] whitespace-pre-wrap">Preencha as informações básicas do seu jogo, como nome, gênero, tipo, público e duração. Isso ajuda a apresentar rapidamente o perfil do jogo.</p>
    </div>
  );
}