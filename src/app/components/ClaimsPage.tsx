import React from "react";
import {
  FileText,
  ClipboardCheck,
  Users,
  RefreshCcw,
  CheckCircle,
  X,
  Phone,
} from "lucide-react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

/* ================= TUNING ================= */

const SECTION_Y = "py-20";

/* HERO — SAFE ON ALL DEVICES */
const HERO_MIN_H = "min-h-auto md:min-h-[80vh]";

/* Logo */
const LOGO_W_DESKTOP = "w-[340px]";
const LOGO_W_MOBILE = "w-full";
const LOGO_MAX_W = "max-w-[520px]";
const LOGO_TEXT_OVERLAP = "-mt-20";
const LOGO_SHIFT_DESKTOP = "md:-mt-16";

/* Text */
const HERO_TITLE = "text-5xl";
const HERO_SUB = "text-sm";
const HERO_SUPPORT = "text-base";

/* Info visuals */
const ICON_CIRCLE = "w-12 h-12 shrink-0";
const ACTION_ICON = "w-12 h-12";
const DOT_SIZE = "w-3 h-3";
const DOT_GAP = "gap-4";

/* Claim journey cards */
const JOURNEY_CARD_WIDTH = "max-w-[300px]";

export function ClaimsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="claims" />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${HERO_MIN_H}
          flex
          items-start md:items-center
          justify-center
          px-5
          pt-24 pb-16
          md:py-20
        `}
      >
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Divider */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2">
            <div className="h-full w-px bg-grey-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
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

              <div className={`${LOGO_TEXT_OVERLAP} space-y-1`}>
                <p className="text-sm text-grey-600 tracking-wide">
                  Claim Assistance · Customised Insurance
                </p>
                <p className="text-sm text-grey-600 tracking-wide">
                  A Safer and Greener Future
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center text-center space-y-5">
              <h1 className={HERO_TITLE}>Claims Support</h1>

              <p className={`${HERO_SUB} tracking-wide text-grey-600 uppercase`}>
                Real humans · Real support
              </p>

              <CTAButtons variant="large" className="justify-center" />

              <p
                className={`${HERO_SUPPORT} text-grey-600 leading-relaxed max-w-xl`}
              >
                You’ll speak to a real person. No call centres. No confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFO SPLIT ================= */}
      <section className={`px-6 ${SECTION_Y}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* IF CLAIM IS REJECTED */}
          <div className="space-y-4">
            <h2>If Your Claim Is Rejected</h2>

            <div className="flex gap-4 items-start">
              <div
                className={`${ICON_CIRCLE} rounded-full bg-primary/10 flex items-center justify-center`}
              >
                <X className="w-5 h-5 text-primary" />
              </div>

              <div className="space-y-3">
                <p className="text-grey-700 font-medium">
                  A rejection is not the end of the road.
                </p>

                <p className="text-grey-600 leading-relaxed text-justify">
                  We review the decision with you, explain what happened in clear
                  language, and guide you on the next steps calmly and honestly.
                </p>
              </div>
            </div>
          </div>

          {/* CLAIMS JOURNEY SUMMARY */}
          <div className="space-y-4">
            <h2>The Claims Journey</h2>

            <div className="flex gap-4 items-start">
              <div className={`flex flex-col items-center ${DOT_GAP} pt-2`}>
                <span className={`${DOT_SIZE} rounded-full bg-primary`} />
                <span className={`${DOT_SIZE} rounded-full bg-green-500`} />
                <span className={`${DOT_SIZE} rounded-full bg-grey-300`} />
              </div>

              <div className="space-y-5">
                <p className="text-grey-600 leading-relaxed text-justify">
                  We stay with you at every step of the claims process, from the
                  moment an incident occurs to final settlement, ensuring
                  clarity, fairness, and complete transparency throughout.
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="tel:+919419286666"
                    className={`${ACTION_ICON} rounded-full bg-white border border-grey-300 flex items-center justify-center text-primary`}
                  >
                    <Phone className="w-5 h-5" />
                  </a>

                  <a
                    href="https://wa.me/919419286666"
                    target="_blank"
                    rel="noreferrer"
                    className={`${ACTION_ICON} rounded-full bg-white border border-grey-300 flex items-center justify-center`}
                  >
                    <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-grey-600 text-sm">We’re here to help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLAIMS JOURNEY ================= */}
      <section className={`px-6 ${SECTION_Y}`}>
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2>The Claims Journey</h2>
          <p className="mt-3 text-grey-600">
            Step by step, with you throughout.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <JourneyCard title="Claim Intimation" icon={<FileText />} text="Inform us about the incident. We guide you through the first steps." />
          <JourneyCard title="Surveyor Appointment" icon={<ClipboardCheck />} text="A licensed surveyor assesses the loss. We stay involved throughout." />
          <JourneyCard title="Document Submission" icon={<Users />} text="We help you compile and submit documents without stress." />

          <div className="lg:col-span-3 flex flex-col sm:flex-row justify-center gap-8">
            <JourneyCard title="Claim Follow-Up" icon={<RefreshCcw />} text="We coordinate with the insurer and follow up on your behalf." />
            <JourneyCard title="Claim Settlement" icon={<CheckCircle />} text="We stay with you until the claim is resolved completely." />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= CARD ================= */

function JourneyCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`${JOURNEY_CARD_WIDTH} bg-grey-50 border border-grey-200 rounded-xl p-6 text-left space-y-3 transition hover:shadow-sm`}
    >
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>
        <h4>{title}</h4>
      </div>

      <p className="text-grey-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
