"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
// import startupImg from "@/assets/events/ranchi-startup.jpg";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Ranchi Startup Meet 1.0",
    highlights: [
      "Kalam Academy organised Ranchi Startup Meet on 2019.",
      "Aspiring entrepreneurs and startup teams attended the event.",
      "Aim of the event is to create startup ecosystem in Ranchi.",
      "Ranchi adopted the idea of startups and entrepreneurship.",
    ],
    mediaType: "image",
    mediaSrc: 'https://kalamacademy.org/newAssests/img/gp.jpeg',
  },
  {
    title: "Ranchi Creators Meet 1.0",
    highlights: [
      "Kalam Academy organised Ranchi Creators Meet 1.0 on 2021.",
      "All aspiring digital content creators of Ranchi attended event.",
      "Aim of the event is to create digital ecosystem in Ranchi.",
      "Digital creators shared their journey.",
    ],
    mediaType: "video",
    mediaSrc:
      "https://www.youtube.com/embed/lylCGpcwam0?si=z6s0iuX6e-tMlFw3&autoplay=1&mute=1&loop=1&playlist=lylCGpcwam0",
  },
];



export default function EventsShowcase() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const mediaRefs = useRef([]);
  const listRefs = useRef([]);
  const [interactiveVideo, setInteractiveVideo] = useState({});
  const wrapperRefs = useRef([]);
  wrapperRefs.current = [];
  cardRefs.current = [];
  mediaRefs.current = [];
  listRefs.current = [];

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation (award-like): split + gradient shimmer underline
      const headingSplit = new SplitType(headingRef.current, { types: "chars" });
      gsap.set(headingSplit.chars, { y: 100, opacity: 0 });

      gsap.to(headingSplit.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
        },
      });

      // Decorative underline shimmer
      const underline = headingRef.current?.querySelector?.('.heading-underline');
      if (underline) {
        gsap.fromTo(
          underline,
          { scaleX: 0, opacity: 0.3 },
          {
            scaleX: 1,
            opacity: 1,
            transformOrigin: "left center",
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      }

      // Card animations (glass cards + stagger)
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotateX: 6 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });

      // Parallax on media blocks
      mediaRefs.current.forEach((media) => {
        if (!media) return;
        gsap.fromTo(
          media,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Stagger list items with accent border sweep
      listRefs.current.forEach((li) => {
        if (!li) return;
        const accent = li.querySelector('.li-accent');
        gsap.set(li, { x: -8, opacity: 0 });
        gsap.to(li, {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: li,
            start: "top 92%",
            end: "top 70%",
            scrub: true,
          },
        });
        if (accent) {
          gsap.fromTo(
            accent,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: "top center",
              ease: "power3.out",
              scrollTrigger: {
                trigger: li,
                start: "top 92%",
                end: "top 70%",
                scrub: true,
              },
            }
          );
        }
      });

      return () => {
        headingSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Ambient gradient blobs */}
      {/* <div className="pointer-events-none absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-orange-300/30 via-rose-200/20 to-transparent blur-3xl" /> */}
      {/* <div className="pointer-events-none absolute -bottom-40 -right-40 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-indigo-300/30 via-cyan-200/20 to-transparent blur-3xl" /> */}

      {/* Fine noise overlay for texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply bg-[radial-gradient(transparent_0.5px,_#00000008_1px)] [background-size:6px_6px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="relative mb-16 md:mb-20">
          <h2
            ref={headingRef}
            className="archivo-700 text-center font-bold relative z-10 text-3xl sm:text-4xl md:text-5xl"
          >
            Created <span className="text-orange-500">Events</span>
          </h2>
          <div className="heading-underline mx-auto mt-4 h-[3px] w-24 md:w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-16 md:gap-20">
          {events.map((event, idx) => (
            <div
              key={idx}
              ref={(el) => el && cardRefs.current.push(el)}
              className={`relative group grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
            >
              {/* Media */}
              <div
                ref={(el) => el && mediaRefs.current.push(el)}
                className={`relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-white/60 backdrop-blur-xl ${
                  idx % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/10" />
                {event.mediaType === "image" ? (
                  <Image
                    width={200}
                    height={200}
                    src={event.mediaSrc}
                    alt={event.title}
                    className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div
                    ref={(el) => el && (wrapperRefs.current[idx] = el)}
                    className="aspect-video w-full rounded-3xl select-none overflow-hidden relative"
                    onClick={() => {
                      setInteractiveVideo((p) => ({ ...p, [idx]: true }));
                      const onDocClick = (evt) => {
                        const wrapper = wrapperRefs.current[idx];
                        if (!wrapper) return document.removeEventListener("click", onDocClick, true);
                        if (!wrapper.contains(evt.target)) {
                          setInteractiveVideo((p) => ({ ...p, [idx]: false }));
                          document.removeEventListener("click", onDocClick, true);
                        }
                      };
                      setTimeout(() => document.addEventListener("click", onDocClick, true), 0);
                    }}
                  >
                    {/* Click-to-interact overlay */}
                    {!interactiveVideo[idx] && (
                      <button
                        type="button"
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 text-white text-sm md:text-base"
                        aria-label="Click to interact with video"
                        title="Click to interact with video"
                      >
                        
                      </button>
                    )}
                      
                    <iframe
                      src={event.mediaSrc}
                      title={event.title}
                      allow="autoplay; fullscreen"
                      className={`w-full h-full ${interactiveVideo[idx] ? "pointer-events-auto" : "pointer-events-none"}`}
                      aria-hidden={!interactiveVideo[idx]}
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                    
      <Iphone15Pro className="rotate-90 h-full"
        videoSrc="https://www.youtube.com/embed/lylCGpcwam0?si=z6s0iuX6e-tMlFw3&autoplay=1&mute=1&loop=1&playlist=lylCGpcwam0"></Iphone15Pro>
                    
                  </div>
                )}

                {/* Soft edge vignette */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_60%,_rgba(0,0,0,0.15)_100%)]" />
              </div>

              {/* Content */}
              <div className={`${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  Highlights from the event:
                </p>
                <ul className="space-y-3">
                  {event.highlights.map((point, i) => (
                    <li
                      key={i}
                      ref={(el) => el && listRefs.current.push(el)}
                      className="relative pl-5 text-gray-700 leading-relaxed"
                    >
                      <span className="li-accent absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
