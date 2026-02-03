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

/* === BRAND DOT PARAMS === */
const HERO_LOGO_GAP = "gap-4";
const HERO_DOT_SIZE = "w-3 h-3";

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

          {/* Title Row with Brand Dots */}
          <div
            className={`
              flex
              items-center
              justify-center
              ${HERO_LOGO_GAP}
            `}
          >
            {/* Shoonya Dots */}
            <div className="flex flex-col gap-1">
              <span
                className={`
                  ${HERO_DOT_SIZE}
                  rounded-full
                  bg-primary
                `}
              />
              <span
                className={`
                  ${HERO_DOT_SIZE}
                  rounded-full
                  bg-green-500
                `}
              />
            </div>

            <h1 className={HERO_TITLE}>Risk</h1>
          </div>

          {/* Descriptor */}
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

          {/* CTA */}
          <div className="pt-4 flex justify-center">
            <CTAButtons variant="large" className="justify-center" />
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* EXPERT VIEW */}
            <div className="bg-grey-50 border border-grey-200 rounded-xl p-8 space-y-6">
              <h3>Expert View</h3>

              <p className={BODY_TEXT}>
                Led by senior advisors with decades of real-world experience.
              </p>

              <p className={BODY_TEXT}>
                Shoonya brings together insurance broking, risk advisory, and
                claims advocacy under one roof.
              </p>

              <p className="font-medium text-grey-700">
                Our work is:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-grey-600">
                <li>Guided by judgement</li>
                <li>Supported by data</li>
                <li>Grounded in experience</li>
              </ul>

              <p className="font-medium text-grey-700 pt-2">
                We focus on:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-grey-600">
                <li>Reducing uncertainty</li>
                <li>Controlling exposure</li>
                <li>Making outcomes predictable</li>
              </ul>
            </div>

            {/* LOCAL INSIGHT */}
            <div className="bg-grey-50 border border-grey-200 rounded-xl p-8 space-y-6">
              <h3>Local Insight</h3>

              <p className={BODY_TEXT}>
                Insight where it matters most.
              </p>

              <p className={BODY_TEXT}>
                We support individual and commercial clients in the markets where
                they operate and where their risks exist.
              </p>

              <p className="font-medium text-grey-700">
                Our understanding spans:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-grey-600">
                <li>Coverage interpretation</li>
                <li>Regulatory changes</li>
                <li>Emerging risks</li>
              </ul>

              <p className={BODY_TEXT}>
                We work with you on placement, mitigation, and optimising
                insurance spend.
              </p>

              <p className="text-sm text-grey-500 italic">
                Always collaboratively. Always transparently.
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
