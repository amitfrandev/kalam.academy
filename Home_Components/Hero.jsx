"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import logo from "@/assets/LOGO_COL-3D.png";
import abdul from "@/assets/abdul.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowDown } from "lucide-react";
import UnicornScene from "unicornstudio-react/next";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const rightRef = useRef(null);
  const [dpi, setDpi] = useState(0.0);

  // Button + icon refs
  const btnRef = useRef(null);
  const iconRef = useRef(null);

  const projectId = "IoqHMGgsz86wWx08E0Qr";
  // const projectId = "zSv45br9G0NxRmIFLHJu";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading + paragraph into words
      const headingSplit = new SplitType(headingRef.current, {
        types: "words",
      });
      const paraSplit = new SplitType(paraRef.current, { types: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate heading words
      tl.from(headingSplit.words, {
        y: 50,
        opacity: 0,
        autoAlpha: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
      });

      // Animate paragraph words
      tl.from(
        paraSplit.words,
        {
          y: 30,
          opacity: 0,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.03,
        },
        "-=0.5"
      );

      // Animate right image smoothly
      tl.from(
        rightRef.current,
        {
          scale: 0.95,
          opacity: 0,
          autoAlpha: 0,
          y: 40,
          duration: 1.4,
          ease: "power4.out",
        },
        "-=0.6"
      );
    }, sectionRef);

    // --- Hover animation for button ---
    if (btnRef.current && iconRef.current) {
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(iconRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        })
        .set(iconRef.current, { y: -20 }) // jump above
        .to(iconRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });

      hoverTl.to(
        btnRef.current,
        {
          duration: 0.4,
          backdropFilter: "blur(12px)",
          ease: "power1.inOut",
        },
        0
      );

      btnRef.current.addEventListener("mouseenter", () => hoverTl.play(0));
    }
  }, []);

  useLayoutEffect(() => {
    const dpr = window.devicePixelRatio || 1;
    const cores = navigator.hardwareConcurrency || 4;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Base on DPR (0.2 - 1 scale)
    let calculated = dpr / 1.5;

    // Adjust for cores (weaker CPUs → lower dpi)
    if (cores <= 4) calculated *= 0.6;
    else if (cores <= 8) calculated *= 0.8;

    // Adjust for screen size (smaller screens = lower dpi)
    if (width < 768 || height < 600) calculated *= 0.7;

    // Clamp between 0.2 and 1
    calculated = Math.min(1, Math.max(0.2, calculated));
    calculated = Math.round(calculated * 10) / 10;
    setDpi(calculated);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative z-30 
       overflow-x-hidden text-[#363636] bg-white hover:cursor-none min-h-[90vh]"
      style={{
        cursor: "url(/svg/cursor.svg) 10 10, auto",
      }}
    >
      <div className="max-w-7xl mx-auto md:py-32 overflow-x-hidden flex flex-col md:flex-row flex-wrap gap-12 px-6 py-20">
        {/* Left */}
        <div className="flex-1">
          <Image
            src={logo}
            alt="Best Web Development Course In Ranchi"
            width={200}
            height={200}
            priority
            className="brightness-105"
          />
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-4 mb-6 leading-tight archivo-900"
          >
            KALAM ACADEMY
          </h1>
          <p ref={paraRef} className="text-base md:text-lg mb-6 sora-400">
            A{" "}
            <b className="text-[var(--theme-color)]">
              Google-recognized IT company and institute
            </b>{" "}
            in Ranchi, empowering careers through practical{" "}
            <b className="text-[var(--theme-color)]">Digital Marketing</b> and{" "}
            <b className="text-[var(--theme-color)]">Web Development</b> courses
            designed for the real world.
          </p>

          <a
            ref={btnRef}
            href="#courses"
            style={{ cursor: "url(/svg/hand.svg) 10 10, auto" }}
            className="bg-[var(--theme-color)] hover:cursor-none hover:bg-[rgba(255,255,255,0.5)] pl-4 text-white hover:text-[#1e2467] p-1 inline-flex items-center rounded-full font-semibold transition-colors"
          >
            Start Learning{" "}
            <ArrowDown
              ref={iconRef}
              href="#courses"
              className="inline-block ml-2 p-1 text-[#1e2467] rounded-full w-8 h-8 aspect-square bg-white"
            />
          </a>
        </div>

        {/* Right */}
        <div ref={rightRef} className="relative w-[300px] mx-auto md:mx-0 md:ml-0 h-[300px]">
          <Image
            src={abdul}
            alt="Best Web Development Course In Ranchi"
            fill
            objectFit="contain"
            objectPosition="right"
            className="object-contain ml-auto z-20"
          />
        {/* <h1>dpi = {dpi}</h1> */}
        </div>
        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <UnicornScene
            projectId={projectId}
            className="relative bg-white"
            fps={60}
            dpi={dpi}
            scale={1}
          />
        </div>
        
        <div className="bg-gray-50 w-full h-18 absolute z-50 bottom-0 left-0"></div>
      </div>
    </section>
  );
}
