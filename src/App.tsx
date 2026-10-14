import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, Check, CheckCircle2, ClipboardCheck, Database, FileText, Globe,
  LayoutDashboard, Menu, Search, ShieldCheck, Sparkles, X, Zap, AlertTriangle,
  RotateCcw, Mail, Leaf, ChevronDown
} from 'lucide-react';

type Tab = 'ingredients' | 'documents' | 'audit';
type Analysis = { name: string; level: string; concern: string; action: string };
type ChecklistItem = { id: number; text: string; completed: boolean };

const initialChecklist: ChecklistItem[] = [
  { id: 1, text: 'Current raw material specifications collected', completed: false },
  { id: 2, text: 'Supplier certificates checked for validity', completed: true },
  { id: 3, text: 'Manufacturing process flow documented', completed: false },
  { id: 4, text: 'Internal halal committee records organised', completed: false },
  { id: 5, text: 'Product traceability records prepared', completed: false },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Platform', '#features'], ['AI Demo', '#demo'], ['Solutions', '#solutions'], ['Pricing', '#pricing'], ['About', '#about']
  ];
  return <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-midnight/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
      <a href="#home" aria-label="Tayyibraent home" className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-white md:text-2xl">TAYYIBRAENT</span>
        <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[.25em] text-gold">Since 2025</span>
      </a>
      <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
        {links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-gold">{label}</a>)}
        <a href="#early-access" className="rounded-full bg-gold px-5 py-2.5 font-bold text-midnight transition hover:bg-gold-light">Early Access <ArrowRight size={15} className="ml-1 inline" /></a>
      </div>
      <button className="rounded-lg p-2 text-white md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{menuOpen && <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-white/10 bg-navy-dark md:hidden">
      <div className="flex flex-col gap-1 p-5">{links.map(([label,href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">{label}</a>)}<a href="#early-access" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-gold px-4 py-3 text-center font-bold text-midnight">Request Early Access</a></div>
    </motion.div>}</AnimatePresence>
  </nav>;
}

function Hero() {
  return <header id="home" className="relative flex min-h-[780px] items-center overflow-hidden bg-midnight pb-20 pt-36 md:min-h-screen md:pb-28">
    <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
    <div className="pointer-events-none absolute -bottom-20 left-0 h-96 w-96 rounded-full bg-blue-900/20 blur-[120px]" />
    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1fr_0.95fr]">
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
        <div className="glass-panel mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2"><span className="h-2 w-2 rounded-full bg-gold" /><span className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">AI-assisted halal compliance</span></div>
        <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">Make Halal Compliance <span className="text-gold">Smarter.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400 md:text-xl">Tayyibraent is building intelligent tools to help food businesses organise halal documentation, screen ingredient information, and prepare for compliance reviews.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#demo" className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 font-bold text-midnight shadow-lg shadow-gold/10 transition hover:-translate-y-0.5 hover:bg-gold-light">Explore AI Demo <ArrowRight size={19}/></a>
          <a href="#features" className="glass-panel inline-flex items-center justify-center rounded-full px-7 py-4 font-bold text-white transition hover:bg-white/10">Explore the Platform</a>
        </div>
        <p className="mt-6 text-xs leading-5 text-slate-500">Designed to support human review — not replace official halal certification.</p>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}} className="relative">
        <div className="glass-panel rounded-[2rem] p-3 shadow-2xl shadow-black/30 md:rounded-[2.5rem] md:p-4">
          <div className="rounded-[1.5rem] border border-white/5 bg-navy-dark p-5 md:rounded-[2rem] md:p-7">
            <div className="mb-7 flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-midnight"><Zap size={20}/></div><div><p className="font-bold text-white">Compliance Workspace</p><p className="text-xs text-slate-500">Illustrative product preview</p></div></div><span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] font-bold text-gold">DEMO</span></div>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/5 bg-white/[.035] p-4"><ShieldCheck className="mb-4 text-gold" size={23}/><p className="font-display text-3xl font-bold text-white">Ready</p><p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">Checklist status</p></div>
              <div className="rounded-2xl border border-gold/15 bg-gold/[.07] p-4"><Search className="mb-4 text-gold" size={23}/><p className="font-display text-3xl font-bold text-gold">Review</p><p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">Evidence needed</p></div>
            </div>
            <div className="space-y-3">
              {[['Supplier certificate','Needs human review','amber'],['Ingredient specification','Evidence requested','blue'],['Traceability record','Added to checklist','green']].map(([name,status,color])=><div key={name} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[.025] p-3"><span className={`h-2.5 w-2.5 shrink-0 rounded-full ${color==='green'?'bg-emerald-400':color==='amber'?'bg-amber-400':'bg-sky-400'}`}/><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-200">{name}</p><p className="text-xs text-slate-500">{status}</p></div><ChevronDown size={15} className="text-slate-600"/></div>)}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500"><Sparkles size={14} className="text-gold"/> Illustrative interface · not a live compliance assessment</div>
          </div>
        </div>
        <div className="animate-float glass-panel absolute -bottom-7 -left-3 hidden rounded-2xl p-4 shadow-xl sm:block md:-left-8"><div className="flex items-center gap-3"><div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300"><ClipboardCheck size={20}/></div><div><p className="text-sm font-bold text-white">Human review</p><p className="text-xs text-slate-400">Built into the workflow</p></div></div></div>
      </motion.div>
    </div>
  </header>;
}

const features = [
  {icon: FileText, title:'AI-Assisted Document Review', desc:'Organise document information, spot potentially missing fields, and prepare a clearer list of items for follow-up.'},
  {icon: Leaf, title:'Ingredient Risk Screening', desc:'Flag ingredients that may need supplier evidence or additional verification before a compliance review.'},
  {icon: LayoutDashboard, title:'Audit Readiness Workspace', desc:'Bring checklists, supporting records, and outstanding actions into one structured preparation workflow.'},
];

function Features() {
  return <section id="features" className="bg-white py-24 text-midnight md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-8">
    <div className="mx-auto mb-14 max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-amber-700">The platform</p><h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Clarity at every step.</h2><p className="mt-5 leading-7 text-slate-500">Purpose-built workflows to help teams organise information and focus on the issues that need human attention.</p></div>
    <div className="grid gap-5 md:grid-cols-3">{features.map(({icon:Icon,title,desc})=><article key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-900/5 md:p-9"><div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-amber-700 transition group-hover:bg-midnight group-hover:text-gold"><Icon size={27} strokeWidth={1.6}/></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-4 leading-7 text-slate-500">{desc}</p></article>)}</div>
  </div></section>;
}

function InteractiveDemo() {
  const [tab,setTab] = useState<Tab>('ingredients');
  const [ingredientText,setIngredientText] = useState('Water, sugar, cocoa powder, emulsifier (E471), vanilla flavouring');
  const [analysis,setAnalysis] = useState<Analysis[]|null>(null);
  const [analysisError,setAnalysisError] = useState('');
  const [docType,setDocType] = useState('Supplier certificate');
  const [docText,setDocText] = useState('');
  const [docReport,setDocReport] = useState<string[]|null>(null);
  const [checklist,setChecklist] = useState(initialChecklist);
  const [busy,setBusy] = useState(false);
  const progress = useMemo(()=>Math.round(checklist.filter(i=>i.completed).length/checklist.length*100),[checklist]);

  function analyseIngredients() {
    const items = ingredientText.split(/[,;\n]/).map(x=>x.trim()).filter(Boolean);
    if (!items.length) { setAnalysisError('Enter at least one ingredient to run the demo.'); setAnalysis(null); return; }
    setAnalysisError(''); setBusy(true); setAnalysis(null);
    window.setTimeout(()=>{
      setAnalysis(items.map(name=>{
        const s=name.toLowerCase();
        if (/(e471|e472|mono.? and diglyceride|gelatin|gelatine|animal fat|shortening)/i.test(s)) return {name,level:'Verify source',concern:'The source or manufacturing details may not be clear from the ingredient name alone.',action:'Request supplier specification and relevant supporting evidence.'};
        if (/(flavour|flavor|essence|vanilla extract|ethanol|alcohol)/i.test(s)) return {name,level:'Further review',concern:'Composition, carrier, and process details may require clarification.',action:'Request full formulation and supplier declaration.'};
        return {name,level:'Information needed',concern:'This demo cannot confirm halal status from a name alone.',action:'Cross-check supplier evidence and the applicable ingredient records.'};
      }));
      setBusy(false);
    },500);
  }
  function checkDocument() {
    if (!docText.trim()) { setDocReport(['Enter sample document details first.']); return; }
    const lower=docText.toLowerCase();
    const findings:string[]=[];
    if (!/(expiry|expires|valid until|validity|date)/.test(lower)) findings.push('Expiry or validity date was not obvious in the supplied text.');
    if (!/(supplier|issuer|company|manufacturer|issued by)/.test(lower)) findings.push('Supplier or issuing organisation was not obvious in the supplied text.');
    if (!/(certificate|certification|reference|registration|number|no\\.?)/.test(lower)) findings.push('Certificate type or reference number may need to be identified.');
    if (!findings.length) findings.push('Basic keywords were found. Verify the original document and its authenticity independently.');
    findings.push(`Selected category: ${docType}. This is a simple local text check, not document authentication.`);
    setDocReport(findings);
  }

  return <section id="demo" className="bg-slate-50 py-24 text-midnight md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-8">
    <div className="mx-auto mb-12 max-w-3xl text-center"><span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-800"><Sparkles size={14}/> Interactive prototype</span><h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Try the workflow.</h2><p className="mt-5 leading-7 text-slate-500">Explore sample screening and documentation checks. Results are generated locally using demonstration rules, not a live AI model or an official halal determination.</p></div>
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/5">
      <div className="flex flex-col bg-midnight text-white lg:flex-row">
        <aside className="flex w-full flex-col p-5 md:p-7 lg:w-64 lg:shrink-0">
          <div className="mb-6 flex items-center gap-3 px-2"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-midnight"><Zap size={18}/></div><div><p className="font-bold">Tayyibraent</p><p className="text-[10px] uppercase tracking-widest text-slate-400">Demo workspace</p></div></div>
          <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">{([['ingredients','Ingredient screening',Search],['documents','Document checker',Database],['audit','Audit checklist',ClipboardCheck]] as const).map(([key,label,Icon])=><button key={key} onClick={()=>setTab(key)} className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold transition lg:justify-start lg:gap-3 lg:px-4 lg:text-sm ${tab===key?'bg-gold text-midnight':'text-slate-400 hover:bg-white/5 hover:text-white'}`}><Icon size={17}/><span>{label}</span></button>)}</div>
          <div className="mt-6 hidden rounded-2xl border border-white/10 bg-white/[.035] p-4 lg:block"><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Engine status</p><p className="mt-2 flex items-center gap-2 text-xs text-slate-300"><span className="h-2 w-2 rounded-full bg-amber-400"/> Local demo rules active</p></div>
        </aside>
        <div className="min-w-0 flex-1 p-5 md:p-9 lg:p-10">
          {tab==='ingredients'&&<div>
            <div className="mb-6"><h3 className="text-2xl font-bold">Ingredient screening</h3><p className="mt-2 text-sm leading-6 text-slate-500">Separate ingredients with commas, semicolons, or new lines. Use the example or enter your own list.</p></div>
            <label htmlFor="ingredients" className="mb-2 block text-sm font-semibold">Ingredient list</label><textarea id="ingredients" value={ingredientText} onChange={e=>setIngredientText(e.target.value)} rows={4} className="w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-800 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"/>
            {analysisError&&<p role="alert" className="mt-2 text-sm text-red-700">{analysisError}</p>}
            <button disabled={busy} onClick={analyseIngredients} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-midnight px-5 py-3 font-bold text-white transition hover:bg-slate-800 disabled:opacity-60">{busy?'Checking…':'Run demo screening'} <ArrowRight size={17}/></button>
            {analysis&&<div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200"><div className="border-b border-slate-200 bg-amber-50 px-4 py-3 text-xs font-semibold text-amber-900">Illustrative output · verify all findings with qualified personnel</div><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Ingredient</th><th className="px-4 py-3">Review flag</th><th className="px-4 py-3">Suggested next step</th></tr></thead><tbody className="divide-y divide-slate-100">{analysis.map((row,i)=><tr key={`${row.name}-${i}`}><td className="px-4 py-4 font-semibold">{row.name}</td><td className="px-4 py-4"><span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">{row.level}</span><p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">{row.concern}</p></td><td className="px-4 py-4 text-slate-600">{row.action}</td></tr>)}</tbody></table></div>}
          </div>}
          {tab==='documents'&&<div><div className="mb-6"><h3 className="text-2xl font-bold">Document completeness checker</h3><p className="mt-2 text-sm leading-6 text-slate-500">Paste a small sample of document text. The demo checks for a few common information fields; it does not upload or authenticate files.</p></div>
            <label htmlFor="doctype" className="mb-2 block text-sm font-semibold">Document category</label><select id="doctype" value={docType} onChange={e=>setDocType(e.target.value)} className="mb-4 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 outline-none focus:border-amber-500">{['Ingredient specification','Supplier certificate','Halal certificate','Internal halal procedure','Traceability record'].map(x=><option key={x}>{x}</option>)}</select>
            <label htmlFor="doctext" className="mb-2 block text-sm font-semibold">Sample document text</label><textarea id="doctext" value={docText} onChange={e=>setDocText(e.target.value)} rows={5} placeholder="Example: Supplier ABC, Halal Certificate No. 12345, valid until 30 December 2026..." className="w-full rounded-2xl border border-slate-200 p-4 text-sm text-slate-800 outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100"/>
            <button onClick={checkDocument} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-midnight px-5 py-3 font-bold text-white transition hover:bg-slate-800">Check completeness <ArrowRight size={17}/></button>
            {docReport&&<div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5"><h4 className="font-bold">Review notes</h4><ul className="mt-3 space-y-3">{docReport.map((x,i)=><li key={i} className="flex gap-2 text-sm leading-6 text-slate-600"><AlertTriangle size={17} className="mt-1 shrink-0 text-amber-600"/><span>{x}</span></li>)}</ul></div>}
          </div>}
          {tab==='audit'&&<div><div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><h3 className="text-2xl font-bold">Audit readiness checklist</h3><p className="mt-2 text-sm leading-6 text-slate-500">Mark sample preparation tasks as complete. This checklist is illustrative and is not an official audit score.</p></div><div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"><div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 font-display text-xl font-extrabold text-amber-900">{progress}%</div><div><p className="text-xs text-slate-500">Demo progress</p><p className="font-bold">Tasks completed</p></div></div></div>
            <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-amber-500 transition-all duration-300" style={{width:`${progress}%`}}/></div>
            <div className="space-y-3">{checklist.map(item=><label key={item.id} className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition ${item.completed?'border-emerald-100 bg-emerald-50/60':'border-slate-200 bg-white hover:border-amber-300'}`}><input type="checkbox" checked={item.completed} onChange={()=>setChecklist(old=>old.map(c=>c.id===item.id?{...c,completed:!c.completed}:c))} className="mt-1 h-4 w-4 accent-emerald-600"/><span className={`text-sm leading-6 ${item.completed?'text-slate-500 line-through':'font-medium text-slate-800'}`}>{item.text}</span>{item.completed&&<Check size={17} className="ml-auto mt-1 shrink-0 text-emerald-600"/>}</label>)}</div>
            <button onClick={()=>setChecklist(initialChecklist)} className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"><RotateCcw size={15}/> Reset checklist</button>
          </div>}
        </div>
      </div>
      <div className="flex items-start gap-3 border-t border-slate-200 bg-amber-50 px-5 py-4 text-xs leading-5 text-amber-950 md:px-8"><AlertTriangle size={17} className="mt-0.5 shrink-0"/><p><strong>Prototype disclaimer:</strong> This is a local demonstration using simple rules and text checks. It is not connected to a live AI model, does not verify certification authenticity, and does not determine whether a product is halal or haram.</p></div>
    </div>
  </div></section>;
}

function Workflow() {
  const steps=[['01','Collect','Gather ingredient information and supporting documents.'],['02','Screen','Identify possible gaps and items requiring verification.'],['03','Review','Ask qualified people to assess flagged items and evidence.'],['04','Organise','Keep checklists and records structured for internal preparation.']];
  return <section className="bg-midnight py-24 text-white md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mx-auto mb-14 max-w-xl text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">How it works</p><h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">A clearer path forward.</h2></div><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([n,title,desc])=><div key={n} className="relative border-t border-white/10 pt-6"><span className="font-display text-5xl font-extrabold text-gold/30">{n}</span><h3 className="mt-4 text-xl font-bold text-gold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{desc}</p></div>)}</div></div></section>;
}

function Solutions() {
  const items=[['Restaurants & food service','Bring supplier information and day-to-day halal records into a more organised workflow.'],['Food manufacturers','Coordinate ingredient reviews, supporting evidence, and internal readiness tasks.'],['Halal consultants','Structure client document reviews and track issues that need follow-up.']];
  return <section id="solutions" className="bg-white py-24 text-midnight md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-amber-700">Designed for practical work</p><h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">Built around real workflows.</h2></div><div className="grid gap-5 md:grid-cols-3">{items.map(([title,desc])=><article key={title} className="rounded-3xl bg-slate-50 p-7 md:p-9"><div className="mb-5 inline-flex rounded-xl bg-white p-3 text-amber-700 shadow-sm"><Globe size={23}/></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-500">{desc}</p></article>)}</div></div></section>;
}


function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const price = billing === 'monthly' ? '$10' : '$100';
  const period = billing === 'monthly' ? '/ month' : '/ year';
  return <section id="pricing" className="bg-[#080B13] py-24 text-white md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Simple product, clear value</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">A practical starting point.</h2>
        <p className="mt-5 leading-7 text-slate-400">A proposed early-stage plan for teams that need a more organised halal documentation workflow.</p>
        <div className="mt-7 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          <button onClick={() => setBilling('monthly')} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${billing==='monthly'?'bg-white text-midnight':'text-slate-300 hover:text-white'}`}>Monthly</button>
          <button onClick={() => setBilling('yearly')} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${billing==='yearly'?'bg-white text-midnight':'text-slate-300 hover:text-white'}`}>Yearly · Save 17%</button>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-white/15 bg-white/[.04] p-7 md:p-9">
          <div className="flex items-center justify-between gap-3"><h3 className="text-xl font-bold">Free Preview</h3><span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">Explore</span></div>
          <div className="mt-8 flex items-baseline gap-2"><span className="font-display text-5xl font-extrabold">$0</span><span className="text-sm text-slate-400">to get started</span></div>
          <p className="mt-4 min-h-14 leading-7 text-slate-400">Explore the interactive prototype and understand the intended workflow before committing.</p>
          <div className="my-6 border-t border-white/10"/>
          <ul className="space-y-4 text-sm text-slate-200">
            {['Interactive ingredient screening demo','Sample document completeness check','Audit readiness checklist','No payment details required'].map(x=><li key={x} className="flex gap-3"><Check size={17} className="shrink-0 text-gold"/>{x}</li>)}
          </ul>
          <a href="#demo" className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 font-semibold transition hover:bg-white/10">Try the demo <ArrowRight size={17}/></a>
          <p className="mt-4 text-center text-xs leading-5 text-slate-500">Prototype access. Features use illustrative demo logic.</p>
        </article>
        <article className="relative rounded-3xl border border-gold/50 bg-gradient-to-b from-gold/[.11] to-white/[.035] p-7 shadow-2xl shadow-gold/5 md:p-9">
          <div className="absolute right-6 top-6 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">Proposed plan</div>
          <h3 className="pr-28 text-xl font-bold">Starter</h3>
          <div className="mt-8 flex items-baseline gap-2"><span className="font-display text-5xl font-extrabold">{price}</span><span className="text-sm text-slate-400">USD {period}</span></div>
          <p className="mt-4 min-h-14 leading-7 text-slate-400">A proposed entry-level subscription for small teams organising halal compliance records.</p>
          <div className="my-6 border-t border-white/10"/>
          <ul className="space-y-4 text-sm text-slate-200">
            {['Ingredient review workspace','Document completeness checklist','Audit preparation task tracking','Exportable review summary (planned)'].map(x=><li key={x} className="flex gap-3"><Check size={17} className="shrink-0 text-gold"/>{x}</li>)}
          </ul>
          <a href="#early-access" className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 font-bold text-midnight transition hover:bg-[#E5C97F]">Request early access <ArrowRight size={17}/></a>
          <p className="mt-4 text-center text-xs leading-5 text-slate-500">Indicative pricing only. Checkout and paid features are not active yet.</p>
        </article>
      </div>
      <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-slate-600">Pricing is a product concept for demonstration and validation. No subscription or payment can currently be purchased through this website.</p>
    </div>
  </section>;
}

function About() {
  return <section id="about" className="bg-slate-50 py-24 text-midnight md:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-amber-700">About Tayyibraent</p><h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">Technology in service of clearer compliance.</h2></div><div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9"><p className="leading-8 text-slate-600">Tayyibraent is an emerging halal technology venture exploring how AI-assisted workflows can help teams organise documentation, identify information gaps, and prepare for compliance reviews.</p><p className="mt-4 leading-8 text-slate-600">Our approach keeps evidence and human review at the centre. Tools can help organise information, but official certification decisions remain with the relevant authorities.</p><p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-amber-800">Tayyibraent — Since 2025</p></div></div></section>;
}

function EarlyAccess() {
  const [email,setEmail]=useState('');
  const [submitted,setSubmitted]=useState(false);
  const [error,setError]=useState('');
  function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {setError('Enter a valid email address.');return;}
    setError('');
    setSubmitted(true);
  }
  return <section id="early-access" className="bg-midnight px-5 py-24 text-white md:px-8 md:py-32"><div className="mx-auto max-w-4xl"><div className="glass-panel relative overflow-hidden rounded-[2rem] p-7 text-center md:rounded-[2.5rem] md:p-14"><div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"/><div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold"><Mail size={26}/></div><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Early access</p><h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">Help shape what comes next.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">Interested in AI-assisted halal compliance workflows? Register your interest while the platform is being developed.</p>
    {!submitted?<form onSubmit={submit} className="mx-auto mt-8 max-w-lg text-left"><label htmlFor="early-email" className="mb-2 block text-sm font-semibold text-slate-200">Work email</label><div className="flex flex-col gap-3 sm:flex-row"><input id="early-email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-gold"/><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-bold text-midnight transition hover:bg-gold-light">Register interest <ArrowRight size={16}/></button></div>{error&&<p role="alert" className="mt-2 text-sm text-red-300">{error}</p>}<p className="mt-4 text-xs leading-5 text-slate-500">Prototype only: this form does not transmit or save your email. Backend integration is required to collect registrations.</p></form>:<div role="status" className="mx-auto mt-8 max-w-lg rounded-2xl border border-gold/20 bg-gold/10 p-5"><CheckCircle2 className="mx-auto text-gold" size={30}/><p className="mt-3 font-bold">Demo validation successful</p><p className="mt-2 text-sm leading-6 text-slate-300">No information has been sent or stored. A backend must be connected to receive real registrations.</p><button onClick={()=>{setSubmitted(false);setEmail('')}} className="mt-4 text-sm font-semibold text-gold underline underline-offset-4">Try again</button></div>}
  </div></div></section>;
}

function Footer() {
  return <footer className="border-t border-white/10 bg-midnight pb-8 pt-14 text-slate-400"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="grid gap-10 md:grid-cols-3"><div className="md:col-span-2"><a href="#home" className="inline-flex flex-col"><span className="font-display text-2xl font-extrabold text-white">TAYYIBRAENT</span><span className="mt-1 text-[10px] font-bold uppercase tracking-[.25em] text-gold">Since 2025</span></a><p className="mt-5 max-w-md text-sm leading-7">AI-assisted workflows for halal documentation, ingredient screening, and audit readiness. Built with human review and evidence at the centre.</p></div><div><h3 className="font-bold text-white">Contact</h3><a href="mailto:admin@tayyibraent.my" className="mt-4 inline-flex items-center gap-2 text-sm transition hover:text-gold"><Mail size={15}/>admin@tayyibraent.my</a><p className="mt-2 text-sm">tayyibraent.my</p></div></div><div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs">© {new Date().getFullYear()} Tayyibraent. All rights reserved.</p><span className="inline-flex w-fit rounded-full border border-gold/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-gold">TAYYIBRAENT — SINCE 2025</span></div><p className="mt-5 max-w-4xl text-[11px] leading-5 text-slate-600">Prototype disclaimer: Features and sample outputs are illustrative and are not official halal determinations, certification verification, or a substitute for applicable regulatory guidance and qualified review.</p></div></footer>;
}

export default function App() {
  return <div className="min-h-screen"><Navbar/><main><Hero/><Features/><Workflow/><InteractiveDemo/><Solutions/><Pricing/><About/><EarlyAccess/></main><Footer/></div>;
}
