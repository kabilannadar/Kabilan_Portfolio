import { useRef, useEffect } from 'react'

const jobs = [
  {
    dot: 'from-[#7c3aed] to-[#3b82f6]',
    dotGlow: 'shadow-[0_0_12px_rgba(124,58,237,.5)]',
    borderHover: 'hover:border-[rgba(124,58,237,.25)]',
    accent: 'text-[#06b6d4]',
    title: 'Software Developer',
    company: 'ALO Infotech Pvt. Ltd.',
    period: 'Mar 2025 – Dec 2025',
    type: 'Full-time',
    typeColor: 'bg-[rgba(124,58,237,.12)] text-[#a78bfa] border-[rgba(124,58,237,.2)]',
    bullets: [
      'Diagnosed and resolved backend service and system-level issues to ensure application reliability and consistent production uptime.',
      'Assisted in deployment and configuration of backend services across Linux-based environments, supporting stable production releases.',
      'Designed and implemented Python-based automation scripts to streamline operational workflows and reduce manual intervention.',
      'Improved backend maintainability by enhancing technical documentation, logging, and monitoring processes.',
      'Reduced recurring backend issue reports by standardizing root-cause analysis procedures and implementing structured resolution workflows.',
    ],
    tags: ['Python', 'Linux', 'Backend', 'Automation'],
    bulletColor: 'text-[#7c3aed]',
  },
  {
    dot: 'from-[#06b6d4] to-[#10b981]',
    dotGlow: 'shadow-[0_0_12px_rgba(6,182,212,.5)]',
    borderHover: 'hover:border-[rgba(6,182,212,.25)]',
    accent: 'text-[#10b981]',
    title: 'Software Developer Intern',
    company: 'Sellergize Web Technologies Pvt. Ltd.',
    period: 'Jul 2024 – Nov 2024',
    type: 'Internship',
    typeColor: 'bg-[rgba(6,182,212,.12)] text-[#67e8f9] border-[rgba(6,182,212,.2)]',
    bullets: [
      'Developed Python-based validation utilities to process and verify crawler-generated backend data used in production systems.',
      'Implemented structured validation logic to analyze backend datasets and identify inconsistencies, improving data reliability.',
      'Assisted in debugging data-processing workflows by tracing issues across backend services and isolating root causes.',
      'Collaborated with backend developers to understand service logic and improve data validation mechanisms.',
      'Strengthened system stability by identifying edge cases and refining backend data handling processes.',
    ],
    tags: ['Python', 'Data Validation', 'Debugging'],
    bulletColor: 'text-[#06b6d4]',
  },
]

function TimelineItem({ job, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = 'opacity .6s ease, transform .6s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        obs.unobserve(el)
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* dot */}
      <div className={`absolute -left-10 top-6 w-[14px] h-[14px] rounded-full bg-gradient-to-br ${job.dot}
                       ${job.dotGlow} ring-4 ring-[#080b14] transition-all duration-300 group-hover:scale-125`}/>

      <div className={`group p-8 rounded-3xl border border-white/[.08] bg-white/[.04]
                       transition-all duration-300 hover:bg-white/[.07] hover:translate-x-1.5
                       hover:shadow-[0_8px_32px_rgba(0,0,0,.4)] ${job.borderHover}`}>

        {/* header */}
        <div className="flex flex-wrap gap-4 justify-between items-start mb-5">
          <div>
            <h3 className="text-[1.2rem] font-bold text-[#f1f5f9] mb-0.5">{job.title}</h3>
            <p className={`text-[.9rem] font-medium ${job.accent}`}>{job.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="font-mono text-[.8rem] text-[#475569]">{job.period}</span>
            <span className={`text-[.75rem] font-medium px-3 py-0.5 rounded-full border ${job.typeColor}`}>
              {job.type}
            </span>
          </div>
        </div>

        {/* bullets */}
        <ul className="space-y-2.5 mb-5">
          {job.bullets.map((b, i) => (
            <li key={i} className="relative pl-5 text-[.92rem] text-[#94a3b8] leading-[1.6]">
              <span className={`absolute left-0 top-0.5 text-[.8rem] ${job.bulletColor}`}>▸</span>
              {b}
            </li>
          ))}
        </ul>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map(t => (
            <span key={t} className="px-2.5 py-0.5 rounded-md text-xs bg-white/[.06] text-[#475569] border border-white/[.08]">
              {t}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-[0.8rem] font-medium text-[#f97316] tracking-[.05em] block mb-2">// 03</span>
          <h2 className="font-extrabold" style={{ fontSize:'clamp(2rem,4vw,2.75rem)', letterSpacing:'-0.02em' }}>Experience</h2>
          <div className="mt-3 w-12 h-[3px] rounded-full bg-gradient-to-r from-[#f97316] to-[#ec4899]"/>
        </div>

        {/* Timeline */}
        <div className="relative timeline-line pl-10 flex flex-col gap-10">
          {jobs.map((job, i) => <TimelineItem key={i} job={job} index={i}/>)}
        </div>

      </div>
    </section>
  )
}
