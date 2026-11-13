import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { safeAddMediaQueryListener } from '../utils/lifecycleFixes';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect touch-only / coarse pointer devices
    const mql = window.matchMedia('(pointer: coarse)');
    const updateCoarse = () => {
      if (mql.matches) {
        setIsTouch(true);
        setIsVisible(false);
      }
    };
    updateCoarse();
    const removeMqlListener = safeAddMediaQueryListener(mql, updateCoarse);

    // Disable cursor whenever a touch event is detected (hybrid laptops, mobile, tablets)
    const handleTouchStart = () => {
      setIsTouch(true);
      setIsVisible(false);
    };

    let hasShown = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) {
        setIsTouch(false);
      }
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!hasShown) {
        hasShown = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleWindowBlur = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement | null;
        const interactiveEl = target?.closest('[data-cursor]');
        const clickableEl = target?.closest('button, a, input, select, textarea, [role="button"]');

        if (interactiveEl) {
          setIsHovered(true);
          setHoverText(interactiveEl.getAttribute('data-cursor') || 'VIEW');
        } else if (clickableEl) {
          setIsHovered(true);
          setHoverText('');
        } else {
          setIsHovered(false);
          setHoverText('');
        }
      } catch {
        // Guard against detached DOM nodes
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      removeMqlListener();
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [mouseX, mouseY, isTouch]);

  if (!isVisible || isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? (hoverText ? 3.2 : 1.8) : 1,
          backgroundColor: isHovered ? (hoverText ? 'rgba(224, 146, 144, 0.95)' : 'rgba(242, 238, 216, 0.4)') : 'rgba(224, 146, 144, 0.45)',
          borderColor: isHovered ? '#111111' : 'rgba(17, 17, 17, 0.3)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-7 h-7 rounded-full border flex items-center justify-center backdrop-blur-[1px]"
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[4px] font-sans font-bold tracking-widest text-[#111111] uppercase"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};
