import React from "react";
import {
  Shield,
  FileCheck,
  HeartHandshake,
  Users,
  Building2,
  Factory,
  Landmark,
  Quote,
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

      <SectionDivider />

      {/* ================= About Shoonya ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2>About Shoonya</h2>

          {/* highlighted line */}
          <p className="text-2xl font-semibold text-grey-700">
            Built on over 75 years of insurance experience.
          </p>

          <p className="text-grey-600 leading-relaxed">
            Shoonya was founded on a simple belief that insurance works best when it
            is understood, not rushed.
          </p>

          <p className="text-grey-600 leading-relaxed">
            Across generations, our family has helped individuals, families, and
            businesses navigate uncertainty by listening carefully, asking the
            right questions, and advising responsibly.
          </p>

          <p className="text-grey-600 leading-relaxed">
            We don’t chase transactions or short-term decisions. We focus on
            clarity, perspective, and long-term protection, so our clients feel
            confident not just today, but years from now.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ================= What We Do ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2>What We Do</h2>
          <p className="mt-3 text-grey-600 max-w-2xl mx-auto">
            We simplify insurance through a consultative approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <Feature
            icon={<Shield />}
            title="Insurance Audit"
            text="We review your existing coverage in detail, identify gaps or overlaps, and assess whether it protects you against real-world risks — not just on paper."
          />
          <Feature
            icon={<FileCheck />}
            title="Tailor-Made Policies"
            text="Coverage designed around your life stage, personal responsibilities, and business realities. No templates. No assumptions."
          />
          <Feature
            icon={<HeartHandshake />}
            title="Claim Support"
            text="When something goes wrong, clarity matters most. Calm, human guidance through the claims process."
          />
        </div>
      </section>

      <SectionDivider />

      {/* ================= Insurance Solutions ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2>Insurance Solutions We Offer</h2>
          <p className="mt-3 text-grey-600 max-w-2xl mx-auto">
            Coverage across individual, business, industrial, and specialized needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto text-center">
          <Solution icon={<Users />} label="Individual Insurance" />
          <Solution icon={<Building2 />} label="Business Insurance" />
          <Solution icon={<Factory />} label="Industrial Insurance" />
          <Solution icon={<Landmark />} label="Specialized Insurance" />
        </div>
      </section>

      <SectionDivider />

      {/* ================= Our Purpose ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2>Our Purpose</h2>

          {/* highlighted line */}
          <p className="text-2xl font-semibold text-grey-700">
            Guided by perspective. Driven by responsibility.
          </p>

          <p className="text-grey-600 leading-relaxed">
            At Shoonya, we believe people do their best work when they feel
            trusted, supported, and valued.
          </p>

          <p className="text-grey-600 leading-relaxed">
            We foster a high-performing, inclusive culture where colleagues are
            encouraged to think independently, act responsibly, and grow
            continuously.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ================= Culture & Inclusion ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2>Our Culture</h2>
            <p className="text-2xl font-semibold text-grey-700">
              Built on trust, performance, and respect.
            </p>
            <p className="text-grey-600 leading-relaxed">
              We believe people do their best work when they feel trusted,
              supported, and valued.
            </p>
            <p className="text-grey-600 leading-relaxed">
              We encourage independent thinking, responsible action, and
              continuous growth.
              </p>
            </div>
          </section>
          <SectionDivider />

          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2>Inclusion, Diversity & Belonging</h2>
            <p className="text-2xl font-semibold text-grey-700">
              Belonging is not a policy. It’s a promise.
            </p>
            <p className="text-grey-600 leading-relaxed">
              We value the many backgrounds, experiences, and perspectives our
              colleagues bring to Shoonya.
            </p>
            <p className="text-grey-600 leading-relaxed">
              By fostering an inclusive environment where everyone feels they
              belong, we create a stronger, more innovative organization.
            </p>
        </div>
      </section>

      <SectionDivider />

      {/* ================= Testimonials ================= */}
      <section className="max-w-7xl mx-auto px-16 py-16">
        <div className="text-center mb-12">
          <h2>What Our Clients Say</h2>
          <p className="mt-3 text-grey-600 max-w-2xl mx-auto">
            Trusted by individuals and businesses who value clarity and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Testimonial
            text="Shoonya helped us uncover gaps we didn’t even know existed. Their claim support was calm, clear, and human."
            author="Manufacturing Business Owner"
          />
          <Testimonial
            text="No pressure, no jargon. Just honest guidance that actually made sense for our family."
            author="Individual Policyholder"
          />
          <Testimonial
            text="Their consultative approach saved us money and future headaches. Rare in this industry."
            author="SME Founder"
          />
        </div>
      </section>

      <SectionDivider />

      {/* ================= Final CTA ================= */}
      <section id="final-cta" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center space-y-5">
          <h2>Let Us Talk About Your Coverage</h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto">
            Real humans. Real care. Experts who respect your time and guide you to the right protection.
          </p>
          <CTAButtons variant="large" className="justify-center" />
        </div>
      </section>

      {/* Floating CTA stop zone */}
<div id="footer-cta-stop" className="h-32 md:h-0" />


      <Footer />
    </div>
  );
}

/* ================= Helpers ================= */

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-grey-200" />
    </div>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center text-primary">{icon}</div>
      <h3>{title}</h3>
      <p className="text-grey-600">{text}</p>
    </div>
  );
}

function Solution({ icon, label }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-center text-primary">{icon}</div>
      <h4 className="hover:text-primary transition-colors cursor-pointer">
        {label}
      </h4>
    </div>
  );
}

function Testimonial({ text, author }: any) {
  return (
    <div className="border border-grey-200 rounded-xl p-6 bg-white space-y-4">
      <Quote className="text-primary opacity-30" />
      <p className="text-grey-700 italic leading-relaxed">“{text}”</p>
      <p className="text-sm text-grey-500 font-medium">{author}</p>
    </div>
  );
}
