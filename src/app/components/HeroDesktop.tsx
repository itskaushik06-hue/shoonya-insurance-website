import React from "react";

export function HeroDesktop() {
  return (
    <section
      id="hero-desktop"
      className="
        hidden
        md:flex
        w-full
        min-h-screen
        bg-white
        flex-col
        items-center
        pt-28
      "
    >
      {/* IMAGE */}
      <div
        className="
          w-full
          flex
          justify-center
          -mt-30   /* ↑ Move image UP (adjust this) */
        "
      >
        <img
          src="/images/hero.png"
          alt="Shoonya Insurance Brokers"
          className="
            w-[600px]
            h-auto
            object-contain
          "
        />
      </div>

      {/* TEXT */}
      <div
        className="
          -mt-40 /* ↑ Pull text closer to image */
          text-center
          max-w-2xl
          px-6
        "
      >
        {/* Descriptor */}
        <p
          className="
            text-sm
            tracking-wide
            text-grey-700
            mb-40  /* ↓ Adjust spacing below descriptor */
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
              cursor-pointer
              mb-3   /* ↓ Space to supporting copy */
            "
          >
            Let’s start with a conversation
          </h1>
        </a>

        {/* Supporting copy */}
        <p
          className="
            text-base
            text-grey-700
            leading-relaxed
          "
        >
          No pressure. No sales calls. Just humans who care.
        </p>
      </div>
    </section>
  );
}
