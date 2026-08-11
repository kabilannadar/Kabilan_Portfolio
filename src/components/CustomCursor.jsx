import { useEffect, useRef } from 'react';

/**
 * Apple-style fluid spring cursor (iPadOS / macOS fluid pointer)
 * with a high-fidelity optical text magnification lens.
 * Features:
 * - Smooth lerp tracking
 * - Cloning and rendering a magnified, aligned copy of hovered interactive elements
 * - Clipping the zoom to the cursor circle using overflow: hidden
 * - Snappy click squeeze feedback
 */
export default function CustomCursor() {
  const elRef = useRef(null);
  const innerRef = useRef(null);
  const rafRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const clicking = useRef(false);
  const visible = useRef(false);
  const activeTarget = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const lerp = (a, b, t) => a + (b - a) * t;
    const SELECTOR = 'a, button, [data-hover], .contact-pill, .avatar-container, [role="button"], input, textarea, select';

    const tick = () => {
      // Smooth Apple-like spring lerp
      current.current.x = lerp(current.current.x, target.current.x, 0.22);
      current.current.y = lerp(current.current.y, target.current.y, 0.22);

      const scale = clicking.current ? 0.84 : 1;
      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) scale(${scale})`;

      // Anti-translate the lens wrapper to keep the clone stationary relative to the screen,
      // and apply a 1.28x zoom centered on the cursor lens position!
      if (hovering.current) {
        inner.style.transform = `translate3d(${-current.current.x + 24}px, ${-current.current.y + 24}px, 0) scale(1.28)`;
        inner.style.transformOrigin = `${current.current.x}px ${current.current.y}px`;
      } else {
        inner.style.transform = 'none';
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (!visible.current) {
        visible.current = true;
        el.style.opacity = '1';
      }

      target.current = { x: e.clientX, y: e.clientY };

      const under = document.elementFromPoint(e.clientX, e.clientY);
      const targetEl = under ? under.closest(SELECTOR) : null;

      // Ensure the target and all its parent wrappers are visible (opacity > 0)
      let isVisible = true;
      if (targetEl) {
        let temp = targetEl;
        while (temp && temp !== document.body) {
          const style = window.getComputedStyle(temp);
          if (style.opacity === '0' || style.visibility === 'hidden' || style.display === 'none') {
            isVisible = false;
            break;
          }
          temp = temp.parentElement;
        }
      }

      const isInteractive = !!(targetEl && isVisible);

      if (isInteractive) {
        if (activeTarget.current !== targetEl) {
          activeTarget.current = targetEl;
          hovering.current = true;
          el.classList.add('is-hovering');

          // Find the nearest non-transparent parent background color
          let parentBg = '#f8f4ed';
          let currentEl = targetEl;
          while (currentEl && currentEl !== document.body) {
            const bg = window.getComputedStyle(currentEl).backgroundColor;
            if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
              parentBg = bg;
              break;
            }
            currentEl = currentEl.parentElement;
          }
          el.style.backgroundColor = parentBg;

          // Clone target for the magnifying lens effect
          inner.innerHTML = '';
          const clone = targetEl.cloneNode(true);
          const rect = targetEl.getBoundingClientRect();
          clone.style.position = 'absolute';
          clone.style.left = `${rect.left}px`;
          clone.style.top = `${rect.top}px`;
          clone.style.width = `${rect.width}px`;
          clone.style.height = `${rect.height}px`;
          clone.style.margin = '0';
          clone.style.transform = 'none';
          clone.style.transition = 'none';
          inner.appendChild(clone);
        }
      } else {
        if (hovering.current) {
          hovering.current = false;
          activeTarget.current = null;
          el.classList.remove('is-hovering');
          el.style.backgroundColor = '';
          inner.innerHTML = '';
        }
      }
    };

    const onMouseDown = () => {
      clicking.current = true;
      el.classList.add('is-clicking');
    };

    const onMouseUp = () => {
      clicking.current = false;
      el.classList.remove('is-clicking');
    };

    const onLeaveWindow = () => {
      visible.current = false;
      hovering.current = false;
      clicking.current = false;
      activeTarget.current = null;
      el.style.opacity = '0';
      el.style.backgroundColor = '';
      el.classList.remove('is-hovering', 'is-clicking');
      inner.innerHTML = '';
    };

    const onEnterWindow = () => {
      visible.current = true;
      el.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onLeaveWindow);
    document.addEventListener('mouseenter', onEnterWindow);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.removeEventListener('mouseenter', onEnterWindow);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={elRef} className="custom-cursor">
      <div ref={innerRef} className="custom-cursor-lens-wrapper" />
    </div>
  );
}


