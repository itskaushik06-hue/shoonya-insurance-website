import React from "react";
import { ShieldCheck, Umbrella } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";
import { font } from "../lib/typography";
import { sectionHero } from "../lib/sectionHero";

/* ================= TUNING ================= */

const SECTION_Y = "py-20";
/* Text */
const HERO_TITLE = sectionHero.title;
const HERO_SUB = sectionHero.kicker;
const HERO_SUPPORT = sectionHero.support;

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="solutions" />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${sectionHero.compact.minHeight}
          flex
          items-center
          justify-center
          px-5
          ${sectionHero.compact.sectionPadding}
        `}
      >
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Divider (desktop only, visual only) */}
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

            {/* ===== RIGHT ===== */}
            <div className={sectionHero.compact.rightColumn}>
              <h1 className={HERO_TITLE}>Solutions</h1>

              <p
                className={`
                  ${HERO_SUB}
                  tracking-wide
                  text-grey-600
                  uppercase
                `}
              >
                Real humans · No pressure · Just clarity
              </p>

              <div className="w-fit mx-auto">
                <CTAButtons
                  variant="large"
                  className="justify-center"
                />
              </div>

              <p
                className={`
                  ${HERO_SUPPORT}
                  text-grey-600
                  leading-relaxed
                  max-w-xl
                `}
              >
                Thoughtful guidance, built around your{" "}
                <span className="font-medium text-grey-800">
                  real risks
                </span>{" "}
                not generic policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* ================= SOLUTIONS ================= */}
      <section className={`px-6 ${SECTION_Y}`}>
        <div className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ${font("contentScale")}`}>
          <SolutionCard
            icon={<ShieldCheck />}
            title="Risk"
            text="Identify, assess, and manage risks that could impact your business or personal life."
            href="#solutions/risk"
          />

          <SolutionCard
            icon={<Umbrella />}
            title="Insurance"
            text="Insurance selected and structured around your responsibilities, never generic."
            href="#solutions/insurance"
          />
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

function SolutionCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        bg-grey-50
        border
        border-grey-200
        rounded-xl
        p-8
        text-center
        space-y-4
        transition
        hover:shadow-sm
      "
    >
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-grey-100 text-primary">
        {icon}
      </div>

      <h3 className={font("sectionHeading")}>{title}</h3>

      <p className={`${font("bodyMuted")} max-w-sm mx-auto`}>
        {text}
      </p>

      <div className="text-sm font-medium text-primary pt-2">
        Learn More →
      </div>
    </a>
  );
}
