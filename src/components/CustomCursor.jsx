import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'view'
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animFrameId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorState(type || 'hover');
      } else if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const render = () => {
      // Smooth linear interpolation without Framer Motion physics overhead
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0px)`;
      }
      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isMobile || !isVisible) return null;

  const sizeClasses = {
    default: 'w-3.5 h-3.5 bg-sky-400 border-0 mix-blend-difference',
    hover: 'w-11 h-11 bg-sky-400/15 border border-sky-400 mix-blend-normal shadow-lg shadow-sky-500/20',
    view: 'w-16 h-16 bg-blue-600 border border-blue-400 mix-blend-normal shadow-xl shadow-blue-500/30',
  };

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-wider text-white transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    >
      <div className={`rounded-full flex items-center justify-center transition-all duration-200 ${sizeClasses[cursorState]}`}>
        {cursorState === 'view' && (
          <span className="text-white uppercase text-[10px] font-bold tracking-widest pointer-events-none animate-pulse">
            VIEW
          </span>
        )}
      </div>
    </div>
  );
}
