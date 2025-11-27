import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./index-IchTIW6F.js";import{r as u}from"./iframe-DOSFeJNL.js";import"./index-Ctdo-lZd.js";import"./index-BRSA1GXh.js";import"./index-CfJS1Cjs.js";import"./index-DBSB4Jwm.js";import"./check-C5zwdJek.js";import"./preload-helper-Ck4my5na.js";const f={title:"UI/Select",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Select의 크기",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"비활성화 여부",table:{type:{summary:"boolean"}}},value:{control:"text",description:"현재 선택된 값",table:{type:{summary:"string"}}},onValueChange:{description:"값 변경 시 호출되는 콜백",table:{type:{summary:"(value: string) => void"}},control:!1},defaultValue:{control:"text",description:"기본값 (uncontrolled)",table:{type:{summary:"string"}}}}},o=[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"orange",label:"오렌지"},{value:"grape",label:"포도"},{value:"strawberry",label:"딸기"}],l={render:()=>e.jsxs(t,{size:"md",children:[e.jsx(t.Trigger,{className:"w-[200px]",children:e.jsx(t.Value,{placeholder:"과일을 선택하세요"})}),e.jsx(t.Content,{children:o.map(r=>e.jsx(t.Item,{value:r.value,children:r.label},r.value))})]})},a={render:()=>e.jsxs(t,{size:"md",children:[e.jsx(t.Trigger,{className:"w-[200px]",error:!0,children:e.jsx(t.Value,{placeholder:"에러 상태"})}),e.jsx(t.Content,{children:o.map(r=>e.jsx(t.Item,{value:r.value,children:r.label},r.value))})]})},s={render:()=>e.jsxs(t,{size:"md",disabled:!0,children:[e.jsx(t.Trigger,{className:"w-[200px]",children:e.jsx(t.Value,{placeholder:"비활성화됨"})}),e.jsx(t.Content,{children:o.map(r=>e.jsx(t.Item,{value:r.value,children:r.label},r.value))})]})},n={render:()=>e.jsxs(t,{size:"md",children:[e.jsx(t.Trigger,{className:"w-[200px]",children:e.jsx(t.Value,{placeholder:"음식 선택"})}),e.jsxs(t.Content,{children:[e.jsxs(t.Group,{children:[e.jsx("div",{className:"px-2 py-1.5 text-xs font-semibold text-gray-500",children:"과일"}),e.jsx(t.Item,{value:"apple",children:"사과"}),e.jsx(t.Item,{value:"banana",children:"바나나"}),e.jsx(t.Item,{value:"orange",children:"오렌지"})]}),e.jsxs(t.Group,{children:[e.jsx("div",{className:"px-2 py-1.5 text-xs font-semibold text-gray-500",children:"채소"}),e.jsx(t.Item,{value:"carrot",children:"당근"}),e.jsx(t.Item,{value:"tomato",children:"토마토"}),e.jsx(t.Item,{value:"cucumber",children:"오이"})]})]})]})},p=r=>{const[i,d]=u.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(t,{...r,value:i,onValueChange:d,children:[e.jsx(t.Trigger,{className:"w-[200px]",children:e.jsx(t.Value,{placeholder:"과일을 선택하세요"})}),e.jsx(t.Content,{children:o.map(m=>e.jsx(t.Item,{value:m.value,children:m.label},m.value))})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["선택된 값: ",e.jsx("strong",{children:i||"(없음)"})]})]})},c={args:{size:"md",value:""},render:r=>e.jsx(p,{...r})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Select size="md">
      <Select.Trigger className="w-[200px]">
        <Select.Value placeholder="과일을 선택하세요" />
      </Select.Trigger>
      <Select.Content>
        {fruits.map(fruit => <Select.Item key={fruit.value} value={fruit.value}>
            {fruit.label}
          </Select.Item>)}
      </Select.Content>
    </Select>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Select size="md">
      <Select.Trigger className="w-[200px]" error>
        <Select.Value placeholder="에러 상태" />
      </Select.Trigger>
      <Select.Content>
        {fruits.map(fruit => <Select.Item key={fruit.value} value={fruit.value}>
            {fruit.label}
          </Select.Item>)}
      </Select.Content>
    </Select>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Select size="md" disabled>
      <Select.Trigger className="w-[200px]">
        <Select.Value placeholder="비활성화됨" />
      </Select.Trigger>
      <Select.Content>
        {fruits.map(fruit => <Select.Item key={fruit.value} value={fruit.value}>
            {fruit.label}
          </Select.Item>)}
      </Select.Content>
    </Select>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Select size="md">
      <Select.Trigger className="w-[200px]">
        <Select.Value placeholder="음식 선택" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <div className="px-2 py-1.5 text-xs font-semibold text-gray-500">
            과일
          </div>
          <Select.Item value="apple">사과</Select.Item>
          <Select.Item value="banana">바나나</Select.Item>
          <Select.Item value="orange">오렌지</Select.Item>
        </Select.Group>
        <Select.Group>
          <div className="px-2 py-1.5 text-xs font-semibold text-gray-500">
            채소
          </div>
          <Select.Item value="carrot">당근</Select.Item>
          <Select.Item value="tomato">토마토</Select.Item>
          <Select.Item value="cucumber">오이</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    value: ''
  },
  render: args => <InteractiveSelect {...args} />
}`,...c.parameters?.docs?.source}}};const C=["Default","WithError","Disabled","WithGroups","Playground"];export{l as Default,s as Disabled,c as Playground,a as WithError,n as WithGroups,C as __namedExportsOrder,f as default};
