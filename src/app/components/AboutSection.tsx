import React from "react";
import { font } from "../lib/typography";

export function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="max-w-xl space-y-5">
          <h2 className="text-[clamp(1.5rem,1.45rem+1.2vw,1.2rem)] leading-tight text-grey-900">
            Built on 75+ years of insurance experience.
          </h2>

          <h3 className={font("sectionHeading")}>About Shoonya</h3>

          <div className="space-y-5 text-justify">
            <p className={font("body")}>
              Shoonya was founded on a simple belief that insurance works best
              when it is understood, not rushed.
            </p>

            <p className={font("body")}>
              Across generations, our family has guided individuals, families,
              and businesses through uncertainty by listening carefully, asking
              the right questions, and advising responsibly.
            </p>

            <p className={font("body")}>
              We don&apos;t pursue transactions. We build long-term protection
              strategies so our clients feel confident for years to come.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-center">
          <img
            src="/images/about.png"
            alt="Shoonya Insurance Brokers team illustration representing long-term insurance guidance"
            className="w-full max-w-[420px] lg:max-w-[420px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
