import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-BzGp6D50.js";import"./preload-helper-Ck4my5na.js";const W={title:"Design/Tokens",parameters:{layout:"fullscreen"}},S=[{title:"Blue",vars:["--color-blue-50","--color-blue-500","--color-blue-600"]},{title:"Red",vars:["--color-red-50","--color-red-300","--color-red-500","--color-red-600","--color-red-700"]},{title:"Green",vars:["--color-green-50","--color-green-300","--color-green-500","--color-green-600","--color-green-700"]},{title:"Orange",vars:["--color-orange-50","--color-orange-300","--color-orange-500","--color-orange-700"]},{title:"Cyan",vars:["--color-cyan-50","--color-cyan-300","--color-cyan-500","--color-cyan-700"]},{title:"Gray",vars:["--color-gray-50","--color-gray-100","--color-gray-200","--color-gray-300","--color-gray-400","--color-gray-500","--color-gray-600","--color-gray-700","--color-gray-800","--color-gray-900"]},{title:"Semantic",vars:["--color-primary-50","--color-primary-500","--color-primary-600","--color-danger-500","--color-success-500","--color-warning-500","--color-info-500","--color-secondary-50","--color-secondary-100","--color-secondary-200","--color-secondary-300","--color-secondary-500"]},{title:"Misc",vars:["--color-border-base","--color-border-light","--color-border-strong","--color-text-primary","--color-text-secondary","--color-text-disabled","--color-bg-primary","--color-bg-secondary","--color-bg-hover"]}],z=({name:o})=>{const[r,t]=i.useState("");return i.useEffect(()=>{const l=getComputedStyle(document.documentElement).getPropertyValue(o).trim();t(l||"")},[o]),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("div",{style:{width:120,height:48,borderRadius:6,background:`var(${o})`,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:e.jsx("code",{style:{fontSize:12},children:o})}),e.jsx("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:r||"—"})]})},c={render:o=>e.jsx(j,{dark:!!o.dark}),args:{dark:!1},argTypes:{dark:{control:"boolean"}}},j=({dark:o=!1})=>(i.useEffect(()=>{const r=document.documentElement;return o?r.classList.add("dark"):r.classList.remove("dark"),()=>{r.classList.remove("dark")}},[o]),e.jsx("div",{style:{padding:24,background:o?"#000":"#fafafa"},children:S.map(r=>e.jsxs("section",{style:{marginBottom:20},children:[e.jsx("h3",{style:{marginBottom:8,color:o?"var(--color-text-primary)":"var(--color-text-secondary)"},children:r.title}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:r.vars.map(t=>e.jsx(z,{name:t},t))})]},r.title))})),g={render:()=>{const o=({varName:n,label:h,sample:x="The quick brown fox",styleProp:s="fontSize"})=>{const v=i.useRef(null),[u,b]=i.useState("");i.useEffect(()=>{if(!v.current)return;const y=getComputedStyle(v.current);let d="";s==="fontSize"?d=y.fontSize:s==="fontWeight"?d=y.fontWeight:d=y.lineHeight,b(d||"")},[n,s]);const a={};return s==="fontSize"&&(a.fontSize=`var(${n})`),s==="fontWeight"&&(a.fontWeight=`var(${n})`),s==="lineHeight"&&(a.lineHeight=`var(${n})`),e.jsxs("div",{style:{display:"flex",gap:6},children:[e.jsx("div",{ref:v,style:a,children:h??x}),e.jsx("div",{style:{fontSize:12,color:"var(--Color-text-secondary, #666)"},children:e.jsx("code",{style:{fontSize:12},children:n})}),e.jsx("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:u||"—"})]})},r=["--font-size-xs","--font-size-sm","--font-size-base","--font-size-md","--font-size-lg","--font-size-xl","--font-size-2xl","--font-size-btn-sm","--font-size-btn-md","--font-size-btn-lg","--font-size-badge-sm","--font-size-badge-md","--font-size-badge-lg","--font-size-table-header"],t=["--font-weight-normal","--font-weight-medium","--font-weight-semibold","--font-weight-bold"],l=["--line-height-none","--line-height-tight","--line-height-snug","--line-height-normal","--line-height-relaxed","--line-height-loose","--line-height-btn-sm","--line-height-btn-md","--line-height-btn-lg"];return e.jsxs("div",{style:{padding:24},children:[e.jsx("section",{style:{marginBottom:18},children:r.map(n=>e.jsx(o,{varName:n,sample:n.replace("--font-size-","").toUpperCase(),styleProp:"fontSize"},n))}),e.jsx("section",{style:{marginBottom:18},children:t.map(n=>e.jsx(o,{varName:n,sample:n.replace("--font-weight-","").toUpperCase(),styleProp:"fontWeight"},n))}),e.jsx("section",{style:{marginBottom:18},children:l.map(n=>e.jsx(o,{varName:n,sample:n.replace("--line-height-","").toUpperCase(),styleProp:"lineHeight"},n))})]})}},p={render:()=>{const o=["--spacing-xs","--spacing-sm","--spacing-md","--spacing-lg","--spacing-xl","--spacing-2xl"],r=({name:t})=>{const[l,n]=i.useState("");return i.useEffect(()=>{const h=getComputedStyle(document.documentElement).getPropertyValue(t).trim();n(h||"")},[t]),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,minWidth:240},children:[e.jsx("div",{style:{width:140},children:e.jsx("div",{style:{height:24,background:"#f3f4f6",borderRadius:6},children:e.jsx("div",{style:{height:"100%",width:`var(${t})`,background:"linear-gradient(90deg, rgba(59,130,246,0.12), rgba(59,130,246,0.08))",borderRadius:6}})})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{fontSize:13},children:e.jsx("code",{children:t})}),e.jsx("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:l||"—"})]})]})};return e.jsx("div",{style:{padding:24},children:e.jsx("div",{style:{display:"grid",gap:12},children:o.map(t=>e.jsx(r,{name:t},t))})})}},f={render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx("div",{style:{padding:12,boxShadow:"var(--shadow-sm)"},children:"Shadow sm"}),e.jsx("div",{style:{padding:12,boxShadow:"var(--shadow-md)"},children:"Shadow md"}),e.jsx("div",{style:{padding:12,boxShadow:"var(--shadow-lg)"},children:"Shadow lg"})]})})},m={render:()=>e.jsx("div",{style:{padding:24},children:e.jsxs("div",{style:{position:"relative",height:200},children:[e.jsx("div",{style:{position:"absolute",top:0,left:20,zIndex:"var(--z-index-base)",background:"#fff",border:"1px solid #ddd",padding:8},children:"Base (0)"}),e.jsx("div",{style:{position:"absolute",top:30,left:60,zIndex:"var(--z-index-dropdown)",background:"#fff",border:"1px solid #ddd",padding:8},children:"Dropdown (1000)"}),e.jsx("div",{style:{position:"absolute",top:60,left:90,zIndex:"var(--z-index-modal)",background:"#fff",border:"1px solid #ddd",padding:8},children:"Modal (1050)"}),e.jsx("div",{style:{position:"absolute",top:90,left:120,zIndex:"var(--z-index-popover)",background:"#fff",border:"1px solid #ddd",padding:8},children:"Popover (1060)"})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ColorsArgs) => <ColorsDemo dark={!!args.dark} />,
  args: {
    dark: false
  },
  argTypes: {
    dark: {
      control: 'boolean'
    }
  }
} as StoryObj<typeof meta>`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const TypoSample: FC<{
      varName: string;
      label?: string;
      sample?: string;
      styleProp?: 'fontSize' | 'fontWeight' | 'lineHeight';
    }> = ({
      varName,
      label,
      sample = 'The quick brown fox',
      styleProp = 'fontSize'
    }) => {
      const ref = useRef<HTMLDivElement | null>(null);
      const [computed, setComputed] = useState('');
      useEffect(() => {
        if (!ref.current) return;
        const cs = getComputedStyle(ref.current);
        let val = '';
        if (styleProp === 'fontSize') val = cs.fontSize;else if (styleProp === 'fontWeight') val = cs.fontWeight;else val = cs.lineHeight;
        setComputed(val || '');
      }, [varName, styleProp]);
      const inline: Partial<CSSStyleDeclaration> = {};
      if (styleProp === 'fontSize') inline.fontSize = \`var(\${varName})\`;
      if (styleProp === 'fontWeight') inline.fontWeight = \`var(\${varName})\`;
      if (styleProp === 'lineHeight') inline.lineHeight = \`var(\${varName})\`;
      return <div style={{
        display: 'flex',
        gap: 6
      }}>
          <div ref={ref} style={inline as React.CSSProperties}>
            {label ?? sample}
          </div>
          <div style={{
          fontSize: 12,
          color: 'var(--Color-text-secondary, #666)'
        }}>
            <code style={{
            fontSize: 12
          }}>{varName}</code>
          </div>
          <div style={{
          fontSize: 12,
          color: 'var(--color-text-secondary)'
        }}>
            {computed || '—'}
          </div>
        </div>;
    };
    const fontSizes = ['--font-size-xs', '--font-size-sm', '--font-size-base', '--font-size-md', '--font-size-lg', '--font-size-xl', '--font-size-2xl', '--font-size-btn-sm', '--font-size-btn-md', '--font-size-btn-lg', '--font-size-badge-sm', '--font-size-badge-md', '--font-size-badge-lg', '--font-size-table-header'];
    const fontWeights = ['--font-weight-normal', '--font-weight-medium', '--font-weight-semibold', '--font-weight-bold'];
    const lineHeights = ['--line-height-none', '--line-height-tight', '--line-height-snug', '--line-height-normal', '--line-height-relaxed', '--line-height-loose', '--line-height-btn-sm', '--line-height-btn-md', '--line-height-btn-lg'];
    return <div style={{
      padding: 24
    }}>
        <section style={{
        marginBottom: 18
      }}>
          {fontSizes.map(v => <TypoSample key={v} varName={v} sample={v.replace('--font-size-', '').toUpperCase()} styleProp="fontSize" />)}
        </section>

        <section style={{
        marginBottom: 18
      }}>
          {fontWeights.map(v => <TypoSample key={v} varName={v} sample={v.replace('--font-weight-', '').toUpperCase()} styleProp="fontWeight" />)}
        </section>

        <section style={{
        marginBottom: 18
      }}>
          {lineHeights.map(v => <TypoSample key={v} varName={v} sample={v.replace('--line-height-', '').toUpperCase()} styleProp="lineHeight" />)}
        </section>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const spacingTokens = ['--spacing-xs', '--spacing-sm', '--spacing-md', '--spacing-lg', '--spacing-xl', '--spacing-2xl'];
    const SpacingSample: FC<{
      name: string;
    }> = ({
      name
    }) => {
      const [val, setVal] = useState('');
      useEffect(() => {
        const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        setVal(v || '');
      }, [name]);
      return <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minWidth: 240
      }}>
          <div style={{
          width: 140
        }}>
            <div style={{
            height: 24,
            background: '#f3f4f6',
            borderRadius: 6
          }}>
              <div style={{
              height: '100%',
              width: \`var(\${name})\`,
              background: 'linear-gradient(90deg, rgba(59,130,246,0.12), rgba(59,130,246,0.08))',
              borderRadius: 6
            }} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
            <div style={{
            fontSize: 13
          }}>
              <code>{name}</code>
            </div>
            <div style={{
            fontSize: 12,
            color: 'var(--color-text-secondary)'
          }}>
              {val || '—'}
            </div>
          </div>
        </div>;
    };
    return <div style={{
      padding: 24
    }}>
        <div style={{
        display: 'grid',
        gap: 12
      }}>
          {spacingTokens.map(s => <SpacingSample key={s} name={s} />)}
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <div style={{
        padding: 12,
        boxShadow: 'var(--shadow-sm)'
      }}>
          Shadow sm
        </div>
        <div style={{
        padding: 12,
        boxShadow: 'var(--shadow-md)'
      }}>
          Shadow md
        </div>
        <div style={{
        padding: 12,
        boxShadow: 'var(--shadow-lg)'
      }}>
          Shadow lg
        </div>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <div style={{
      position: 'relative',
      height: 200
    }}>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 20,
        zIndex: 'var(--z-index-base)',
        background: '#fff',
        border: '1px solid #ddd',
        padding: 8
      }}>
          Base (0)
        </div>
        <div style={{
        position: 'absolute',
        top: 30,
        left: 60,
        zIndex: 'var(--z-index-dropdown)',
        background: '#fff',
        border: '1px solid #ddd',
        padding: 8
      }}>
          Dropdown (1000)
        </div>
        <div style={{
        position: 'absolute',
        top: 60,
        left: 90,
        zIndex: 'var(--z-index-modal)',
        background: '#fff',
        border: '1px solid #ddd',
        padding: 8
      }}>
          Modal (1050)
        </div>
        <div style={{
        position: 'absolute',
        top: 90,
        left: 120,
        zIndex: 'var(--z-index-popover)',
        background: '#fff',
        border: '1px solid #ddd',
        padding: 8
      }}>
          Popover (1060)
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const P=["Colors","Typography","Spacing","Shadows","ZIndex"];export{c as Colors,f as Shadows,p as Spacing,g as Typography,m as ZIndex,P as __namedExportsOrder,W as default};
