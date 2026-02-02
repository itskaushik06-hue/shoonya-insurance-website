import React from "react";
import { ShieldCheck, Umbrella } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

/**
 * ===================== TUNING PARAMETERS =====================
 * Keep these aligned with ClaimsPage for consistency
 */
const SECTION_Y = "py-20";
const HERO_MIN_H = "min-h-[85vh]";
const HERO_TITLE = "text-5xl";
const HERO_SUB = "text-1xl";
const HERO_SUPPORT = "text-base";
const CARD_GAP = "gap-8";
const CARD_MAX_W = "max-w-5xl";

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="solutions" />

      {/* ================= SOLUTIONS HERO ================= */}
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

          {/* ===== CTA (MATCHES CLAIMS HERO) ===== */}
          <div className="pt-4 flex justify-center">
            <CTAButtons variant="large" className="justify-center" />
          </div>

          <p
            className={`
              ${HERO_SUPPORT}
              text-grey-600
              leading-relaxed
            `}
          >
            Thoughtful guidance, built around your{" "}
            <span className="font-medium text-grey-800">
              real risks
            </span>{" "}
            not generic policies.
          </p>
        </div>
      </section>

      <Divider />

      {/* ================= SOLUTION CHOICE ================= */}
      <section className={`px-6 ${SECTION_Y}`}>
        <div
          className={`
            ${CARD_MAX_W}
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            ${CARD_GAP}
          `}
        >
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

/* ================= CARD ================= */

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
      "
    >
      <div
        className="
          w-14
          h-14
          mx-auto
          flex
          items-center
          justify-center
          rounded-full
          bg-grey-100
          text-primary
        "
      >
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
