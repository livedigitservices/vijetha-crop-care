import { gsap } from "gsap";

/**
 * Cinematic Hero section entry animation
 */
export const animateHero = ({
  badgeRef,
  titleLinesRef,
  descriptionRef,
  buttonsRef,
  scrollIndicatorRef,
  backgroundRef
}) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Subtle zoom-out on background image
  if (backgroundRef?.current) {
    gsap.fromTo(
      backgroundRef.current,
      { scale: 1.12, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 2.2, ease: "power2.out" }
    );
  }

  // Staggered reveal of hero content
  if (badgeRef?.current) {
    tl.fromTo(
      badgeRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, delay: 0.2 }
    );
  }

  if (titleLinesRef?.current && titleLinesRef.current.length > 0) {
    tl.fromTo(
      titleLinesRef.current,
      { y: 48, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.16 },
      "-=0.7"
    );
  }

  if (descriptionRef?.current) {
    tl.fromTo(
      descriptionRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0 },
      "-=0.8"
    );
  }

  if (buttonsRef?.current) {
    tl.fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      "-=0.7"
    );
  }

  if (scrollIndicatorRef?.current) {
    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 1.0 },
      "-=0.4"
    );
  }

  return tl;
};
