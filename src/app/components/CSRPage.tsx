import React from "react";
import {
  Leaf,
  Users,
  BookOpen,
  Handshake,
  Shield,
} from "lucide-react";

import { Header } from "./Header";
import { Footer } from "./Footer";

/* ========================== */
/* ========= TUNING ========= */
/* ========================== */

/* HERO HEIGHT */
const HERO_HEIGHT = "min-h-screen";

/* Vertical spacing */
const HERO_TOP_PADDING = "pt-5 md:pt-5";
const HERO_BOTTOM_PADDING = "pb-16 md:pb-24";

/* Logo */
const LOGO_WIDTH_MOBILE = "w-full";
const LOGO_WIDTH_DESKTOP = "w-[360px]";
const LOGO_MAX = "max-w-[520px]";

/* Logo shift */
const LOGO_SHIFT_MOBILE = "-mt-6";
const LOGO_SHIFT_DESKTOP = "md:-mt-20";

/* Descriptor overlap */
const DESCRIPTOR_OVERLAP = "-mt-20";

/* Card width knob (MAIN CONTROL) */
const CARD_WIDTH = "max-w-[300px]"; // 🔥 increase/decrease this

/* ========================== */

export function CSRPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${HERO_HEIGHT}
          flex
          items-center
          justify-center
          px-6
          ${HERO_TOP_PADDING}
          ${HERO_BOTTOM_PADDING}
        `}
      >
        <div className="relative w-full max-w-7xl mx-auto">

          {/* Divider (desktop only) */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2">
            <div className="h-full w-px bg-grey-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div
              className={`
                flex flex-col items-center text-center
                ${LOGO_SHIFT_MOBILE}
                ${LOGO_SHIFT_DESKTOP}
              `}
            >
              <img
                src="/images/sectionhero.png"
                alt="Shoonya Insurance Brokers"
                className={`
                  ${LOGO_WIDTH_MOBILE}
                  ${LOGO_WIDTH_DESKTOP}
                  ${LOGO_MAX}
                  h-auto
                  object-contain
                `}
              />

              <div className={`${DESCRIPTOR_OVERLAP} space-y-1`}>
                <p className="text-sm text-grey-600 tracking-wide">
                  Claim Assistance · Customised Insurance
                </p>
                <p className="text-sm text-grey-600 tracking-wide">
                  A Safer and Greener Future
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center text-center space-y-6">
              <h1 className="text-5xl">
                Corporate Social Responsibility
              </h1>

              <p className="text-sm tracking-wide text-grey-600 uppercase">
                Responsibility beyond insurance
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-grey-600 leading-relaxed">
            We believe resilience must extend beyond policies and claims.
            Our responsibility includes sustainability, community support,
            and strengthening the long-term insurance ecosystem.
          </p>
        </div>
      </section>

      {/* ================= COMMITMENTS ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2>Our Commitments</h2>
          <p className="mt-3 text-grey-600">
            Structured initiatives focused on long-term resilience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          <CSRCard
            title="Environmental Responsibility"
            icon={<Leaf />}
            text="Promoting sustainable underwriting practices and climate-aware advisory strategies."
          />

          <CSRCard
            title="Community Development"
            icon={<Users />}
            text="Supporting local communities through structured awareness and advisory initiatives."
          />

          <CSRCard
            title="Financial Literacy"
            icon={<BookOpen />}
            text="Encouraging responsible insurance planning and informed risk decisions."
          />

          <div className="lg:col-span-3 flex flex-col sm:flex-row justify-center gap-8">
            <CSRCard
              title="Employee Engagement"
              icon={<Handshake />}
              text="Encouraging active participation in socially responsible initiatives."
            />

            <CSRCard
              title="Disaster Support & Relief"
              icon={<Shield />}
              text="Advisory and coordination support during crisis and calamity situations."
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= CARD ================= */

function CSRCard({
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
      className={`
        ${CARD_WIDTH}
        bg-grey-50
        border border-grey-200
        rounded-xl
        p-6
        text-left
        space-y-3
        transition
        hover:shadow-sm
      `}
    >
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>
        <h4>{title}</h4>
      </div>

      <p className="text-grey-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
