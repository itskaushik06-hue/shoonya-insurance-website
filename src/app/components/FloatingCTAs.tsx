import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export function FloatingCTAs() {
  const [hideCTAs, setHideCTAs] = useState(true);

  useEffect(() => {
    const heroDesktop = document.getElementById("hero-desktop");
    const heroMobile = document.getElementById("hero-mobile");
    const finalCta = document.getElementById("final-cta");
    const footer = document.getElementById("site-footer");

    const targets = [
      heroDesktop,
      heroMobile,
      finalCta,
      footer,
    ].filter(Boolean) as Element[];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // If ANY important section is visible → hide CTAs
        const shouldHide = entries.some(
          (entry) => entry.isIntersecting
        );

        setHideCTAs(shouldHide);
      },
      {
        threshold: 0.05, // EARLY trigger → no overlap ever
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (hideCTAs) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Schedule Call */}
      <a
        href="tel:+919419286666"
        className="
          flex
          items-center
          justify-center
          w-14
          h-14
          rounded-full
          bg-primary
          text-white
          shadow-lg
          transition
          hover:scale-105
          active:scale-95
        "
        aria-label="Schedule a Call"
      >
        <Calendar className="w-6 h-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919419286666"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          justify-center
          w-14
          h-14
          rounded-full
          bg-white
          border
          border-grey-300
          shadow-lg
          transition
          hover:scale-105
          active:scale-95
        "
        aria-label="WhatsApp"
      >
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
}
