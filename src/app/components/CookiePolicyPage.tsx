import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { font } from "../lib/typography";
import { sectionHero } from "../lib/sectionHero";

/* ===== HERO SYSTEM (Aligned Across Site) ===== */

export function CookiePolicyPage() {
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
                Cookie Notice
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
            <h2>1. What Are Cookies?</h2>
            <p>
              Shoonya uses cookies and related tracking technologies including
              web beacons, tracking pixels, and log files to distinguish users,
              improve functionality, and enhance service experience.
            </p>
            <p>
              Cookies are small pieces of information exchanged between your
              browser and a website. They do not read data from your hard drive.
            </p>
          </div>

          <div>
            <h2>2. Types of Cookies</h2>
            <p>
              <strong>Session Cookies:</strong> Temporary cookies deleted when
              the browser closes; used for smooth navigation.
            </p>
            <p>
              <strong>Persistent Cookies:</strong> Stored on your device for
              future visits so the website can recognize your device.
            </p>
            <p>
              <strong>First-Party Cookies:</strong> Set by Shoonya directly.
            </p>
            <p>
              <strong>Third-Party Cookies:</strong> Set by analytics or
              advertising providers.
            </p>
          </div>

          <div>
            <h2>3. How and Why We Use Cookies</h2>
            <p>
              <strong>Strictly Necessary Cookies:</strong> Required for secure
              login and core functionality.
            </p>
            <p>
              <strong>Functionality Cookies:</strong> Remember preferences and
              improve user experience.
            </p>
            <p>
              <strong>Analytics Cookies:</strong> Help us understand usage and
              improve website performance.
            </p>
            <p>
              <strong>Advertising Cookies:</strong> May be used to deliver and
              measure relevant advertising.
            </p>
          </div>

          <div>
            <h2>4. IP Addresses</h2>
            <p>
              We may collect IP addresses to analyze aggregate usage trends and
              support security and analytics.
            </p>
          </div>

          <div>
            <h2>5. How to Manage Cookies</h2>
            <p>
              You can manage Cookie preferences via a “Manage Cookies” link (if
              available) and through browser settings such as Chrome, Safari,
              Edge, and Firefox.
            </p>
            <p>
              Strictly Necessary Cookies cannot be disabled for core website
              functionality. Disabling other cookies may affect performance.
            </p>
          </div>

          <div>
            <h2>6. Third-Party Websites</h2>
            <p>
              Our website may link to third-party websites with separate Cookie
              and Privacy policies. Shoonya is not responsible for their practices.
            </p>
          </div>

          <div>
            <h2>7. Changes to this Cookie Notice</h2>
            <p>
              This Cookie Notice may be updated periodically. The effective date
              shown on this page reflects the latest version.
            </p>
          </div>

          <div>
            <h2>8. Description of Cookies Used</h2>
            <p>
              Details of specific cookies may be available via the “Manage Cookies”
              link in the website footer, where applicable.
            </p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>Shoonya Insurance Brokers Private Limited</p>
            <p>7/9 Trikuta Nagar, Jammu, J&amp;K - 180012, India</p>
            <p>CIN: U66000JK2022PTC014062</p>
            <p>IRDAI License No. 905 (Valid until 17 July 2026)</p>
            <p>Email: shoonyabrokers@gmail.com</p>
            <p>Contact No.: +91 9419286666</p>
            <p className="font-medium text-grey-800">
              Shoonya is a licensed Direct Insurance Broker (Life &amp; General)
              and acts solely as an intermediary between clients and insurers.
            </p>
          </div>

          <div>
            <h2>9. Updates</h2>
            <p>
              Continued use of the website after updates to this notice
              constitutes acceptance of the revised notice.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
