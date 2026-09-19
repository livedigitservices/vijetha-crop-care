import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveal an element smoothly when scrolled into view
 */
export const revealOnScroll = (element, options = {}) => {
  if (!element) return;

  const {
    y = 40,
    duration = 1.2,
    delay = 0,
    ease = "power3.out",
    trigger = element,
    start = "top 85%"
  } = options;

  return gsap.fromTo(
    element,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
        once: true
      }
    }
  );
};

/**
 * Stagger reveal multiple child elements
 */
export const staggerOnScroll = (items, trigger, options = {}) => {
  if (!items || items.length === 0) return;

  const {
    y = 35,
    stagger = 0.12,
    duration = 1.0,
    start = "top 82%",
    ease = "power3.out"
  } = options;

  return gsap.fromTo(
    items,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger,
      duration,
      ease,
      scrollTrigger: {
        trigger: trigger || items[0],
        start,
        toggleActions: "play none none none",
        once: true
      }
    }
  );
};

/**
 * Subtle parallax effect for background images
 */
export const parallaxEffect = (imageElement, containerElement, speed = 0.15) => {
  if (!imageElement || !containerElement) return;

  return gsap.to(imageElement, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: containerElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

/**
 * Clean up all scroll triggers
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
