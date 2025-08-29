"use client";
import { useState } from "react";

export default function HoverFollowCard({ children, label, className = "" }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={className}
      style={{zIndex:1}}
    >
      {children}

      {visible && (
        <div
          className="absolute pointer-events-none hidden md:block z-50 bg-white text-black px-3 py-1 rounded-lg shadow-lg text-sm font-semibold text-nowrap"
          style={{
            top: position.y + 10,
            left: position.x + 10,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
