"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import location from "@/assets/3dIcons/location.webp";
import email from "@/assets/3dIcons/email.webp";
import phone from "@/assets/3dIcons/phone.webp";
import Image from "next/image";
import bg from "@/assets/bg.png";
import logo from "@/assets/LOGO_COL-3D.png";
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const mapWrapperRef = useRef(null);
  const mapOverlayRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-tilt");

      // Heading like JourneyData (SplitType + scrub)
      if (headingRef.current) {
        const headingSplit = new SplitType(headingRef.current, {
          types: "chars",
        });
        gsap.set(headingSplit.chars, { opacity: 0 });
        gsap.to(headingSplit.chars, {
          opacity: 1,
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 95%",
            end: "top 65%",
            scrub: true,
          },
        });
      }

      // Simple bottom-to-original reveal for cards (supersmooth)
      gsap.set(cards, { y: 72, opacity: 0 });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          end: "top 52%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <Image
          src={bg}
          alt="background"
          objectFit="cover"
          objectPosition="top"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Get in <span className="text-orange-600">Touch</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600">
          We’d love to hear from you. Reach out through any of the following:
        </p>
      </div>
      <div className="relative py-2 mb-8 flex gap-4 justify-center items-center">
        <Image
          width={150}
          height={150}
          src={logo}
          alt="kalam academy logo"
          objectFit="contain"
        />

        <h2 className="text-3xl my-auto sm:text-4xl md:text-5xl archivo-900 font-extrabold tracking-tight text-gray-950/70">
          KALAM ACADEMY RANCHI
        </h2>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
        {/* Location */}
        <div
          className="card-tilt rounded-2xl p-4 bg-gradient-to-br from-white/70 to-orange-100/30 
                        shadow-2xl border border-white/20 
                        hover:shadow-orange-200/60 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <Image
              alt="logo-mission"
              width={60}
              height={60}
              src={location}
              objectFit="contain"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-950">
              Location
            </h3>
          </div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Kalam Academy, 4th Floor Rospa Tower, <br />
            Main Road, Ranchi, Jharkhand
          </p>
        </div>

        {/* Email */}
        <div
          className="card-tilt rounded-2xl p-4 bg-gradient-to-br from-white/70 to-indigo-100/30 
                        shadow-2xl border border-white/20 
                        hover:shadow-indigo-200/60 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <Image
              alt="logo-mission"
              width={60}
              height={60}
              src={email}
              objectFit="contain"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Email
            </h3>
          </div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <a
              href="mailto:learn@kalamacademy.org"
              className="hover:underline text-indigo-600 font-medium"
            >
              learn@kalamacademy.org
            </a>
          </p>
        </div>

        {/* Phone */}
        <div
          className="card-tilt rounded-2xl p-4 bg-gradient-to-br from-white/70 to-green-100/30 
                        shadow-2xl border border-white/20 
                        hover:shadow-green-200/60 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <Image
              alt="logo-mission"
              width={60}
              height={60}
              src={phone}
              objectFit="contain"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Phone
            </h3>
          </div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed space-y-1">
            <a href="tel:+917367927220" className="block hover:underline">
              +91-7367927220
            </a>
            <a href="tel:+918235529340" className="block hover:underline">
              +91-8235529340
            </a>
          </p>
        </div>
      </div>

      {/* Map */}
      <div
        ref={mapWrapperRef}
        className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/20 relative"
        title="Click to interact with map"
      >
        {/* Click-to-interact overlay for smooth scroll (Lenis) */}
        <button
          type="button"
          ref={mapOverlayRef}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 text-white text-sm md:text-base"
          aria-label="Click to interact with map"
          onClick={(e) => {
            const wrapper = mapWrapperRef.current;
            if (!wrapper) return;
            const iframe = wrapper.querySelector("iframe");
            if (!iframe) return;
            iframe.classList.remove("pointer-events-none");
            iframe.removeAttribute("aria-hidden");
            if (mapOverlayRef.current)
              mapOverlayRef.current.style.display = "none";

            // Revert when clicking outside the map wrapper
            const onDocClick = (evt) => {
              if (!wrapper.contains(evt.target)) {
                iframe.classList.add("pointer-events-none");
                iframe.setAttribute("aria-hidden", "true");
                if (mapOverlayRef.current)
                  mapOverlayRef.current.style.display = "";
                document.removeEventListener("click", onDocClick, true);
              }
            };
            // Defer binding to avoid catching the same click
            setTimeout(
              () => document.addEventListener("click", onDocClick, true),
              0
            );
          }}
        ></button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.8945246387143!2d85.32008699312898!3d23.355835549520005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1f419db0333%3A0x1933bf60e04ab50c!2sKalam%20Academy!5e0!3m2!1sen!2sin!4v1756383447860!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          className="pointer-events-none"
          aria-hidden="true"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
