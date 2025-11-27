import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as f,a as s}from"./index-DBSB4Jwm.js";import{r as i}from"./iframe-DOSFeJNL.js";import{B as t}from"./index-C8OP8f5x.js";import"./preload-helper-Ck4my5na.js";import"./index-CfJS1Cjs.js";const b=f("rounded bg-(--color-bg-primary) font-[Roboto,Helvetica,Arial,sans-serif] overflow-hidden mb-(--spacing-md) transition-shadow",{variants:{variant:{default:"border border-(--color-border-base) shadow-(--shadow-sm)",bordered:"border border-(--color-border-base) shadow-none",elevated:"border border-(--color-border-light) shadow-(--shadow-md)",flat:"border border-(--color-border-light) shadow-none bg-(--color-bg-secondary)"}},defaultVariants:{variant:"default"}}),D=i.forwardRef(({className:a,variant:n,...d},g)=>e.jsx("div",{ref:g,className:s(b({variant:n}),a),...d})),y=i.forwardRef(({className:a,...n},d)=>e.jsx("div",{ref:d,className:s("p-(--spacing-lg) border-b border-(--color-border-light) flex justify-between items-center bg-(--color-bg-secondary)",a),...n})),H=i.forwardRef(({className:a,...n},d)=>e.jsx("div",{ref:d,className:s("m-0 text-(length:--font-size-xl) font-medium leading-(--line-height-relaxed) text-(--color-text-primary)",a),...n})),T=i.forwardRef(({className:a,...n},d)=>e.jsx("div",{ref:d,className:s("mt-(--spacing-xs) mb-0 text-(length:--font-size-base) font-normal leading-(--line-height-snug) text-(--color-text-secondary)",a),...n})),N=i.forwardRef(({className:a,...n},d)=>e.jsx("div",{ref:d,className:s("p-(--spacing-lg)",a),...n})),B=i.forwardRef(({className:a,...n},d)=>e.jsx("div",{ref:d,className:s("flex items-center p-6 pt-0",a),...n})),r=Object.assign(D,{Header:y,Title:H,Description:T,Content:N,Footer:B});try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"flat"'},{value:'"default"'},{value:'"bordered"'},{value:'"elevated"'}]}}}}}catch{}const _={title:"UI/Card",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","bordered","elevated","flat"],description:"Card의 스타일 variant",table:{type:{summary:"'default' | 'bordered' | 'elevated' | 'flat'"},defaultValue:{summary:"default"}}}}},o={render:()=>e.jsxs(r,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Card Title"}),e.jsx(r.Description,{children:"Card Description"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"Card Content goes here."})})]})},c={render:()=>e.jsxs(r,{variant:"bordered",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Bordered Card"}),e.jsx(r.Description,{children:"강조된 테두리가 있는 카드"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"border-2 스타일이 적용되어 테두리가 더 두껍습니다."})})]})},l={render:()=>e.jsxs(r,{variant:"elevated",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Elevated Card"}),e.jsx(r.Description,{children:"강한 그림자가 있는 카드"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"shadow-lg 스타일로 카드가 떠있는 느낌을 줍니다."})})]})},p={render:()=>e.jsxs(r,{variant:"flat",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Flat Card"}),e.jsx(r.Description,{children:"테두리와 그림자가 없는 카드"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"border와 shadow가 없어 평면적인 디자인입니다."})})]})},C={render:()=>e.jsxs(r,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"카드 제목"}),e.jsx(r.Description,{children:"푸터가 있는 카드입니다"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"카드 본문 내용입니다."})}),e.jsxs(r.Footer,{children:[e.jsx(t,{variant:"secondary",size:"sm",children:"취소"}),e.jsx(t,{size:"sm",className:"ml-2",children:"확인"})]})]})},m={render:()=>e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(r.Title,{children:"설정"}),e.jsx(r.Description,{children:"카드 설정을 관리합니다"})]}),e.jsx(t,{variant:"secondary",size:"sm",children:"편집"})]})}),e.jsx(r.Content,{children:e.jsx("p",{children:"헤더에 액션 버튼이 있는 카드입니다."})})]})},u={render:()=>e.jsx(r,{children:e.jsx(r.Content,{children:e.jsx("p",{children:"헤더 없이 콘텐츠만 있는 간단한 카드입니다."})})})},x={render:()=>e.jsx(r,{variant:"bordered",children:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"완전히 커스텀 레이아웃"}),e.jsx("p",{className:"text-gray-600",children:"Card의 하위 컴포넌트를 사용하지 않고 자유롭게 구성할 수 있습니다."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{size:"sm",children:"버튼 1"}),e.jsx(t,{variant:"secondary",size:"sm",children:"버튼 2"})]})]})})},h={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs(r,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"카드 1"}),e.jsx(r.Description,{children:"Default variant"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"첫 번째 카드입니다."})})]}),e.jsxs(r,{variant:"bordered",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"카드 2"}),e.jsx(r.Description,{children:"Bordered variant"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"두 번째 카드입니다."})})]}),e.jsxs(r,{variant:"elevated",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"카드 3"}),e.jsx(r.Description,{children:"Elevated variant"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"세 번째 카드입니다."})})]})]})},j={render:()=>e.jsxs(r,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"긴 내용이 있는 카드"}),e.jsx(r.Description,{children:"스크롤이 필요한 경우"})]}),e.jsx(r.Content,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}),e.jsx(r.Footer,{children:e.jsx(t,{variant:"secondary",size:"sm",children:"더 보기"})})]})},v={args:{variant:"default"},render:a=>e.jsxs(r,{...a,children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"카드 제목"}),e.jsx(r.Description,{children:"카드 설명"})]}),e.jsx(r.Content,{children:e.jsx("p",{children:"카드 내용입니다. variant를 변경하여 다양한 스타일을 확인하세요."})}),e.jsx(r.Footer,{children:e.jsx(t,{size:"sm",children:"액션"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card Content goes here.</p>
      </Card.Content>
    </Card>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="bordered">
      <Card.Header>
        <Card.Title>Bordered Card</Card.Title>
        <Card.Description>강조된 테두리가 있는 카드</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>border-2 스타일이 적용되어 테두리가 더 두껍습니다.</p>
      </Card.Content>
    </Card>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="elevated">
      <Card.Header>
        <Card.Title>Elevated Card</Card.Title>
        <Card.Description>강한 그림자가 있는 카드</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>shadow-lg 스타일로 카드가 떠있는 느낌을 줍니다.</p>
      </Card.Content>
    </Card>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="flat">
      <Card.Header>
        <Card.Title>Flat Card</Card.Title>
        <Card.Description>테두리와 그림자가 없는 카드</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>border와 shadow가 없어 평면적인 디자인입니다.</p>
      </Card.Content>
    </Card>
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>
        <Card.Title>카드 제목</Card.Title>
        <Card.Description>푸터가 있는 카드입니다</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>카드 본문 내용입니다.</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="secondary" size="sm">
          취소
        </Button>
        <Button size="sm" className="ml-2">
          확인
        </Button>
      </Card.Footer>
    </Card>
}`,...C.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Card.Title>설정</Card.Title>
            <Card.Description>카드 설정을 관리합니다</Card.Description>
          </div>
          <Button variant="secondary" size="sm">
            편집
          </Button>
        </div>
      </Card.Header>
      <Card.Content>
        <p>헤더에 액션 버튼이 있는 카드입니다.</p>
      </Card.Content>
    </Card>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Content>
        <p>헤더 없이 콘텐츠만 있는 간단한 카드입니다.</p>
      </Card.Content>
    </Card>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="bordered">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">완전히 커스텀 레이아웃</h2>
        <p className="text-gray-600">
          Card의 하위 컴포넌트를 사용하지 않고 자유롭게 구성할 수 있습니다.
        </p>
        <div className="flex gap-2">
          <Button size="sm">버튼 1</Button>
          <Button variant="secondary" size="sm">
            버튼 2
          </Button>
        </div>
      </div>
    </Card>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <Card.Header>
          <Card.Title>카드 1</Card.Title>
          <Card.Description>Default variant</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>첫 번째 카드입니다.</p>
        </Card.Content>
      </Card>

      <Card variant="bordered">
        <Card.Header>
          <Card.Title>카드 2</Card.Title>
          <Card.Description>Bordered variant</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>두 번째 카드입니다.</p>
        </Card.Content>
      </Card>

      <Card variant="elevated">
        <Card.Header>
          <Card.Title>카드 3</Card.Title>
          <Card.Description>Elevated variant</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>세 번째 카드입니다.</p>
        </Card.Content>
      </Card>
    </div>
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Header>
        <Card.Title>긴 내용이 있는 카드</Card.Title>
        <Card.Description>스크롤이 필요한 경우</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Card.Content>
      <Card.Footer>
        <Button variant="secondary" size="sm">
          더 보기
        </Button>
      </Card.Footer>
    </Card>
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => <Card {...args}>
      <Card.Header>
        <Card.Title>카드 제목</Card.Title>
        <Card.Description>카드 설명</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>카드 내용입니다. variant를 변경하여 다양한 스타일을 확인하세요.</p>
      </Card.Content>
      <Card.Footer>
        <Button size="sm">액션</Button>
      </Card.Footer>
    </Card>
}`,...v.parameters?.docs?.source}}};const R=["Default","Bordered","Elevated","Flat","WithFooter","WithHeaderActions","ContentOnly","CustomLayout","MultipleCards","LongContent","Playground"];export{c as Bordered,u as ContentOnly,x as CustomLayout,o as Default,l as Elevated,p as Flat,j as LongContent,h as MultipleCards,v as Playground,C as WithFooter,m as WithHeaderActions,R as __namedExportsOrder,_ as default};
