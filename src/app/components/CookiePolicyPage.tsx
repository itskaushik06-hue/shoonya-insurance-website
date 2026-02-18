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

export function CookiePolicyPage() {
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
              <h1 className="text-5xl">Cookie Policy</h1>
              <p className="text-sm tracking-wide text-grey-600 uppercase">
                Transparency in Digital Interaction
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-10 text-grey-700 leading-relaxed">

          <div>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They help websites function efficiently and provide insights into user interaction.
            </p>
          </div>

          <div>
            <h2>2. Types of Cookies We May Use</h2>
            <p>
              • Essential Cookies – Necessary for basic website functionality.  
              • Performance Cookies – Help analyze website traffic and usage patterns.  
              • Functional Cookies – Remember user preferences.  
              • Marketing Cookies – Used for advertising and remarketing (if applicable).
            </p>
          </div>

          <div>
            <h2>3. How We Use Cookies</h2>
            <p>
              Cookies may be used to improve website performance, understand visitor engagement,
              enhance security, and optimize user experience.
            </p>
          </div>

          <div>
            <h2>4. Managing Cookies</h2>
            <p>
              You can control or disable cookies through your browser settings.
              Disabling certain cookies may affect website functionality.
            </p>
          </div>

          <div>
            <h2>5. Updates</h2>
            <p>
              This Cookie Policy may be updated periodically to reflect regulatory or operational changes.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
