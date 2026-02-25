import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/* ===== HERO SYSTEM (Aligned with CSR / Articles / Privacy) ===== */

const HERO_HEIGHT = "min-h-[85vh] md:min-h-screen";
const HERO_TOP_PADDING = "pt-24 md:pt-5";
const HERO_BOTTOM_PADDING = "pb-12 md:pb-24";

const LOGO_WIDTH_MOBILE = "w-full";
const LOGO_WIDTH_DESKTOP = "w-[360px]";
const LOGO_MAX = "max-w-[520px]";

const LOGO_SHIFT_MOBILE = "mt-0";
const LOGO_SHIFT_DESKTOP = "md:-mt-20";

const DESCRIPTOR_OVERLAP = "-mt-20";

export function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${HERO_HEIGHT}
          flex
          items-start md:items-center
          justify-center
          px-6
          ${HERO_TOP_PADDING}
          ${HERO_BOTTOM_PADDING}
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

            {/* RIGHT */}
            <div className="flex flex-col items-center text-center space-y-6 mt-12 md:mt-0">
              <h1 className="text-4xl md:text-5xl">
                Terms & Conditions
              </h1>

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
              By accessing this website, you agree to be bound by these Terms and
              Conditions. If you do not agree with any part of these terms, you
              should discontinue use of the website immediately.
            </p>
          </div>

          <div>
            <h2>2. Scope of Services</h2>
            <p>
              Shoonya Insurance Brokers Private Limited acts as a licensed
              direct insurance broker. All insurance products are subject to
              underwriting approval by respective insurers. Coverage terms,
              exclusions, and conditions are governed by the policy documents
              issued by the insurer.
            </p>
          </div>

          <div>
            <h2>3. No Financial Advice</h2>
            <p>
              Information provided on this website is general in nature and
              does not constitute legal, financial, or investment advice.
              Users are advised to seek independent professional consultation
              before making financial decisions.
            </p>
          </div>

          <div>
            <h2>4. Limitation of Liability</h2>
            <p>
              Shoonya Insurance Brokers shall not be liable for indirect,
              incidental, or consequential losses arising from website usage,
              service delays, or reliance on information provided herein.
            </p>
          </div>

          <div>
            <h2>5. Intellectual Property</h2>
            <p>
              All materials, branding, design elements, text, and graphics on
              this website remain the intellectual property of Shoonya Insurance
              Brokers unless otherwise stated. Unauthorized reproduction or
              distribution is prohibited.
            </p>
          </div>

          <div>
            <h2>6. Regulatory Compliance</h2>
            <p>
              Shoonya Insurance Brokers operates under applicable regulations
              and licensing frameworks. Any disputes or claims shall be handled
              in accordance with governing insurance and brokerage regulations.
            </p>
          </div>

          <div>
            <h2>7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of India.
              Any disputes arising from the use of this website shall fall
              under the jurisdiction of the competent courts.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}