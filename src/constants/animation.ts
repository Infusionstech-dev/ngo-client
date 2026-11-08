/** Settings for the scroll-reveal animation applied to page sections */
export const SCROLL_REVEAL = {
  /** Elements that fade in when scrolled into view */
  targetSelector: "main section",
  /** CSS classes defined in globals.css */
  hiddenClassName: "reveal",
  visibleClassName: "reveal-visible",
  /** How much of the element must be visible before it animates (0–1) */
  visibilityThreshold: 0.12,
  /** Starts the animation slightly before the element reaches the viewport */
  rootMargin: "0px 0px -40px 0px",
};
