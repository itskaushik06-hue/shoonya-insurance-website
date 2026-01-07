import React from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PolicyCardProps {
  name: string;
  description: string;
  href: string;
}

function PolicyCard({
  name,
  description,
  href,
}: PolicyCardProps) {
  return (
    <a
      href={href}
      className="bg-white border border-grey-200 rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all group"
    >
      <h4 className="mb-2 group-hover:text-primary transition-colors">
        {name}
      </h4>
      <p className="text-sm text-grey-600 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm text-primary font-medium">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
}

export function InsuranceSolutionsPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="insurance-solutions" />

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center space-y-4">
          <h1>Explore Insurance Solutions</h1>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            We don't believe in one-size-fits-all. At Shoonya,
            every policy is thoughtfully selected to match your
            unique needs, whether you're protecting your family,
            business, or industrial operations.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Individual Insurance */}
      <section
        id="individual-insurance"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
      >
        <div className="mb-10">
          <h2 className="mb-4">Individual Insurance</h2>
          <p className="text-grey-600 max-w-3xl">
            Protect yourself and your loved ones with
            comprehensive coverage tailored to your life stage
            and needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PolicyCard
            name="Health Insurance"
            description="Comprehensive medical coverage for you and your family, including hospitalization, surgeries, and preventive care."
            href="#health-insurance"
          />
          <PolicyCard
            name="Group Health Insurance"
            description="Affordable health coverage for your employees, ensuring their well-being and your peace of mind."
            href="#group-health-insurance"
          />
          <PolicyCard
            name="Personal Accident"
            description="Financial protection against accidental injuries, disability, and death for you and your family."
            href="#personal-accident"
          />
          <PolicyCard
            name="Travel Insurance"
            description="Coverage for medical emergencies, trip cancellations, lost baggage, and more while traveling."
            href="#travel-insurance"
          />
          <PolicyCard
            name="Motor Insurance"
            description="Comprehensive or third-party coverage for your car, bike, or commercial vehicle."
            href="#motor-insurance"
          />
          <PolicyCard
            name="Home Insurance"
            description="Protect your home and belongings against fire, theft, natural disasters, and more."
            href="#home-insurance"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Business & Office Insurance */}
      <section
        id="business-insurance"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
      >
        <div className="mb-10">
          <h2 className="mb-4">Business & Office Insurance</h2>
          <p className="text-grey-600 max-w-3xl">
            Safeguard your business operations, property, and
            people with tailored commercial insurance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PolicyCard
            name="Office Package Policy"
            description="All-in-one coverage for your office premises, equipment, and business operations."
            href="#office-package"
          />
          <PolicyCard
            name="Shopkeeper Insurance"
            description="Comprehensive protection for retail businesses against fire, theft, and liability."
            href="#shopkeeper-insurance"
          />
          <PolicyCard
            name="Property Insurance"
            description="Coverage for commercial properties against fire, natural disasters, and structural damage."
            href="#property-insurance"
          />
          <PolicyCard
            name="Fire Insurance"
            description="Protect your business assets and inventory from fire-related losses."
            href="#fire-insurance"
          />
          <PolicyCard
            name="Burglary Insurance"
            description="Financial protection against theft, break-ins, and burglary-related damages."
            href="#burglary-insurance"
          />
          <PolicyCard
            name="Workmen Compensation"
            description="Mandatory coverage for employee injuries and accidents occurring during work."
            href="#workmen-compensation"
          />
          <PolicyCard
            name="Employee Fidelity"
            description="Protection against financial losses due to employee fraud or dishonesty."
            href="#employee-fidelity"
          />
          <PolicyCard
            name="Professional Indemnity"
            description="Coverage for legal liabilities arising from professional services and advice."
            href="#professional-indemnity"
          />
          <PolicyCard
            name="Liability Insurance"
            description="Protection against third-party claims for bodily injury or property damage."
            href="#liability-insurance"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Industrial & Project Insurance */}
      <section
        id="industrial-insurance"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
      >
        <div className="mb-10">
          <h2 className="mb-4">
            Industrial & Project Insurance
          </h2>
          <p className="text-grey-600 max-w-3xl">
            Specialized coverage for manufacturing,
            construction, and large-scale industrial operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PolicyCard
            name="Engineering Insurance"
            description="Comprehensive coverage for machinery, equipment, and engineering projects."
            href="#engineering-insurance"
          />
          <PolicyCard
            name="Machinery Breakdown"
            description="Protection against unexpected machinery failures and repair costs."
            href="#machinery-breakdown"
          />
          <PolicyCard
            name="Contractors All Risk"
            description="Complete coverage for construction projects from start to finish."
            href="#contractors-all-risk"
          />
          <PolicyCard
            name="Contractors Plant & Machinery"
            description="Insurance for construction equipment, tools, and machinery."
            href="#contractors-plant-machinery"
          />
          <PolicyCard
            name="Erection All Risk"
            description="Coverage for installation and commissioning of plant and machinery."
            href="#erection-all-risk"
          />
          <PolicyCard
            name="India All Risk"
            description="Comprehensive all-risk coverage for industrial installations and projects."
            href="#india-all-risk"
          />
          <PolicyCard
            name="Industrial Property Insurance"
            description="Protection for factories, warehouses, and industrial facilities."
            href="#industrial-property"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Specialized & Financial Insurance */}
      <section
        id="specialized-insurance"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
      >
        <div className="mb-10">
          <h2 className="mb-4">
            Specialized & Financial Insurance
          </h2>
          <p className="text-grey-600 max-w-3xl">
            Unique insurance solutions for modern business risks
            and financial protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PolicyCard
            name="Marine Insurance"
            description="Coverage for goods in transit by sea, air, or land, including cargo and hull insurance."
            href="#marine-insurance"
          />
          <PolicyCard
            name="Cyber Insurance"
            description="Protection against data breaches, cyber attacks, and digital security incidents."
            href="#cyber-insurance"
          />
          <PolicyCard
            name="Credit Insurance"
            description="Safeguard your business against non-payment of trade debts and credit risks."
            href="#credit-insurance"
          />
          <PolicyCard
            name="Money Insurance"
            description="Coverage for cash in transit, safe, and counter against theft or robbery."
            href="#money-insurance"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}