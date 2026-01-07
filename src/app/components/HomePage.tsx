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

export function HomePage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center space-y-6">
          <h1 className="max-w-4xl mx-auto">
            Insurance Brokers with a 75-Year Family Legacy
          </h1>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            At Shoonya, we believe insurance is not about
            policies but it's about people. For over seven
            decades, our family has built a legacy of trust,
            offering human-led insurance audits, tailored
            coverage, and unwavering claim support.
          </p>
          <div className="pt-4">
            <CTAButtons
              variant="large"
              className="justify-center"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2>What We Do</h2>
          <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
            We simplify insurance with a consultative approach
            that puts your needs first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4">Insurance Audit</h3>
            <p className="text-grey-600">
              We analyze your current coverage, identify gaps,
              and ensure you're protected against real risks and
              not just sold a product.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4">Tailor-Made Policies</h3>
            <p className="text-grey-600">
              Every individual and business is unique. We
              customize policies that match your life stage,
              industry, and risk profile.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4">Claim Support</h3>
            <p className="text-grey-600">
              When you need it most, we're by your side, guiding
              you through claims with empathy, clarity, and
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Insurance Categories Section */}
      <section
        id="insurance-solutions"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-16">
          <h2>Insurance Solutions We Offer</h2>
          <p className="mt-4 text-grey-600 max-w-2xl mx-auto">
            Comprehensive coverage across individual, business,
            industrial, and specialized needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1 */}
          <a
            href="#individual-insurance"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h4 className="mb-3 group-hover:text-primary transition-colors">
              Individual Insurance
            </h4>
            <p className="text-sm text-grey-600">
              Health, accident, travel, motor, and home
              insurance for you and your family.
            </p>
          </a>

          {/* Category 2 */}
          <a
            href="#business-insurance"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="mb-3 group-hover:text-primary transition-colors">
              Business & Office Insurance
            </h4>
            <p className="text-sm text-grey-600">
              Protect your business with comprehensive coverage
              for property, liability, and more.
            </p>
          </a>

          {/* Category 3 */}
          <a
            href="#industrial-insurance"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Factory className="w-6 h-6 text-primary" />
            </div>
            <h4 className="mb-3 group-hover:text-primary transition-colors">
              Industrial & Project Insurance
            </h4>
            <p className="text-sm text-grey-600">
              Engineering, machinery, contractors, and
              industrial property insurance solutions.
            </p>
          </a>

          {/* Category 4 */}
          <a
            href="#specialized-insurance"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Landmark className="w-6 h-6 text-primary" />
            </div>
            <h4 className="mb-3 group-hover:text-primary transition-colors">
              Specialized & Financial Insurance
            </h4>
            <p className="text-sm text-grey-600">
              Marine, cyber, credit, and money insurance for
              unique business needs.
            </p>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Trust & Legacy Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center space-y-6">
          <h2>A Legacy Built on Trust</h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            For 75 years, our family has been committed to one
            thing: protecting what matters most. We don't chase
            transactions — we build relationships that last
            generations. When you work with Shoonya, you're not
            just getting an insurance broker. You're gaining a
            trusted partner who truly cares.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2>What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <p className="text-grey-700 mb-6 italic leading-relaxed">
              "Shoonya didn't just sell us insurance, they took
              the time to understand our business and
              recommended exactly what we needed. Their claim
              support was exceptional."
            </p>
            <p className="text-sm font-medium text-grey-900">
              — Manufacturing Business Owner
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <p className="text-grey-700 mb-6 italic leading-relaxed">
              "After years of dealing with pushy agents, Shoonya
              was a breath of fresh air. They're professional,
              patient, and genuinely care about protecting our
              family."
            </p>
            <p className="text-sm font-medium text-grey-900">
              — Individual Policyholder
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <p className="text-grey-700 mb-6 italic leading-relaxed">
              "Their 75-year legacy speaks for itself. We trust
              Shoonya with all our insurance needs, from health
              to property to liability. True professionals."
            </p>
            <p className="text-sm font-medium text-grey-900">
              — Office Administrator
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Final CTA Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center space-y-6">
          <h2>Let's Talk About Your Coverage</h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            Real humans. Real care. Not a call center and not
            someone who pressures you for sales, but real
            experts who listen, protect your privacy, respect
            your time, and help you find peace with the right
            cover.
          </p>
          <div className="pt-4">
            <CTAButtons
              variant="large"
              className="justify-center"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}