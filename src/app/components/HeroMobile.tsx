import React from "react";

export function HeroMobile() {
  return (
    <section
      id="hero-mobile"
      className="
        md:hidden
        w-full
        min-h-screen
        bg-white
        flex
        flex-col
        items-center
        justify-center
        px-12
        text-center
      "
    >
      {/* IMAGE */}
      <img
        src="/images/hero.png"
        alt="Shoonya Insurance Brokers"
        className="
          w-[2000px]   /* ↑ Bigger logo on mobile */
          h-auto
          object-1contain
          mb-4
        "
      />

      {/* Descriptor */}
      <p
        className="
          text-xs
          tracking-wide
          text-grey-500
          mb-6
        "
      >
        Claim Assistance · Customised Insurance · A Safer and Greener Future
      </p>

      {/* Headline */}
      <a href="#final-cta">
        <h1
          className="
            max-w-3xl mx-auto text-center space-y-4
            hover:text-primary
            transition-colors
            mb-3
          "
        >
          Let’s start with a conversation
        </h1>
      </a>

      {/* Supporting copy */}
      <p
        className="
          text-base
          text-grey-600
          leading-relaxed
          max-w-sm
        "
      >
        No pressure. No sales calls. Just humans who care.
      </p>
    </section>
  );
}
