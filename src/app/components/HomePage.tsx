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
import { Hero } from "./Hero";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="home" />

      <FloatingCTAs />

      {/* Hero */}
      <Hero />

      {/* Divider */}
      <SectionDivider />

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2>What We Do</h2>
          <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
            We simplify insurance with a consultative approach that puts your needs first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-14 text-center">
          <Feature
            icon={<Shield />}
            title="Insurance Audit"
            text="We review your coverage, identify gaps, and ensure protection against real risks."
          />

          <Feature
            icon={<FileCheck />}
            title="Tailor-Made Policies"
            text="Coverage designed around your life stage and business realities."
          />

          <Feature
            icon={<HeartHandshake />}
            title="Claim Support"
            text="Human guidance through claims with clarity and experience."
          />
        </div>
      </section>

      <SectionDivider />

      {/* Insurance Solutions */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2>Insurance Solutions We Offer</h2>
          <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
            Coverage across individual, business, industrial, and specialized needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <Solution icon={<Users />} label="Individual Insurance" />
          <Solution icon={<Building2 />} label="Business Insurance" />
          <Solution icon={<Factory />} label="Industrial Insurance" />
          <Solution icon={<Landmark />} label="Specialized Insurance" />
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA */}
      <section
        id="final-cta"
        className="max-w-5xl mx-auto px-6 lg:px-8 py-20"
      >
        <div className="text-center space-y-6">
          <h2>Let Us Talk About Your Coverage</h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto">
            Real humans. Real care. Experts who respect your time and guide you to the right protection.
          </p>
          <CTAButtons variant="large" className="justify-center" />
        </div>
      </section>

      {/* Footer (header will auto-hide here, explained below) */}
      <Footer />
    </div>
  );
}

/* ---------- Small helpers ---------- */

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="border-t border-grey-200" />
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center text-primary">
        {icon}
      </div>
      <h3>{title}</h3>
      <p className="text-grey-600">{text}</p>
    </div>
  );
}

function Solution({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex justify-center text-primary">
        {icon}
      </div>
      <h4 className="cursor-pointer hover:text-primary transition-colors">
        {label}
      </h4>
    </div>
  );
}
