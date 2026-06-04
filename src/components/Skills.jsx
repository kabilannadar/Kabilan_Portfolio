import { useEffect, useRef } from 'react'
import { useAos } from '../hooks/useAnimations'

const skillGroups = [
  {
    icon: '⚡', title: 'Programming', color: '#7c3aed',
    pills: [
      { label:'Python', cls:'bg-[rgba(124,58,237,.15)] text-[#a78bfa] border-[rgba(124,58,237,.25)]' },
      { label:'Bash',   cls:'bg-[rgba(124,58,237,.15)] text-[#a78bfa] border-[rgba(124,58,237,.25)]' },
    ],
  },
  {
    icon: '🌐', title: 'Web Frameworks', color: '#3b82f6',
    pills: [
      { label:'Flask',   cls:'bg-[rgba(59,130,246,.15)] text-[#60a5fa] border-[rgba(59,130,246,.25)]' },
      { label:'Django',  cls:'bg-[rgba(59,130,246,.15)] text-[#60a5fa] border-[rgba(59,130,246,.25)]' },
      { label:'FastAPI', cls:'bg-[rgba(59,130,246,.15)] text-[#60a5fa] border-[rgba(59,130,246,.25)]' },
    ],
  },
  {
    icon: '🗄️', title: 'Databases', color: '#10b981',
    pills: [
      { label:'MySQL',      cls:'bg-[rgba(16,185,129,.15)] text-[#34d399] border-[rgba(16,185,129,.25)]' },
      { label:'PostgreSQL', cls:'bg-[rgba(16,185,129,.15)] text-[#34d399] border-[rgba(16,185,129,.25)]' },
      { label:'SQLite',     cls:'bg-[rgba(16,185,129,.15)] text-[#34d399] border-[rgba(16,185,129,.25)]' },
      { label:'MongoDB',    cls:'bg-[rgba(16,185,129,.15)] text-[#34d399] border-[rgba(16,185,129,.25)]' },
    ],
  },
  {
    icon: '☁️', title: 'Cloud & AWS', color: '#f97316',
    pills: [
      { label:'EC2',        cls:'bg-[rgba(249,115,22,.15)] text-[#fb923c] border-[rgba(249,115,22,.25)]' },
      { label:'S3',         cls:'bg-[rgba(249,115,22,.15)] text-[#fb923c] border-[rgba(249,115,22,.25)]' },
      { label:'Lambda',     cls:'bg-[rgba(249,115,22,.15)] text-[#fb923c] border-[rgba(249,115,22,.25)]' },
      { label:'VPC',        cls:'bg-[rgba(249,115,22,.15)] text-[#fb923c] border-[rgba(249,115,22,.25)]' },
      { label:'IAM',        cls:'bg-[rgba(249,115,22,.15)] text-[#fb923c] border-[rgba(249,115,22,.25)]' },
      { label:'CloudWatch', cls:'bg-[rgba(249,115,22,.15)] text-[#fb923c] border-[rgba(249,115,22,.25)]' },
    ],
  },
  {
    icon: '🛠️', title: 'Systems & Tools', color: '#a855f7',
    pills: [
      { label:'Linux', cls:'bg-[rgba(168,85,247,.15)] text-[#c084fc] border-[rgba(168,85,247,.25)]' },
      { label:'Git',   cls:'bg-[rgba(168,85,247,.15)] text-[#c084fc] border-[rgba(168,85,247,.25)]' },
    ],
  },
  {
    icon: '🧠', title: 'Core Competencies', color: '#14b8a6',
    pills: [
      { label:'Backend Automation',  cls:'bg-[rgba(20,184,166,.15)] text-[#5eead4] border-[rgba(20,184,166,.25)]' },
      { label:'API Integration',     cls:'bg-[rgba(20,184,166,.15)] text-[#5eead4] border-[rgba(20,184,166,.25)]' },
      { label:'Secure Access Control',cls:'bg-[rgba(20,184,166,.15)] text-[#5eead4] border-[rgba(20,184,166,.25)]' },
      { label:'System Monitoring',   cls:'bg-[rgba(20,184,166,.15)] text-[#5eead4] border-[rgba(20,184,166,.25)]' },
      { label:'Data Validation',     cls:'bg-[rgba(20,184,166,.15)] text-[#5eead4] border-[rgba(20,184,166,.25)]' },
    ],
  },
]

const proficiencies = [
  { label:'Python',                  pct:95, color:'#7c3aed' },
  { label:'Flask / FastAPI',         pct:88, color:'#3b82f6' },
  { label:'AWS (EC2, IAM, CloudWatch)',pct:82, color:'#f97316' },
  { label:'SQL / Databases',         pct:80, color:'#10b981' },
  { label:'Linux & Bash',            pct:78, color:'#06b6d4' },
  { label:'Git & DevOps',            pct:75, color:'#ec4899' },
]

function Bar({ label, pct, color }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add('bar-animated'), 120)
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div>
      <div className="flex justify-between text-[.85rem] font-medium mb-2">
        <span className="text-[#94a3b8]">{label}</span>
        <span className="font-mono text-xs text-[#475569]">{pct}%</span>
      </div>
      <div className="h-[6px] rounded-[3px] overflow-hidden bg-white/[.06]">
        <div ref={barRef}
             className="bar-fill h-full rounded-[3px]"
             style={{ '--bar-target':`${pct}%`, '--bar-color':color, background:color,
               boxShadow:`0 0 8px ${color}` }}/>
      </div>
    </div>
  )
}

export default function Skills() {
  const gridRef  = useAos(0)
  const barsRef  = useAos(0)

  return (
    <section id="skills" className="relative z-10 py-28 px-8 bg-[#0d1120]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-[0.8rem] font-medium text-[#3b82f6] tracking-[.05em] block mb-2">// 02</span>
          <h2 className="font-extrabold" style={{ fontSize:'clamp(2rem,4vw,2.75rem)', letterSpacing:'-0.02em' }}>Technical Skills</h2>
          <div className="mt-3 w-12 h-[3px] rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]"/>
        </div>

        {/* Skill groups */}
        <div ref={gridRef}
             className="grid gap-6 mb-14"
             style={{ gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))' }}>
          {skillGroups.map((g, i) => (
            <div key={i}
                 className="p-6 rounded-2xl border border-white/[.08] bg-white/[.04]
                            transition-all duration-300 hover:bg-white/[.07] hover:-translate-y-1
                            hover:border-white/[.12] hover:shadow-[0_8px_32px_rgba(0,0,0,.4)]">
              <h3 className="flex items-center gap-2 text-[.9rem] font-semibold text-[#f1f5f9] mb-4">
                <span>{g.icon}</span> {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.pills.map((p, j) => (
                  <span key={j}
                        className={`px-3 py-1 rounded-full text-[.8rem] font-medium font-mono border ${p.cls}`}>
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div ref={barsRef}
             className="p-8 rounded-3xl border border-white/[.08] bg-white/[.04]">
          <h3 className="text-[1.1rem] font-bold text-[#f1f5f9] mb-8">Proficiency Levels</h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {proficiencies.map((p, i) => (
              <Bar key={i} {...p} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
