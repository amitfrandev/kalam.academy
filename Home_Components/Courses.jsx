"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import digitalMarketingIMg from "@/assets/courses/digital-marketing.jpg";
import webDevlopmentIMg from "@/assets/courses/web-devlopment.jpg";
import businessIMg from "@/assets/courses/business.jpg";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Courses() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardsRef = useRef([]);
  const masksRef = useRef([]);
  const cardHeadingsRef = useRef([]);
  const pathRef = useRef(null);

const courses = [
  {
    title: "Digital Marketing",
    duration: "3 Months",
    desc: "Learn to promote businesses online and attract customers.",
    level: "Beginner – Intermediate",
    mode: "Online / Offline",
    topics: ["SEO", "Social Media Ads", "Google Ads", "Email Marketing"],
    certificate: "Yes (Industry Recognized)",
    outcome: "Gain practical skills to run real campaigns.",
    link: "/digital-marketing-course-in-ranchi",
    img: digitalMarketingIMg,
    pos: "right",
  },
  {
    title: "Web Development",
    duration: "3 Months",
    desc: "Build websites & apps with HTML, CSS, and JavaScript.",
    level: "Beginner – Advanced",
    mode: "Offline / Classroom Training",
    topics: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
    certificate: "Yes (Full-Stack Certification)",
    outcome: "Create and deploy modern, responsive web apps.",
    link: "/web-development-course-in-ranchi",
    img: webDevlopmentIMg,
    pos: "left",
  },
  {
    title: "Business",
    duration: "2 Months",
    desc: "Transform your ideas into success with our startup solutions.",
    level: "Beginner",
    mode: "Online Sessions",
    topics: ["Entrepreneurship", "Business Planning", "Marketing Basics"],
    certificate: "Participation Certificate",
    outcome: "Develop a business plan and learn growth strategies.",
    link: "/business",
    img: businessIMg,
    pos: "right",
  },
];


  useLayoutEffect(() => {
    if (!sectionRef.current || !headingRef.current || !paraRef.current) return;

    const ctx = gsap.context(() => {
      // Split main heading & paragraph
      const headingSplit = new SplitType(headingRef.current, {
        types: "chars",
      });
      const paraSplit = new SplitType(paraRef.current, { types: "words" });

      gsap.set(headingSplit.chars, { y: 80, opacity: 0 });
      gsap.set(paraSplit.words, { y: 30, opacity: 0 });

      gsap.to(headingSplit.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.to(paraSplit.words, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });

      // Animate each card
      cardsRef.current.forEach((card, i) => {
        const fromX = courses[i].pos === "left" ? "-70%" : "70%";
        gsap.fromTo(
          card,
          { x: fromX, opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            ease: "circle.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 30%",
              scrub: true,
              // markers: { startColor: "green", endColor: "red", fontSize: "12px", indent: 50 }
            },
          }
        );
      });

      // Animate card headings
      cardHeadingsRef.current.forEach((h3, i) => {
        if (!h3) return;
        const split = new SplitType(h3, { types: "chars" });
        gsap.set(split.chars, { y: -100, opacity: 0 });

        gsap.to(split.chars, {
          y: 0,
          opacity: 1,
          stagger: {
            each: 0.03,
            from: courses[i].pos === "left" ? "end" : "start",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: h3,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        });
      });

      // Animate masks
      masksRef.current.forEach((mask, i) => {
        const direction = courses[i].pos === "right" ? "left" : "right";
        gsap.set(mask, { xPercent: direction === "left" ? -100 : 100 });

        gsap.to(mask, {
          xPercent: direction === "left" ? 100 : -100,
          ease: "expo.inOut",
          duration: 1.2,
          scrollTrigger: {
            trigger: cardsRef.current[i],
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        });
      });

      // Animate random curved line
      if (pathRef.current) {
        const svg = pathRef.current.closest("svg");
        if (svg) {
          const width = svg.clientWidth;
          const height = svg.clientHeight;

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
              start: "top 50%",
              end: "bottom bottom",
              scrub: true,
            },
          });
        }
      }

      return () => {
        headingSplit.revert();
        paraSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Reset refs
  cardsRef.current = [];
  masksRef.current = [];
  cardHeadingsRef.current = [];

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="relative py-20 top-0 text-center bg-white overflow-hidden"
    >
      <h2
        ref={headingRef}
        className="px-6 text-left font-bold mb-4 overflow-hidden relative text-3xl sm:text-4xl md:text-5xl"
      >
        What <span className="text-indigo-600">We Do?</span>
      </h2>

      <p
        ref={paraRef}
        className="text-gray-600 px-6 text-left mb-12 text-base md:text-lg max-w-2xl leading-relaxed overflow-hidden relative"
      >
        We are the best Digital Marketing & Web Development Institute in Ranchi
      </p>
      <div className="flex flex-col gap-8 relative">
        {courses.map((c, idx) => (
          <div
            key={idx}
            className={`flex w-full flex-col md:flex-row border-t border-b ${
              c.pos === "left" ? "md:flex-row-reverse" : ""
            }`}
            ref={(el) => el && (cardsRef.current[idx] = el)}
          >
            {/* Content */}
            <div
              className={`w-full md:w-1/2 flex flex-col ${
                c.pos === "right" ? "text-right" : "text-left"
              } p-6`}
            >
              <h3
                ref={(el) => el && (cardHeadingsRef.current[idx] = el)}
                className="archivo-700 overflow-hidden text-2xl sm:text-3xl md:text-4xl"
              >
                {c.title}
              </h3>
              <h3
                className={`md:text-[10vw] opacity-5 text-[14vw] text-purple-800 absolute top-0 ${
                  c.pos == "left" ? "right" : "left"
                }-0 archivo-700 overflow-hidden text-nowrap`}
              >
                {c.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Duration: {c.duration}
              </p>
              <p className="text-gray-600 mb-2">{c.desc}</p>

              {/* Extra Details Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {c.level && (
                  <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
                    <p className="text-xs text-gray-400">Level</p>
                    <p className="text-sm font-medium text-gray-700">
                      {c.level}
                    </p>
                  </div>
                )}
                {c.mode && (
                  <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
                    <p className="text-xs text-gray-400">Mode</p>
                    <p className="text-sm font-medium text-gray-700">
                      {c.mode}
                    </p>
                  </div>
                )}
                {c.topics && (
                  <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
                    <p className="text-xs text-gray-400">Key Topics</p>
                    <p className="text-sm font-medium text-gray-700">
                      {c.topics.join(", ")}
                    </p>
                  </div>
                )}
                {c.certificate && (
                  <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
                    <p className="text-xs text-gray-400">Certificate</p>
                    <p className="text-sm font-medium text-gray-700">
                      {c.certificate}
                    </p>
                  </div>
                )}
                {c.outcome && (
                  <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
                    <p className="text-xs text-gray-400">Outcome</p>
                    <p className="text-sm font-medium text-gray-700">
                      {c.outcome}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Image with Mask */}
            <div className="w-full md:w-1/2 aspect-square relative min-h-[200px] md:min-h-[250px] overflow-hidden">
              <Image
                src={c.img}
                alt={c.title}
                fill
                priority
                className="object-cover"
              />
              <div
                ref={(el) => el && (masksRef.current[idx] = el)}
                className="absolute inset-0 z-10 bg-cyan-500/80"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import digitalMarketingIMg from "@/assets/courses/digital-marketing.jpg";
// import webDevlopmentIMg from "@/assets/courses/web-devlopment.jpg";
// import businessIMg from "@/assets/courses/business.jpg";

// gsap.registerPlugin(ScrollTrigger);

// export default function Courses() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const cardsRef = useRef([]);
//   const masksRef = useRef([]);
//   const cardHeadingsRef = useRef([]);
//   const pathRef = useRef(null);

//   useLayoutEffect(() => {
//     if (!sectionRef.current || !headingRef.current || !paraRef.current) return;

//     const ctx = gsap.context(() => {
//       // Split main heading & paragraph
//       const headingSplit = new SplitType(headingRef.current, { types: "chars" });
//       const paraSplit = new SplitType(paraRef.current, { types: "words" });

//       gsap.set(headingSplit.chars, { y: 80, opacity: 0 });
//       gsap.set(paraSplit.words, { y: 30, opacity: 0 });

//       gsap.to(headingSplit.chars, {
//         y: 0,
//         opacity: 1,
//         stagger: 0.04,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           end: "top 20%",
//           scrub: true,
//         },
//       });

//       gsap.to(paraSplit.words, {
//         y: 0,
//         opacity: 1,
//         stagger: 0.05,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           end: "top 20%",
//           scrub: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Reset refs
//   cardsRef.current = [];
//   masksRef.current = [];
//   cardHeadingsRef.current = [];

//   return (
//     <section
//       id="courses"
//       ref={sectionRef}
//       className="relative py-20 top-0 text-center bg-white overflow-hidden"
//     >
//       <h2
//         ref={headingRef}
//         className="md:text-[4vw] px-6 text-[8vw] text-left font-bold mb-4 overflow-hidden relative"
//       >
//         What <span className="text-indigo-600">We Do?</span>
//       </h2>

//       <p
//         ref={paraRef}
//         className="text-gray-600 px-6 text-left mb-12 md:text-[1vw] text-[5vw] max-w-2xl leading-relaxed overflow-hidden relative"
//       >
//         We are the best Digital Marketing & Web Development Institute in Ranchi
//       </p>

//       <div className="flex flex-col gap-8 relative">
//         {/* Digital Marketing */}
//         <div className="flex w-full flex-col md:flex-row border-t border-b" ref={(el) => el && (cardsRef.current[0] = el)}>
//           <div className="w-full md:w-1/2 flex flex-col text-left p-6">
//             <h3 ref={(el) => el && (cardHeadingsRef.current[0] = el)} className="md:text-[5vw] text-[9vw] font-bold overflow-hidden">
//               Digital Marketing
//             </h3>
//             <p className="text-sm text-gray-500 mb-2">Duration: 3 Months</p>
//             <p className="text-gray-600 mb-2">
//               Learn to promote businesses online and attract customers.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Level</p>
//                 <p className="text-sm font-medium text-gray-700">
//                   Beginner – Intermediate
//                 </p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Mode</p>
//                 <p className="text-sm font-medium text-gray-700">
//                   Online / Offline
//                 </p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
//                 <p className="text-xs text-gray-400">Key Topics</p>
//                 <p className="text-sm font-medium text-gray-700">
//                   SEO, Social Media Ads, Google Ads, Email Marketing
//                 </p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Certificate</p>
//                 <p className="text-sm font-medium text-gray-700">
//                   Yes (Industry Recognized)
//                 </p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
//                 <p className="text-xs text-gray-400">Outcome</p>
//                 <p className="text-sm font-medium text-gray-700">
//                   Gain practical skills to run real campaigns.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 aspect-square relative min-h-[200px] md:min-h-[250px] overflow-hidden">
//             <Image src={digitalMarketingIMg} alt="Digital Marketing" fill priority className="object-cover" />
//             <div ref={(el) => el && (masksRef.current[0] = el)} className="absolute inset-0 z-10 bg-cyan-500/80"></div>
//           </div>
//         </div>

//         {/* Web Development */}
//         <div className="flex w-full flex-col  md:flex-row-reverse border-t border-b" ref={(el) => el && (cardsRef.current[1] = el)}>
//           <div className="w-full md:w-1/2 flex flex-col text-right p-6">
//             <h3 ref={(el) => el && (cardHeadingsRef.current[1] = el)} className="md:text-[5vw] text-[9vw] font-bold overflow-hidden">
//               Web Development
//             </h3>
//             <p className="text-sm text-gray-500 mb-2">Duration: 3 Months</p>
//             <p className="text-gray-600 mb-2">
//               Build websites & apps with HTML, CSS, and JavaScript.
//             </p>
//             {/* Details */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Level</p>
//                 <p className="text-sm font-medium text-gray-700">Beginner – Advanced</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Mode</p>
//                 <p className="text-sm font-medium text-gray-700">Offline / Classroom Training</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
//                 <p className="text-xs text-gray-400">Key Topics</p>
//                 <p className="text-sm font-medium text-gray-700">HTML, CSS, JavaScript, React.js, Node.js</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Certificate</p>
//                 <p className="text-sm font-medium text-gray-700">Yes (Full-Stack Certification)</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
//                 <p className="text-xs text-gray-400">Outcome</p>
//                 <p className="text-sm font-medium text-gray-700">Create and deploy modern, responsive web apps.</p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 aspect-square relative min-h-[200px] md:min-h-[250px] overflow-hidden">
//             <Image src={webDevlopmentIMg} alt="Web Development" fill priority className="object-cover" />
//             <div ref={(el) => el && (masksRef.current[1] = el)} className="absolute inset-0 z-10 bg-cyan-500/80"></div>
//           </div>
//         </div>

//         {/* Business */}
//         <div className="flex w-full flex-col md:flex-row border-t border-b" ref={(el) => el && (cardsRef.current[2] = el)}>
//           <div className="w-full md:w-1/2 flex flex-col text-left p-6">
//             <h3 ref={(el) => el && (cardHeadingsRef.current[2] = el)} className="md:text-[5vw] text-[9vw] font-bold overflow-hidden">
//               Business
//             </h3>
//             <p className="text-sm text-gray-500 mb-2">Duration: 2 Months</p>
//             <p className="text-gray-600 mb-2">
//               Transform your ideas into success with our startup solutions.
//             </p>
//             {/* Details */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Level</p>
//                 <p className="text-sm font-medium text-gray-700">Beginner</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Mode</p>
//                 <p className="text-sm font-medium text-gray-700">Online Sessions</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
//                 <p className="text-xs text-gray-400">Key Topics</p>
//                 <p className="text-sm font-medium text-gray-700">Entrepreneurship, Business Planning, Marketing Basics</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50">
//                 <p className="text-xs text-gray-400">Certificate</p>
//                 <p className="text-sm font-medium text-gray-700">Participation Certificate</p>
//               </div>
//               <div className="p-3 border rounded-lg shadow-sm bg-gray-50 col-span-1 sm:col-span-2">
//                 <p className="text-xs text-gray-400">Outcome</p>
//                 <p className="text-sm font-medium text-gray-700">Develop a business plan and learn growth strategies.</p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 aspect-square relative min-h-[200px] md:min-h-[250px] overflow-hidden">
//             <Image src={businessIMg} alt="Business" fill priority className="object-cover" />
//             <div ref={(el) => el && (masksRef.current[2] = el)} className="absolute inset-0 z-10 bg-cyan-500/80"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
