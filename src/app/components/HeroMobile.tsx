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
        px-4                 /* SECTION SIDE PADDING */
        text-center
      "
    >
      {/* IMAGE */}
      <img
        src="/images/hero.png"
        alt="Shoonya Insurance Brokers"
        className="
          w-[98vw]          /* IMAGE DOMINANCE – viewport based */
          max-w-[560px]      /* HARD CAP – prevents insanity */
          h-auto
          object-contain
          mb-14              /* CREATES SPACE FOR OVERLAP */
        "
      />

      {/* Descriptor (OVERLAPS IMAGE) */}
      <div
        className="
          -mt-40            /* 🔥 OVERLAP CONTROL – MOVE UP/DOWN */
          mb-60               /* SPACE BEFORE HEADLINE */
        "
      >
        <p
          className="
            text-[14px]
            tracking-wide
            text-grey-500
            leading-snug
          "
        >
          Claim Assistance · Customised Insurance
        </p>
        <p
          className="
            text-[14px]
            tracking-wide
            text-grey-500
            leading-snug
          "
        >
          A Safer and Greener Future
        </p>
      </div>

      {/* Headline */}
      <a href="#final-cta">
        <h1
          className="
            max-w-xs
            mx-auto
            text-[32px]
            leading-snug
            hover:text-primary
            transition-colors
            mb-4
          "
        >
          Let’s start with a conversation
        </h1>
      </a>

      {/* Supporting copy */}
      <p
        className="
          text-[16px]
          text-grey-600
          leading-relaxed
          max-w-xs
        "
      >
        No pressure. No sales calls.
        <br />
        Just humans who care.
      </p>
    </section>
  );
}
