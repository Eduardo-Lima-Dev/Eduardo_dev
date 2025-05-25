"use client";

import { useAnimation, AnimationControls } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useScrollAnimation(
  threshold = 0.2
): [AnimationControls, (node?: Element | null) => void] {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return [controls, ref];
}
