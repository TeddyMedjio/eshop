"use client";

import { useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function ScrollToHashSection() {
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    // Vérifie si l'URL contient un hash au chargement de la page
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      // Petit délai pour s'assurer que tous les éléments sont rendus
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [scrollToSection]);

  return null;
}
