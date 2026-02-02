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
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          <h2>About Shoonya</h2>

          <p className="text-2xl font-semibold text-grey-700">
            Built on over 75 years of insurance experience.
          </p>

          <div className="space-y-5 text-grey-600 leading-relaxed text-justify">
            <p>
              Shoonya was founded on a simple belief that insurance works best when
              it is understood, not rushed.
            </p>

            <p>
              Across generations, our family has helped individuals, families, and
              businesses navigate uncertainty by listening carefully, asking the
              right questions, and advising responsibly.
            </p>

            <p>
              We don’t chase transactions or short-term decisions. We focus on
              clarity, perspective, and long-term protection, so our clients feel
              confident not just today, but years from now.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================= What We Do ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2>What We Do</h2>
          <p className="mt-4 text-grey-600">
            We simplify insurance through a consultative approach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">
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
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2>Insurance Solutions We Offer</h2>
          <p className="mt-4 text-grey-600">
            Coverage across individual, business, industrial, and specialized needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-14 max-w-4xl mx-auto">
          <Solution icon={<Users />} label="Individual Insurance" />
          <Solution icon={<Building2 />} label="Business Insurance" />
          <Solution icon={<Factory />} label="Industrial Insurance" />
          <Solution icon={<Landmark />} label="Specialized Insurance" />
        </div>
      </section>

      <SectionDivider />

      {/* ================= Our Values ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">
          <ValueCard
            title="Our Purpose"
            highlight="Guided by perspective. Driven by responsibility."
            paragraphs={[
              "Our purpose is to help people make confident, informed decisions about protection.",
              "We believe clarity, context, and long-term thinking matter more than quick outcomes.",
            ]}
          />

          <ValueCard
            title="Our Culture"
            highlight="Built on trust, performance, and respect."
            paragraphs={[
              "We believe people do their best work when they feel trusted, supported, and valued.",
              "Our culture encourages independent thinking, responsible action, and continuous growth.",
            ]}
          />

          <ValueCard
            title="Our Inclusion & Belonging"
            highlight="Belonging is not a policy. It’s a promise."
            paragraphs={[
              "We value the diverse backgrounds, experiences, and perspectives our colleagues bring.",
              "By fostering true belonging, we build a stronger, more resilient organization.",
            ]}
          />
        </div>
      </section>

      <SectionDivider />

      {/* ================= Testimonials ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2>What Our Clients Say</h2>
          <p className="mt-4 text-grey-600">
            Trusted by individuals and businesses who value clarity and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
      <section id="final-cta" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2>Let Us Talk About Your Coverage</h2>
          <p className="text-lg text-grey-600">
            Real humans. Real care. Experts who respect your time and guide you to the right protection.
          </p>
          <CTAButtons variant="large" className="justify-center" />
        </div>
      </section>

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
    <div className="space-y-4 text-left">
      <div className="text-primary">{icon}</div>
      <h3>{title}</h3>
      <p className="text-grey-600 leading-relaxed text-justify">{text}</p>
    </div>
  );
}

function Solution({ icon, label }: any) {
  return (
    <div className="space-y-3 text-center">
      <div className="flex justify-center text-primary">{icon}</div>
      <h4 className="hover:text-primary transition-colors cursor-pointer">
        {label}
      </h4>
    </div>
  );
}

function ValueCard({ title, highlight, paragraphs }: any) {
  return (
    <div className="border border-grey-200 rounded-xl p-8 bg-white space-y-5">
      <h3>{title}</h3>
      <p className="font-semibold text-grey-800">{highlight}</p>
      {paragraphs.map((p: string, i: number) => (
        <p key={i} className="text-grey-600 leading-relaxed text-justify">
          {p}
        </p>
      ))}
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
