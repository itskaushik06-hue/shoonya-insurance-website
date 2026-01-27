import React, { useEffect, useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";

export function FloatingCTAs() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [finalVisible, setFinalVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const finalCta = document.getElementById("final-cta");
    const footer = document.querySelector("footer");

    if (!hero || !finalCta || !footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) {
            setHeroVisible(entry.isIntersecting);
          }
          if (entry.target === finalCta) {
            setFinalVisible(entry.isIntersecting);
          }
          if (entry.target === footer) {
            setFooterVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    observer.observe(finalCta);
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const showCTAs =
    !heroVisible && !finalVisible && !footerVisible;

  if (!showCTAs) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-float-in">
      {/* Schedule Call */}
      <a
        href="#"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg transition hover:scale-105"
        aria-label="Schedule a Call"
      >
        <Calendar className="w-6 h-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919419286666"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
