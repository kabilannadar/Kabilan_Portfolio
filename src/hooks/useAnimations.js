import { useEffect, useRef } from 'react'

/* ── reusable fade animation hook ── */
export function useAos(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('aos-hidden')
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.replace('aos-hidden', 'aos-visible'), delay)
        obs.unobserve(el)
      }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return ref
}

/* ── bar animation hook ── */
export function useBarAnimation() {
  useEffect(() => {
    const bars = document.querySelectorAll('.bar-fill')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          setTimeout(() => el.classList.add('bar-animated'), 120)
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.3 })
    bars.forEach(b => obs.observe(b))
    return () => obs.disconnect()
  }, [])
}
