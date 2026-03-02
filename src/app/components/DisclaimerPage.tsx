import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { font } from "../lib/typography";

/* HERO SYSTEM SAME */

export function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      <section className="px-6 pt-20 pb-20">
        <div className={`max-w-4xl mx-auto space-y-10 text-grey-700 ${font("body")} ${font("contentScale")}`}>

          <h1 className={`${font("heroTitle")} text-center mb-8`}>
            Transparency and Disclosure Statement
          </h1>

          <p>
            Shoonya Insurance Brokers Private Limited is a Direct Insurance
            Broker (Life &amp; General) licensed by IRDAI (License No. 905,
            valid until 17 July 2026). We provide advisory, risk management,
            employee benefits advisory, and brokerage services across India.
          </p>

          <div>
            <h2>Our Commitments</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ethical and compliant business practices aligned to IRDAI regulations</li>
              <li>Clear definition of roles, responsibilities, and engagement terms</li>
              <li>Compensation disclosures on request, subject to law</li>
              <li>Conflict management with client interests prioritized</li>
            </ul>
          </div>

          <div>
            <h2>How We Are Paid</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Fee Arrangements:</strong> Advisory fees may be charged,
                in lieu of or in addition to insurer commission, as agreed in writing.
              </li>
              <li>
                <strong>Retail Commissions:</strong> Paid by insurers as permitted
                percentages of premium under IRDAI norms.
              </li>
              <li>
                <strong>Alternative Commissions:</strong> Additional/volume-based
                commissions may apply where legally permitted.
              </li>
              <li>
                <strong>Insurer Services Revenue:</strong> Compensation for specific
                administrative or portfolio services as permitted by regulation.
              </li>
              <li>
                <strong>Other Compensation:</strong> Training reimbursements, lawful
                interest handling, and referral fees where legally permitted.
              </li>
            </ol>
          </div>

          <div>
            <h2>Requesting Compensation Details</h2>
            <p>
              Clients may request additional details on compensation arrangements
              by contacting shoonyabrokers@gmail.com. Disclosures are provided
              in accordance with applicable law and regulatory requirements.
            </p>
          </div>

          <div>
            <h2>Related Party Transactions and Data Use</h2>
            <p>
              Any potential conflicts related to professional relationships are
              managed through internal governance and regulatory standards.
            </p>
            <p>
              We may use anonymized, aggregated data for benchmarking, analytics,
              and risk modelling to improve advisory outcomes.
            </p>
          </div>

          <div>
            <h2>Technology and Market Analytics</h2>
            <p>
              Shoonya may use analytical tools and technology platforms to
              support underwriting, risk analysis, and renewal planning.
            </p>
          </div>

          <div>
            <h2>Contact</h2>
            <p>Shoonya Insurance Brokers Private Limited</p>
            <p>Regd. Address: 7/9 Trikuta Nagar, Jammu, J&amp;K - 180012, India</p>
            <p>CIN: U66000JK2022PTC014062</p>
            <p>IRDAI License No. 905 (Valid until 17 July 2026)</p>
            <p>Email: shoonyabrokers@gmail.com</p>
            <p>Contact No.: +91 9419286666</p>
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
