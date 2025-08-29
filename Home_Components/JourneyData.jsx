"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import {
  Rocket,
  Target,
  Globe,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    year: "2024",
    text: (
      <>
        We have launched{" "}
        <span className="font-semibold text-orange-600">My Galla</span> Mobile
        Application
      </>
    ),
    icon: Rocket,
  },
  {
    year: "2022",
    text: (
      <>
        Vision for 2022: To reach{" "}
        <span className="font-semibold text-orange-600">1M entrepreneurs</span>{" "}
        and help them in starting their online business
      </>
    ),
    icon: Target,
  },
  {
    year: "2021",
    text: (
      <>
        Helped{" "}
        <span className="font-semibold text-orange-600">10K+ startups</span>{" "}
        across{" "}
        <span className="font-medium">
          India, Dubai, Australia, USA, South Africa, Bangladesh, Nepal &
          Pakistan
        </span>
      </>
    ),
    icon: Globe,
  },
  {
    year: "2020",
    text: (
      <>
        Expanded our Digital Marketing Academy to{" "}
        <span className="font-semibold text-orange-600">Agency</span> with an
        objective to help more people to start their online business
      </>
    ),
    icon: Briefcase,
  },
  {
    year: "2019",
    text: (
      <>
        Started{" "}
        <span className="font-semibold text-orange-600">
          Digital Marketing Academy in Ranchi
        </span>{" "}
        with a vision to transform Ranchi as the digital hub of India
      </>
    ),
    icon: GraduationCap,
  },
  {
    year: "2018",
    text: (
      <>
        Started{" "}
        <span className="font-semibold text-orange-600">Kalam Academy</span> as
        a social enterprise in Bhurkunda
      </>
    ),
    icon: Users,
  },
  {
    year: "2016 - 17",
    text: (
      <>
        Started our startup in{" "}
        <span className="font-semibold text-orange-600">Agra</span>, worked as
        consultant for many renowned startups
      </>
    ),
    icon: Briefcase,
  },
];

export default function JourneySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  useLayoutEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading
      const headingSplit = new SplitType(headingRef.current, { types: "chars" });
      gsap.set(headingSplit.chars, { y: 80, opacity: 0 });

      gsap.to(headingSplit.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });

      // Animate each timeline card
      cardRefs.current.forEach((card, i) => {
        const fromX = i % 2 === 0 ? "-100%" : "100%";
        gsap.fromTo(
          card,
          { x: fromX, opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );

        // Scale-up effect for icon inside each card
        const iconEl = card.querySelector(".journey-icon");
        if (iconEl) {
          gsap.fromTo(
            iconEl,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 60%",
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
    <section
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="archivo-700 text-center font-bold mb-16 relative z-10 text-3xl sm:text-4xl md:text-5xl"
        >
          Our Journey<span className="text-orange-500"> & </span>Events
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col gap-4">
          {journeyData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                ref={(el) => el && cardRefs.current.push(el)}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year & Text */}
                <div className="w-full md:w-1/2 relative" style={{cursor:`url(${'https://i.ytimg.com/vi/S13iczghdXU/hqdefault.jpg'}) 100px 100px, auto`}}>
                  {/* Background Year */}
                  <h3
                    className={`absolute -top-0 text-6xl md:text-8xl font-bold text-gray-200 opacity-30 select-none ${
                      idx % 2 === 0 ? "-left-32" : "-right-32"
                    }`}
                  >
                    {item.year}
                  </h3>

                  <div className="relative p-6 bg-orange-400/10 rounded-xl shadow-md border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="journey-icon w-10 h-10 flex items-center justify-center rounded-full border-4 border-orange-500 bg-orange-500 text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <time className="text-base md:text-lg font-semibold text-orange-600">
                        {item.year}
                      </time>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.text}</p>
                  </div>
                </div>

                {/* Connector line */}
                <div className="hidden md:block w-1 bg-orange-500 rounded-full h-40"></div>

                {/* Empty space */}
                <div className="w-full md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
