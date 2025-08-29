"use client";


import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";

function SmoothScrolling({ children }) {
  const lenis = useLenis();

  useEffect(() => {
    const handleLinkClick = (event) => {
      const href = event.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement && lenis) {
          lenis.scrollTo(targetElement);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, 
        duration: 2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;


// // Lib/Lenis.js
// "use client";
// import { ReactLenis } from "@studio-freight/react-lenis";

// function SmoothScrolling({ children }) {
//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 2, easing: 'easeOutCubic' }}>
//       {children}
//     </ReactLenis>
    
//   );
// }

// export default SmoothScrolling;
