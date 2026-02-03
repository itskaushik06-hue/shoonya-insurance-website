import React from "react";

/* ===== HERO MOBILE TUNING ===== */
const LOGO_WIDTH = "w-[85vw]";
const LOGO_MAX_W = "max-w-[560px]";
const LOGO_MAX_H = "max-h-[38vh]";

const DESCRIPTOR_OFFSET = "-mt-10";   // overlap control
const TOP_PADDING = "pt-60";

const BOTTOM_PADDING = "pb-50";
const TEXT_BLOCK_GAP = "space-y-4";

const HEADLINE_SIZE = "text-[32px]";
const SUPPORT_SIZE = "text-[16px]";

export function HeroMobile() {
  return (
    <section
      id="hero-mobile"
      className={`
        md:hidden
        w-full
        h-screen
        bg-white
        flex
        flex-col
        px-4
        ${TOP_PADDING}
        ${BOTTOM_PADDING}
        text-center
        overflow-hidden
      `}
    >
      {/* ================= TOP ZONE ================= */}
      <div className="flex flex-col items-center">
        {/* LOGO */}
        <img
          src="/images/heromobile.png"
          alt="Shoonya Insurance Brokers"
          className={`
            ${LOGO_WIDTH}
            ${LOGO_MAX_W}
            ${LOGO_MAX_H}
            h-auto
            object-contain
          `}
        />

        {/* DESCRIPTOR (OVERLAPS LOGO) */}
        <div className={`${DESCRIPTOR_OFFSET}`}>
          <p className="text-[14px] tracking-wide text-grey-500 leading-snug">
            Claim Assistance · Customised Insurance
          </p>
          <p className="text-[14px] tracking-wide text-grey-500 leading-snug">
            A Safer and Greener Future
          </p>
        </div>
      </div>

      {/* ================= FLEX SPACER ================= */}
      <div className="flex-1" />

      {/* ================= BOTTOM ZONE ================= */}
      <div className={`flex flex-col items-center ${TEXT_BLOCK_GAP}`}>
        {/* HEADLINE */}
        <a href="#final-cta">
          <h1
            className={`
              max-w-xs
              mx-auto
              ${HEADLINE_SIZE}
              leading-snug
              hover:text-primary
              transition-colors
            `}
          >
            Let’s start with a conversation
          </h1>
        </a>

        {/* SUPPORTING COPY */}
        <p
          className={`
            ${SUPPORT_SIZE}
            text-grey-600
            leading-relaxed
            max-w-xs
          `}
        >
          No pressure. No sales calls.
          <br />
          Just humans who care.
        </p>
      </div>
    </section>
  );
}
