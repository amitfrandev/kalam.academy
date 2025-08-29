"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import abdul from "@/assets/abdul.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowRight } from "lucide-react";
import UnicornScene from "unicornstudio-react/next";
import digitalMarketingIMg from "@/assets/courses/digital-marketing.jpg";
import webDevlopmentIMg from "@/assets/courses/web-devlopment.jpg";
import businessIMg from "@/assets/courses/business.jpg";
import workIco from "@/assets/3dIcons/work.webp";
import internetIco from "@/assets/3dIcons/internet.png";
import certificateIco from "@/assets/3dIcons/digital-marketing.webp";
import CrasoulsForwards from "@/components/CrasoulsForwards";
import HoverFollowCard from "@/components/HoverFollowCard";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const rightRef = useRef(null);
  const crosoul = useRef(null);
  const [dpi, setDpi] = useState(0.0);

  // Button + icon refs (arrays)
  const btnRefs = useRef([]);
  const iconRefs = useRef([]);

  // Helpers to collect refs
  const addBtnRef = (el) => {
    if (el && !btnRefs.current.includes(el)) {
      btnRefs.current.push(el);
    }
  };
  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  const projectId = "IoqHMGgsz86wWx08E0Qr";

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

    // --- Hover animations for each button+icon ---
    btnRefs.current.forEach((btn, i) => {
      const icon = iconRefs.current[i];
      if (!btn || !icon) return;

      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(icon, {
          x: 20,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        })
        .set(icon, { x: -20 })
        .to(icon, {
          x: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });

      hoverTl.to(
        btn,
        {
          duration: 0.4,
          backdropFilter: "blur(12px)",
          ease: "power1.inOut",
        },
        0
      );

      btn.addEventListener("mouseenter", () => hoverTl.play(0));
    });
  }, []);

  useLayoutEffect(() => {
    const dpr = window.devicePixelRatio || 1;
    const cores = navigator.hardwareConcurrency || 4;
    const width = window.innerWidth;
    const height = window.innerHeight;

    let calculated = dpr / 1.5;
    if (cores <= 4) calculated *= 0.6;
    else if (cores <= 8) calculated *= 0.8;
    if (width < 768 || height < 600) calculated *= 0.7;

    calculated = Math.min(1, Math.max(0.2, calculated));
    calculated = Math.round(calculated * 10) / 10;
    setDpi(calculated);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30
       overflow-x-hidden text-gray-600 hover:cursor-none flex justify-center min-h-[92vh]"
      style={{
        cursor: "url(/svg/cursor.svg) 10 10, auto",
      }}
    >
      <div className="max-w-7xl z-20 pt-20 pb-16 mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 m-auto place-content-between px-6">
        {/* Left */}
        <div className="md:col-span-3 mt-6">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-4 mb-6 leading-tight archivo-900"
          >
            KALAM ACADEMY
          </h1>
          <p ref={paraRef} className="text-base md:text-lg mb-6 sora-400">
            A{" "}
            <span className="text-[var(--theme-color)]">
              Google-recognized IT company and institute
            </span>{" "}
            in Ranchi, empowering careers through practical{" "}
            <span className="text-[var(--theme-color)]">Digital Marketing</span>{" "}
            and{" "}
            <span className="text-[var(--theme-color)]">Web Development</span>{" "}
            courses designed for the real world.
          </p>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          className="relative ml-auto w-[300px] mx-auto md:mx-0 md:ml-0 h-[300px] "
        >
          <Image
            src={abdul}
            alt="Best Web Development Course In Ranchi"
            fill
            className="object-contain ml-auto z-30"
          />
        </div>

        {/* Cards */}
        <div className="md:row-span-1 md:col-span-4 mb-16 flex flex-col md:flex-row gap-4 px-6">
          {/* Digital Marketing Card */}
          <HoverFollowCard label="Classroom Program" className="rounded-2xl flex-1 p-6 bg-gradient-to-b from-white/50 to-orange-500/5 outline-1 outline-gray-500/10 backdrop-blur-[4px]">
            <div className="flex items-center gap-2 mb-2">
              <Image
                alt="logo-vision"
                width={50}
                height={50}
                src={certificateIco}
                objectFit="contain"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Digital Marketing
              </h3>
            </div>
            <p className="font-medium text-sm mb-4">
              Course Duration: 3 Months
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={digitalMarketingIMg}
                alt="Digital Marketing"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <p className="text-gray-700 text-sm">
                Learn to grow businesses online, boost visibility, and attract
                customers using effective strategies.
              </p>
            </div>
            <div className="flex justify-end">
              <a
                ref={addBtnRef}
                href="#courses"
                className="hover:bg-[var(--theme-color)] mt-5 text-sm bg-white/40 pl-4 hover:text-white text-[#1e2467] inline-flex items-center rounded-full font-semibold transition-colors"
              >
                Start Learning{" "}
                <ArrowRight
                  ref={addIconRef}
                  className="inline-block p-1 rounded-full w-8 h-8 aspect-square"
                />
              </a>
            </div>
          </HoverFollowCard>

          {/* Web Development Card */}
          <HoverFollowCard label={"Classroom Program"} className="rounded-2xl flex-1 p-6 bg-gradient-to-b from-white/50 to-orange-500/5 outline-1 outline-gray-500/10 backdrop-blur-[4px]">
            <div className="flex items-center gap-2 mb-2">
              <Image
                alt="logo-vision"
                width={40}
                height={40}
                src={internetIco}
                objectFit="contain"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Web Development
              </h3>
            </div>
            <p className="font-medium text-sm mb-4">
              Course Duration: 3 Months
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={webDevlopmentIMg}
                alt="Web Development"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <p className="text-gray-700 text-sm">
                Build your websites & App! Learn HTML, CSS, and JavaScript to
                create stunning, user-friendly sites.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                ref={addBtnRef}
                href="#courses"
                className="hover:bg-[var(--theme-color)] mt-5 text-sm bg-white/40 pl-4 hover:text-white text-[#1e2467] inline-flex items-center rounded-full font-semibold transition-colors"
              >
                Start Learning{" "}
                <ArrowRight
                  ref={addIconRef}
                  className="inline-block p-1 rounded-full w-8 h-8 aspect-square"
                />
              </a>
            </div>
          </HoverFollowCard>

          {/* Business Card */}
          <div className="rounded-2xl flex-1 p-6 bg-gradient-to-b from-white/50 to-orange-500/5 outline-1 outline-gray-500/10 backdrop-blur-[4px]">
            <div className="flex items-center gap-2 mb-2">
              <Image
                alt="logo-vision"
                width={40}
                height={40}
                src={workIco}
                objectFit="contain"
              />
              <h3 className="text-lg font-semibold text-gray-800">Business</h3>
            </div>
            <p className="font-medium text-sm mb-4">
              Start & Grow Your Business With Us.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={businessIMg}
                alt="Business"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <p className="text-gray-700 text-sm">
                Transform your ideas into success with our business solutions
                designed for startups and SMEs.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                ref={addBtnRef}
                href="#courses"
                className="hover:bg-[var(--theme-color)] mt-5 text-sm bg-white/40 pl-4 hover:text-white text-[#1e2467] inline-flex items-center rounded-full font-semibold transition-colors"
              >
                Start Learning{" "}
                <ArrowRight
                  ref={addIconRef}
                  className="inline-block p-1 rounded-full w-8 h-8 aspect-square"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* no-need-to-update-start */}
      <div className="absolute h-full w-full top-0 left-0 -z-10 contrast-120">
        <UnicornScene projectId={projectId} fps={60} dpi={dpi} scale={1} />
      </div>

      {/* coursouls infinity loop forward */}
      <CrasoulsForwards />
      {/* no-need-to-update-end */}
    </section>
  );
}
