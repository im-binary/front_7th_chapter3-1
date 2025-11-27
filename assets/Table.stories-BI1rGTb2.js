import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as c}from"./index-DBSB4Jwm.js";import{r as i}from"./iframe-CrQVFamC.js";import{B as b}from"./index-DCbJD0yk.js";import"./preload-helper-Ck4my5na.js";import"./index-Dp8pwvZo.js";const B=i.forwardRef(({className:l,...s},n)=>e.jsx("div",{className:"overflow-x-auto",children:e.jsx("table",{ref:n,className:c("w-full border-collapse font-[Roboto,Helvetica,Arial,sans-serif] text-(length:--font-size-base) bg-(--color-bg-primary)",l),...s})}));B.displayName="Table";const v=i.forwardRef(({className:l,...s},n)=>e.jsx("thead",{ref:n,className:c("bg-(--color-bg-secondary)",l),...s}));v.displayName="TableHeader";const k=i.forwardRef(({className:l,...s},n)=>e.jsx("tbody",{ref:n,className:c("[&_tr:last-child_td]:border-b-0",l),...s}));k.displayName="TableBody";const S=i.forwardRef(({className:l,...s},n)=>e.jsx("tfoot",{ref:n,className:c("border-t border-(--color-border-base) bg-(--color-bg-secondary) font-medium",l),...s}));S.displayName="TableFooter";const I=i.forwardRef(({className:l,...s},n)=>e.jsx("tr",{ref:n,className:c("transition-colors hover:bg-(--color-bg-hover) data-[state=selected]:bg-(--color-bg-secondary)",l),...s}));I.displayName="TableRow";const D=i.forwardRef(({className:l,...s},n)=>e.jsx("th",{ref:n,className:c("p-(--spacing-md) text-left font-medium text-(length:--font-size-table-header) text-(--color-text-secondary) uppercase tracking-wider border-b-2 border-(--color-border-base) align-middle [&:has([role=checkbox])]:pr-0",l),...s}));D.displayName="TableHead";const z=i.forwardRef(({className:l,...s},n)=>e.jsx("td",{ref:n,className:c("p-(--spacing-md) text-(--color-text-primary) border-b border-(--color-border-light) align-middle [&:has([role=checkbox])]:pr-0",l),...s}));z.displayName="TableCell";const A=i.forwardRef(({className:l,...s},n)=>e.jsx("caption",{ref:n,className:c("mt-(--spacing-md) text-(length:--font-size-sm) text-(--color-text-secondary)",l),...s}));A.displayName="TableCaption";const a=Object.assign(B,{Header:v,Body:k,Footer:S,Row:I,Head:D,Cell:z,Caption:A});try{a.displayName="Table",a.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}const o=({children:l,type:s="primary",size:n="medium",pill:f=!1,status:t,userRole:T,priority:h,paymentStatus:N,showIcon:F=!1})=>{let d=s,r=l;if(t)switch(t){case"published":d="success",r=r||"게시됨";break;case"draft":d="warning",r=r||"임시저장";break;case"archived":d="secondary",r=r||"보관됨";break;case"pending":d="info",r=r||"대기중";break;case"rejected":d="danger",r=r||"거부됨";break}if(T)switch(T){case"admin":d="danger",r=r||"관리자";break;case"moderator":d="warning",r=r||"운영자";break;case"user":d="primary",r=r||"사용자";break;case"guest":d="secondary",r=r||"게스트";break}if(h)switch(h){case"high":d="danger",r=r||"높음";break;case"medium":d="warning",r=r||"보통";break;case"low":d="info",r=r||"낮음";break}if(N)switch(N){case"paid":d="success",r=r||"결제완료";break;case"pending":d="warning",r=r||"결제대기";break;case"failed":d="danger",r=r||"결제실패";break;case"refunded":d="secondary",r=r||"환불됨";break}const U=["badge",`badge-${d}`,`badge-${n}`,f&&"badge-pill"].filter(Boolean).join(" ");return e.jsx("span",{className:U,children:r})},V={title:"UI/Table",component:a,parameters:{layout:"padded"},tags:["autodocs"]},m=[{id:1,name:"김철수",email:"kim@example.com",role:"admin"},{id:2,name:"이영희",email:"lee@example.com",role:"user"},{id:3,name:"박민수",email:"park@example.com",role:"moderator"},{id:4,name:"정수현",email:"jung@example.com",role:"user"},{id:5,name:"최동욱",email:"choi@example.com",role:"user"}],_=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"}],x={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{children:"이메일"}),e.jsx(a.Head,{children:"역할"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role})]},l.id))})]})},p={render:()=>e.jsxs(a,{children:[e.jsx(a.Caption,{children:"사용자 목록"}),e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{children:"이메일"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.id}),e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email})]},l.id))})]})},j={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"Invoice"}),e.jsx(a.Head,{children:"Status"}),e.jsx(a.Head,{children:"Method"}),e.jsx(a.Head,{className:"text-right",children:"Amount"})]})}),e.jsx(a.Body,{children:_.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{className:"font-medium",children:l.invoice}),e.jsx(a.Cell,{children:l.paymentStatus}),e.jsx(a.Cell,{children:l.paymentMethod}),e.jsx(a.Cell,{className:"text-right",children:l.totalAmount})]},l.invoice))}),e.jsx(a.Footer,{children:e.jsxs(a.Row,{children:[e.jsx(a.Cell,{colSpan:3,children:"Total"}),e.jsx(a.Cell,{className:"text-right",children:"$1,200.00"})]})})]})},u={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{children:"이메일"}),e.jsx(a.Head,{children:"역할"}),e.jsx(a.Head,{children:"상태"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"김철수"}),e.jsx(a.Cell,{children:"kim@example.com"}),e.jsx(a.Cell,{children:e.jsx(o,{type:"danger",children:"Admin"})}),e.jsx(a.Cell,{children:e.jsx(o,{status:"published",showIcon:!0})})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"이영희"}),e.jsx(a.Cell,{children:"lee@example.com"}),e.jsx(a.Cell,{children:e.jsx(o,{type:"info",children:"User"})}),e.jsx(a.Cell,{children:e.jsx(o,{status:"published",showIcon:!0})})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"박민수"}),e.jsx(a.Cell,{children:"park@example.com"}),e.jsx(a.Cell,{children:e.jsx(o,{type:"warning",children:"Moderator"})}),e.jsx(a.Cell,{children:e.jsx(o,{status:"draft",showIcon:!0})})]})]})]})},C={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{children:"이메일"}),e.jsx(a.Head,{children:"역할"}),e.jsx(a.Head,{className:"text-right",children:"액션"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role}),e.jsx(a.Cell,{className:"text-right",children:e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(b,{size:"sm",variant:"primary",children:"수정"}),e.jsx(b,{size:"sm",variant:"danger",children:"삭제"})]})})]},l.id))})]})},H={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{children:"이메일"}),e.jsx(a.Head,{children:"역할"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{className:"cursor-pointer",onClick:()=>alert(`${l.name} 클릭됨`),children:[e.jsx(a.Cell,{children:l.id}),e.jsx(a.Cell,{className:"font-medium",children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role})]},l.id))})]})},w={render:()=>{const l=()=>{const[s,n]=i.useState([]),f=t=>{n(T=>T.includes(t)?T.filter(h=>h!==t):[...T,t])};return e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{className:"w-12",children:e.jsx("input",{type:"checkbox",className:"cursor-pointer"})}),e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{children:"이메일"}),e.jsx(a.Head,{children:"역할"})]})}),e.jsx(a.Body,{children:m.map(t=>e.jsxs(a.Row,{"data-state":s.includes(t.id)?"selected":void 0,children:[e.jsx(a.Cell,{children:e.jsx("input",{type:"checkbox",className:"cursor-pointer",checked:s.includes(t.id),onChange:()=>f(t.id)})}),e.jsx(a.Cell,{children:t.name}),e.jsx(a.Cell,{children:t.email}),e.jsx(a.Cell,{children:t.role})]},t.id))})]})};return e.jsx(l,{})}},g={render:()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{children:"이메일"}),e.jsx(a.Head,{children:"역할"})]})}),e.jsx(a.Body,{children:e.jsx(a.Row,{children:e.jsx(a.Cell,{colSpan:3,className:"h-24 text-center",children:"데이터가 없습니다."})})})]})},y={render:()=>{const l=[{id:1,title:"React 18의 새로운 기능",author:"김철수",category:"Development",status:"published",views:1234,date:"2024-01-15"},{id:2,title:"UX 디자인 원칙",author:"이영희",category:"Design",status:"draft",views:456,date:"2024-01-14"},{id:3,title:"접근성 가이드라인",author:"박민수",category:"Accessibility",status:"archived",views:789,date:"2024-01-13"}];return e.jsxs(a,{children:[e.jsx(a.Caption,{children:"블로그 게시물 목록"}),e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{className:"w-12",children:"ID"}),e.jsx(a.Head,{children:"제목"}),e.jsx(a.Head,{children:"작성자"}),e.jsx(a.Head,{children:"카테고리"}),e.jsx(a.Head,{children:"상태"}),e.jsx(a.Head,{className:"text-right",children:"조회수"}),e.jsx(a.Head,{children:"작성일"}),e.jsx(a.Head,{className:"text-right",children:"액션"})]})}),e.jsx(a.Body,{children:l.map(s=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{className:"font-medium",children:s.id}),e.jsx(a.Cell,{className:"font-medium",children:s.title}),e.jsx(a.Cell,{children:s.author}),e.jsx(a.Cell,{children:e.jsx(o,{type:s.category==="Development"?"primary":s.category==="Design"?"info":"danger",pill:!0,children:s.category})}),e.jsx(a.Cell,{children:e.jsx(o,{status:s.status,showIcon:!0})}),e.jsx(a.Cell,{className:"text-right",children:s.views.toLocaleString()}),e.jsx(a.Cell,{children:s.date}),e.jsx(a.Cell,{className:"text-right",children:e.jsxs("div",{className:"flex gap-1 justify-end",children:[e.jsx(b,{size:"sm",variant:"primary",children:"수정"}),s.status==="draft"&&e.jsx(b,{size:"sm",variant:"success",children:"게시"}),s.status==="published"&&e.jsx(b,{size:"sm",variant:"secondary",children:"보관"}),e.jsx(b,{size:"sm",variant:"danger",children:"삭제"})]})})]},s.id))}),e.jsx(a.Footer,{children:e.jsxs(a.Row,{children:[e.jsx(a.Cell,{colSpan:5,children:"총 게시물"}),e.jsx(a.Cell,{className:"text-right",children:l.reduce((s,n)=>s+n.views,0).toLocaleString()}),e.jsxs(a.Cell,{colSpan:2,children:[l.length,"개"]})]})})]})}},R={render:()=>e.jsx("div",{className:"max-w-full",children:e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"ID"}),e.jsx(a.Head,{children:"이름"}),e.jsx(a.Head,{className:"hidden md:table-cell",children:"이메일"}),e.jsx(a.Head,{className:"hidden sm:table-cell",children:"역할"}),e.jsx(a.Head,{children:"액션"})]})}),e.jsx(a.Body,{children:m.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.id}),e.jsx(a.Cell,{className:"font-medium",children:l.name}),e.jsx(a.Cell,{className:"hidden md:table-cell",children:l.email}),e.jsx(a.Cell,{className:"hidden sm:table-cell",children:e.jsx(o,{type:"info",children:l.role})}),e.jsx(a.Cell,{children:e.jsx(b,{size:"sm",variant:"primary",children:"보기"})})]},l.id))})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>이름</Table.Head>
          <Table.Head>이메일</Table.Head>
          <Table.Head>역할</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sampleUsers.map(user => <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Caption>사용자 목록</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>ID</Table.Head>
          <Table.Head>이름</Table.Head>
          <Table.Head>이메일</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sampleUsers.map(user => <Table.Row key={user.id}>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...p.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sampleInvoices.map(invoice => <Table.Row key={invoice.invoice}>
            <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
            <Table.Cell>{invoice.paymentStatus}</Table.Cell>
            <Table.Cell>{invoice.paymentMethod}</Table.Cell>
            <Table.Cell className="text-right">
              {invoice.totalAmount}
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Total</Table.Cell>
          <Table.Cell className="text-right">$1,200.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
}`,...j.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>이름</Table.Head>
          <Table.Head>이메일</Table.Head>
          <Table.Head>역할</Table.Head>
          <Table.Head>상태</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>김철수</Table.Cell>
          <Table.Cell>kim@example.com</Table.Cell>
          <Table.Cell>
            <Badge type="danger">Admin</Badge>
          </Table.Cell>
          <Table.Cell>
            <Badge status="published" showIcon />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>이영희</Table.Cell>
          <Table.Cell>lee@example.com</Table.Cell>
          <Table.Cell>
            <Badge type="info">User</Badge>
          </Table.Cell>
          <Table.Cell>
            <Badge status="published" showIcon />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>박민수</Table.Cell>
          <Table.Cell>park@example.com</Table.Cell>
          <Table.Cell>
            <Badge type="warning">Moderator</Badge>
          </Table.Cell>
          <Table.Cell>
            <Badge status="draft" showIcon />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>이름</Table.Head>
          <Table.Head>이메일</Table.Head>
          <Table.Head>역할</Table.Head>
          <Table.Head className="text-right">액션</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sampleUsers.map(user => <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
            <Table.Cell className="text-right">
              <div className="flex gap-2 justify-end">
                <Button size="sm" variant="primary">
                  수정
                </Button>
                <Button size="sm" variant="danger">
                  삭제
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...C.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>ID</Table.Head>
          <Table.Head>이름</Table.Head>
          <Table.Head>이메일</Table.Head>
          <Table.Head>역할</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sampleUsers.map(user => <Table.Row key={user.id} className="cursor-pointer" onClick={() => alert(\`\${user.name} 클릭됨\`)}>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell className="font-medium">{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...H.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const SelectedTable = () => {
      const [selectedRows, setSelectedRows] = useState<number[]>([]);
      const toggleRow = (id: number) => {
        setSelectedRows(prev => prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]);
      };
      return <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-12">
                <input type="checkbox" className="cursor-pointer" />
              </Table.Head>
              <Table.Head>이름</Table.Head>
              <Table.Head>이메일</Table.Head>
              <Table.Head>역할</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sampleUsers.map(user => <Table.Row key={user.id} data-state={selectedRows.includes(user.id) ? 'selected' : undefined}>
                <Table.Cell>
                  <input type="checkbox" className="cursor-pointer" checked={selectedRows.includes(user.id)} onChange={() => toggleRow(user.id)} />
                </Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
              </Table.Row>)}
          </Table.Body>
        </Table>;
    };
    return <SelectedTable />;
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>이름</Table.Head>
          <Table.Head>이메일</Table.Head>
          <Table.Head>역할</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell colSpan={3} className="h-24 text-center">
            데이터가 없습니다.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const posts = [{
      id: 1,
      title: 'React 18의 새로운 기능',
      author: '김철수',
      category: 'Development',
      status: 'published',
      views: 1234,
      date: '2024-01-15'
    }, {
      id: 2,
      title: 'UX 디자인 원칙',
      author: '이영희',
      category: 'Design',
      status: 'draft',
      views: 456,
      date: '2024-01-14'
    }, {
      id: 3,
      title: '접근성 가이드라인',
      author: '박민수',
      category: 'Accessibility',
      status: 'archived',
      views: 789,
      date: '2024-01-13'
    }];
    return <Table>
        <Table.Caption>블로그 게시물 목록</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-12">ID</Table.Head>
            <Table.Head>제목</Table.Head>
            <Table.Head>작성자</Table.Head>
            <Table.Head>카테고리</Table.Head>
            <Table.Head>상태</Table.Head>
            <Table.Head className="text-right">조회수</Table.Head>
            <Table.Head>작성일</Table.Head>
            <Table.Head className="text-right">액션</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {posts.map(post => <Table.Row key={post.id}>
              <Table.Cell className="font-medium">{post.id}</Table.Cell>
              <Table.Cell className="font-medium">{post.title}</Table.Cell>
              <Table.Cell>{post.author}</Table.Cell>
              <Table.Cell>
                <Badge type={post.category === 'Development' ? 'primary' : post.category === 'Design' ? 'info' : 'danger'} pill>
                  {post.category}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge status={post.status as 'published' | 'draft' | 'archived' | 'rejected'} showIcon />
              </Table.Cell>
              <Table.Cell className="text-right">
                {post.views.toLocaleString()}
              </Table.Cell>
              <Table.Cell>{post.date}</Table.Cell>
              <Table.Cell className="text-right">
                <div className="flex gap-1 justify-end">
                  <Button size="sm" variant="primary">
                    수정
                  </Button>
                  {post.status === 'draft' && <Button size="sm" variant="success">
                      게시
                    </Button>}
                  {post.status === 'published' && <Button size="sm" variant="secondary">
                      보관
                    </Button>}
                  <Button size="sm" variant="danger">
                    삭제
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={5}>총 게시물</Table.Cell>
            <Table.Cell className="text-right">
              {posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
            </Table.Cell>
            <Table.Cell colSpan={2}>{posts.length}개</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>;
  }
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-full">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>ID</Table.Head>
            <Table.Head>이름</Table.Head>
            <Table.Head className="hidden md:table-cell">이메일</Table.Head>
            <Table.Head className="hidden sm:table-cell">역할</Table.Head>
            <Table.Head>액션</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleUsers.map(user => <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell className="font-medium">{user.name}</Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {user.email}
              </Table.Cell>
              <Table.Cell className="hidden sm:table-cell">
                <Badge type="info">{user.role}</Badge>
              </Table.Cell>
              <Table.Cell>
                <Button size="sm" variant="primary">
                  보기
                </Button>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...R.parameters?.docs?.source}}};const O=["Default","WithCaption","WithFooter","WithBadges","WithActions","HoverableRows","SelectableRows","EmptyState","ComplexTable","ResponsiveTable"];export{y as ComplexTable,x as Default,g as EmptyState,H as HoverableRows,R as ResponsiveTable,w as SelectableRows,C as WithActions,u as WithBadges,p as WithCaption,j as WithFooter,O as __namedExportsOrder,V as default};
