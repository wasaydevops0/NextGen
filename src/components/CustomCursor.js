"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updateFollower = () => {
      setFollower((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-brand-orange rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-orange/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          transform: `translate3d(${follower.x}px, ${follower.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
