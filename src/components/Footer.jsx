import { GH, LI } from './Icons'

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-8 border-t border-white/[.08] bg-[#080b14]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Logo */}
        <img src="/logo.jpg" alt="R3X Logo" className="h-9 w-auto object-contain opacity-90 mix-blend-lighten" />

        {/* Text */}
        <div className="text-center">
          <p className="text-[.9rem] text-[#94a3b8]">Built with ❤️ by Kabilan Rethinaswamy · Chennai, India</p>
          <p className="text-[.8rem] text-[#475569] mt-0.5">© 2025 Kabilan Rethinaswamy. All rights reserved.</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-3">
          <a href="https://github.com/kabilannadar" target="_blank" rel="noopener"
             className="w-9 h-9 rounded-lg border border-white/[.08] bg-white/[.04] flex items-center justify-center
                        text-[#475569] hover:text-white hover:bg-white/[.09] hover:border-white/20 transition-all duration-200">
            <GH size={16}/>
          </a>
          <a href="https://linkedin.com/in/kabilan-nadar-9738a823a" target="_blank" rel="noopener"
             className="w-9 h-9 rounded-lg border border-white/[.08] bg-white/[.04] flex items-center justify-center
                        text-[#475569] hover:text-white hover:bg-[rgba(10,102,194,.2)] hover:border-[rgba(10,102,194,.4)] transition-all duration-200">
            <LI size={16}/>
          </a>
        </div>

      </div>
    </footer>
  )
}
