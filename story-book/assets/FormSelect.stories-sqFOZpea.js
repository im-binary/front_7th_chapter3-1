import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as f,r as b}from"./iframe-CNwj3tiS.js";import{F as g}from"./index-DKkxmUM-.js";import"./preload-helper-Ck4my5na.js";import"./index-DASNAb9H.js";import"./index-DBSB4Jwm.js";import"./index-DIBowN21.js";import"./index-vVg9U-cD.js";import"./index-CTooLjUD.js";import"./index-C6qm15Ix.js";import"./check-DSk0NaxC.js";import"./index-CVIfoKwy.js";const h=f.forwardRef((a,n)=>{const{name:c,value:p,onChange:r,options:d,label:u,placeholder:t="Select an option...",required:v=!1,disabled:x=!1,error:C,helpText:y,size:S="md"}=a;return e.jsx(g.Field,{name:c,label:u,error:C,helpText:y,required:v,size:S,children:e.jsx(g.Select,{ref:n,options:d,placeholder:t,value:p,onValueChange:r,disabled:x})})}),_={title:"Molecules/FormSelect",component:h,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Select의 name 속성"},options:{control:"object",description:"선택 옵션 배열"},size:{control:"select",options:["sm","md","lg"],description:"Select의 크기"},required:{control:"boolean",description:"필수 선택 여부"},disabled:{control:"boolean",description:"비활성화 여부"},helpText:{control:"text",description:"도움말 텍스트"},label:{control:"text",description:"Select의 라벨 텍스트"},placeholder:{control:"text",description:"플레이스홀더 텍스트"}},args:{size:"md",required:!1,disabled:!1,helpText:""}},m=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],o={argTypes:{value:{table:{disable:!0}},onChange:{table:{disable:!0}}},args:{name:"select",label:"옵션 선택",options:m,placeholder:"옵션을 선택하세요",value:"",onChange:()=>{}}},l={args:{name:"select-error",label:"필수 선택",options:m,placeholder:"옵션을 선택하세요",error:"옵션을 선택해주세요",required:!0,value:"",onChange:()=>{}},argTypes:{value:{table:{disable:!0}},onChange:{table:{disable:!0}}}},s={args:{name:"select-disabled",label:"비활성화",options:m,value:"option1",disabled:!0,onChange:()=>{}},argTypes:{value:{table:{disable:!0}},onChange:{table:{disable:!0}}}},T=a=>{const[n,c]=b.useState(""),[p,r]=b.useState(""),d=[{value:"korea",label:"한국"},{value:"usa",label:"미국"},{value:"japan",label:"일본"},{value:"china",label:"중국"}],u=t=>{c(t),r(t?"":"국가를 선택해주세요")};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{...a,options:d,value:n,onChange:u,error:p}),e.jsxs("p",{className:"text-sm text-gray-600",children:["선택된 값: ",n||"(없음)"]})]})},i={args:{name:"country",label:"국가 선택",placeholder:"국가를 선택하세요",required:!0,value:"",onChange:()=>{},options:[]},argTypes:{value:{table:{disable:!0}},onChange:{table:{disable:!0}}},render:a=>e.jsx(T,{...a})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  },
  args: {
    name: 'select',
    label: '옵션 선택',
    options: sampleOptions,
    placeholder: '옵션을 선택하세요',
    value: '',
    onChange: () => {}
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'select-error',
    label: '필수 선택',
    options: sampleOptions,
    placeholder: '옵션을 선택하세요',
    error: '옵션을 선택해주세요',
    required: true,
    value: '',
    onChange: () => {}
  },
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'select-disabled',
    label: '비활성화',
    options: sampleOptions,
    value: 'option1',
    disabled: true,
    onChange: () => {}
  },
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'country',
    label: '국가 선택',
    placeholder: '국가를 선택하세요',
    required: true,
    value: '',
    onChange: () => {},
    options: []
  },
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  },
  render: args => <InteractiveFormSelect {...args} />
}`,...i.parameters?.docs?.source}}};const k=["Default","WithError","Disabled","Playground"];export{o as Default,s as Disabled,i as Playground,l as WithError,k as __namedExportsOrder,_ as default};
