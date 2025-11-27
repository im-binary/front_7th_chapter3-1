import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./index-CcWdw6Mr.js";import{r as b}from"./iframe-_kkA5kKG.js";import"./index-DrQY2wBh.js";import"./index-DBSB4Jwm.js";import"./index-CXx6llA-.js";import"./index--rmbCga3.js";import"./index-MRmHCTbl.js";import"./index-Dw0VmqWa.js";import"./check-CORJg-tL.js";import"./index-DdpM4PDt.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"UI/Form",component:a,parameters:{layout:"padded"},tags:["autodocs"]},m={render:()=>e.jsx(a,{className:"space-y-4 max-w-md",children:e.jsxs(a.Field,{name:"username",size:"md",children:[e.jsx(a.Label,{children:"사용자명"}),e.jsx(a.Input,{placeholder:"사용자명을 입력하세요",value:"",onChange:()=>{}})]})})},n={render:()=>e.jsx(a,{className:"space-y-4 max-w-md",children:e.jsxs(a.Field,{name:"email",size:"md",error:"유효한 이메일 주소를 입력하세요",children:[e.jsx(a.Label,{children:"이메일"}),e.jsx(a.Input,{type:"email",placeholder:"email@example.com",value:"invalid-email",onChange:()=>{}})]})})},i={render:()=>e.jsx(a,{className:"space-y-4 max-w-md",children:e.jsxs(a.Field,{name:"password",size:"md",children:[e.jsx(a.Label,{children:"비밀번호"}),e.jsx(a.Input,{type:"password",placeholder:"••••••••",value:"",onChange:()=>{}}),e.jsx(a.Description,{children:"최소 8자 이상, 대문자와 숫자를 포함해야 합니다"})]})})},d={render:()=>e.jsxs(a,{className:"space-y-6 max-w-md",children:[e.jsxs(a.Field,{name:"small",size:"sm",children:[e.jsx(a.Label,{children:"Small Size"}),e.jsx(a.Input,{placeholder:"Small input",value:"",onChange:()=>{}})]}),e.jsxs(a.Field,{name:"medium",size:"md",children:[e.jsx(a.Label,{children:"Medium Size"}),e.jsx(a.Input,{placeholder:"Medium input",value:"",onChange:()=>{}})]}),e.jsxs(a.Field,{name:"large",size:"lg",children:[e.jsx(a.Label,{children:"Large Size"}),e.jsx(a.Input,{placeholder:"Large input",value:"",onChange:()=>{}})]})]})},c={render:()=>e.jsx(a,{className:"space-y-4 max-w-md",children:e.jsxs(a.Field,{name:"name",size:"md",required:!0,children:[e.jsx(a.Label,{children:"이름"}),e.jsx(a.Input,{placeholder:"이름을 입력하세요",value:"",onChange:()=>{}})]})})},t={render:()=>e.jsx(a,{className:"space-y-4 max-w-md",children:e.jsxs(a.Field,{name:"role",size:"md",children:[e.jsx(a.Label,{children:"역할"}),e.jsx(a.Select,{placeholder:"역할을 선택하세요",options:[{value:"user",label:"사용자"},{value:"admin",label:"관리자"},{value:"moderator",label:"운영자"}],value:"",onValueChange:()=>{}})]})})},p={render:()=>e.jsx(a,{className:"space-y-4 max-w-md",children:e.jsxs(a.Field,{name:"bio",size:"md",children:[e.jsx(a.Label,{children:"자기소개"}),e.jsx(a.Textarea,{placeholder:"자신을 소개해주세요...",rows:5,value:"",onChange:()=>{}}),e.jsx(a.Description,{children:"최대 500자까지 입력 가능합니다"})]})})},v=()=>{const[r,o]=b.useState({username:"",email:"",role:"",bio:""}),[h,x]=b.useState({}),j=l=>{l.preventDefault();const s={};r.username||(s.username="사용자명을 입력하세요"),r.email?/\S+@\S+\.\S+/.test(r.email)||(s.email="유효한 이메일 주소를 입력하세요"):s.email="이메일을 입력하세요",r.role||(s.role="역할을 선택하세요"),x(s),Object.keys(s).length===0&&alert("폼이 성공적으로 제출되었습니다!")};return e.jsxs(a,{onSubmit:j,className:"space-y-6 max-w-md",children:[e.jsxs(a.Field,{name:"username",size:"md",required:!0,error:h.username,children:[e.jsx(a.Label,{children:"사용자명"}),e.jsx(a.Input,{placeholder:"사용자명을 입력하세요",value:r.username,onChange:l=>o({...r,username:l.target.value})})]}),e.jsxs(a.Field,{name:"email",size:"md",required:!0,error:h.email,children:[e.jsx(a.Label,{children:"이메일"}),e.jsx(a.Input,{type:"email",placeholder:"email@example.com",value:r.email,onChange:l=>o({...r,email:l.target.value})})]}),e.jsxs(a.Field,{name:"role",size:"md",required:!0,error:h.role,children:[e.jsx(a.Label,{children:"역할"}),e.jsx(a.Select,{placeholder:"역할을 선택하세요",options:[{value:"user",label:"사용자"},{value:"admin",label:"관리자"},{value:"moderator",label:"운영자"}],value:r.role,onValueChange:l=>o({...r,role:l})})]}),e.jsxs(a.Field,{name:"bio",size:"md",children:[e.jsx(a.Label,{children:"자기소개"}),e.jsx(a.Textarea,{placeholder:"자신을 소개해주세요...",rows:5,value:r.bio,onChange:l=>o({...r,bio:l.target.value})}),e.jsx(a.Description,{children:"선택 사항입니다. 최대 500자까지 입력 가능합니다."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"제출"}),e.jsx("button",{type:"button",onClick:()=>{o({username:"",email:"",role:"",bio:""}),x({})},className:"px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300",children:"초기화"})]})]})},F={render:()=>e.jsx(v,{})},u={render:()=>e.jsxs(a,{className:"space-y-6 max-w-md",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Input Field"}),e.jsxs(a.Field,{name:"text",size:"md",children:[e.jsx(a.Label,{children:"텍스트 입력"}),e.jsx(a.Input,{placeholder:"텍스트를 입력하세요",value:"",onChange:()=>{}})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Select Field"}),e.jsxs(a.Field,{name:"select",size:"md",children:[e.jsx(a.Label,{children:"선택"}),e.jsx(a.Select,{placeholder:"옵션을 선택하세요",options:[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"},{value:"3",label:"옵션 3"}],value:"",onValueChange:()=>{}})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Textarea Field"}),e.jsxs(a.Field,{name:"textarea",size:"md",children:[e.jsx(a.Label,{children:"긴 텍스트 입력"}),e.jsx(a.Textarea,{placeholder:"여러 줄의 텍스트를 입력하세요...",rows:4,value:"",onChange:()=>{}})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-bold text-lg",children:"With Description"}),e.jsxs(a.Field,{name:"with-desc",size:"md",children:[e.jsx(a.Label,{children:"설명이 있는 필드"}),e.jsx(a.Input,{placeholder:"입력하세요",value:"",onChange:()=>{}}),e.jsx(a.Description,{children:"이것은 필드에 대한 설명입니다"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-bold text-lg",children:"With Error"}),e.jsxs(a.Field,{name:"with-error",size:"md",error:"에러 메시지",children:[e.jsx(a.Label,{children:"에러가 있는 필드"}),e.jsx(a.Input,{placeholder:"잘못된 값",value:"invalid",onChange:()=>{}})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Required Field"}),e.jsxs(a.Field,{name:"required",size:"md",required:!0,children:[e.jsx(a.Label,{children:"필수 필드"}),e.jsx(a.Input,{placeholder:"필수 입력",value:"",onChange:()=>{}})]})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-4 max-w-md">
      <Form.Field name="username" size="md">
        <Form.Label>사용자명</Form.Label>
        <Form.Input placeholder="사용자명을 입력하세요" value="" onChange={() => {}} />
      </Form.Field>
    </Form>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-4 max-w-md">
      <Form.Field name="email" size="md" error="유효한 이메일 주소를 입력하세요">
        <Form.Label>이메일</Form.Label>
        <Form.Input type="email" placeholder="email@example.com" value="invalid-email" onChange={() => {}} />
      </Form.Field>
    </Form>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-4 max-w-md">
      <Form.Field name="password" size="md">
        <Form.Label>비밀번호</Form.Label>
        <Form.Input type="password" placeholder="••••••••" value="" onChange={() => {}} />
        <Form.Description>
          최소 8자 이상, 대문자와 숫자를 포함해야 합니다
        </Form.Description>
      </Form.Field>
    </Form>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-6 max-w-md">
      <Form.Field name="small" size="sm">
        <Form.Label>Small Size</Form.Label>
        <Form.Input placeholder="Small input" value="" onChange={() => {}} />
      </Form.Field>

      <Form.Field name="medium" size="md">
        <Form.Label>Medium Size</Form.Label>
        <Form.Input placeholder="Medium input" value="" onChange={() => {}} />
      </Form.Field>

      <Form.Field name="large" size="lg">
        <Form.Label>Large Size</Form.Label>
        <Form.Input placeholder="Large input" value="" onChange={() => {}} />
      </Form.Field>
    </Form>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-4 max-w-md">
      <Form.Field name="name" size="md" required>
        <Form.Label>이름</Form.Label>
        <Form.Input placeholder="이름을 입력하세요" value="" onChange={() => {}} />
      </Form.Field>
    </Form>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-4 max-w-md">
      <Form.Field name="role" size="md">
        <Form.Label>역할</Form.Label>
        <Form.Select placeholder="역할을 선택하세요" options={[{
        value: 'user',
        label: '사용자'
      }, {
        value: 'admin',
        label: '관리자'
      }, {
        value: 'moderator',
        label: '운영자'
      }]} value="" onValueChange={() => {}} />
      </Form.Field>
    </Form>
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-4 max-w-md">
      <Form.Field name="bio" size="md">
        <Form.Label>자기소개</Form.Label>
        <Form.Textarea placeholder="자신을 소개해주세요..." rows={5} value="" onChange={() => {}} />
        <Form.Description>최대 500자까지 입력 가능합니다</Form.Description>
      </Form.Field>
    </Form>
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <CompleteFormExample />
}`,...F.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="space-y-6 max-w-md">
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Input Field</h3>
        <Form.Field name="text" size="md">
          <Form.Label>텍스트 입력</Form.Label>
          <Form.Input placeholder="텍스트를 입력하세요" value="" onChange={() => {}} />
        </Form.Field>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">Select Field</h3>
        <Form.Field name="select" size="md">
          <Form.Label>선택</Form.Label>
          <Form.Select placeholder="옵션을 선택하세요" options={[{
          value: '1',
          label: '옵션 1'
        }, {
          value: '2',
          label: '옵션 2'
        }, {
          value: '3',
          label: '옵션 3'
        }]} value="" onValueChange={() => {}} />
        </Form.Field>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">Textarea Field</h3>
        <Form.Field name="textarea" size="md">
          <Form.Label>긴 텍스트 입력</Form.Label>
          <Form.Textarea placeholder="여러 줄의 텍스트를 입력하세요..." rows={4} value="" onChange={() => {}} />
        </Form.Field>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">With Description</h3>
        <Form.Field name="with-desc" size="md">
          <Form.Label>설명이 있는 필드</Form.Label>
          <Form.Input placeholder="입력하세요" value="" onChange={() => {}} />
          <Form.Description>이것은 필드에 대한 설명입니다</Form.Description>
        </Form.Field>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">With Error</h3>
        <Form.Field name="with-error" size="md" error="에러 메시지">
          <Form.Label>에러가 있는 필드</Form.Label>
          <Form.Input placeholder="잘못된 값" value="invalid" onChange={() => {}} />
        </Form.Field>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">Required Field</h3>
        <Form.Field name="required" size="md" required>
          <Form.Label>필수 필드</Form.Label>
          <Form.Input placeholder="필수 입력" value="" onChange={() => {}} />
        </Form.Field>
      </div>
    </Form>
}`,...u.parameters?.docs?.source}}};const T=["BasicField","FieldWithError","FieldWithDescription","DifferentSizes","RequiredField","SelectField","TextareaField","CompleteForm","AllFieldTypes"];export{u as AllFieldTypes,m as BasicField,F as CompleteForm,d as DifferentSizes,i as FieldWithDescription,n as FieldWithError,c as RequiredField,t as SelectField,p as TextareaField,T as __namedExportsOrder,E as default};
