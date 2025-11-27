import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-CrQVFamC.js";import{F as g}from"./index-BMiyFmJs.js";import"./preload-helper-Ck4my5na.js";import"./index-yg6gw9H3.js";import"./index-DBSB4Jwm.js";import"./index-DoJehIk9.js";import"./index-B6d08W1Y.js";import"./index-DmS52Xo0.js";import"./index-Dp8pwvZo.js";import"./check-Chin1cJP.js";import"./index-R6_YhEj2.js";const a=b.forwardRef((r,i)=>{const{name:p,value:m,onChange:n,label:c,type:t="text",placeholder:h,required:y=!1,disabled:f=!1,error:v,helpText:C,size:x="md",...q}=r,I=T=>{n?.(T.target.value)};return e.jsx(g.Field,{name:p,label:c,error:v,helpText:C,required:y,size:x,children:e.jsx(g.Input,{ref:i,type:t,value:m,onChange:I,placeholder:h,disabled:f,...q})})});a.displayName="FormInput";try{a.displayName="FormInput",a.__docgenInfo={description:"",displayName:"FormInput",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}},type:{defaultValue:{value:"'text'"},description:"Input의 타입",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"url"'}]}}}}}catch{}const M={title:"Molecules/FormInput",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Input의 크기"},required:{control:"boolean",description:"필수 입력 여부"},disabled:{control:"boolean",description:"비활성화 여부"}},args:{size:"md",required:!1,disabled:!1,helpText:""}},l={args:{name:"username",label:"사용자명",placeholder:"사용자명을 입력하세요"},argTypes:{onChange:{table:{disable:!0}},error:{table:{disable:!0}}}},s={args:{name:"email",label:"이메일",placeholder:"이메일을 입력하세요",error:"올바른 이메일 형식이 아닙니다"},argTypes:{onChange:{table:{disable:!0}},value:{table:{disable:!0}},error:{table:{disable:!0}}}},o={args:{name:"password",label:"비밀번호",placeholder:"비밀번호를 입력하세요",type:"password",required:!0},argTypes:{onChange:{table:{disable:!0}},value:{table:{disable:!0}},error:{table:{disable:!0}}}},u={args:{name:"disabled",label:"비활성화된 Input",value:"수정할 수 없습니다",disabled:!0},argTypes:{onChange:{table:{disable:!0}},value:{table:{disable:!0}},error:{table:{disable:!0}}}},F=r=>{const[i,p]=b.useState(""),[m,n]=b.useState(""),c=t=>{p(t),t.length<3?n("최소 3자 이상 입력하세요"):n("")};return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:" 최소 3자 이상 입력해야 합니다."}),e.jsx("br",{}),e.jsx(a,{...r,value:i,onChange:c,error:m})]})},d={args:{name:"input",label:"Input",placeholder:"입력해보세요"},argTypes:{onChange:{table:{disable:!0}},error:{table:{disable:!0}}},render:r=>e.jsx(F,{...r})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'username',
    label: '사용자명',
    placeholder: '사용자명을 입력하세요'
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'email',
    label: '이메일',
    placeholder: '이메일을 입력하세요',
    error: '올바른 이메일 형식이 아닙니다'
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    value: {
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    type: 'password',
    required: true
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    value: {
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    label: '비활성화된 Input',
    value: '수정할 수 없습니다',
    disabled: true
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    value: {
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'input',
    label: 'Input',
    placeholder: '입력해보세요'
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
  render: args => <InteractiveFormInput {...args} />
}`,...d.parameters?.docs?.source}}};const O=["Default","WithError","Required","Disabled","Playground"];export{l as Default,u as Disabled,d as Playground,o as Required,s as WithError,O as __namedExportsOrder,M as default};
