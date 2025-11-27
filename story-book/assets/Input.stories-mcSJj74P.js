import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as d}from"./index-CgjXhHCb.js";import{r as u}from"./iframe-DOSFeJNL.js";import"./index-DBSB4Jwm.js";import"./preload-helper-Ck4my5na.js";const v={title:"UI/Input",component:d,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Input의 크기"},error:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화 여부"},type:{control:"select",options:["text","email","password","number","url"],description:"Input 타입"}}},r={args:{placeholder:"입력하세요..."}},a={args:{error:!0,placeholder:"Error state",value:"Invalid value",onChange:()=>{}}},s={args:{disabled:!0,placeholder:"Disabled input"}},o={args:{type:"email",placeholder:"email@example.com"}},t={args:{type:"password",placeholder:"Enter password"}},n={args:{type:"number",placeholder:"0"}},g=l=>{const[p,m]=u.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{...l,value:p,onChange:i=>m(i.target.value)}),e.jsxs("p",{className:"text-sm text-gray-600",children:["입력된 값: ",e.jsx("strong",{children:p||"(없음)"})]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["글자 수: ",p.length]})]})},c={args:{placeholder:"타이핑 해보세요...",size:"md",error:!1,disabled:!1,type:"text"},render:l=>e.jsx(g,{...l})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '입력하세요...'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: 'Error state',
    value: 'Invalid value',
    onChange: () => {}
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'email@example.com'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '타이핑 해보세요...',
    size: 'md',
    error: false,
    disabled: false,
    type: 'text'
  },
  render: args => <InteractiveInput {...args} />
}`,...c.parameters?.docs?.source}}};const E=["Default","WithError","Disabled","Email","Password","Number","Playground"];export{r as Default,s as Disabled,o as Email,n as Number,t as Password,c as Playground,a as WithError,E as __namedExportsOrder,v as default};
