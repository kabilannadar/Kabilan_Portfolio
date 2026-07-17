import { useAos } from '../hooks/useAnimations'
import { GH, GithubCodeIcon, MonitorIcon } from './Icons'

const projects = [
  {
    featured: true,
    icon: <MonitorIcon size={26}/>,
    iconBg: 'from-[#10b981] to-[#06b6d4]',
    iconShadow: 'shadow-[0_0_20px_rgba(16,185,129,.35)]',
    border: 'border-[rgba(16,185,129,.3)]',
    bg: 'bg-gradient-to-br from-[rgba(16,185,129,.07)] to-[rgba(255,255,255,.04)]',
    hoverBorder: 'hover:border-[rgba(16,185,129,.5)]',
    hoverShadow: 'hover:shadow-[0_8px_32px_rgba(0,0,0,.4),0_0_40px_rgba(16,185,129,.12)]',
    badge: true,
    title: 'ExpenseTracker – Personal Finance Platform',
    desc: 'Built a personal finance tracker using a FastAPI backend, Neon DB, and React frontend dashboard. Implemented WhatsApp integration for real-time natural language logging, budget controls, savings goals, and automated data exports.',
    highlights: [
      { icon:'📱', text:'WhatsApp natural language logging' },
      { icon:'📊', text:'Interactive React dashboard' },
      { icon:'🎯', text:'Budgeting & savings goal tracking' },
      { icon:'📈', text:'Visual charts & audit logs' },
    ],
    highlightsGrid: 2,
    pills: [
      { label:'FastAPI',     cls:'bg-[rgba(16,185,129,.15)] text-[#6ee7b7] border-[rgba(16,185,129,.3)]' },
      { label:'React.js',    cls:'bg-[rgba(59,130,246,.15)] text-[#93c5fd] border-[rgba(59,130,246,.3)]' },
      { label:'Neon DB',      cls:'bg-white/[.06] text-[#475569] border-white/[.08]' },
      { label:'JWT Authentication',cls:'bg-[rgba(6,182,212,.15)] text-[#67e8f9] border-[rgba(6,182,212,.3)]' },
      { label:'wweb.js',cls:'bg-[rgba(34,197,94,.15)] text-[#86efac] border-[rgba(34,197,94,.3)]' },
    ],
    link: { href:'https://github.com/kabilannadar/ExpenseTracker', label:'View on GitHub',
            cls:'bg-gradient-to-r from-[#10b981] to-[#06b6d4] text-white hover:shadow-[0_0_30px_rgba(16,185,129,.4)]' },
  },
  {
    featured: true,
    icon: <GithubCodeIcon size={26}/>,
    iconBg: 'from-[#7c3aed] to-[#3b82f6]',
    iconShadow: 'shadow-[0_0_20px_rgba(124,58,237,.35)]',
    border: 'border-[rgba(124,58,237,.3)]',
    bg: 'bg-gradient-to-br from-[rgba(124,58,237,.07)] to-[rgba(255,255,255,.04)]',
    hoverBorder: 'hover:border-[rgba(124,58,237,.5)]',
    hoverShadow: 'hover:shadow-[0_8px_32px_rgba(0,0,0,.4),0_0_40px_rgba(124,58,237,.12)]',
    badge: true,
    title: 'Automated GitHub-to-JIRA Ticketing System',
    desc: 'Designed and deployed a Flask-based REST API on AWS EC2 to automatically convert GitHub issue events into structured JIRA tickets. Features real-time cross-platform issue synchronization and IAM role-based access control.',
    highlights: [
      { icon:'⚡', text:'Real-time webhook synchronization' },
      { icon:'🔐', text:'IAM role-based access control' },
      { icon:'📊', text:'Centralized CloudWatch monitoring' },
      { icon:'🔄', text:'Eliminated manual ticket creation' },
    ],
    highlightsGrid: 2,
    pills: [
      { label:'Python',          cls:'bg-[rgba(124,58,237,.15)] text-[#c4b5fd] border-[rgba(124,58,237,.3)]' },
      { label:'Flask',           cls:'bg-[rgba(124,58,237,.15)] text-[#c4b5fd] border-[rgba(124,58,237,.3)]' },
      { label:'AWS EC2',         cls:'bg-[rgba(249,115,22,.15)] text-[#fdba74] border-[rgba(249,115,22,.3)]' },
      { label:'IAM',             cls:'bg-[rgba(249,115,22,.15)] text-[#fdba74] border-[rgba(249,115,22,.3)]' },
      { label:'CloudWatch',      cls:'bg-[rgba(249,115,22,.15)] text-[#fdba74] border-[rgba(249,115,22,.3)]' },
      { label:'GitHub Webhooks', cls:'bg-white/[.06] text-[#475569] border-white/[.08]' },
      { label:'JIRA API',        cls:'bg-white/[.06] text-[#475569] border-white/[.08]' },
    ],
    link: { href:'https://github.com/kabilannadar/flask_jira', label:'View on GitHub',
            cls:'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white hover:shadow-[0_0_30px_rgba(124,58,237,.4)]' },
  },
  {
    featured: false,
    icon: <MonitorIcon size={26}/>,
    iconBg: 'from-[#3b82f6] to-[#06b6d4]',
    iconShadow: 'shadow-[0_0_20px_rgba(59,130,246,.35)]',
    border: 'border-white/[.08]',
    bg: 'bg-white/[.04]',
    hoverBorder: 'hover:border-[rgba(59,130,246,.35)]',
    hoverShadow: 'hover:shadow-[0_8px_32px_rgba(0,0,0,.4),0_0_40px_rgba(59,130,246,.1)]',
    badge: false,
    title: 'EnGame — Full Stack Gaming Platform',
    desc: 'A full-stack gaming platform developed as an academic team project. Led backend coordination in a 3-member team, designed authentication and authorization flows using OAuth, contributed to API handling and MongoDB schema integration.',
    highlights: [
      { icon:'🔐', text:'OAuth authentication & authorization' },
      { icon:'🗄️', text:'MongoDB schema design & integration' },
      { icon:'🤝', text:'Led backend coordination in 3-member team' },
    ],
    highlightsGrid: 1,
    pills: [
      { label:'React.js', cls:'bg-[rgba(59,130,246,.15)] text-[#93c5fd] border-[rgba(59,130,246,.3)]' },
      { label:'Next.js',  cls:'bg-[rgba(59,130,246,.15)] text-[#93c5fd] border-[rgba(59,130,246,.3)]' },
      { label:'Node.js',  cls:'bg-[rgba(59,130,246,.15)] text-[#93c5fd] border-[rgba(59,130,246,.3)]' },
      { label:'MongoDB',  cls:'bg-[rgba(16,185,129,.15)] text-[#6ee7b7] border-[rgba(16,185,129,.3)]' },
      { label:'OAuth',    cls:'bg-white/[.06] text-[#475569] border-white/[.08]' },
    ],
    link: { href:'https://github.com/kabilannadar', label:'GitHub Profile',
            cls:'border border-[rgba(59,130,246,.4)] bg-[rgba(59,130,246,.1)] text-[#93c5fd] hover:bg-[rgba(59,130,246,.2)]' },
  },
]

function ProjectCard({ p }) {
  const ref = useAos(0)
  return (
    <div ref={ref}
         className={`group flex flex-col p-8 rounded-3xl border ${p.border} ${p.bg}
                     transition-all duration-300 hover:-translate-y-1.5 ${p.hoverBorder} ${p.hoverShadow}`}>

      <div className="flex justify-between items-start mb-5">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.iconBg} ${p.iconShadow}
                         flex items-center justify-center text-white
                         group-hover:scale-110 transition-transform duration-300`}>
          {p.icon}
        </div>
        {p.badge && (
          <span className="px-3 py-1 rounded-full text-[.75rem] font-bold text-white
                           bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-[1.2rem] font-bold text-[#f1f5f9] leading-snug mb-2">{p.title}</h3>
      <p className="text-[.9rem] text-[#94a3b8] leading-[1.7] mb-5">{p.desc}</p>

      {/* highlights */}
      <div className={`grid gap-2 mb-5 ${p.highlightsGrid === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {p.highlights.map((h, i) => (
          <div key={i} className="flex items-center gap-2 text-[.8rem] text-[#94a3b8]">
            <span className="text-[.9rem] flex-shrink-0">{h.icon}</span> {h.text}
          </div>
        ))}
      </div>

      {/* pills */}
      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
        {p.pills.map((pl, i) => (
          <span key={i} className={`px-2.5 py-0.5 rounded-full text-[.75rem] font-medium font-mono border ${pl.cls}`}>
            {pl.label}
          </span>
        ))}
      </div>

      {/* link */}
      <div>
        <a href={p.link.href} target="_blank" rel="noopener"
           className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[.85rem] font-semibold
                       transition-all duration-200 hover:scale-105 ${p.link.cls}`}>
          <GH size={16}/> {p.link.label}
        </a>
      </div>

    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-8 bg-[#0d1120]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-[0.8rem] font-medium text-[#10b981] tracking-[.05em] block mb-2">// 04</span>
          <h2 className="font-extrabold" style={{ fontSize:'clamp(2rem,4vw,2.75rem)', letterSpacing:'-0.02em' }}>Projects</h2>
          <div className="mt-3 w-12 h-[3px] rounded-full bg-gradient-to-r from-[#10b981] to-[#06b6d4]"/>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => <ProjectCard key={i} p={p}/>)}
        </div>

      </div>
    </section>
  )
}
