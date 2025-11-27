import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-D4q-GaXl.js";import{F as h}from"./index-B92KhTbl.js";import"./preload-helper-Ck4my5na.js";import"./index-Dzt0hReq.js";import"./index-DBSB4Jwm.js";import"./index-CIw76VBf.js";import"./index-DRCA0hye.js";import"./index-COwPZDLL.js";import"./index-DHRKSTuO.js";import"./check-CuK4ST0t.js";import"./index-DvGJ_cx1.js";const x=({name:a,value:s,onChange:p,label:g,placeholder:n,required:r=!1,disabled:m=!1,error:t,helpText:C,size:T="md",rows:y=4})=>e.jsx(h.Field,{name:a,label:g,error:t,helpText:C,required:r,size:T,children:e.jsx(h.Textarea,{value:s,onChange:v=>p(v.target.value),placeholder:n,disabled:m,rows:y})}),P={title:"Molecules/FormTextarea",component:x,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Textarea의 크기"},required:{control:"boolean",description:"필수 입력 여부"},disabled:{control:"boolean",description:"비활성화 여부"}},args:{size:"md",required:!1,disabled:!1,helpText:""}},o={args:{name:"description",label:"설명",placeholder:"내용을 입력하세요",value:"",onChange:()=>{}},argTypes:{onChange:{table:{disable:!0}},error:{table:{disable:!0}}}},l={args:{name:"content",label:"내용",placeholder:"내용을 입력하세요",error:"최소 10자 이상 입력해주세요",value:"",onChange:()=>{}}},d={args:{name:"required-content",label:"필수 입력",placeholder:"필수로 입력해야 합니다",required:!0,value:"",onChange:()=>{}},argTypes:{onChange:{table:{disable:!0}},error:{table:{disable:!0}}}},i={args:{name:"disabled-textarea",label:"비활성화",value:"수정할 수 없는 내용입니다",disabled:!0,onChange:()=>{}},argTypes:{onChange:{table:{disable:!0}},error:{table:{disable:!0}}}},c={args:{name:"rows-textarea",label:"행 수 지정",placeholder:"5줄 높이의 텍스트 영역",rows:5,value:"",onChange:()=>{}},argTypes:{onChange:{table:{disable:!0}},error:{table:{disable:!0}}}},f=a=>{const[s,p]=b.useState(""),[g,n]=b.useState(""),r=200,m=t=>{p(t),t.length<10?n("최소 10자 이상 입력하세요"):t.length>r?n(`최대 ${r}자까지 입력 가능합니다`):n("")};return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:["최소 10자 이상 입력해야 합니다. / 최대 ",r,"자까지 입력 가능합니다."]}),e.jsx(x,{...a,value:s,onChange:m,error:g}),e.jsxs("p",{className:"text-sm text-gray-600",children:[s.length," / ",r," 자"]})]})},u={args:{name:"playground-textarea",label:"Textarea",placeholder:"입력해보세요",required:!0,value:"",onChange:()=>{}},argTypes:{onChange:{table:{disable:!0}},error:{table:{disable:!0}}},render:a=>e.jsx(f,{...a})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'description',
    label: '설명',
    placeholder: '내용을 입력하세요',
    value: '',
    onChange: () => {}
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'content',
    label: '내용',
    placeholder: '내용을 입력하세요',
    error: '최소 10자 이상 입력해주세요',
    value: '',
    onChange: () => {}
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'required-content',
    label: '필수 입력',
    placeholder: '필수로 입력해야 합니다',
    required: true,
    value: '',
    onChange: () => {}
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled-textarea',
    label: '비활성화',
    value: '수정할 수 없는 내용입니다',
    disabled: true,
    onChange: () => {}
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'rows-textarea',
    label: '행 수 지정',
    placeholder: '5줄 높이의 텍스트 영역',
    rows: 5,
    value: '',
    onChange: () => {}
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'playground-textarea',
    label: 'Textarea',
    placeholder: '입력해보세요',
    required: true,
    value: '',
    onChange: () => {}
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    }
  },
  render: args => <InteractiveTextarea {...args} />
}`,...u.parameters?.docs?.source}}};const _=["Default","WithError","Required","Disabled","WithRows","Playground"];export{o as Default,i as Disabled,u as Playground,d as Required,l as WithError,c as WithRows,_ as __namedExportsOrder,P as default};
