import { GH, LI, PinIcon, BriefcaseIcon } from './Icons'

export default function Hero() {
  const scroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero"
      className="relative min-h-screen flex items-center overflow-hidden z-10"
      style={{ padding: '7rem 2rem 4rem' }}
    >
      {/* radial glows */}
      <div className="absolute pointer-events-none"
           style={{ top:'-20%', left:'-10%', width:'70%', height:'70%',
             background:'radial-gradient(ellipse, rgba(124,58,237,.12) 0%, transparent 70%)' }}/>
      <div className="absolute pointer-events-none"
           style={{ bottom:'-20%', right:'-10%', width:'50%', height:'50%',
             background:'radial-gradient(ellipse, rgba(6,182,212,.08) 0%, transparent 70%)' }}/>

      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center gap-20 relative z-[2]">

        {/* ── LEFT ── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Available badge */}
          <div className="animate-fade-down inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[.8rem] font-medium mb-6
                          bg-[rgba(16,185,129,.1)] border border-[rgba(16,185,129,.25)] text-[#10b981]">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-dot-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"/>
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#10b981]"/>
            </span>
            Available for work
          </div>

          {/* Name */}
          <h1 className="animate-fade-up flex flex-col leading-[1.05] font-extrabold mb-3"
              style={{ fontSize:'clamp(3rem,6vw,5.5rem)', letterSpacing:'-0.03em', opacity:0, animationDelay:'.1s', animationFillMode:'forwards' }}>
            <span>Kabilan</span>
            <span className="accent-gradient">R.</span>
          </h1>

          {/* Title */}
          <p className="animate-fade-up font-mono font-medium mb-5 text-[#94a3b8]"
             style={{ fontSize:'clamp(1rem,2vw,1.4rem)', opacity:0, animationDelay:'.2s', animationFillMode:'forwards' }}>
            Backend &amp; Cloud Developer
          </p>

          {/* Desc */}
          <p className="animate-fade-up text-[1.05rem] text-[#94a3b8] leading-[1.7] max-w-[540px] mb-6 mx-auto lg:mx-0"
             style={{ opacity:0, animationDelay:'.3s', animationFillMode:'forwards' }}>
            Building scalable Python-based automation systems on AWS. Crafting REST-driven integrations
            and cloud infrastructure that eliminate manual workflows and drive operational efficiency.
          </p>

          {/* Location */}
          <div className="animate-fade-up flex items-center gap-1.5 text-sm text-[#475569] mb-8 justify-center lg:justify-start"
               style={{ opacity:0, animationDelay:'.35s', animationFillMode:'forwards' }}>
            <PinIcon size={16}/> Chennai, Tamil Nadu, India
          </div>

          {/* CTAs */}
          <div className="animate-fade-up flex flex-wrap gap-3 justify-center lg:justify-start"
               style={{ opacity:0, animationDelay:'.4s', animationFillMode:'forwards' }}>
            <button onClick={() => scroll('#projects')}
                    className="px-8 py-3.5 rounded-full text-white font-semibold text-[.95rem] transition-all duration-300
                               bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] shadow-[0_0_24px_rgba(124,58,237,.3)]
                               hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(124,58,237,.5)] cursor-pointer">
              View Projects
            </button>
            <a href="https://github.com/kabilannadar" target="_blank" rel="noopener"
               className="flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-[.9rem] text-[#94a3b8] border border-white/[.08]
                          bg-white/[.04] hover:bg-white/[.07] hover:text-white hover:border-white/[.15] hover:-translate-y-0.5 transition-all duration-300">
              <GH size={18}/> GitHub
            </a>
            <a href="https://linkedin.com/in/kabilan-nadar-9738a823a" target="_blank" rel="noopener"
               className="flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-[.9rem] text-[#94a3b8] border border-white/[.08]
                          bg-white/[.04] hover:bg-white/[.07] hover:text-white hover:border-white/[.15] hover:-translate-y-0.5 transition-all duration-300">
              <LI size={18}/> LinkedIn
            </a>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="animate-fade-right flex flex-col items-center gap-8 flex-shrink-0"
             style={{ opacity:0, animationFillMode:'forwards' }}>

          {/* Avatar */}
          <div className="relative flex items-center justify-center" style={{ width:260, height:260 }}>
            <div className="animate-glow-pulse absolute rounded-full"
                 style={{ inset:-20, background:'radial-gradient(ellipse, rgba(124,58,237,.35) 0%, transparent 70%)' }}/>
            <div className="animate-spin-ring avatar-ring-inner absolute rounded-full"
                 style={{ inset:-8,
                   background:'linear-gradient(135deg,#7c3aed,#06b6d4,#3b82f6)',
                   padding:3 }}/>
            <img src="https://ik.imagekit.io/kabi10/avatar.jpg?updatedAt=1784288965603" alt="Kabilan Rethinaswamy"
                 className="rounded-full object-cover relative z-[1] border-[3px] border-[#0d1120]"
                 style={{ width:240, height:240 }}/>
            <div className="absolute bottom-3 right-3 z-[2] w-11 h-11 rounded-full flex items-center justify-center
                            text-white shadow-[0_4px_16px_rgba(124,58,237,.5)]"
                 style={{ background:'linear-gradient(135deg,#7c3aed,#3b82f6)' }}>
              <BriefcaseIcon size={20}/>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            {[
              { num: '2+', label: 'Years Exp' },
              { num: '5+', label: 'AWS Services' },
              { num: '8.28', label: 'CGPA' },
            ].map(s => (
              <div key={s.num}
                   className="flex flex-col items-center p-4 rounded-2xl border border-white/[.08] bg-white/[.04]
                              backdrop-blur-sm min-w-[75px] transition-all duration-300 hover:-translate-y-0.5
                              hover:border-[rgba(124,58,237,.3)] hover:bg-[rgba(124,58,237,.04)]">
                <span className="text-[1.4rem] font-extrabold accent-gradient">{s.num}</span>
                <span className="text-[0.7rem] text-[#475569] font-medium mt-0.5 text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2]">
        <div className="scroll-dot-inner relative rounded-[13px] border-2 border-white/20"
             style={{ width:26, height:42 }}/>
      </div>
    </section>
  )
}