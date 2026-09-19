import { useEffect, useRef } from "react";
import { revealOnScroll } from "../animations/scrollAnimations";

/**
 * Hook to automatically apply revealOnScroll to a ref
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const anim = revealOnScroll(elementRef.current, options);
      return () => {
        if (anim && anim.scrollTrigger) {
          anim.scrollTrigger.kill();
        }
        if (anim) anim.kill();
      };
    }
  }, []);

  return elementRef;
};
