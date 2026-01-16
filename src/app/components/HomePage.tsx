import React from "react";
import {
  Shield,
  FileCheck,
  HeartHandshake,
  Users,
  Building2,
  Factory,
  Landmark,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";
import { FloatingCTAs } from "./FloatingCTAs";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="home" />

      {/* Floating CTAs */}
      <FloatingCTAs />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center space-y-6">
          <h1 className="max-w-4xl mx-auto">
            Insurance Brokers with a 75-Year Family Legacy
          </h1>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            At Shoonya, we believe insurance is not about policies
            but about people. For over seven decades, our family
            has built a legacy of trust, offering human-led
            insurance audits, tailored coverage, and unwavering
            claim support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2>What We Do</h2>
          <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
            We simplify insurance with a consultative approach
            that puts your needs first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-grey-200 rounded-lg p-8">
            <Shield className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-4">Insurance Audit</h3>
            <p className="text-grey-600">
              We analyze coverage, identify gaps, and ensure
              protection against real risks.
            </p>
          </div>

          <div className="bg-white border border-grey-200 rounded-lg p-8">
            <FileCheck className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-4">Tailor Made Policies</h3>
            <p className="text-grey-600">
              Coverage designed around your life stage and
              business realities.
            </p>
          </div>

          <div className="bg-white border border-grey-200 rounded-lg p-8">
            <HeartHandshake className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-4">Claim Support</h3>
            <p className="text-grey-600">
              Human guidance through claims with clarity and
              experience.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Insurance Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2>Insurance Solutions We Offer</h2>
          <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
            Coverage across individual, business, industrial,
            and specialized needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-grey-200 rounded-lg p-8">
            <Users className="w-6 h-6 text-primary mb-4" />
            <h4>Individual Insurance</h4>
          </div>
          <div className="border border-grey-200 rounded-lg p-8">
            <Building2 className="w-6 h-6 text-primary mb-4" />
            <h4>Business Insurance</h4>
          </div>
          <div className="border border-grey-200 rounded-lg p-8">
            <Factory className="w-6 h-6 text-primary mb-4" />
            <h4>Industrial Insurance</h4>
          </div>
          <div className="border border-grey-200 rounded-lg p-8">
            <Landmark className="w-6 h-6 text-primary mb-4" />
            <h4>Specialized Insurance</h4>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Final CTA */}
      <section
        id="final-cta"
        className="max-w-5xl mx-auto px-6 lg:px-8 py-24"
      >
        <div className="text-center space-y-6">
          <h2>Let Us Talk About Your Coverage</h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto">
            Real humans. Real care. Experts who respect your
            time and guide you to the right protection.
          </p>
          <CTAButtons variant="large" className="justify-center" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
