import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

/**
 * ===================== TUNING PARAMETERS =====================
 * Matched EXACTLY with ClaimsPage
 */
const SECTION_Y = "py-20";
const HERO_MIN_H = "min-h-[85vh]";
const HERO_TITLE = "text-5xl";
const HERO_SUB = "text-1xl";
const HERO_SUPPORT = "text-base";
const BODY_TEXT = "text-grey-600 text-base leading-relaxed";

export function RiskPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="solutions" />

      {/* ================= RISK HERO ================= */}
      <section
        className={`
          ${HERO_MIN_H}
          flex
          items-center
          justify-center
          px-6
          ${SECTION_Y}
        `}
      >
        <div className="text-center max-w-3xl space-y-5">
          {/* Page Title */}
          <h1 className={HERO_TITLE}>Risk</h1>

          {/* Descriptor — SAME ROLE AS CLAIMS */}
          <p
            className={`
              ${HERO_SUB}
              tracking-wide
              text-grey-600
              uppercase
            `}
          >
            Understand · Analyse · Protect
          </p>

          {/* Supporting Line */}
          <p
            className={`
              ${HERO_SUPPORT}
              text-grey-600
              max-w-3xl
              mx-auto
              pt-2
            `}
          >
            We see risk clearly and tailor insurance to fit your real needs.
          </p>
        </div>
      </section>

      <Divider />

      {/* ================= OUR APPROACH ================= */}
      <section
        className={`max-w-5xl mx-auto px-6 ${SECTION_Y} text-center`}
      >
        <div className="space-y-4">
          <h2>Our Approach</h2>

          <p className={`${BODY_TEXT} max-w-3xl mx-auto`}>
            We simplify risk, so you can focus on what matters.
          </p>
        </div>
      </section>

      <Divider />

      {/* ================= RISK PILLARS ================= */}
      <section className={`px-6 ${SECTION_Y}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div className="space-y-6">
              <h3>Expert View</h3>

              <p className={BODY_TEXT}>
                Led by senior advisors with decades of real-world experience.
              </p>

              <p className={BODY_TEXT}>
                Shoonya brings together insurance broking, risk advisory, and
                claims advocacy under one roof.
              </p>

              <ul className= {BODY_TEXT}>
                <li>
                  Guided by judgement, supported by data, and grounded in
                  experience.
                </li>
              </ul>

              <p className={BODY_TEXT}>We focus on:</p>

              <ul className="list-disc pl-5 space-y-2 text-grey-600">
                <li>Reducing uncertainty</li>
                <li>Controlling exposure</li>
                <li>Making outcomes more predictable</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <h3>Local Insight</h3>

              <p className={BODY_TEXT}>
                Insight where it matters most.
              </p>

              <p className={BODY_TEXT}>
                We support individual and commercial clients in the markets where
                they operate and where their risks exist.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-grey-600">
                <li>Understanding coverage details</li>
                <li>Regulatory changes</li>
                <li>Emerging risks</li>
              </ul>

              <p className={BODY_TEXT}>
                We work with you on placement, mitigation, and optimising
                insurance spend.
              </p>

              <p className="text-sm text-grey-500 italic">
                (Always collaboratively. Always transparently.)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ================= FINAL CTA ================= */}
      <section
        className={`max-w-5xl mx-auto px-6 ${SECTION_Y} text-center`}
      >
        <div className="space-y-5">
          <h2>We’re here when you’re ready.</h2>

          <p className="text-grey-600 max-w-3xl mx-auto">
            If you’d like to talk through your risks or understand your coverage
            better, we’re here.
          </p>

          <CTAButtons variant="large" className="justify-center pt-2" />

                  </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= SHARED ================= */

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-grey-200" />
    </div>
  );
}
