import React from "react";
import { font } from "../lib/typography";

/* ===== HERO MOBILE TUNING ===== */
const LOGO_WIDTH = "w-[85vw]";
const LOGO_MAX_W = "max-w-[560px]";
const LOGO_MAX_H = "max-h-[38vh]";

const DESCRIPTOR_OFFSET = "-mt-10";   // overlap control
const TOP_PADDING = "pt-40";

const BOTTOM_PADDING = "pb-50";
const TEXT_BLOCK_GAP = "space-y-4";

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
          alt="Shoonya Insurance Brokers logo and brand mark"
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
          <p className={font("heroDescriptor", "text-grey-500")}>
            Claim Assistance · Customised Insurance
          </p>
          <p className={font("heroDescriptor", "text-grey-500")}>
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
              ${font("heroTitle")}
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
            ${font("heroSupport")}
            text-grey-600
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
