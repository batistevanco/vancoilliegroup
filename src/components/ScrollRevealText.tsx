"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    let ticking = false;

    function calc() {
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const startPoint = window.innerHeight * 0.85;
        const endPoint = window.innerHeight * 0.25;
        const raw = (startPoint - rect.top) / (startPoint - endPoint);
        setProgress(Math.min(1, Math.max(0, raw)));
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(calc);
      }
    }

    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const band = 3;
  const wordProgress = progress * (words.length + band);

  return (
    <p
      ref={containerRef}
      className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl"
    >
      {words.map((word, i) => {
        const diff = wordProgress - i;
        const reveal = Math.min(1, Math.max(0, diff / band));
        const c = Math.round(90 + 165 * reveal);
        return (
          <span key={i} style={{ color: `rgb(${c}, ${c}, ${c})` }}>
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}
