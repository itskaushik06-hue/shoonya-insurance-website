import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/* HERO SYSTEM SAME */

export function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      <section className="px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto space-y-10 text-grey-700 leading-relaxed">

          <h1 className="text-5xl text-center mb-8">
            Disclaimer
          </h1>

          <p>
            Shoonya Insurance Brokers Private Limited is a licensed direct insurance broker
            authorized under applicable regulatory guidelines.
          </p>

          <p>
            Insurance products are subject to terms, conditions, exclusions,
            and underwriting criteria determined by respective insurers.
          </p>

          <p>
            The information provided on this website is for informational purposes only
            and does not constitute binding advice or guaranteed coverage.
          </p>

          <p>
            Visitors are encouraged to consult qualified professionals before making
            insurance decisions.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
