"use client";

import {useEffect} from "react";
import {usePathname} from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // We wrap inside a timeout to allow the DOM to fully render and calculate layouts, especially after route changes
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -100px 0px", // triggers slightly before entering viewport
        threshold: 0.05,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Animates once and stays visible
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        // Only observe if it doesn't already have the in-view class
        if (!el.classList.contains("in-view")) {
          observer.observe(el);
        }
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
