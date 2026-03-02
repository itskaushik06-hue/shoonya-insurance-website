import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { font } from "../lib/typography";
import { sectionHero } from "../lib/sectionHero";

/* ===== HERO TUNING (Match CSR Optimised Layout) ===== */

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${sectionHero.full.minHeight}
          flex
          items-start md:items-center
          justify-center
          px-6
          ${sectionHero.full.topPadding}
          ${sectionHero.full.bottomPadding}
        `}
      >
        <div className="relative w-full max-w-7xl mx-auto">

          {/* Divider */}
          <div className={sectionHero.divider}>
            <div className="h-full w-px bg-grey-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div
              className={`
                flex flex-col items-center text-center
                ${sectionHero.full.logoShiftDesktop}
              `}
            >
              <img
                src="/images/sectionhero.png"
                alt="Shoonya Insurance Brokers"
                className={`
                  ${sectionHero.logoMobile}
                  ${sectionHero.full.logoDesktop}
                  ${sectionHero.logoMax}
                  h-auto
                  object-contain
                `}
              />

              <div className={sectionHero.descriptorWrap}>
                <p className={sectionHero.descriptorText}>
                  Claim Assistance · Customised Insurance
                </p>
                <p className={sectionHero.descriptorText}>
                  A Safer and Greener Future
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className={sectionHero.full.rightColumn}>
              <h1 className={sectionHero.title}>
                Privacy Notice
              </h1>

              <p className={sectionHero.kicker}>
                Personal Data Processing and Protection
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-6 py-20">
        <div className={`max-w-4xl mx-auto space-y-10 text-grey-700 ${font("body")} ${font("contentScale")}`}>

          <div>
            <h2>Privacy Notice</h2>
            <p>
              Shoonya Insurance Brokers Private Limited, registered at 7/9
              Trikuta Nagar, Jammu, J&amp;K - 180012, India, CIN:
              U66000JK2022PTC014062, IRDAI License No. 905 (Direct Insurance
              Broker - Life &amp; General), valid up to 17 July 2026.
            </p>
            <p>
              This Privacy Notice explains how we collect, use, share, retain,
              transfer, and process personal data in accordance with applicable
              laws including the Digital Personal Data Protection Act, 2023 and
              applicable IRDAI requirements.
            </p>
          </div>

          <div>
            <h2>1. Identity of Data Fiduciary</h2>
            <p>
              Shoonya may act as a Data Fiduciary (Controller) or as a Data
              Processor on behalf of insurers or corporate clients, depending on
              the nature of the engagement.
            </p>
            <p>For privacy queries: shoonyabrokers@gmail.com</p>
          </div>

          <div>
            <h2>2. What Personal Data We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Biographical identifiers: name, date of birth, gender, marital status</li>
              <li>Contact information: address, phone number, email address</li>
              <li>Identification information: PAN, Aadhaar (where permitted), passport, driving license, GST/tax data</li>
              <li>Professional information: employment, business, designation details</li>
              <li>Financial information: bank account, payment, and income details</li>
              <li>Insurable risk information: health, disability, vehicle/property, claims, credit history (where relevant)</li>
              <li>Claims information: incident reports, hospital records, surveyor/legal documentation</li>
              <li>Website and technical data: IP address, browser, cookies, usage data</li>
              <li>Any additional information voluntarily provided</li>
            </ul>
          </div>

          <div>
            <h2>3. How We Collect Personal Data</h2>
            <p>
              Data may be collected directly from you (forms, calls, emails,
              meetings), and from insurers, TPAs, surveyors, employers, public
              sources, authorities, and website cookies where applicable.
            </p>
          </div>

          <div>
            <h2>4. How We Use Personal Data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Policy placement, renewal, servicing, and claims assistance</li>
              <li>Risk advisory and insurance consultation</li>
              <li>Regulatory compliance including KYC, AML, and IRDAI obligations</li>
              <li>Fraud prevention, risk management, and customer support</li>
              <li>Marketing communication where legally permitted with opt-out options</li>
            </ul>
          </div>

          <div>
            <h2>5. Profiling and Automated Decision-Making</h2>
            <p>
              Underwriting profiling may be performed by insurers. Shoonya
              facilitates data submission; final premium and coverage decisions
              are generally made by insurers.
            </p>
          </div>

          <div>
            <h2>6. Disclosure of Personal Data</h2>
            <p>
              We may share data with insurers, reinsurers, TPAs, surveyors,
              regulators, legal advisors, and service providers for legitimate
              business and compliance purposes. We do not sell personal data.
            </p>
          </div>

          <div>
            <h2>7. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards to protect personal data from unauthorized access,
              misuse, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2>8. Data Retention</h2>
            <p>
              Data is retained for business operations, IRDAI and tax compliance,
              legal defense, and contractual obligations, then securely deleted
              or anonymized.
            </p>
          </div>

          <div>
            <h2>9. Cross-Border Transfers</h2>
            <p>
              Where required, data may be transferred to service providers or
              insurers outside your state or country with appropriate safeguards.
            </p>
          </div>

          <div>
            <h2>10. Cookies</h2>
            <p>
              Our website may use cookies to improve user experience. You may
              manage cookies through browser settings.
            </p>
          </div>

          <div>
            <h2>11. Your Rights</h2>
            <p>
              Subject to law, you may request access, correction, consent
              withdrawal, deletion (where permitted), or grievance redressal by
              emailing shoonyabrokers@gmail.com.
            </p>
          </div>

          <div>
            <h2>Grievance Redressal</h2>
            <p>Shoonya Insurance Brokers Private Limited</p>
            <p>7/9 Trikuta Nagar, Jammu, J&amp;K - 180012, India</p>
            <p>Email: shoonyabrokers@gmail.com</p>
            <p>Phone: +91 9419286666</p>
            <p className="font-medium text-grey-800">
              Shoonya acts solely as an intermediary between clients and insurers
              and does not underwrite insurance risk.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
