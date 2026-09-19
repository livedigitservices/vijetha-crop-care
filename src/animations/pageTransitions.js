import { gsap } from "gsap";

/**
 * Page transition enter animation
 */
export const pageEnter = (containerRef) => {
  if (!containerRef?.current) return;

  window.scrollTo({ top: 0, behavior: "instant" });

  return gsap.fromTo(
    containerRef.current,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  );
};
