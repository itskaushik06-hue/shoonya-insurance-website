import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/* ===== HERO SYSTEM ===== */

const HERO_HEIGHT = "min-h-screen";
const HERO_TOP_PADDING = "pt-5 md:pt-5";
const HERO_BOTTOM_PADDING = "pb-16 md:pb-24";

const LOGO_WIDTH_MOBILE = "w-full";
const LOGO_WIDTH_DESKTOP = "w-[360px]";
const LOGO_MAX = "max-w-[520px]";
const LOGO_SHIFT = "-mt-6 md:-mt-20";
const DESCRIPTOR_OVERLAP = "-mt-20";

export function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className={`${HERO_HEIGHT} flex items-center justify-center px-6 ${HERO_TOP_PADDING} ${HERO_BOTTOM_PADDING}`}
      >
        <div className="relative w-full max-w-7xl mx-auto">

          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2">
            <div className="h-full w-px bg-grey-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className={`flex flex-col items-center text-center ${LOGO_SHIFT}`}>
              <img
                src="/images/sectionhero.png"
                alt="Shoonya Insurance Brokers"
                className={`${LOGO_WIDTH_MOBILE} ${LOGO_WIDTH_DESKTOP} ${LOGO_MAX} h-auto object-contain`}
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

            {/* RIGHT */}
            <div className="flex flex-col items-center text-center space-y-6">
              <h1 className="text-5xl">Terms & Conditions</h1>
              <p className="text-sm tracking-wide text-grey-600 uppercase">
                Conditions Governing Website Use
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-10 text-grey-700 leading-relaxed">

          <div>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2>2. Scope of Services</h2>
            <p>
              Shoonya Insurance Brokers acts as a licensed direct insurance broker.
              All insurance products are subject to underwriting approval by insurers.
            </p>
          </div>

          <div>
            <h2>3. No Financial Advice</h2>
            <p>
              Information provided on this website is general in nature and does not constitute legal,
              financial, or investment advice.
            </p>
          </div>

          <div>
            <h2>4. Limitation of Liability</h2>
            <p>
              Shoonya Insurance Brokers shall not be liable for indirect or consequential losses arising
              from website usage or reliance on content.
            </p>
          </div>

          <div>
            <h2>5. Intellectual Property</h2>
            <p>
              All materials, including branding and content, remain the intellectual property
              of Shoonya Insurance Brokers unless otherwise stated.
            </p>
          </div>

          <div>
            <h2>6. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India and subject to applicable jurisdiction.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
