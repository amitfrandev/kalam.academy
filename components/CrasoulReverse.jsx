"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partnersComponents = [
  <div key="partner1" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_company1.png"
      alt="Minnions Tech"
      className="w-auto h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">Minnions Tech</h3>
  </div>,

  <div key="partner2" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_company2.png"
      alt="WebdevBuddies"
      className="w-auto h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">WebdevBuddies</h3>
  </div>,

  <div key="partner3" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_company3.png"
      alt="Nice"
      className="w-auto h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">Nice</h3>
  </div>,

  <div key="partner4" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_company4.png"
      alt="Optimize For SEO"
      className="w-auto h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">Optimize For SEO</h3>
  </div>,

  <div key="partner5" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_company5.png"
      alt="Nimbus"
      className="w-auto h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">Nimbus</h3>
  </div>,

  <div key="partner6" className="flex items-center gap-2">
    <img
      src="https://kalamacademy.org/newAssests/img/kalam_company6.png"
      alt="BYJU’S"
      className="w-auto h-8"
    />
    <h3 className="text-2xl archivo-700 font-bold">BYJU’S</h3>
  </div>,
];

export default function CrasoulsReverse() {
  const crosoul = useRef(null);

  useEffect(() => {
    if (!crosoul.current) return;
    const container = crosoul.current;

    // initial positions (right-to-left setup)
    let xPos = 0;
    Array.from(container.children).forEach((el) => {
      gsap.set(el, { x: xPos, position: "absolute", top: 0 });
      xPos += el.offsetWidth + 48; // spacing
    });

    const speed = 1;

    gsap.ticker.add(() => {
      const children = Array.from(container.children);

      children.forEach((el) => {
        let x = (parseFloat(gsap.getProperty(el, "x")) || 0) + speed; // move right
        const w = el.offsetWidth;

        if (x > container.offsetWidth) {
          // when fully out on the right → move to left
          const first = container.firstElementChild;
          const firstX = parseFloat(gsap.getProperty(first, "x")) || 0;
          x = firstX - w - 24;
          container.insertBefore(el, first); // re-append to left
        }

        gsap.set(el, { x });
      });
    });

    return () => gsap.ticker.remove(() => {});
  }, []);

  return (
    <div className="bg-orange-50 w-full h-18 absolute z-10 bottom-0 left-0 archivo-900 overflow-hidden">
      <div ref={crosoul}>
        {partnersComponents.concat(partnersComponents).map((c, i) => (
          <div key={i} className="shrink-0 inline-block opacity-80 mt-5">
            {c}
          </div>
        ))}
      </div>

      {/* fade edges */}
      <div className="absolute left-0 bottom-0 h-full w-[20%] bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 bottom-0 h-full w-[20%] bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
    </div>
  );
}
