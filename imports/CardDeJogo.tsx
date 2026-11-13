import svgPaths from "./svg-n7xd7g5q0i";
import imgCardDeJogo from "figma:asset/a03dab28adab42220d7ea1adc2f5b3de30519349.png";

export default function CardDeJogo() {
  return (
    <div className="bg-[#fdfdfd] overflow-clip relative rounded-[10px] shadow-[0px_2px_4.4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Card de jogo">
      <div className="-translate-x-1/2 absolute h-[192px] left-[calc(50%+0.5px)] rounded-tl-[5px] rounded-tr-[5px] top-0 w-[273px]" data-name="image 6">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[5px] rounded-tr-[5px]">
          <img alt="" className="absolute max-w-none object-cover rounded-tl-[5px] rounded-tr-[5px] size-full" src={imgCardDeJogo} />
          <div className="absolute bg-gradient-to-b from-[9%] from-[rgba(0,0,0,0.22)] inset-0 rounded-tl-[5px] rounded-tr-[5px] to-[rgba(0,0,0,0.45)] via-1/2 via-[rgba(0,0,0,0)]" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[5px] items-start leading-[0] left-[10px] top-[207px] w-[198px]">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(13,12,11,0.8)] tracking-[0.56px] w-[min-content]">
          <p className="leading-[normal] whitespace-pre-wrap">Operação Lovelace</p>
        </div>
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-[rgba(90,24,154,0.8)] tracking-[0.35px] w-[min-content]">
          <p className="leading-[normal] whitespace-pre-wrap">{`Algoritmos & Pensamento Computacional`}</p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avaliação">
          <div className="col-1 flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 text-[#eaae31] text-[12.159px] tracking-[0.4256px] w-[20.671px]">
            <p className="leading-[normal] whitespace-pre-wrap">4,5</p>
          </div>
          <div className="col-1 ml-[20.67px] mt-[0.59px] relative row-1 size-[17.059px]">
            <div className="absolute inset-[14.43%_15.84%_19.96%_15.84%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6553 11.1935">
                <path d={svgPaths.paf2c080} fill="var(--fill-0, #EAAE31)" id="Star 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#58b24d] content-stretch flex h-[20px] items-center justify-center left-[10px] p-[10px] rounded-[100px] top-[10px]" data-name="tag GLA">
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fdfdfd] text-[14px] tracking-[0.49px] whitespace-nowrap">
          <p className="leading-[normal]">Novo</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex h-[30px] items-center justify-center left-[calc(50%+0.5px)] p-[10px] rounded-[100px] top-[288.17px] w-[135px]" data-name="botão jogue agora">
        <div aria-hidden="true" className="absolute border border-[#166095] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#166095] text-[16px] text-center tracking-[0.56px] whitespace-nowrap">
          <p className="leading-[normal]">Jogue agora</p>
        </div>
      </div>
      <div className="absolute flex h-[6.126px] items-center justify-center left-[209.62px] top-[176.53px] w-[22.378px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[22.378px] relative w-[6.126px]" data-name="opções">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.12598 22.3779">
              <g id="opÃ§Ãµes">
                <circle cx="3.06299" cy="3.06299" fill="var(--fill-0, #FDFDFD)" id="Ellipse 233" r="3.06299" />
                <circle cx="3.06299" cy="11.189" fill="var(--fill-0, #FDFDFD)" id="Ellipse 234" r="3.06299" />
                <circle cx="3.06299" cy="19.3149" fill="var(--fill-0, #FDFDFD)" id="Ellipse 235" r="3.06299" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}