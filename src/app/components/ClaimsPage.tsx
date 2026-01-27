import React from "react";
import {
  FileText,
  ClipboardCheck,
  Users,
  RefreshCcw,
  CheckCircle,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

export function ClaimsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="claims" />

      {/* ================= CLAIMS SUPPORT (HERO-LIKE) ================= */}
      <section className="min-h-[100vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl space-y-6">
          <h1>Claims Support</h1>

          <p className="text-xs tracking-widest text-grey-500 uppercase">
            Real human. Real support.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-2 pt-2">
            <CTAButtons variant="default" className="justify-center" />
          </div>

          <p className="text-sm text-grey-600 pt-2">
            You'll speak to a real person. No call centres.
          </p>
        </div>
      </section>

      {/* ================= IF CLAIM IS REJECTED ================= */}
      <section className="min-h-[65vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl space-y-5">
          <h2>If Your Claim Is Rejected</h2>

          <p className="text-grey-600">
            A rejection is not the end of the road.
          </p>

          <p className="text-grey-600 leading-relaxed">
            We review it with you, explain it clearly, and guide you on what can
            be done next — honestly and calmly.
          </p>

          <div className="pt-2">
            <button className="px-6 py-3 rounded-lg bg-primary text-white text-sm hover:bg-primary-hover transition">
              Discuss Next Steps →
            </button>
          </div>
        </div>
      </section>

      {/* ================= CLAIMS JOURNEY ================= */}
      <section className="py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2>The Claims Journey</h2>
          <p className="mt-2 text-grey-600">
            We're here with you — calmly, fairly, and completely.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <JourneyCard
            step="1"
            title="Claim Intimation"
            icon={<FileText />}
            text="Inform us. We guide you through the first steps calmly."
          />

          <JourneyCard
            step="2"
            title="Surveyor Appointment"
            icon={<ClipboardCheck />}
            text="A licensed surveyor assesses the loss. We stay involved."
          />

          <JourneyCard
            step="3"
            title="Document Submission"
            icon={<Users />}
            text="We help you compile and submit documents without stress."
          />

          <JourneyCard
            step="4"
            title="Claim Follow-Up"
            icon={<RefreshCcw />}
            text="We coordinate with the insurer on your behalf."
          />

          <JourneyCard
            step="5"
            title="Claim Settlement"
            icon={<CheckCircle />}
            text="We stay with you until the process is fully complete."
          />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        id="final-cta"
        className="py-16 md:py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2>Let Us Talk About Your Coverage</h2>

          <p className="text-grey-600 max-w-3xl mx-auto">
            Real humans. Real care. Experts who respect your time and guide you to
            the right protection.
          </p>

          <CTAButtons variant="large" className="justify-center pt-2" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= JOURNEY CARD ================= */

function JourneyCard({
  step,
  title,
  text,
  icon,
}: {
  step: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-grey-50 border border-grey-200 rounded-xl p-6 text-left">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-grey-100 text-sm text-grey-700">
          {step}
        </div>
        <h4 className="m-0">{title}</h4>
      </div>

      <p className="text-grey-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
