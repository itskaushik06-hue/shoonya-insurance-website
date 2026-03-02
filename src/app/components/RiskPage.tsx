import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";
import { font } from "../lib/typography";
import { sectionHero } from "../lib/sectionHero";

/* ================= TUNING ================= */

/* Shared spacing */
const SECTION_Y = "py-20";

/* Text */
const HERO_TITLE = sectionHero.title;
const HERO_SUB = sectionHero.kicker;
const HERO_SUPPORT = sectionHero.support;
const BODY_TEXT = font("bodyMuted");

export function RiskPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="solutions" />

      {/* ================= HERO (MATCHES SOLUTIONS + CLAIMS) ================= */}
      <section
        className={`
          ${sectionHero.compact.minHeight}
          flex
          items-start md:items-center
          justify-center
          px-6
          ${sectionHero.compact.sectionPadding}
        `}
      >
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Divider (desktop only) */}
          <div className={sectionHero.divider}>
            <div className="h-full w-px bg-grey-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* ===== LEFT (LOGO) ===== */}
            <div
              className={`
                flex
                flex-col
                items-center
                text-center
                ${sectionHero.compact.logoShiftDesktop}
              `}
            >
              <img
                src="/images/sectionhero.png"
                alt="Shoonya Insurance Brokers"
                className={`
                  ${sectionHero.logoMobile}
                  md:${sectionHero.compact.logoDesktop}
                  ${sectionHero.logoMax}
                  h-auto
                  object-contain
                `}
              />

              <div className={sectionHero.descriptorWrap}>
                <p className={sectionHero.descriptorText}>
                  Claim Assistance · Customised Insurance
                </p>
                <p className={sectionHero.descriptorText}>
                  A Safer and Greener Future
                </p>
              </div>
            </div>

            {/* ===== RIGHT (CONTENT) ===== */}
            <div className={sectionHero.compact.rightColumn}>
              <h1 className={HERO_TITLE}>Risk</h1>

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

              <CTAButtons variant="large" className="justify-center" />

              <p
                className={`
                  ${HERO_SUPPORT}
                  text-grey-600
                  leading-relaxed
                  max-w-xl
                `}
              >
                We see risk clearly and tailor insurance to fit your real needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className={`max-w-5xl mx-auto px-6 ${SECTION_Y} text-center ${font("contentScale")}`}>
        <div className="space-y-4">
          <h2>Our Approach</h2>

          <p className={`${BODY_TEXT} max-w-3xl mx-auto`}>
            We simplify risk, so you can focus on what matters.
          </p>
        </div>
      </section>

      {/* ================= RISK PILLARS ================= */}
      <section className={`px-6 ${SECTION_Y}`}>
        <div className={`max-w-7xl mx-auto ${font("contentScale")}`}>
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

              <p className="font-medium text-grey-700">Our work is:</p>

              <ul className="list-disc pl-5 space-y-2 text-grey-600">
                <li>Guided by judgement</li>
                <li>Supported by data</li>
                <li>Grounded in experience</li>
              </ul>

              <p className="font-medium text-grey-700 pt-2">We focus on:</p>

              <ul className="list-disc pl-5 space-y-2 text-grey-600">
                <li>Reducing uncertainty</li>
                <li>Controlling exposure</li>
                <li>Making outcomes predictable</li>
              </ul>
            </div>

            {/* LOCAL INSIGHT */}
            <div className="bg-grey-50 border border-grey-200 rounded-xl p-8 space-y-6">
              <h3>Local Insight</h3>

              <p className={BODY_TEXT}>Insight where it matters most.</p>

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

              <p className={font("heroKicker", "text-grey-500 italic normal-case")}>
                Always collaboratively. Always transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className={`max-w-5xl mx-auto px-6 ${SECTION_Y} text-center ${font("contentScale")}`}>
        <div className="space-y-5">
          <h2>We’re here when you’re ready.</h2>

          <p className={`max-w-3xl mx-auto ${font("bodyMuted")}`}>
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
