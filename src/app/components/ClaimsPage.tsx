import React from "react";
import { FileText, ClipboardCheck, Users, RefreshCcw, CheckCircle } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

export function ClaimsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center space-y-4">
          <h1>Standing by You Like the Mighty Himalayas</h1>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            We are brokers with a seventy five year family legacy in insurance,
            believing deeply in the power of human connection. When loss strikes,
            it is not only about claims. It is about compassion, understanding,
            and standing beside you with expertise and care. Shoonya Insurance
            Brokers guides you through every step personally.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Claims Process */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <FileText className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-2">Claim Intimation</h3>
            <p className="text-grey-700 leading-relaxed">
              Inform us immediately after an incident and we will guide you
              through documentation and the initial process.
            </p>
          </div>

          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <ClipboardCheck className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-2">Surveyor Appointment</h3>
            <p className="text-grey-700 leading-relaxed">
              A licensed surveyor inspects the loss to assess the cause and
              extent of damage accurately.
            </p>
          </div>

          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <Users className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-2">Document Submission</h3>
            <p className="text-grey-700 leading-relaxed">
              We assist you in compiling and submitting all required documents
              without stress or delay.
            </p>
          </div>

          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <RefreshCcw className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-2">Claim Follow Up</h3>
            <p className="text-grey-700 leading-relaxed">
              Our team coordinates directly with the insurer to ensure fair and
              transparent evaluation.
            </p>
          </div>

          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <CheckCircle className="w-6 h-6 text-primary mb-4" />
            <h3 className="mb-2">Claim Settlement</h3>
            <p className="text-grey-700 leading-relaxed">
              Once approved, settlement is processed smoothly. We stay with you
              until completion.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center space-y-6">
          <h2>Let Us Talk About Your Coverage</h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            Real humans. Real care. Not a call center and not someone who pressures
            you for sales. Just experts who listen, protect your privacy, respect
            your time, and help you find the right protection.
          </p>
          <div className="pt-4">
            <CTAButtons variant="large" className="justify-center" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
