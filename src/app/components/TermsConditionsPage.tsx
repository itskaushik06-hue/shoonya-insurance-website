import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { font } from "../lib/typography";
import { sectionHero } from "../lib/sectionHero";

/* ===== HERO SYSTEM (Aligned with CSR / Articles / Privacy) ===== */

export function TermsConditionsPage() {
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
                Terms of Use
              </h1>

              <p className={sectionHero.kicker}>
                Effective: 27 February 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-6 py-20">
        <div className={`max-w-4xl mx-auto space-y-10 text-grey-700 ${font("body")} ${font("contentScale")}`}>

          <div>
            <h2>Website Terms of Use</h2>
            <p>
              Please read these Terms carefully before using this website. By
              accessing or using this website, you agree to be bound by these
              Terms of Use and our Privacy Notice. If you do not agree, you must
              not access or use this website.
            </p>
            <p>
              This website is operated by Shoonya Insurance Brokers Private Limited,
              a Direct Insurance Broker (Life &amp; General), IRDAI License No. 905
              (valid until 17 July 2026), registered office: 7/9 Trikuta Nagar,
              Jammu, J&amp;K - 180012, India, CIN: U66000JK2022PTC014062.
            </p>
          </div>

          <div>
            <h2>1. Accuracy of Information</h2>
            <p>
              We make reasonable efforts to keep website information accurate at
              the time of publication, but we do not guarantee completeness,
              accuracy, or timeliness. Shoonya accepts no liability for errors
              or omissions.
            </p>
          </div>

          <div>
            <h2>2. Intellectual Property Rights</h2>
            <p>
              All website content including text, graphics, logos, trademarks,
              and design elements belongs to Shoonya or its licensors and is
              protected by applicable intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable right
              to access and use the website for personal or internal
              non-commercial organizational purposes only.
            </p>
            <p>
              You may not reproduce, distribute, modify, frame, or commercially
              exploit any website content without prior written consent.
            </p>
          </div>

          <div>
            <h2>3. Permitted Use</h2>
            <p>
              You may print or download content solely for personal or internal
              non-commercial use.
            </p>
            <p>
              You shall not use this website for unlawful purposes, transmit
              defamatory/obscene/abusive content, send spam, or interfere with
              website functionality.
            </p>
          </div>

          <div>
            <h2>4. Restrictions</h2>
            <p>
              You may not misuse Shoonya’s name, logo, or brand. Any linking to
              this website requires prior written approval. Shoonya reserves the
              right to withdraw such consent at any time.
            </p>
          </div>

          <div>
            <h2>5. Modification and Access</h2>
            <p>
              Shoonya may modify, suspend, or discontinue this website or any
              part of it without notice. Access may be restricted or terminated
              if these Terms are breached.
            </p>
          </div>

          <div>
            <h2>6. Confidentiality and Data Use</h2>
            <p>
              Information collected through this website is handled in accordance
              with our Privacy Notice. Data may be used for advisory, regulatory,
              analytics, research, and crime prevention purposes as permitted by law.
            </p>
            <p>
              Where clients provide personal data of other individuals, Shoonya
              assumes appropriate consents/disclosures have been obtained.
            </p>
          </div>

          <div>
            <h2>7. Indemnity</h2>
            <p>
              You agree to indemnify and hold Shoonya harmless against costs,
              claims, losses, or damages (including legal fees) arising from
              misuse of this website or breach of these Terms.
            </p>
          </div>

          <div>
            <h2>8. Third-Party Links</h2>
            <p>
              This website may contain third-party links. Shoonya does not
              control and is not responsible for their content, security, or
              privacy practices. Access is at your own risk.
            </p>
          </div>

          <div>
            <h2>9. Disclaimer of Liability</h2>
            <p>
              This website is provided free of charge without warranties unless
              expressly stated. Shoonya is not liable for loss or damage arising
              from website use, except where liability cannot be excluded under law.
            </p>
          </div>

          <div>
            <h2>10. Changes to Terms</h2>
            <p>
              Shoonya may amend these Terms from time to time. Continued use
              after updates constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2>11. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Courts of Jammu
              &amp; Kashmir / Union Territory of Jammu &amp; Kashmir shall have
              exclusive jurisdiction over related disputes.
            </p>
          </div>

          <div>
            <h2>Contact Information</h2>
            <p>Shoonya Insurance Brokers Private Limited</p>
            <p>7/9 Trikuta Nagar, Jammu, J&amp;K - 180012, India</p>
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
