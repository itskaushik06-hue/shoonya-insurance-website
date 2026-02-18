import React from "react";

/* ===================== TUNING ===================== */

const LOGO_BASE = "w-[600px]";
const LOGO_XL = "xl:w-[720px]";
const LOGO_2XL = "2xl:w-[860px]";

const DESCRIPTOR_POSITION = "bottom-[140px]";
const DESCRIPTOR_XL = "xl:bottom-[160px]";
const DESCRIPTOR_2XL = "2xl:bottom-[180px]";

/* Headline vertical anchor */
const HEADLINE_POSITION = "top-[61.8vh]";        // MAIN CONTROL
const HEADLINE_POSITION_XL = "xl:top-[62vh]";
const HEADLINE_POSITION_2XL = "2xl:top-[60vh]";

/* ================================================== */

export function HeroDesktop() {
  return (
    <section
      id="hero-desktop"
      className="
        hidden md:flex
        w-full
        min-h-screen
        bg-white
        items-start
        justify-center
        pt-28
        xl:pt-32
        2xl:pt-36
        relative
      "
    >
      {/* ================= LOGO BLOCK ================= */}
      <div
        className="
          relative
          flex
          flex-col
          items-center
          -mt-30
          xl:-mt-36
          2xl:-mt-44
        "
      >
        <img
          src="/images/hero.png"
          alt="Shoonya Insurance Brokers"
          className={`
            ${LOGO_BASE}
            ${LOGO_XL}
            ${LOGO_2XL}
            h-auto
            object-contain
          `}
        />

        <p
          className={`
            absolute
            ${DESCRIPTOR_POSITION}
            ${DESCRIPTOR_XL}
            ${DESCRIPTOR_2XL}
            text-sm
            xl:text-base
            2xl:text-lg
            tracking-wide
            text-grey-600
            text-center
          `}
        >
          Claim Assistance · Customised Insurance · A Safer and Greener Future
        </p>
      </div>

      {/* ================= HEADLINE (ABSOLUTE POSITIONED) ================= */}
      <div
        className={`
          absolute
          ${HEADLINE_POSITION}
          ${HEADLINE_POSITION_XL}
          ${HEADLINE_POSITION_2XL}
          left-1/2
          -translate-x-1/2
          text-center
          px-4
          w-full
        `}
      >
        <a href="#final-cta">
          <h1
            className="
              max-w-4xl
              mx-auto
              text-3xl
              xl:text-4xl
              2xl:text-5xl
              leading-tight
              hover:text-primary
              transition-colors
              cursor-pointer
              mb-4
              xl:mb-6
            "
          >
            Let’s start with a conversation
          </h1>
        </a>

        <p
          className="
            text-base
            xl:text-lg
            2xl:text-xl
            text-grey-600
            leading-relaxed
            max-w-xl
            xl:max-w-2xl
            mx-auto
          "
        >
          No pressure. No sales calls. Just humans who care.
        </p>
      </div>
    </section>
  );
}
