import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/* ===== HERO TUNING (Match CSR Layout) ===== */

const HERO_HEIGHT = "min-h-screen";
const HERO_TOP_PADDING = "pt-5 md:pt-5";
const HERO_BOTTOM_PADDING = "pb-16 md:pb-24";

const LOGO_WIDTH_MOBILE = "w-full";
const LOGO_WIDTH_DESKTOP = "w-[360px]";
const LOGO_MAX = "max-w-[520px]";
const LOGO_SHIFT = "-mt-6 md:-mt-20";
const DESCRIPTOR_OVERLAP = "-mt-20";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className={`${HERO_HEIGHT} flex items-center justify-center px-6 ${HERO_TOP_PADDING} ${HERO_BOTTOM_PADDING}`}
      >
        <div className="relative w-full max-w-7xl mx-auto">

          {/* Divider */}
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
              <h1 className="text-5xl">Privacy Policy</h1>
              <p className="text-sm tracking-wide text-grey-600 uppercase">
                Transparency and Data Responsibility
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-10 text-grey-700 leading-relaxed">

          <div>
            <h2>1. Introduction</h2>
            <p>
              Shoonya Insurance Brokers Private Limited respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website and services.
            </p>
          </div>

          <div>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information including your name, contact details, identification information, policy details, and other relevant data necessary for insurance advisory and brokerage services.
            </p>
          </div>

          <div>
            <h2>3. How We Use Information</h2>
            <p>
              Information collected is used to assess risk, provide insurance advisory services, facilitate policy placement, manage claims support, comply with regulatory obligations, and improve service quality.
            </p>
          </div>

          <div>
            <h2>4. Data Sharing</h2>
            <p>
              We may share information with insurers, regulatory authorities, service providers, and legal entities as required to deliver services or comply with legal obligations. We do not sell personal data.
            </p>
          </div>

          <div>
            <h2>5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect personal data from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2>6. Retention of Data</h2>
            <p>
              Personal information is retained only for as long as necessary to fulfill service requirements and regulatory obligations.
            </p>
          </div>

          <div>
            <h2>7. Your Rights</h2>
            <p>
              You may request access, correction, or clarification regarding your personal data by contacting us through the details provided on our website.
            </p>
          </div>

          <div>
            <h2>8. Updates</h2>
            <p>
              This Privacy Policy may be updated periodically. Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
