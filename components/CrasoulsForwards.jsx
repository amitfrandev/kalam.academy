"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverFollowCard from "@/components/HoverFollowCard";

gsap.registerPlugin(ScrollTrigger);

const components = [
  <div key="item1" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_digital_plan1.png"
      alt="Students Icon"
      className="w-8 h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">15K+ Students Worldwide</h3>
  </div>,

  <div key="item2" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_buisness_best_customer.png"
      alt="Academy Icon"
      className="w-8 h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">IT company + Academy</h3>
  </div>,

  <div key="item3" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_digital_feature5.png"
      alt="Certificate Icon"
      className="w-8 h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">
      Certificate + Placement Support
    </h3>
  </div>,

  <div key="item4" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_digital_plan2.png"
      alt="Placement Icon"
      className="w-8 h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">1K+ Placement</h3>
  </div>,

  <div key="item5" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_digital_feature6.png"
      alt="Google Icon"
      className="w-8 h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">Recognized By Google</h3>
  </div>,

  <div key="item6" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_digital_feature4.png"
      alt="Internship Icon"
      className="w-8 h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">Internship Opportunities</h3>
  </div>,
];

export default function CrasoulsForwards() {
  const crosoul = useRef(null);

  useEffect(() => {
    if (!crosoul.current) return;
    const container = crosoul.current;

    // initial positions
    let xPos = 0;
    Array.from(container.children).forEach((el) => {
      gsap.set(el, { x: xPos, position: "absolute", top: 0 });
      xPos += el.offsetWidth + 48; // gap
    });

    const speed = 1;

    gsap.ticker.add(() => {
      const children = Array.from(container.children);

      children.forEach((el) => {
        let x = (parseFloat(gsap.getProperty(el, "x")) || 0) - speed;
        const w = el.offsetWidth;

        if (x < -w) {
          const last = container.lastElementChild;
          const lastX = parseFloat(gsap.getProperty(last, "x")) || 0;
          x = lastX + last.offsetWidth + 24;
          container.appendChild(el); // re-order without flex shift
        }

        gsap.set(el, { x });
      });
    });

    return () => gsap.ticker.remove(() => {});
  }, []);

  return (
  
   <HoverFollowCard className="bg-orange-50 w-full h-18 absolute z-10 bottom-0 cursor-default left-0 archivo-900 overflow-hidden" label="Why Kalam Academy?">
        <div ref={crosoul}>
          {components.concat(components).map((c, i) => (
            <div key={i} className="shrink-0 inline-block opacity-80 mt-5">
              {c}
            </div>
          ))}
        </div>

        <div className="absolute left-0 bottom-0 h-full w-[20%] bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 bottom-0 h-full w-[20%] bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
      </HoverFollowCard>
  );
}

