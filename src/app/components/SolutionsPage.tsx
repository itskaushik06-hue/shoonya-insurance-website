import React from "react";
import { ShieldCheck, Umbrella } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

/* ================= TUNING ================= */

const SECTION_Y = "py-20";
const HERO_MIN_H = "min-h-[80vh]";

/* Logo */
const LOGO_W_DESKTOP = "w-[340px]";
const LOGO_W_MOBILE = "w-full";
const LOGO_MAX_W = "max-w-[520px]";

/* 🔑 Desktop-only left logo vertical offset */
const LOGO_SHIFT_DESKTOP = "md:-mt-16"; // ← THIS moves only the left block up

/* Text */
const HERO_TITLE = "text-5xl";
const HERO_SUB = "text-sm";
const HERO_SUPPORT = "text-base";

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="solutions" />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${HERO_MIN_H}
          flex
          items-center
          justify-center
          px-5
          ${SECTION_Y}
        `}
      >
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Divider (desktop only, visual only) */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2">
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
                ${LOGO_SHIFT_DESKTOP}
              `}
            >
              <img
                src="/images/sectionhero.png"
                alt="Shoonya Insurance Brokers"
                className={`
                  ${LOGO_W_MOBILE}
                  md:${LOGO_W_DESKTOP}
                  ${LOGO_MAX_W}
                  h-auto
                  object-contain
                `}
              />

              <div className="-mt-20 space-y-1">
                <p className="text-sm text-grey-600 tracking-wide">
                  Claim Assistance · Customised Insurance
                </p>
                <p className="text-sm text-grey-600 tracking-wide">
                  A Safer and Greener Future
                </p>
              </div>
            </div>

            {/* ===== RIGHT ===== */}
            <div className="flex flex-col items-center text-center space-y-5">
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <h3>{title}</h3>

      <p className="text-grey-600 leading-relaxed max-w-sm mx-auto">
        {text}
      </p>

      <div className="text-sm font-medium text-primary pt-2">
        Learn More →
      </div>
    </a>
  );
}
