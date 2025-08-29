"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vision from "@/assets/3dIcons/vision.webp";
import Mission from "@/assets/3dIcons/mission.webp";
import Work from "@/assets/3dIcons/work.webp";
import Image from "next/image";
import catBg from "@/assets/bg2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]); 

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ✅ Background parallax
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { y: -600 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: () =>
                "+=" +
                (sectionRef.current?.offsetHeight
                  ? sectionRef.current.offsetHeight / 1.6
                  : 0),
              scrub: true,
            },
          }
        );
      }

      // ✅ Heading animation
      if (headingRef.current) {
        const headingSplit = new SplitType(headingRef.current, { types: "chars" });
        gsap.set(headingSplit.chars, { x: 80, opacity: 0 });
        gsap.to(headingSplit.chars, {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 100%",
            end: "top 60%",
            scrub: true,
          },
        });
      }

      // ✅ Cards animation (using refs instead of .card-tilt)
      cardRefs.current.forEach((card, i) => {
        gsap.set(card, { x:-80, opacity: 0 });
        gsap.to(card, {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            end: "top 32%",
            scrub: true,
          },
        });
      });
    },[]);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-42 px-6 md:px-12 bg-blue-950/80 text-gray-50 lg:px-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-10 will-change-transform"
      >
        <Image
          src={catBg}
          alt="background"
          objectFit="cover"
          objectPosition="bottom"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Our <span className="text-orange-500">Vision & Mission</span>
          </h2>
          <p className="mt-6 text-base md:text-lg">
            We will transform Ranchi into the digital capital of India and the
            world!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
          <div
            ref={addToCardRefs}
            className="rounded-2xl p-4 bg-gradient-to-br from-white/50 to-orange-100/30 shadow-2xl backdrop-blur-sm border border-white/20 hover:shadow-orange-200/50 transition-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <Image alt="logo-work" width={60} height={60} src={Work} objectFit="contain" />
              <h3 className="text-xl sm:text-2xl font-semibold">Work</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Our work is driven by a dedication to excellence, a passion for
              innovation, and making a positive impact.
            </p>
          </div>

          <div
            ref={addToCardRefs}
            className="z-20 rounded-2xl p-8 bg-gradient-to-br from-white/70 to-indigo-100/30 shadow-2xl backdrop-blur-xl border border-white/20 hover:shadow-indigo-200/50 transition-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <Image alt="logo-vision" width={60} height={60} src={Vision} objectFit="contain" />
              <h3 className="text-xl sm:text-2xl font-semibold">Vision</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Our vision is to be a leading force in innovation and make a
              meaningful impact on the communities we serve.
            </p>
          </div>

          <div
            ref={addToCardRefs}
            className="rounded-2xl p-8 bg-gradient-to-br from-white/70 to-green-100/30 shadow-2xl backdrop-blur-xl border border-white/20 hover:shadow-green-200/50 transition-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <Image alt="logo-mission" width={60} height={60} src={Mission} objectFit="contain" />
              <h3 className="text-xl sm:text-2xl font-semibold">Mission</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Our mission is to deliver exceptional value through innovative
              solutions while upholding excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
