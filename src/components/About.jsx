import { useAos } from '../hooks/useAnimations'
import { EmailIcon, PhoneIcon } from './Icons'

const infoCards = [
  {
    icon: '🎓',
    title: 'BSc Computer Science',
    sub: 'SIES College of Arts, Science and Commerce, Mumbai',
    tag: '2021 – 2024 · CGPA 8.28',
    tagColor: 'text-[#a78bfa] bg-[rgba(124,58,237,.15)] border-[rgba(124,58,237,.25)]',
  },
  {
    icon: '💼',
    title: 'Software Developer',
    sub: 'ALO Infotech Pvt. Ltd.',
    tag: 'Mar 2025 – Dec 2025',
    tagColor: 'text-[#93c5fd] bg-[rgba(59,130,246,.15)] border-[rgba(59,130,246,.25)]',
  },
  {
    icon: '🚀',
    title: 'Software Developer Intern',
    sub: 'Sellergize Web Technologies Pvt. Ltd.',
    tag: 'Jul 2024 – Nov 2024',
    tagColor: 'text-[#67e8f9] bg-[rgba(6,182,212,.15)] border-[rgba(6,182,212,.25)]',
  },
]

export default function About() {
  const gridRef = useAos(0)

  return (
    <section id="about" className="relative z-10 py-28 px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-[0.8rem] font-medium text-[#7c3aed] tracking-[.05em] block mb-2">// 01</span>
          <h2 className="font-extrabold" style={{ fontSize:'clamp(2rem,4vw,2.75rem)', letterSpacing:'-0.02em' }}>About Me</h2>
          <div className="mt-3 w-12 h-[3px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]"/>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div className="flex flex-col gap-5 text-[#94a3b8] leading-[1.8] text-[1.02rem]">
            <p>
              I'm a <strong className="text-[#f1f5f9]">Backend &amp; Cloud Developer</strong> based in Chennai,
              passionate about building systems that make work disappear — automating repetitive tasks,
              connecting platforms, and creating reliable infrastructure that teams can depend on.
            </p>
            <p>
              My experience spans deploying REST-driven integrations with{' '}
              <span className="text-[#06b6d4] font-medium">Flask</span>, managing cloud infrastructure on{' '}
              <span className="text-[#f97316] font-medium">AWS</span> (EC2, S3, Lambda, VPC, IAM, CloudWatch),
              and writing clean, maintainable Python that scales.
            </p>
            <p>
              I hold a BSc in Computer Science from SIES College, Mumbai, graduating with a CGPA of 8.28.
              Currently, I'm deepening my DevOps expertise and exploring distributed systems architecture.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a href="mailto:r.r.kabilan0435@gmail.com"
                 className="flex items-center gap-2 px-4 py-2 rounded-full text-[.82rem] border border-white/[.08]
                            bg-white/[.04] text-[#94a3b8] hover:text-white hover:border-[#7c3aed] hover:bg-[rgba(124,58,237,.08)]
                            transition-all duration-300">
                <EmailIcon size={14}/> r.r.kabilan0435@gmail.com
              </a>
              <a href="tel:+919022879379"
                 className="flex items-center gap-2 px-4 py-2 rounded-full text-[.82rem] border border-white/[.08]
                            bg-white/[.04] text-[#94a3b8] hover:text-white hover:border-[#7c3aed] hover:bg-[rgba(124,58,237,.08)]
                            transition-all duration-300">
                <PhoneIcon size={14}/> +91-9022879379
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((c, i) => (
              <div key={i}
                   className="flex items-start gap-4 p-5 rounded-2xl border border-white/[.08] bg-white/[.04]
                              backdrop-blur-sm transition-all duration-300 hover:border-[rgba(124,58,237,.3)]
                              hover:bg-[rgba(124,58,237,.04)] hover:translate-x-1.5 group
                              hover:shadow-[-4px_0_16px_rgba(124,58,237,.12)]">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-2xl
                                bg-[rgba(124,58,237,.1)] group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-[.95rem] font-semibold text-[#f1f5f9] mb-0.5">{c.title}</h3>
                  <p className="text-[.85rem] text-[#94a3b8] mb-2">{c.sub}</p>
                  <span className={`inline-block text-[.75rem] font-medium px-2.5 py-0.5 rounded-full border ${c.tagColor}`}>
                    {c.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
