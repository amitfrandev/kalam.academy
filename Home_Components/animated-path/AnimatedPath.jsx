"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedPath({ sectionRef }) {
  const pathRef = useRef(null);

  const generatePath = (width, height, steps = 6) => {
    let path = `M ${width / 2} 0`;
    const stepY = height / steps;

    for (let i = 1; i <= steps; i++) {
      const cp1x = Math.random() * width;
      const cp1y = stepY * (i - 0.5);
      const cp2x = Math.random() * width;
      const cp2y = stepY * (i - 0.5);
      const endX = Math.random() * width;
      const endY = stepY * i;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
    }

    return path;
  };

  useLayoutEffect(() => {
    if (!sectionRef?.current || !pathRef.current) return;

    const ctx = gsap.context(() => {
      const svg = pathRef.current.closest("svg");
      if (!svg) return;

      const width = svg.clientWidth || 1;
      const height = svg.clientHeight || 1;

      const newPath = generatePath(width, height);
      pathRef.current.setAttribute("d", newPath);

      const pathLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true, // enable for debugging
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d=""
        fill="none"
        stroke="#06b6d4"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
