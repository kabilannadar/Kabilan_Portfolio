import { useEffect, useRef } from 'react'
import { useAos } from '../hooks/useAnimations'
import { EmailIcon, PhoneIcon, ArrowIcon, GH, LI } from './Icons'

const contactCards = [
  {
    id: 'email-contact',
    href: 'mailto:r.r.kabilan0435@gmail.com',
    icon: <EmailIcon size={20}/>,
    iconBg: 'from-[#7c3aed] to-[#3b82f6]',
    iconShadow: 'shadow-[0_0_12px_rgba(124,58,237,.3)]',
    hover: 'hover:border-[rgba(124,58,237,.35)] hover:bg-[rgba(124,58,237,.05)]',
    label: 'Email',
    value: 'r.r.kabilan0435@gmail.com',
  },
  {
    id: 'phone-contact',
    href: 'tel:+919022879379',
    icon: <PhoneIcon size={20}/>,
    iconBg: 'from-[#10b981] to-[#06b6d4]',
    iconShadow: 'shadow-[0_0_12px_rgba(16,185,129,.3)]',
    hover: 'hover:border-[rgba(16,185,129,.35)] hover:bg-[rgba(16,185,129,.05)]',
    label: 'Phone',
    value: '+91-9022879379',
  },
  {
    id: 'github-contact',
    href: 'https://github.com/kabilannadar',
    icon: <GH size={20}/>,
    iconBg: 'bg-white/[.1]',
    iconShadow: '',
    hover: 'hover:border-white/25 hover:bg-white/[.08]',
    label: 'GitHub',
    value: 'github.com/kabilannadar',
    external: true,
  },
  {
    id: 'linkedin-contact',
    href: 'https://linkedin.com/in/kabilan-nadar-9738a823a',
    icon: <LI size={20}/>,
    iconBg: 'bg-[rgba(10,102,194,.2)]',
    iconShadow: '',
    hover: 'hover:border-[rgba(10,102,194,.4)] hover:bg-[rgba(10,102,194,.06)]',
    label: 'LinkedIn',
    value: 'kabilan-nadar-9738a823a',
    external: true,
  },
]

/* ── Terminal typing animation ── */
const termLines = [
  { id: 1, prompt: '$ ', text: 'whoami',                                    textColor: 'text-[#a8e6cf]' },
  { id: 2, prompt: '> ', text: 'Kabilan Rethinaswamy — Backend & Cloud Developer',     textColor: 'text-[#94a3b8]' },
  { id: 3, prompt: '> ', text: 'Based in Chennai · Open to work',           textColor: 'text-[#94a3b8]' },
  { id: 4, prompt: '> ', text: '✓ Ready to build something amazing',        textColor: 'text-[#10b981] font-semibold' },
]

function Terminal() {
  const sectionRef = useRef(null)
  const textRefs   = useRef([])
  const cursorRef  = useRef(null)
  const started    = useRef(false)

  useEffect(() => {
    const section = document.getElementById('contact')
    if (!section) return

    function typeText(el, text, cb) {
      let i = 0; el.textContent = ''
      const iv = setInterval(() => {
        el.textContent += text[i++]
        if (i >= text.length) { clearInterval(iv); cb?.() }
      }, 28)
    }

    function runLine(index) {
      if (index >= termLines.length) {
        if (cursorRef.current) cursorRef.current.style.display = 'inline'
        return
      }
      const delay = index === 0 ? 500 : 600
      setTimeout(() => {
        const row = document.getElementById(`term-row-${termLines[index].id}`)
        const el  = textRefs.current[index]
        if (row) row.style.display = 'flex'
        if (el && cursorRef.current) {
          el.parentNode?.appendChild(cursorRef.current)
          typeText(el, termLines[index].text, () => runLine(index + 1))
        }
      }, delay)
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        if (cursorRef.current) cursorRef.current.style.display = 'none'
        runLine(0)
      }
    }, { threshold: 0.3 })
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="rounded-3xl overflow-hidden border border-white/[.1]
                    shadow-[0_8px_32px_rgba(0,0,0,.5),0_0_40px_rgba(124,58,237,.07)]"
         style={{ background:'#0a0f1e', fontFamily:"'JetBrains Mono',monospace" }}>
      {/* header bar */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[.06] bg-white/[.04]">
        <div className="flex gap-1.5">
          <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]"/>
          <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]"/>
          <span className="w-[10px] h-[10px] rounded-full bg-[#27c93f]"/>
        </div>
        <span className="text-[.78rem] text-[#475569] ml-2">kabilan@portfolio ~</span>
      </div>

      {/* body */}
      <div className="p-6 min-h-[200px] leading-[1.8] text-[.82rem]">
        {termLines.map((line, i) => (
          <div key={line.id}
               id={`term-row-${line.id}`}
               className="flex items-baseline gap-1.5 mb-1.5"
               style={{ display: i === 0 ? 'flex' : 'none' }}>
            <span className="text-[#7c3aed] flex-shrink-0">{line.prompt}</span>
            <span ref={el => textRefs.current[i] = el} className={line.textColor}/>
          </div>
        ))}
        <span ref={cursorRef} className="animate-blink text-[#7c3aed]" style={{ display:'none' }}>█</span>
      </div>
    </div>
  )
}

export default function Contact() {
  const wrapRef = useAos(0)

  return (
    <section id="contact" className="relative z-10 py-28 px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-[0.8rem] font-medium text-[#ec4899] tracking-[.05em] block mb-2">// 05</span>
          <h2 className="font-extrabold" style={{ fontSize:'clamp(2rem,4vw,2.75rem)', letterSpacing:'-0.02em' }}>Let's Connect</h2>
          <div className="mt-3 w-12 h-[3px] rounded-full bg-gradient-to-r from-[#ec4899] to-[#7c3aed]"/>
        </div>

        <div ref={wrapRef} className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[1.05rem] text-[#94a3b8] leading-[1.8] mb-8">
              I'm actively looking for opportunities in backend development and cloud engineering.
              Whether you have a project, a question, or just want to say hi — my inbox is always open.
            </p>

            <div className="flex flex-col gap-3">
              {contactCards.map(c => (
                <a key={c.id} id={c.id} href={c.href}
                   {...(c.external ? { target:'_blank', rel:'noopener' } : {})}
                   className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/[.08]
                               bg-white/[.04] transition-all duration-300 hover:translate-x-1.5 ${c.hover}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white
                                   ${c.iconBg.startsWith('from') ? `bg-gradient-to-br ${c.iconBg}` : c.iconBg}
                                   ${c.iconShadow} group-hover:scale-110 transition-transform duration-300`}>
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[.75rem] text-[#475569] font-medium mb-0.5">{c.label}</div>
                    <div className="text-[.9rem] text-[#f1f5f9] font-medium truncate">{c.value}</div>
                  </div>
                  <ArrowIcon size={18}
                    className="text-[#475569] group-hover:text-[#7c3aed] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"/>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Terminal */}
          <Terminal/>

        </div>
      </div>
    </section>
  )
}
