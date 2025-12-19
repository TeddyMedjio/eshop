"use client";

import { useCallback } from "react";
import { animate } from "framer-motion";

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetPosition = element.offsetTop - 96; // 96px pour la hauteur de la navbar (h-24 = 96px)
    const startPosition = window.scrollY;

    // Animation avec framer-motion avec un easing personnalisé pour un ralenti progressif
    animate(startPosition, targetPosition, {
      duration: 1.5, // Durée de 1.5 secondes
      ease: [0.25, 0.46, 0.45, 0.94], // Easing personnalisé pour un effet de ralenti progressif (easeOutQuart)
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
  }, []);

  return { scrollToSection };
};
