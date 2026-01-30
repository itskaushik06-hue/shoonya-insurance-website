import React from "react";

interface CTAButtonsProps {
  variant?: "default" | "large";
  className?: string;
}

export function CTAButtons({
  variant = "default",
  className = "",
}: CTAButtonsProps) {
  const handleScheduleCall = () => {
    window.location.href = "tel:+919419286666";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919419286666", "_blank");
  };

  const sizeClasses =
    variant === "large"
      ? "px-8 py-4 text-base"
      : "px-6 py-3 text-sm";

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {/* ================= Schedule Call ================= */}
      <button
        onClick={handleScheduleCall}
        className={`
          ${sizeClasses}
          bg-primary/90
          hover:bg-primary
          text-white
          rounded-lg
          font-medium
          shadow-sm
          transition-all
          duration-200
          ease-out
          hover:-translate-y-[1px]     /* ↑ subtle lift */
          hover:shadow-md
          active:translate-y-0
        `}
      >
        Schedule a Call
      </button>

      {/* ================= WhatsApp ================= */}
      <button
        onClick={handleWhatsApp}
        className={`
          ${sizeClasses}
          bg-white
          border
          border-grey-300
          text-grey-800
          rounded-lg
          font-medium
          flex
          items-center
          gap-2
          transition-all
          duration-200
          ease-out
          hover:border-grey-400
          hover:bg-grey-50
          hover:-translate-y-[1px]
          hover:shadow-sm
          active:translate-y-0
          group
        `}
      >
        {/* WhatsApp Icon */}
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="
            w-5
            h-5
            transition-transform
            duration-300
            ease-out
            group-hover:scale-110       /* ↑ hover emphasis */
            animate-[pulse_2.5s_ease-in-out_infinite]  /* subtle idle pulse */
          "
        />

        WhatsApp Us
      </button>
    </div>
  );
}
