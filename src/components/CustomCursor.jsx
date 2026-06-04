import { useEffect, useRef } from 'react';

/**
 * iOS-style spring cursor.
 * Bug fix: uses elementFromPoint() on every mousemove to decide hover state
 * instead of mouseover/mouseout, which could miss mouseout events and get stuck.
 */
export default function CustomCursor() {
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const lerp = (a, b, t) => a + (b - a) * t;
    const SELECTOR = 'a, button, [data-hover], .card-lift';

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.16);
      current.current.y = lerp(current.current.y, target.current.y, 0.16);
      el.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };

      /*
       * Check on every move whether the element under the cursor is interactive.
       * This is more reliable than mouseover/mouseout because it never misses
       * a mouseout when the cursor moves fast across element boundaries.
       */
      const under = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = !!(under && under.closest(SELECTOR));

      if (isInteractive && !hovering.current) {
        hovering.current = true;
        el.classList.add('is-hovering');
      } else if (!isInteractive && hovering.current) {
        hovering.current = false;
        el.classList.remove('is-hovering');
      }
    };

    /* Safety reset: if mouse leaves the window entirely, clear hover state */
    const onLeaveWindow = () => {
      hovering.current = false;
      el.classList.remove('is-hovering');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeaveWindow);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeaveWindow);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={elRef} className="custom-cursor" />;
}
