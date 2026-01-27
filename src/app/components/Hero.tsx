import React from "react";

export function Hero() {
  return (
    <section
      id="hero"
      className="
        w-full
        min-h-screen
        bg-white
        flex
        flex-col
        items-center
        pt-12
        md:pt-24
      "
    >
      {/* IMAGE */}
      <div className="relative w-full flex justify-center">
        <img
          src="/images/hero.png"
          alt="Shoonya Insurance Brokers"
          className="
            w-full
            max-w-[320px]
            md:max-w-[640px]
            h-auto
            object-contain
          "
        />
      </div>

      {/* TEXT */}
      <div
        className="
          relative
          z-10
          mt-6
          md:-mt-32   /* overlap ONLY on desktop */
          px-6
          text-center
          max-w-xl
          md:max-w-2xl
          animate-heroFade
        "
      >
        <p className="text-[11px] md:text-sm tracking-wide text-grey-500">
          Claim Assistance · Customised Insurance · A Safer and Greener Future
        </p>

        <a
          href="#final-cta"
          className="
            block
            mt-3
            font-display
            text-xl
            md:text-[36px]
            leading-snug
            text-grey-700
            hover:text-primary
            transition-colors
          "
        >
          Let’s start with a conversation
        </a>

        <p className="mt-2 text-sm md:text-base text-grey-600 leading-relaxed">
          No pressure. No sales calls. Just humans who care.
        </p>
      </div>
    </section>
  );
}
