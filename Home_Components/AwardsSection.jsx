"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import durdarshan from "@/assets/achievements/dd_national.png";
import google from "@/assets/achievements/google.png";
import hindustan from "@/assets/achievements/hindustan.png";
import lagatarn from "@/assets/achievements/lagatar.png";
import prabhat from "@/assets/achievements/prabhat.png";
import startupjh from "@/assets/achievements/startup_jharkhand.png";

const awards = [
  {
    logo: google,
    src: "https://kalamacademy.org/newAssests/img/google2.png",
    alt: "Google Recognition",
  },
  {
    logo: hindustan,
    src: "https://kalamacademy.org/newAssests/img/hindustan.jpg",
    alt: "Hindustan Award",
  },
  {
    logo: prabhat,
    src: "https://kalamacademy.org/newAssests/img/prabhat.png",
    alt: "Prabhat Khabar Feature",
  },
  {
    logo: startupjh,
    src: "https://kalamacademy.org/newAssests/img/google.jpg",
    alt: "Google Business Award",
  },
  {
    logo: lagatarn,
    src: "https://kalamacademy.org/newAssests/img/jagran.jpg",
    alt: "Dainik Jagran Recognition",
  },
  {
    logo: durdarshan,
    src: "https://kalamacademy.org/newAssests/img/durdarshan.png",
    alt: "Doordarshan Feature",
  },
];

export default function AwardsSection() {
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    let tween;

    let ctx = gsap.context(() => {
      const track = sliderRef.current.querySelector(".carousel-track");
      const totalWidth = track.scrollWidth / 2; // because you doubled awards

      tween = gsap.to(track, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
        },
      });

      // Pause on hover
      track.addEventListener("mouseenter", () => tween.pause());
      track.addEventListener("mouseleave", () => tween.resume());
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl overflow-x-hidden mx-auto px-6 text-center relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-green-500">Awards & Achievements</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl text-base md:text-lg">
            Recognitions that highlight our journey and excellence in digital
            marketing & innovation
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative grid pt-12">
          <div className="relative" ref={sliderRef}>
            <div className="flex carousel-track">
              {[...awards, ...awards].map((award, idx) => (
                <div
                  key={idx}
                  className="relative border-l border-b h-[300px] aspect-square transition duration-300 flex flex-shrink-0 items-center justify-center cursor-pointer"
                  onClick={() => setSelectedImage(award)}
                >
                  {/* Award Image */}
                  <Image
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-contain aspect-square p-2"
                  />

                  {/* Logo Overlay */}
                  <div className="absolute -top-14 w-full h-12 rounded-md">
                    <Image
                      src={award.logo}
                      alt={`${award.alt} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-16 -z-10 border-t border-b w-screen h-16 rounded-md overflow-hidden aspect-square flex items-center justify-center" />
                </div>
              ))}
            </div>
          </div>

          {/* Fades */}
          <div className="absolute -left-6 bottom-0 h-[calc(100%+2rem)] w-[20%] md:bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
          <div className="absolute -right-6 bottom-0 h-[calc(100%+2rem)] w-[20%] md:bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
        </div>
      </div>

      {/* Fullscreen Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
          >
            ✕
          </button>
          <div className="relative w-[90%] h-[90%] max-w-4xl">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
