import React from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";

/**
 * ===================== TUNING PARAMETERS =====================
 * EXACTLY aligned with Claims / Risk
 */
const SECTION_Y = "py-20";
const HERO_MIN_H = "min-h-[85vh]";
const HERO_TITLE = "text-5xl";
const HERO_SUB = "text-1xl";
const HERO_SUPPORT = "text-base";

/* ================= POLICY ITEM ================= */

function PolicyItem({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        group
        block
        space-y-2
        transition
      "
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="group-hover:text-primary transition-colors">
          {name}
        </h4>

        <ArrowRight className="w-4 h-4 text-grey-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>

      <p className="text-sm text-grey-600 leading-relaxed max-w-md">
        {description}
      </p>
    </a>
  );
}

/* ================= PAGE ================= */

export function InsurancePage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="solutions" />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${HERO_MIN_H}
          flex
          items-center
          justify-center
          px-6
          ${SECTION_Y}
        `}
      >
        <div className="text-center max-w-3xl space-y-5">
          <h1 className={HERO_TITLE}>Insurance</h1>

          <p
            className={`
              ${HERO_SUB}
              tracking-wide
              text-grey-600
              uppercase
            `}
          >
            Guidance · Coverage · Security
          </p>

          <div className="pt-6 flex justify-center">
            <CTAButtons variant="large" className="justify-center" />
          </div>

          <p
            className={`
              ${HERO_SUPPORT}
              text-grey-600
              max-w-3xl
              mx-auto
              pt-2
            `}
          >
            Insurance tailored to your business.
            <br />
            Just the right coverage at fair value, without over-complication.
          </p>

          

          
        </div>
      </section>

      <Divider />

      {/* ================= INDIVIDUAL ================= */}
      <Category
        title="Individual Insurance"
        description="Protect yourself and your loved ones with comprehensive coverage tailored to your life stage and needs."
      >
        <Grid>
          <PolicyItem name="Health Insurance" description="Comprehensive medical coverage for you and your family, including hospitalization, surgeries, and preventive care." href="#health-insurance" />
          <PolicyItem name="Group Health Insurance" description="Affordable health coverage for your employees, ensuring their well-being and your peace of mind." href="#group-health-insurance" />
          <PolicyItem name="Personal Accident" description="Financial protection against accidental injuries, disability, and death for you and your family." href="#personal-accident" />
          <PolicyItem name="Travel Insurance" description="Coverage for medical emergencies, trip cancellations, lost baggage, and more while traveling." href="#travel-insurance" />
          <PolicyItem name="Motor Insurance" description="Comprehensive or third-party coverage for your car, bike, or commercial vehicle." href="#motor-insurance" />
          <PolicyItem name="Home Insurance" description="Protect your home and belongings against fire, theft, natural disasters, and more." href="#home-insurance" />
        </Grid>
      </Category>

      <Divider />

      {/* ================= BUSINESS ================= */}
      <Category
        title="Business & Office Insurance"
        description="Safeguard your business operations, property, and people with tailored commercial insurance solutions."
      >
        <Grid>
          <PolicyItem name="Office Package Policy" description="All-in-one coverage for your office premises, equipment, and business operations." href="#office-package" />
          <PolicyItem name="Shopkeeper Insurance" description="Comprehensive protection for retail businesses against fire, theft, and liability." href="#shopkeeper-insurance" />
          <PolicyItem name="Property Insurance" description="Coverage for commercial properties against fire, natural disasters, and structural damage." href="#property-insurance" />
          <PolicyItem name="Fire Insurance" description="Protect your business assets and inventory from fire-related losses." href="#fire-insurance" />
          <PolicyItem name="Burglary Insurance" description="Financial protection against theft, break-ins, and burglary-related damages." href="#burglary-insurance" />
          <PolicyItem name="Workmen Compensation" description="Mandatory coverage for employee injuries and accidents occurring during work." href="#workmen-compensation" />
          <PolicyItem name="Employee Fidelity" description="Protection against financial losses due to employee fraud or dishonesty." href="#employee-fidelity" />
          <PolicyItem name="Professional Indemnity" description="Coverage for legal liabilities arising from professional services and advice." href="#professional-indemnity" />
          <PolicyItem name="Liability Insurance" description="Protection against third-party claims for bodily injury or property damage." href="#liability-insurance" />
        </Grid>
      </Category>

      <Divider />

      {/* ================= INDUSTRIAL ================= */}
      <Category
        title="Industrial & Project Insurance"
        description="Specialized coverage for manufacturing, construction, and large-scale industrial operations."
      >
        <Grid>
          <PolicyItem name="Engineering Insurance" description="Comprehensive coverage for machinery, equipment, and engineering projects." href="#engineering-insurance" />
          <PolicyItem name="Machinery Breakdown" description="Protection against unexpected machinery failures and repair costs." href="#machinery-breakdown" />
          <PolicyItem name="Contractors All Risk" description="Complete coverage for construction projects from start to finish." href="#contractors-all-risk" />
          <PolicyItem name="Contractors Plant & Machinery" description="Insurance for construction equipment, tools, and machinery." href="#contractors-plant-machinery" />
          <PolicyItem name="Erection All Risk" description="Coverage for installation and commissioning of plant and machinery." href="#erection-all-risk" />
          <PolicyItem name="India All Risk" description="Comprehensive all-risk coverage for industrial installations and projects." href="#india-all-risk" />
          <PolicyItem name="Industrial Property Insurance" description="Protection for factories, warehouses, and industrial facilities." href="#industrial-property" />
        </Grid>
      </Category>

      <Divider />

      {/* ================= SPECIALISED ================= */}
      <Category
        title="Specialized & Financial Insurance"
        description="Unique insurance solutions for modern business risks and financial protection."
      >
        <Grid>
          <PolicyItem name="Marine Insurance" description="Coverage for goods in transit by sea, air, or land, including cargo and hull insurance." href="#marine-insurance" />
          <PolicyItem name="Cyber Insurance" description="Protection against data breaches, cyber attacks, and digital security incidents." href="#cyber-insurance" />
          <PolicyItem name="Credit Insurance" description="Safeguard your business against non-payment of trade debts and credit risks." href="#credit-insurance" />
          <PolicyItem name="Money Insurance" description="Coverage for cash in transit, safe, and counter against theft or robbery." href="#money-insurance" />
        </Grid>
      </Category>

      <Footer />
    </div>
  );
}

/* ================= HELPERS ================= */

function Category({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`max-w-7xl mx-auto px-6 ${SECTION_Y}`}>
      <div className="text-center mb-14">
        <h2>{title}</h2>
        <p className="text-grey-600 mt-3 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-x-12
        gap-y-10
        justify-items-center
      "
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-grey-200" />
    </div>
  );
}
