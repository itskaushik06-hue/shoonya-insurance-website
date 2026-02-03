import React from "react";
import {
  FileText,
  ClipboardCheck,
  Users,
  RefreshCcw,
  CheckCircle,
} from "lucide-react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

/**
 * ===================== TUNING PARAMETERS =====================
 * You can safely tweak these to adjust feel across the page
 */
const SECTION_Y = "py-20";
const HERO_MIN_H = "min-h-[85vh]";
const HERO_TITLE = "text-5xl";
const HERO_SUB = "text-1xl";
const HERO_SUPPORT = "text-base";
const CARD_GAP = "gap-6";
const CARD_MAX_W = "max-w-6xl";

/* === NEW VISUAL BRAND PARAMS === */
const HERO_LOGO_GAP = "gap-4";     // dots ↔ title spacing
const HERO_DOT_SIZE = "w-3 h-3";   // dot size

export function ClaimsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="claims" />

      {/* ================= CLAIMS HERO ================= */}
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

          {/* Title Row with Shoonya Dots */}
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

            {/* Page Title */}
            <h1 className={HERO_TITLE}>Claims Support</h1>
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
            Real humans · Real support
          </p>

          {/* CTAs */}
          <div className="pt-4 flex justify-center">
            <CTAButtons variant="large" className="justify-center" />
          </div>

          {/* Supporting line */}
          <p
            className={`
              ${HERO_SUPPORT}
              text-grey-600
              pt-2
            `}
          >
            You’ll speak to a real person. No call centres. No confusion.
          </p>
        </div>
      </section>

      <Divider />

      {/* ================= IF CLAIM IS REJECTED ================= */}
      <section className={`max-w-5xl mx-auto px-6 ${SECTION_Y} text-center`}>
        <div className="space-y-4">
          <h2>If Your Claim Is Rejected</h2>

          <p className="text-grey-600">
            A rejection is not the end of the road.
          </p>

          <p className="text-grey-600 leading-relaxed max-w-3xl mx-auto">
            We review the decision with you, explain what happened in clear
            language, and guide you on the next steps calmly and honestly.
          </p>
        </div>
      </section>

      <Divider />

      {/* ================= CLAIMS JOURNEY ================= */}
      <section className={`px-6 ${SECTION_Y}`}>
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2>The Claims Journey</h2>
          <p className="mt-3 text-grey-600">
            We stay with you at every step clearly, fairly, and completely.
          </p>
        </div>

        <div
          className="
            max-w-6xl
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >
          <JourneyCard
            step="1"
            title="Claim Intimation"
            icon={<FileText />}
            text="Inform us about the incident. We guide you through the first steps."
          />

          <JourneyCard
            step="2"
            title="Surveyor Appointment"
            icon={<ClipboardCheck />}
            text="A licensed surveyor assesses the loss. We stay involved throughout."
          />

          <JourneyCard
            step="3"
            title="Document Submission"
            icon={<Users />}
            text="We help you compile and submit documents without stress."
          />

          <div
            className="
              lg:col-span-3
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-6
            "
          >
            <div className="w-full sm:max-w-sm">
              <JourneyCard
                step="4"
                title="Claim Follow-Up"
                icon={<RefreshCcw />}
                text="We coordinate with the insurer and follow up on your behalf."
              />
            </div>

            <div className="w-full sm:max-w-sm">
              <JourneyCard
                step="5"
                title="Claim Settlement"
                icon={<CheckCircle />}
                text="We stay with you until the claim is resolved completely."
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ================= FINAL CTA ================= */}
      <section
        id="final-cta"
        className={`max-w-5xl mx-auto px-6 ${SECTION_Y} text-center`}
      >
        <div className="space-y-5">
          <h2>Let Us Talk About Your Coverage</h2>

          <p className="text-grey-600 max-w-3xl mx-auto">
            Real humans. Real care. Experts who respect your time and guide you to
            the right protection.
          </p>

          <CTAButtons variant="large" className="justify-center pt-2" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= HELPERS ================= */

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-grey-200" />
    </div>
  );
}

function JourneyCard({
  step,
  title,
  text,
  icon,
}: {
  step: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="
      bg-grey-50
      border
      border-grey-200
      rounded-xl
      p-6
      text-left
      space-y-3
      transition
      hover:shadow-sm
    ">
      <div className="flex items-center gap-3">
        <div className="
          w-8 h-8
          flex items-center justify-center
          rounded-full
          bg-grey-100
          text-sm
          text-grey-700
        ">
          {step}
        </div>
        <h4>{title}</h4>
      </div>

      <p className="text-grey-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
