import svgPaths from "./svg-w9mo2dp88g";
import clsx from "clsx";

function DataAnalysisDashboard3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[28px] relative shrink-0 w-[1198.4px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("h-[36px] relative rounded-[10px] shrink-0", additionalClassNames)}>{children}</Wrapper1>;
}

function Icon4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type BadgeText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BadgeText1({ text, additionalClassNames = "" }: BadgeText1Props) {
  return (
    <div className={clsx("absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[21.587px] left-[8px] overflow-clip rounded-[10px] top-[8.8px]", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-nowrap text-white top-px">{text}</p>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText1({ text, additionalClassNames = "" }: TableCellText1Props) {
  return (
    <div className={clsx("absolute top-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#333] text-[14px] text-nowrap top-[8.19px]">{text}</p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText({ text, additionalClassNames = "" }: TableCellTextProps) {
  return (
    <div className={clsx("absolute top-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#555] text-[14px] text-nowrap top-[8.19px]">{text}</p>
    </div>
  );
}
type TableHeadTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableHeadText({ text, additionalClassNames = "" }: TableHeadTextProps) {
  return (
    <div className={clsx("absolute h-[40px] top-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[8px] not-italic text-[#333] text-[14px] text-nowrap top-[8.6px]">{text}</p>
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
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("h-[28px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#333] text-[20px] text-nowrap top-[-2.2px]">{text}</p>
    </Wrapper1>
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

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
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

function Container() {
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
    <Wrapper additionalClassNames="bg-[#e86c65] w-[139.3px]">
      <Icon />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[86.5px] not-italic text-[14px] text-center text-nowrap text-white top-[6.8px] translate-x-[-50%]">Exportar PDF</p>
    </Wrapper>
  );
}

function Button1() {
  return (
    <Wrapper additionalClassNames="bg-[#6ea16e] w-[145.813px]">
      <Icon />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[89px] not-italic text-[14px] text-center text-nowrap text-white top-[6.8px] translate-x-[-50%]">Exportar Excel</p>
    </Wrapper>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[293.113px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-start justify-between left-[135.6px] top-[76px] w-[1248px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16px] shrink-0 w-[1248px]" data-name="Tab List">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveButtonText text="Relatório Geral" additionalClassNames="left-[4.8px]" />
        <PrimitiveButtonText text="Pontos de Revisão" additionalClassNames="bg-[#f3f3f3] left-[211.2px]" />
        <PrimitiveButtonText text="Comentários" additionalClassNames="left-[417.6px]" />
        <PrimitiveButtonText text="Aprendizagem Multimídia" additionalClassNames="left-[624px]" />
        <PrimitiveButtonText text="Game Design" additionalClassNames="left-[830.4px]" />
        <PrimitiveButtonText text="UX/UI Design" additionalClassNames="left-[1036.8px]" />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <Icon4>
      <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #E86C65)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #E86C65)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #E86C65)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon4>
  );
}

function DataAnalysisDashboard() {
  return (
    <DataAnalysisDashboard3>
      <Icon1 />
      <HeadingText text="Itens a Corrigir" additionalClassNames="w-[129.925px]" />
      <BadgeText text="4" additionalClassNames="bg-[#e86c65] w-[24.525px]" />
    </DataAnalysisDashboard3>
  );
}

function TableRow() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[40px] left-0 top-0 w-[1198.4px]" data-name="TableRow">
      <TableHeadText text="Dimensão" additionalClassNames="left-0 w-[234.088px]" />
      <TableHeadText text="Princípio" additionalClassNames="left-[234.09px] w-[231.463px]" />
      <TableHeadText text="Mediana" additionalClassNames="left-[465.55px] w-[94.7px]" />
      <TableHeadText text="Sugestão" additionalClassNames="left-[560.25px] w-[638.15px]" />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1198.4px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.788px] left-[465.55px] top-0 w-[94.7px]" data-name="TableCell">
      <BadgeText1 text="4" additionalClassNames="bg-[#f9c7a0] w-[24.525px]" />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-0 w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Aprendizagem Multimídia" additionalClassNames="h-[38.788px] left-0 w-[234.088px]" />
      <TableCellText1 text="Narração de áudio" additionalClassNames="h-[38.788px] left-[234.09px] w-[231.463px]" />
      <TableCell />
      <TableCellText text="Aplicação moderada. Revise os princípios específicos com pontuação baixa." additionalClassNames="h-[38.788px] left-[560.25px] w-[638.15px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[465.55px] top-0 w-[94.7px]" data-name="TableCell">
      <BadgeText1 text="3" additionalClassNames="bg-[#f9c7a0] w-[24.263px]" />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[38.79px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Aprendizagem Multimídia" additionalClassNames="h-[38.788px] left-0 w-[234.088px]" />
      <TableCellText1 text="Complexidade multimídia" additionalClassNames="h-[38.788px] left-[234.09px] w-[231.463px]" />
      <TableCell1 />
      <TableCellText text="Necessita revisão significativa. Priorize melhorias nesta dimensão." additionalClassNames="h-[38.788px] left-[560.25px] w-[638.15px]" />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[465.55px] top-0 w-[94.7px]" data-name="TableCell">
      <BadgeText1 text="4" additionalClassNames="bg-[#f9c7a0] w-[24.525px]" />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[77.58px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Game Design Educacional" additionalClassNames="h-[38.788px] left-0 w-[234.088px]" />
      <TableCellText1 text="Elementos motivacionais" additionalClassNames="h-[38.788px] left-[234.09px] w-[231.463px]" />
      <TableCell2 />
      <TableCellText text="Aplicação moderada. Revise os princípios específicos com pontuação baixa." additionalClassNames="h-[38.788px] left-[560.25px] w-[638.15px]" />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.388px] left-[465.55px] top-0 w-[94.7px]" data-name="TableCell">
      <BadgeText1 text="4" additionalClassNames="bg-[#f9c7a0] w-[24.525px]" />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[116.36px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="UX/UI Design" additionalClassNames="h-[38.388px] left-0 w-[234.088px]" />
      <TableCellText1 text="Acessibilidade" additionalClassNames="h-[38.388px] left-[234.09px] w-[231.463px]" />
      <TableCell3 />
      <TableCellText text="Aplicação moderada. Revise os princípios específicos com pontuação baixa." additionalClassNames="h-[38.388px] left-[560.25px] w-[638.15px]" />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[154.75px] left-0 top-[40px] w-[1198.4px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[194.75px] relative shrink-0 w-[1198.4px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[320.35px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative size-full">
        <DataAnalysisDashboard />
        <Table />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <Icon4>
      <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #6EA16E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #6EA16E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon4>
  );
}

function DataAnalysisDashboard1() {
  return (
    <DataAnalysisDashboard3>
      <Icon2 />
      <HeadingText text="Itens Bem Avaliados" additionalClassNames="w-[176.588px]" />
      <BadgeText text="11" additionalClassNames="bg-[#6ea16e] w-[27.263px]" />
    </DataAnalysisDashboard3>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[40px] left-0 top-0 w-[1198.4px]" data-name="TableRow">
      <TableHeadText text="Dimensão" additionalClassNames="left-0 w-[208.213px]" />
      <TableHeadText text="Princípio" additionalClassNames="left-[208.21px] w-[226.113px]" />
      <TableHeadText text="Mediana" additionalClassNames="left-[434.33px] w-[84.238px]" />
      <TableHeadText text="Sugestão" additionalClassNames="left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1198.4px]" data-name="TableHeader">
      <TableRow5 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-0 w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Aprendizagem Multimídia" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Integração texto-imagem" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell4 />
      <TableCellText text="Excelente aplicação dos princípios de Aprendizagem Multimídia. Manter os padrões atuais." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="5" additionalClassNames="bg-[#6ea16e] w-[24.263px]" />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[38.79px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Aprendizagem Multimídia" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Elementos visuais cognitivos" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell5 />
      <TableCellText text="Boa aplicação dos princípios. Considere pequenos ajustes para otimização." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="5" additionalClassNames="bg-[#6ea16e] w-[24.263px]" />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[77.58px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Aprendizagem Multimídia" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Animações conceituais" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell6 />
      <TableCellText text="Boa aplicação dos princípios. Considere pequenos ajustes para otimização." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[116.36px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Game Design Educacional" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Mecânicas e objetivos" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell7 />
      <TableCellText text="Excelente aplicação dos princípios de Game Design Educacional. Manter os padrões atuais." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="7" additionalClassNames="bg-[#6ea16e] w-[24.038px]" />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[155.15px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Game Design Educacional" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Feedback imediato" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell8 />
      <TableCellText text="Excelente aplicação dos princípios de Game Design Educacional. Manter os padrões atuais." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="5" additionalClassNames="bg-[#6ea16e] w-[24.263px]" />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[193.94px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Game Design Educacional" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Balanceamento de desafio" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell9 />
      <TableCellText text="Boa aplicação dos princípios. Considere pequenos ajustes para otimização." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[232.72px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="Game Design Educacional" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Indicadores de progresso" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell10 />
      <TableCellText text="Excelente aplicação dos princípios de Game Design Educacional. Manter os padrões atuais." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="7" additionalClassNames="bg-[#6ea16e] w-[24.038px]" />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[271.51px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="UX/UI Design" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Navegação intuitiva" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell11 />
      <TableCellText text="Excelente aplicação dos princípios de UX/UI Design. Manter os padrões atuais." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[310.3px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="UX/UI Design" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Hierarquia visual" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell12 />
      <TableCellText text="Excelente aplicação dos princípios de UX/UI Design. Manter os padrões atuais." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.788px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="5" additionalClassNames="bg-[#6ea16e] w-[24.263px]" />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid h-[38.788px] left-0 top-[349.09px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="UX/UI Design" additionalClassNames="h-[38.788px] left-0 w-[208.213px]" />
      <TableCellText1 text="Elementos interativos" additionalClassNames="h-[38.788px] left-[208.21px] w-[226.113px]" />
      <TableCell13 />
      <TableCellText text="Boa aplicação dos princípios. Considere pequenos ajustes para otimização." additionalClassNames="h-[38.788px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[38.388px] left-[434.33px] top-0 w-[84.238px]" data-name="TableCell">
      <BadgeText1 text="6" additionalClassNames="bg-[#6ea16e] w-[24.3px]" />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[387.88px] w-[1198.4px]" data-name="TableRow">
      <TableCellText text="UX/UI Design" additionalClassNames="h-[38.388px] left-0 w-[208.213px]" />
      <TableCellText1 text="Esquema de cores" additionalClassNames="h-[38.388px] left-[208.21px] w-[226.113px]" />
      <TableCell14 />
      <TableCellText text="Excelente aplicação dos princípios de UX/UI Design. Manter os padrões atuais." additionalClassNames="h-[38.388px] left-[518.56px] w-[679.838px]" />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[426.263px] left-0 top-[40px] w-[1198.4px]" data-name="TableBody">
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
    </div>
  );
}

function Table1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1198.4px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader1 />
        <TableBody1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[591.862px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start pl-[24.8px] pr-[0.8px] py-[24.8px] relative size-full">
        <DataAnalysisDashboard1 />
        <Table1 />
      </div>
    </div>
  );
}

function TabPanel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1248px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Card />
        <Card1 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[1044.213px] items-start left-[135.6px] pb-[32px] pt-0 px-0 top-[176px] w-[1248px]" data-name="Primitive.div">
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

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start justify-center left-[140px] top-[1245.4px] w-[1248px]" data-name="Container">
      <Button2 />
    </div>
  );
}

function DataAnalysisDashboard2() {
  return (
    <div className="absolute bg-[#fafafa] h-[1336.213px] left-0 top-[109.6px] w-[1519.2px]" data-name="DataAnalysisDashboard">
      <Container2 />
      <PrimitiveDiv />
      <Container3 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[1445.813px] left-0 top-0 w-[1519.2px]" data-name="App">
      <DataAnalysisDashboard2 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-0 top-[-20000px] w-[183.025px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#333] text-[16px] text-nowrap top-[-2.2px]">Aprendizagem Multimídia</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1d9d6200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white h-[40px] left-[-148.24px] opacity-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[12px] w-[132.238px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[66.5px] not-italic text-[#333] text-[16px] text-center text-nowrap top-[5.8px] translate-x-[-50%]">Try AI Analysis</p>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[#7a63ff] left-[1423.2px] rounded-[2.68435e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-[633.6px]" data-name="App">
      <Icon3 />
      <Container4 />
    </div>
  );
}

export default function Peach() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="PEACH">
      <App />
      <Text />
      <App1 />
    </div>
  );
}