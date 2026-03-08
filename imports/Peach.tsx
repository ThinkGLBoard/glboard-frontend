import svgPaths from "./svg-uld7rw645p";
import clsx from "clsx";
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return <Wrapper5 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper5>;
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper5 additionalClassNames={clsx("h-[36px] relative shrink-0", additionalClassNames)}>{children}</Wrapper5>;
}

function Icon13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Group36VectorProps = {
  additionalClassNames?: string;
};

function Group36Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<Group36VectorProps>) {
  return (
    <div className={clsx("absolute bottom-[30.63%] top-1/2", additionalClassNames)}>
      <div className="absolute inset-[-0.7%_-0.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.887 62.866">
          {children}
        </svg>
      </div>
    </div>
  );
}
type Icon12Props = {
  additionalClassNames?: string;
};

function Icon12({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon12Props>) {
  return (
    <div className={clsx("absolute size-[32px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[26.56%_80.24%_10.94%_14.56%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 200">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 240">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type BadgeTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BadgeText({ text, additionalClassNames = "" }: BadgeTextProps) {
  return (
    <div className={clsx("h-[21.587px] relative rounded-[10px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <Wrapper5 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#333] text-[14px] text-nowrap top-[-1.2px]">{text}</p>
    </Wrapper5>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#555] text-[12px]">{text}</p>
    </div>
  );
}
type DataAnalysisDashboardText2Props = {
  text: string;
};

function DataAnalysisDashboardText2({ text }: DataAnalysisDashboardText2Props) {
  return (
    <div className="absolute h-[24px] left-[25.6px] top-[93.6px] w-[560.8px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#555] text-[16px] text-nowrap top-[-2.2px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <Wrapper5 additionalClassNames={clsx("h-[28px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#333] text-[18px] text-nowrap top-[-1.4px]">{text}</p>
    </Wrapper5>
  );
}
type Text6Props = {
  text: string;
  additionalClassNames?: string;
};

function Text6({ text, additionalClassNames = "" }: Text6Props) {
  return (
    <div className={clsx("flex-none h-[12px] rotate-[90deg]", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#555] text-[10px] text-nowrap">{text}</p>
    </div>
  );
}
type Text5Props = {
  text: string;
  additionalClassNames?: string;
};

function Text5({ text, additionalClassNames = "" }: Text5Props) {
  return (
    <div className={clsx("absolute bottom-[47.81%] flex items-center justify-center top-1/2", additionalClassNames)}>
      <Text6 text={text} additionalClassNames="w-[7px]" />
    </div>
  );
}

function Group21() {
  return (
    <Wrapper additionalClassNames="inset-[14.06%_21.94%_10.94%_72.87%]">
      <path d="M0 0H29V240H0V0Z" fill="var(--fill-0, #6EA16E)" id="Vector" />
    </Wrapper>
  );
}

function Group20() {
  return (
    <Wrapper additionalClassNames="inset-[14.06%_51.09%_10.94%_43.72%]">
      <path d="M0 0H29V240H0V0Z" fill="var(--fill-0, #E86C65)" id="Vector" />
    </Wrapper>
  );
}

function Group19() {
  return (
    <Wrapper1>
      <path d="M0 0H29V200H0V0Z" fill="var(--fill-0, #7A63FF)" id="Vector" />
    </Wrapper1>
  );
}
type Vector1Props = {
  additionalClassNames?: string;
};

function Vector1({ additionalClassNames = "" }: Vector1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
        </svg>
      </div>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ additionalClassNames = "" }: VectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
        </svg>
      </div>
    </div>
  );
}
type DataAnalysisDashboardText1Props = {
  text: string;
};

function DataAnalysisDashboardText1({ text }: DataAnalysisDashboardText1Props) {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[558.4px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#333] text-[20px] text-nowrap top-[-2.2px]">{text}</p>
    </div>
  );
}
type DataAnalysisDashboardTextProps = {
  text: string;
};

function DataAnalysisDashboardText({ text }: DataAnalysisDashboardTextProps) {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[25.6px] top-[205.6px] w-[242.8px]">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">{text}</p>
    </div>
  );
}
type PrimitiveButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PrimitiveButtonText({ text, additionalClassNames = "" }: PrimitiveButtonTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[28.6px] items-center justify-center px-[8.8px] py-[4.8px] rounded-[12px] top-[5.3px] w-[206.4px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] text-center text-nowrap">{text}</p>
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper2 additionalClassNames="absolute left-[12px] top-[10px]">
      <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper2>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="absolute h-[20px] left-[25.6px] top-[157.6px] w-[242.8px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#555] text-[14px] text-nowrap top-[-1.2px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <Wrapper5 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#555] text-[14px] text-nowrap top-[-1.2px]">{text}</p>
    </Wrapper5>
  );
}

function Icon() {
  return (
    <Wrapper2 additionalClassNames="relative shrink-0">
      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #555555)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper2>
  );
}

function Text() {
  return (
    <Wrapper4 additionalClassNames="h-[20px] w-[101.338px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e86c65] text-[14px] text-nowrap top-[-1.2px]">Relatório PEACH</p>
    </Wrapper4>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[135.6px] top-[32px] w-[1248px]" data-name="Container">
      <TextText text="Relatórios" additionalClassNames="w-[61.15px]" />
      <Icon />
      <TextText text="Interface do Jogo Educativo" additionalClassNames="w-[171.363px]" />
      <Icon />
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#333] text-[30px] text-nowrap top-[-2.6px]">Relatório PEACH</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#555] text-[16px] top-[-2.2px] w-[295px]">Interface do Jogo Educativo – 08/01/2026</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[68px] relative shrink-0 w-[294.087px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Button() {
  return (
    <Wrapper3 additionalClassNames="bg-[#e86c65] rounded-[10px] w-[139.3px]">
      <Icon1 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[86.5px] not-italic text-[14px] text-center text-nowrap text-white top-[6.8px] translate-x-[-50%]">Exportar PDF</p>
    </Wrapper3>
  );
}

function Button1() {
  return (
    <Wrapper3 additionalClassNames="bg-[#6ea16e] rounded-[10px] w-[145.813px]">
      <Icon1 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[89px] not-italic text-[14px] text-center text-nowrap text-white top-[6.8px] translate-x-[-50%]">Exportar Excel</p>
    </Wrapper3>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[293.113px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-start justify-between left-[135.6px] top-[76px] w-[1248px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16px] shrink-0 w-[1248px]" data-name="Tab List">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveButtonText text="Relatório Geral" additionalClassNames="bg-[#f3f3f3] left-[4.8px]" />
        <PrimitiveButtonText text="Pontos de Revisão" additionalClassNames="left-[211.2px]" />
        <PrimitiveButtonText text="Comentários" additionalClassNames="left-[417.6px]" />
        <PrimitiveButtonText text="Aprendizagem Multimídia" additionalClassNames="left-[624px]" />
        <PrimitiveButtonText text="Game Design" additionalClassNames="left-[830.4px]" />
        <PrimitiveButtonText text="UX/UI Design" additionalClassNames="left-[1036.8px]" />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <Icon12 additionalClassNames="left-[24.8px] top-[24.8px]">
      <path d={svgPaths.p8f03b40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p3fb33600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </Icon12>
  );
}

function DataAnalysisDashboard() {
  return (
    <div className="absolute h-[36px] left-[24.8px] top-[92.8px] w-[244.4px]" data-name="DataAnalysisDashboard">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-2.6px]">5.7</p>
    </div>
  );
}

function DataAnalysisDashboard1() {
  return (
    <div className="absolute h-[20px] left-[24.8px] opacity-90 top-[156.8px] w-[244.4px]" data-name="DataAnalysisDashboard">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px]">Pontuação Geral</p>
    </div>
  );
}

function DataAnalysisDashboard2() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[24.8px] opacity-75 top-[204.8px] w-[244.4px]" data-name="DataAnalysisDashboard">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">de 7.0</p>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#e86c65] h-[247.188px] justify-self-stretch relative rounded-[16px] shrink-0 to-[#f5867e]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon2 />
      <DataAnalysisDashboard />
      <DataAnalysisDashboard1 />
      <DataAnalysisDashboard2 />
    </div>
  );
}

function Icon3() {
  return (
    <Icon12 additionalClassNames="left-[25.6px] top-[25.6px]">
      <path d={svgPaths.p21613280} id="Vector" stroke="var(--stroke-0, #E86C65)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p1adb0100} id="Vector_2" stroke="var(--stroke-0, #E86C65)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </Icon12>
  );
}

function DataAnalysisDashboard3() {
  return (
    <div className="absolute h-[36px] left-[25.6px] top-[93.6px] w-[242.8px]" data-name="DataAnalysisDashboard">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#e86c65] text-[30px] top-[-2.6px] w-[77px]">15/15</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[247.188px] justify-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e86c65] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon3 />
      <DataAnalysisDashboard3 />
      <Text4 text="Progresso" />
      <DataAnalysisDashboardText text="itens respondidos" />
    </div>
  );
}

function Icon4() {
  return (
    <Icon12 additionalClassNames="left-[25.6px] top-[25.6px]">
      <path d={svgPaths.p18cb7e80} id="Vector" stroke="var(--stroke-0, #6EA16E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p26c56780} id="Vector_2" stroke="var(--stroke-0, #6EA16E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </Icon12>
  );
}

function DataAnalysisDashboard4() {
  return (
    <div className="absolute h-[36px] left-[25.6px] top-[93.6px] w-[242.8px]" data-name="DataAnalysisDashboard">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#6ea16e] text-[30px] text-nowrap top-[-2.6px]">11</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-white h-[247.188px] justify-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#6ea16e] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon4 />
      <DataAnalysisDashboard4 />
      <Text4 text="Aspectos Positivos" />
      <DataAnalysisDashboardText text="identificados" />
    </div>
  );
}

function Icon5() {
  return (
    <Icon12 additionalClassNames="left-[25.6px] top-[25.6px]">
      <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #F9C7A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M16 10.6667V16" id="Vector_2" stroke="var(--stroke-0, #F9C7A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M16 21.3333H16.0133" id="Vector_3" stroke="var(--stroke-0, #F9C7A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </Icon12>
  );
}

function DataAnalysisDashboard5() {
  return (
    <div className="absolute h-[36px] left-[25.6px] top-[93.6px] w-[242.8px]" data-name="DataAnalysisDashboard">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#f9c7a0] text-[30px] text-nowrap top-[-2.6px]">1</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="[grid-area:1_/_4] bg-white h-[247.188px] justify-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#f9c7a0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon5 />
      <DataAnalysisDashboard5 />
      <Text4 text="Problemas" />
      <DataAnalysisDashboardText text="identificados" />
    </div>
  );
}

function DataAnalysisDashboard6() {
  return (
    <div className="h-[247.188px] relative shrink-0 w-full" data-name="DataAnalysisDashboard">
      <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <Card />
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.56%_0.9%_10.94%_11.65%]" data-name="Group">
      <div className="absolute inset-[-0.18%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 281">
          <g id="Group">
            <path d="M0 280.5H488" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M0 200.5H488" id="Vector_2" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M0 120.5H488" id="Vector_3" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M0 40.5H488" id="Vector_4" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M0 0.5H488" id="Vector_5" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.56%_0.9%_10.94%_11.65%]" data-name="Group">
      <div className="absolute inset-[0_-0.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 489 280">
          <g id="Group">
            <path d="M81.8333 0V280" id="Vector" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M244.5 0V280" id="Vector_2" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M407.167 0V280" id="Vector_3" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M0.5 0V280" id="Vector_4" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
            <path d="M488.5 0V280" id="Vector_5" stroke="var(--stroke-0, #E5E5E5)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[1.56%_0.9%_10.94%_11.65%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[89.06%_60.87%_4.84%_13.32%]" data-name="Group">
      <Vector additionalClassNames="inset-[89.06%_73.78%_9.06%_26.22%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[90.47%_60.87%_4.84%_13.32%] leading-[normal] not-italic text-[#555] text-[12px] text-center text-nowrap">Aprendizagem Multimídia</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[89.06%_37.81%_4.84%_48.57%]" data-name="Group">
      <Vector additionalClassNames="inset-[89.06%_44.62%_9.06%_55.38%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[90.47%_37.81%_4.84%_48.57%] leading-[normal] not-italic text-[#555] text-[12px] text-center text-nowrap">Game Design</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[89.06%_8.66%_4.84%_77.72%]" data-name="Group">
      <Vector additionalClassNames="inset-[89.06%_15.47%_9.06%_84.53%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[90.47%_8.66%_4.84%_77.72%] leading-[normal] not-italic text-[#555] text-[12px] text-center text-nowrap">UX/UI Design</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[89.06%_8.66%_4.84%_13.32%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[89.06%_0.9%_4.84%_11.65%]" data-name="Group">
      <div className="absolute inset-[89.06%_0.9%_10.94%_11.65%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 1">
            <path d="M0 0.5H488" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[86.64%_88.35%_8.67%_8.78%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[89.06%_88.35%_10.94%_10.57%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.64%_89.78%_8.67%_8.78%] leading-[normal] not-italic text-[#555] text-[12px] text-nowrap text-right">0</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[61.64%_88.35%_33.67%_8.78%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[64.06%_88.35%_35.94%_10.57%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.64%_89.78%_33.67%_8.78%] leading-[normal] not-italic text-[#555] text-[12px] text-nowrap text-right">2</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[36.64%_88.35%_58.67%_8.78%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[39.06%_88.35%_60.94%_10.57%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.64%_89.78%_58.67%_8.78%] leading-[normal] not-italic text-[#555] text-[12px] text-nowrap text-right">4</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[11.64%_88.35%_83.67%_8.78%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[14.06%_88.35%_85.94%_10.57%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[11.64%_89.78%_83.67%_8.78%] leading-[normal] not-italic text-[#555] text-[12px] text-nowrap text-right">6</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[0.39%_88.35%_94.92%_8.96%]" data-name="Group">
      <Vector1 additionalClassNames="inset-[1.56%_88.35%_98.44%_10.57%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.39%_89.78%_94.92%_8.96%] leading-[normal] not-italic text-[#555] text-[12px] text-nowrap text-right">7</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[0.39%_88.35%_8.67%_8.78%]" data-name="Group">
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0.39%_88.35%_8.67%_8.78%]" data-name="Group">
      <div className="absolute inset-[1.56%_88.35%_10.94%_11.65%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 280">
            <path d="M0.5 0V280" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <Wrapper1>
      <path d={svgPaths.p340a2180} fill="var(--fill-0, #7A63FF)" id="Vector" />
    </Wrapper1>
  );
}

function Group16() {
  return (
    <Wrapper additionalClassNames="inset-[14.06%_51.09%_10.94%_43.72%]">
      <path d={svgPaths.p15afaf00} fill="var(--fill-0, #E86C65)" id="Vector" />
    </Wrapper>
  );
}

function Group17() {
  return (
    <Wrapper additionalClassNames="inset-[14.06%_21.94%_10.94%_72.87%]">
      <path d={svgPaths.p3e47d100} fill="var(--fill-0, #6EA16E)" id="Vector" />
    </Wrapper>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group19 />
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function RechartsBarR1() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="recharts-bar-:r26:">
      <Group23 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group19 />
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group24 />
    </div>
  );
}

function RechartsBarR2() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="recharts-bar-:r27:">
      <Group25 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group19 />
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function RechartsBarR3() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="recharts-bar-:r28:">
      <Group27 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="Group">
      <Group18 />
      <RechartsBarR1 />
      <RechartsBarR2 />
      <RechartsBarR3 />
    </div>
  );
}

function RechartsBarR() {
  return (
    <div className="absolute contents inset-[14.06%_21.94%_10.94%_14.56%]" data-name="recharts-bar-:r24:">
      <Group28 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute h-[320px] left-0 overflow-clip top-0 w-[558px]" data-name="Icon">
      <Group2 />
      <Group7 />
      <Group14 />
      <RechartsBarR />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[320px] left-[24.8px] top-[100.8px] w-[558px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Card4() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[445.6px] justify-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DataAnalysisDashboardText1 text="Medianas por Categoria" />
      <Container4 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[11.25%_30.75%_30.63%_30.75%]" data-name="Group">
      <div className="absolute inset-[38.93%_44.5%_44.46%_44.5%]" data-name="Vector">
        <div className="absolute inset-[-1.88%_-1.41%_-0.94%_-1.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.0961 54.6429">
            <path d={svgPaths.p1dc97000} id="Vector" stroke="var(--stroke-0, #E5E5E5)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.86%_39%_38.93%_39%]" data-name="Vector">
        <div className="absolute inset-[-0.94%_-0.71%_-0.47%_-0.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.46 107.786">
            <path d={svgPaths.p36f20d00} id="Vector" stroke="var(--stroke-0, #E5E5E5)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.79%_33.5%_33.39%_33.5%]" data-name="Vector">
        <div className="absolute inset-[-0.63%_-0.47%_-0.31%_-0.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.824 160.929">
            <path d={svgPaths.pfd101b0} id="Vector" stroke="var(--stroke-0, #E5E5E5)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[11.25%_30.75%_30.63%_30.75%]" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.4%_-0.27%_-0.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216.506 187.5">
            <path d={svgPaths.p3505c480} id="Vector" stroke="var(--stroke-0, #E5E5E5)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[11.25%_30.75%_30.63%_30.75%]" data-name="Group">
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[11.25%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 124">
            <path d="M0.5 124V0" id="Vector" stroke="var(--stroke-0, #E5E5E5)" />
          </svg>
        </div>
      </div>
      <Group36Vector additionalClassNames="left-1/2 right-[30.75%]">
        <path d={svgPaths.p3a47800} id="Vector" stroke="var(--stroke-0, #E5E5E5)" />
      </Group36Vector>
      <Group36Vector additionalClassNames="left-[30.75%] right-1/2">
        <path d={svgPaths.p29227f00} id="Vector" stroke="var(--stroke-0, #E5E5E5)" />
      </Group36Vector>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[11.25%_30.75%_30.63%_30.75%]" data-name="Group">
      <Group29 />
      <Group30 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[5.31%_38.17%_88.75%_38.17%]" data-name="Group">
      <div className="absolute bottom-[88.75%] left-1/2 right-1/2 top-[8.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[5.31%_38.17%_90.63%_38.17%] leading-[normal] not-italic text-[#555] text-[11px] text-center text-nowrap">Aprendizagem Multimídia</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[68.41%_5.14%_27.53%_69.25%]" data-name="Group">
      <div className="absolute inset-[69.38%_29.51%_29.38%_69.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[68.41%_5.14%_27.53%_70.49%] leading-[normal] not-italic text-[#555] text-[11px] text-nowrap">Game Design Educacional</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[68.41%_69.25%_27.53%_16.97%]" data-name="Group">
      <div className="absolute inset-[69.38%_69.25%_29.38%_29.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[68.41%_70.49%_27.53%_16.97%] leading-[normal] not-italic text-[#555] text-[11px] text-nowrap text-right">UX/UI Design</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[5.31%_5.14%_27.53%_16.97%]" data-name="Group">
      <Group32 />
      <Group33 />
      <Group34 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[5.31%_5.14%_27.53%_16.97%]" data-name="Group">
      <div className="absolute inset-[11.25%_30.75%_30.63%_30.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group35 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute bottom-[47.81%] contents left-[49.64%] right-[48.21%] top-1/2" data-name="Group">
      <Text5 text="0" additionalClassNames="left-[49.64%] right-[48.21%]" />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute bottom-[47.81%] contents left-[55.99%] right-[41.86%] top-1/2" data-name="Group">
      <Text5 text="2" additionalClassNames="left-[55.99%] right-[41.86%]" />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[47.81%] contents left-[62.34%] right-[35.51%] top-1/2" data-name="Group">
      <Text5 text="4" additionalClassNames="left-[62.34%] right-[35.51%]" />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-[47.81%] contents left-[68.69%] right-[29.16%] top-1/2" data-name="Group">
      <Text5 text="6" additionalClassNames="left-[68.69%] right-[29.16%]" />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute bottom-[48.12%] contents left-[71.86%] right-[25.99%] top-1/2" data-name="Group">
      <div className="absolute bottom-[48.12%] flex items-center justify-center left-[71.86%] right-[25.99%] top-1/2">
        <Text6 text="7" additionalClassNames="w-[6px]" />
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute bottom-[47.81%] contents left-[49.64%] right-[25.99%] top-1/2" data-name="Group">
      <Group37 />
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute bottom-[47.81%] contents left-[49.64%] right-[25.99%] top-1/2" data-name="Group">
      <div className="absolute bottom-1/2 left-1/2 right-[27.78%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 1">
            <path d="M0 0.5H124" id="Vector" stroke="var(--stroke-0, #CCCCCC)" />
          </svg>
        </div>
      </div>
      <Group42 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[22.32%_33.5%_33.39%_33.5%]" data-name="Group">
      <div className="absolute inset-[22.32%_33.5%_33.39%_33.5%]" data-name="recharts-radar-:r25:">
        <div className="absolute inset-[-0.65%_-0.5%_-0.35%_-0.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.934 143.132">
            <path d={svgPaths.p35f70000} fill="var(--fill-0, #E86C65)" fillOpacity="0.5" id="recharts-radar-:r25:" stroke="var(--stroke-0, #E86C65)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[22.32%_33.5%_33.39%_33.5%]" data-name="Group">
      <Group44 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[320px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group31 />
      <Group36 />
      <Group43 />
      <Group45 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[320px] items-start left-[24.8px] top-[100.8px] w-[558px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Card5() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[445.6px] justify-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DataAnalysisDashboardText1 text="Radar PEACH" />
      <Container5 />
    </div>
  );
}

function DataAnalysisDashboard7() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[445.6px] relative shrink-0 w-full" data-name="DataAnalysisDashboard">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Icon8() {
  return (
    <Icon13>
      <path d="M16 7H22V13" id="Vector" stroke="var(--stroke-0, #6EA16E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p13253c0} id="Vector_2" stroke="var(--stroke-0, #6EA16E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon13>
  );
}

function DataAnalysisDashboard8() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[25.6px] top-[25.6px] w-[560.8px]" data-name="DataAnalysisDashboard">
      <Icon8 />
      <HeadingText text="Melhor Aspecto" additionalClassNames="w-[126.063px]" />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#6ea16e] h-[12px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container7() {
  return (
    <div className="basis-0 bg-[#e5e7eb] grow h-[12px] min-h-px min-w-px relative rounded-[2.68435e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-0 pr-[75.075px] py-0 relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <Wrapper4 additionalClassNames="h-[28px] w-[23.313px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#6ea16e] text-[18px] text-nowrap top-[-1.4px]">6.0</p>
    </Wrapper4>
  );
}

function DataAnalysisDashboard9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[25.6px] top-[153.6px] w-[560.8px]" data-name="DataAnalysisDashboard">
      <Container7 />
      <Text1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Feedback imediato" additionalClassNames="w-[116.813px]" />
      <BadgeText text="7" additionalClassNames="bg-[#6ea16e] w-[24.038px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Mecânicas e objetivos" additionalClassNames="w-[135.45px]" />
      <BadgeText text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Indicadores de progresso" additionalClassNames="w-[156.512px]" />
      <BadgeText text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Balanceamento de desafio" additionalClassNames="w-[162.588px]" />
      <BadgeText text="5" additionalClassNames="bg-[#f9c7a0] w-[24.263px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Elementos motivacionais" additionalClassNames="w-[152.488px]" />
      <BadgeText text="4" additionalClassNames="bg-[#99a1af] w-[24.525px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[139.938px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function DataAnalysisDashboard10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[184.725px] items-start left-[25.6px] pb-0 pt-[16.8px] px-0 top-[237.6px] w-[560.8px]" data-name="DataAnalysisDashboard">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ParagraphText text="Itens que influenciaram:" />
      <Container13 />
    </div>
  );
}

function Card6() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-r from-[rgba(110,161,110,0.1)] h-[447.925px] justify-self-stretch relative rounded-[16px] shrink-0 to-white" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#6ea16e] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DataAnalysisDashboard8 />
      <DataAnalysisDashboardText2 text="Game Design Educacional" />
      <DataAnalysisDashboard9 />
      <DataAnalysisDashboard10 />
    </div>
  );
}

function Icon9() {
  return (
    <Icon13>
      <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #F9C7A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #F9C7A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #F9C7A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon13>
  );
}

function DataAnalysisDashboard11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[25.6px] top-[25.6px] w-[560.8px]" data-name="DataAnalysisDashboard">
      <Icon9 />
      <HeadingText text="Pior Aspecto" additionalClassNames="w-[100.388px]" />
    </div>
  );
}

function Container14() {
  return <div className="bg-[#f9c7a0] h-[12px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container15() {
  return (
    <div className="basis-0 bg-[#e5e7eb] grow h-[12px] min-h-px min-w-px relative rounded-[2.68435e+07px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-0 pr-[150.15px] py-0 relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <Wrapper4 additionalClassNames="h-[28px] w-[23.313px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f9c7a0] text-[18px] text-nowrap top-[-1.4px]">5.0</p>
    </Wrapper4>
  );
}

function DataAnalysisDashboard12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[25.6px] top-[153.6px] w-[560.8px]" data-name="DataAnalysisDashboard">
      <Container15 />
      <Text2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Complexidade multimídia" additionalClassNames="w-[158.175px]" />
      <BadgeText text="3" additionalClassNames="bg-[#e86c65] w-[24.263px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[21.587px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <TextText1 text="Narração de áudio" additionalClassNames="w-[114.375px]" />
          <BadgeText text="4" additionalClassNames="bg-[#e86c65] w-[24.525px]" />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Elementos visuais cognitivos" additionalClassNames="w-[175.288px]" />
      <BadgeText text="5" additionalClassNames="bg-[#f9c7a0] w-[24.263px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Animações conceituais" additionalClassNames="w-[140.188px]" />
      <BadgeText text="5" additionalClassNames="bg-[#f9c7a0] w-[24.263px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TextText1 text="Integração texto-imagem" additionalClassNames="w-[156.813px]" />
      <BadgeText text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[139.938px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function DataAnalysisDashboard13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[184.725px] items-start left-[25.6px] pb-0 pt-[16.8px] px-0 top-[237.6px] w-[560.8px]" data-name="DataAnalysisDashboard">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ParagraphText text="Itens que influenciaram:" />
      <Container21 />
    </div>
  );
}

function Card7() {
  return (
    <div className="[grid-area:1_/_2] bg-gradient-to-r from-[rgba(249,199,160,0.1)] h-[447.925px] justify-self-stretch relative rounded-[16px] shrink-0 to-white" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#f9c7a0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DataAnalysisDashboard11 />
      <DataAnalysisDashboardText2 text="Aprendizagem Multimídia" />
      <DataAnalysisDashboard12 />
      <DataAnalysisDashboard13 />
    </div>
  );
}

function DataAnalysisDashboard14() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[447.925px] relative shrink-0 w-full" data-name="DataAnalysisDashboard">
      <Card6 />
      <Card7 />
    </div>
  );
}

function TabPanel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1248px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <DataAnalysisDashboard6 />
        <DataAnalysisDashboard7 />
        <DataAnalysisDashboard14 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[1312.713px] items-start left-[135.6px] pb-[32px] pt-0 px-0 top-[176px] w-[1248px]" data-name="Primitive.div">
      <TabList />
      <TabPanel />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fafafa] h-[36px] relative rounded-[16px] shrink-0 w-[146.887px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e86c65] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24.8px] py-[12.8px] relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e86c65] text-[14px] text-center text-nowrap">Nova Avaliação</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <Wrapper2 additionalClassNames="absolute left-[12px] top-[10px]">
      <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </Wrapper2>
  );
}

function Button3() {
  return (
    <Wrapper3 additionalClassNames="bg-[#f9c7a0] rounded-[16px] w-[231.363px]">
      <Icon10 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[132px] not-italic text-[14px] text-center text-nowrap text-white top-[6.8px] translate-x-[-50%]">Ver Sugestões de Melhorias</p>
    </Wrapper3>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[36px] items-start justify-center left-[135.6px] top-[1536.71px] w-[1248px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function DataAnalysisDashboard15() {
  return (
    <div className="absolute bg-[#fafafa] h-[1604.713px] left-0 top-[109.6px] w-[1519.2px]" data-name="DataAnalysisDashboard">
      <Container />
      <Container3 />
      <PrimitiveDiv />
      <Container22 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[1714.313px] left-0 top-0 w-[1519.2px]" data-name="App">
      <DataAnalysisDashboard15 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-0 top-[-20000px] w-[183.025px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#333] text-[16px] text-nowrap top-[-2.2px]">Aprendizagem Multimídia</p>
    </div>
  );
}

function Icon11() {
  return (
    <Icon12 additionalClassNames="left-[16px] top-[16px]">
      <path d={svgPaths.p1d9d6200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </Icon12>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white h-[40px] left-[-148.24px] opacity-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[12px] w-[132.238px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[66.5px] not-italic text-[#333] text-[16px] text-center text-nowrap top-[5.8px] translate-x-[-50%]">Try AI Analysis</p>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[#7a63ff] left-[1423.2px] rounded-[2.68435e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-[633.6px]" data-name="App">
      <Icon11 />
      <Container23 />
    </div>
  );
}

export default function Peach() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="PEACH">
      <App />
      <Text3 />
      <App1 />
    </div>
  );
}