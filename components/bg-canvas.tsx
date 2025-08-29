'use client';

import React from "react";
import Image from "next/image";

import one from "@/assets/bg-canvas/SVG/11.svg";
import two from "@/assets/bg-canvas/SVG/22.svg";
import three from "@/assets/bg-canvas/SVG/33.svg";
import UnicornScene from "unicornstudio-react/next";

const BGCanvas = () => {
   return (
    <div className="grid w-screen h-screen overflow-hidden m-0 p-0 z-[-30] relative">
      {/* Layer 1 */}
      
      {/* Glow Effect between Layer 1 and Layer 2 */}
      <div className="col-start-1 row-start-1 z-0 pointer-events-none absolute inset-0">
        <UnicornScene
            projectId="SoCxOr0NH3LFYpndHdxz"
            className="relative"
            fps={60}
            dpi={1}
            scale={1}
          />
      </div>
      <div className="col-start-1  row-start-1 z-5 mix-blend-difference">
        <Image src={one} alt="Layer 1" fill priority className="object-cover" />
      </div>


      {/* Layer 2 */}
      <div className="col-start-1 row-start-1 z-10 mix-blend-difference">
        <Image src={two} alt="Layer 2" fill priority className="object-cover" />
      </div>

      {/* Layer 3 */}
      <div className="col-start-1 row-start-1 z-20">
        <Image src={three} alt="Layer 3" fill priority className="object-cover" />
      </div>
    </div>
  );
};

export default BGCanvas;
