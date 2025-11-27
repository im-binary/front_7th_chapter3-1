import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./index-BqQ9LJRB.js";import"./iframe-D8MFBZO2.js";import"./preload-helper-DkzeK8PQ.js";import"./index-DNSi4dhw.js";import"./index-DBSB4Jwm.js";const m={title:"UI/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","success","ghost"],description:"Button의 색상 variant"},size:{control:"select",options:["sm","md","lg"],description:"Button의 크기"},outline:{control:"boolean",description:"Outline 스타일 적용 여부"},fullWidth:{control:"boolean",description:"전체 너비 사용 여부"},disabled:{control:"boolean",description:"비활성화 여부"}},args:{variant:"primary",size:"md",outline:!1,fullWidth:!1,disabled:!1}},s={args:{children:"Button"},render:()=>t.jsxs("div",{className:"flex flex-col gap-4",style:{minWidth:"600px"},children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"font-bold text-sm",children:"Filled Buttons"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx(a,{variant:"primary",children:"Primary"}),t.jsx(a,{variant:"secondary",children:"Secondary"}),t.jsx(a,{variant:"danger",children:"Danger"}),t.jsx(a,{variant:"success",children:"Success"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"font-bold text-sm",children:"Outline Buttons"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx(a,{variant:"primary",outline:!0,children:"Primary"}),t.jsx(a,{variant:"secondary",outline:!0,children:"Secondary"}),t.jsx(a,{variant:"danger",outline:!0,children:"Danger"}),t.jsx(a,{variant:"success",outline:!0,children:"Success"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"font-bold text-sm",children:"Ghost Buttons"}),t.jsx("div",{className:"flex gap-2",children:t.jsx(a,{variant:"ghost",children:"Ghost"})})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"font-bold text-sm",children:"Sizes"}),t.jsxs("div",{className:"flex gap-2 items-center",children:[t.jsx(a,{variant:"primary",size:"sm",children:"Small"}),t.jsx(a,{variant:"primary",size:"md",children:"Medium"}),t.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"font-bold text-sm",children:"States"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx(a,{variant:"primary",children:"Normal"}),t.jsx(a,{variant:"primary",disabled:!0,children:"Disabled"})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"font-bold text-sm",children:"Full Width"}),t.jsx(a,{variant:"primary",fullWidth:!0,children:"Full Width Button"})]})]})},e={render:r=>t.jsx("div",{className:"w-[600px] flex justify-center items-center",children:t.jsx(a,{...r,children:"Button"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: () => <div className="flex flex-col gap-4" style={{
    minWidth: '600px'
  }}>
      <div className="space-y-2">
        <h3 className="font-bold text-sm">Filled Buttons</h3>
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-sm">Outline Buttons</h3>
        <div className="flex gap-2">
          <Button variant="primary" outline>
            Primary
          </Button>
          <Button variant="secondary" outline>
            Secondary
          </Button>
          <Button variant="danger" outline>
            Danger
          </Button>
          <Button variant="success" outline>
            Success
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-sm">Ghost Buttons</h3>
        <div className="flex gap-2">
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-sm">Sizes</h3>
        <div className="flex gap-2 items-center">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-sm">States</h3>
        <div className="flex gap-2">
          <Button variant="primary">Normal</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-bold text-sm">Full Width</h3>
        <Button variant="primary" fullWidth>
          Full Width Button
        </Button>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="w-[600px] flex justify-center items-center">
        <Button {...args}>Button</Button>
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const u=["AllVariants","Playground"];export{s as AllVariants,e as Playground,u as __namedExportsOrder,m as default};
