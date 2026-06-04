import { useState, useEffect } from 'react'

const links = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'      },
  { href: '#experience', label: 'Experience'  },
  { href: '#projects',   label: 'Projects'    },
  { href: '#contact',    label: 'Contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080b14]/90 backdrop-blur-xl border-b border-white/[.08] shadow-[0_4px_24px_rgba(0,0,0,.35)]' : ''
    }`}>
      <div className="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" onClick={e => handleLink(e, '#hero')}
           className="hover:opacity-80 transition-opacity duration-200">
          <img src="/logo.jpg" alt="R3X Logo" className="h-10 w-auto object-contain mix-blend-lighten" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}
               className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/[.04] rounded-lg transition-all duration-200">
              {l.label}
            </a>
          ))}
        </div>

        {/* Hire Me */}
        <a href="mailto:r.r.kabilan0435@gmail.com"
           className="hidden md:inline-flex px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300
                      bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] shadow-[0_0_20px_rgba(124,58,237,.3)]
                      hover:-translate-y-px hover:shadow-[0_0_30px_rgba(124,58,237,.5)]">
          Hire Me
        </a>

        {/* Hamburger */}
        <button aria-label="Toggle menu" onClick={() => setOpen(o => !o)}
                className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer">
          <span className={`block w-[22px] h-[2px] bg-white rounded-[2px] transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-[2px] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-[2px] transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#080b14]/95 border-t border-white/[.08] ${open ? 'max-h-60' : 'max-h-0'}`}>
        <div className="flex flex-col px-8 py-4 gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleLink(e, l.href)}
               className="py-3 text-base font-medium text-white/70 hover:text-white border-b border-white/[.06] last:border-0 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
