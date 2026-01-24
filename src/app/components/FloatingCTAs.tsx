import React, { useEffect, useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";

export function FloatingCTAs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const finalCta = document.getElementById("final-cta");

    if (!hero || !finalCta) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const heroVisible = entries.find(e => e.target === hero)?.isIntersecting;
        const finalVisible = entries.find(e => e.target === finalCta)?.isIntersecting;

        setVisible(!heroVisible && !finalVisible);
      },
      { threshold: 0.4 }
    );

    observer.observe(hero);
    observer.observe(finalCta);

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-float-in">
      <a
        href="#"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg transition hover:scale-105"
        aria-label="Schedule a Call"
      >
        <Calendar className="w-6 h-6" />
      </a>

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
