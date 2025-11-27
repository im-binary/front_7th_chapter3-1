import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as p}from"./index-DvGJ_cx1.js";import{r as u}from"./iframe-D4q-GaXl.js";import"./index-DBSB4Jwm.js";import"./preload-helper-Ck4my5na.js";const f={title:"UI/Textarea",component:p,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Textarea의 크기"},error:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화 여부"},rows:{control:"number",description:"행 수"}}},a={args:{placeholder:"내용을 입력하세요...",value:"",onChange:()=>{}}},s={args:{value:`여러 줄의
텍스트를
입력할 수 있습니다.`,onChange:()=>{}}},o={args:{error:!0,placeholder:"Error state",value:"Invalid content",onChange:()=>{}}},n={args:{disabled:!0,value:"수정할 수 없는 내용입니다.",onChange:()=>{}}},t={args:{rows:10,placeholder:"10줄 높이의 textarea",value:"",onChange:()=>{}}},g=l=>{const[r,i]=u.useState(""),d=200;return e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{...l,value:r,onChange:m=>i(m.target.value),error:r.length>d}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:["글자 수: ",r.length," / ",d]}),r.length>d&&e.jsx("p",{className:"text-sm text-red-500",children:"최대 글자 수를 초과했습니다!"})]})]})},c={args:{placeholder:"여기에 입력하세요...",size:"md",rows:4,disabled:!1},render:l=>e.jsx(g,{...l})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '내용을 입력하세요...',
    value: '',
    onChange: () => {}
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: '여러 줄의\\n텍스트를\\n입력할 수 있습니다.',
    onChange: () => {}
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: 'Error state',
    value: 'Invalid content',
    onChange: () => {}
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: '수정할 수 없는 내용입니다.',
    onChange: () => {}
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10,
    placeholder: '10줄 높이의 textarea',
    value: '',
    onChange: () => {}
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '여기에 입력하세요...',
    size: 'md',
    rows: 4,
    disabled: false
  },
  render: args => <InteractiveTextarea {...args} />
}`,...c.parameters?.docs?.source}}};const j=["Default","WithValue","WithError","Disabled","CustomRows","Playground"];export{t as CustomRows,a as Default,n as Disabled,c as Playground,o as WithError,s as WithValue,j as __namedExportsOrder,f as default};
