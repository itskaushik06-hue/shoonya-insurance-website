import React, { useEffect, useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";

export function FloatingCTAs() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("final-cta");

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Schedule Call */}
      <a
        href="#"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition"
        aria-label="Schedule a Call"
      >
        <Calendar className="w-6 h-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919419286666"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
