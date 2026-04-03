import React, {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Shield,
  FileCheck,
  HeartHandshake,
  Users,
  Building2,
  Factory,
  Landmark,
  Quote,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";
import { FloatingCTAs } from "./FloatingCTAs";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { font } from "../lib/typography";

const HomeTransitionAnimation = lazy(() => import("./HomeTransitionAnimation"));

export function HomePage() {
  const animationSectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadAnimation, setShouldLoadAnimation] = useState(false);

  useEffect(() => {
    const section = animationSectionRef.current;
    if (!section || shouldLoadAnimation) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadAnimation(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadAnimation]);

  return (
    <div className="min-h-screen bg-white page-transition">
      <Header currentPage="home" />
      <FloatingCTAs />

      {/* Hero */}
      <Hero />
      

      

      {/* ================= About Shoonya ================= */}
      <AboutSection />


      {/* ================= What We Do ================= */}
      <section
        ref={animationSectionRef}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-2xl">What We Do</h2>
          <p className={`mt-4 ${font("bodyMuted")}`}>
            Shoonya is an insurance broker in India focused on business insurance,
            cyber insurance, liability coverage, and dependable claims support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">
          <Feature
            icon={<Shield />}
            title="Insurance Audit"
            text="We review your existing coverage in detail, identify gaps or overlaps, and assess whether it protects you against real-world risks — not just on paper."
          />
          <Feature
            icon={<FileCheck />}
            title="Tailor-Made Policies"
            text="Coverage designed around your life stage, personal responsibilities, and business realities. No templates. No assumptions."
          />
          <Feature
            icon={<HeartHandshake />}
            title="Claim Support"
            text="When something goes wrong, clarity matters most. Calm, human guidance through the claims process."
          />
        </div>
      </section>


      {/* ================= Insurance Solutions ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl">Insurance Solutions We Offer</h2>
          <p className={`mt-4 ${font("bodyMuted")}`}>
            Coverage across individual, business, industrial, and specialized needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4 mb-14 text-justify">
          <p className={font("bodyMuted")}>
            From risk assessment to claims resolution, we design protection, not just policies.
            We deliver tailor-made insurance solutions across individual, business, industrial,
            and specialized segments through structured risk analysis, customized policy
            wordings, and dedicated claims assistance.
          </p>
          <p className={font("bodyMuted")}>
            In today’s dynamic risk environment, we also structure advanced protection programs
            including cyber insurance, data protection insurance, credit insurance, liability
            insurance, marine insurance, customs bond insurance, and customs duty insurance to
            safeguard evolving commercial and trade exposures.
          </p>
          <p className={font("bodyMuted")}>
            Popular coverage areas include{" "}
            <a className="text-primary hover:underline" href="/cyber-insurance">
              cyber insurance for companies
            </a>
            ,{" "}
            <a className="text-primary hover:underline" href="/liability-insurance">
              liability insurance for businesses and startups
            </a>
            ,{" "}
            <a className="text-primary hover:underline" href="/group-health-insurance">
              group health insurance for teams
            </a>
            ,{" "}
            <a className="text-primary hover:underline" href="/industrial-property-insurance">
              industrial property insurance
            </a>
            , and{" "}
            <a className="text-primary hover:underline" href="/marine-cargo-insurance">
              marine cargo insurance
            </a>
            .
          </p>
          <p className={font("bodyMuted")}>
            For deeper guidance, browse our{" "}
            <a className="text-primary hover:underline" href="/articles">
              insurance articles and risk insights
            </a>
            {" "}covering cyber risk, underwriting trends, and changing business exposures in India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Solution
            icon={<Users />}
            label="Individual Insurance"
            text="Comprehensive protection for health, home, travel, and personal assets, designed around your individual risk profile and long-term financial security."
          />
          <Solution
            icon={<Building2 />}
            label="Business Insurance"
            text="Strategic risk transfer solutions for SMEs and corporates, covering property, business interruption, liability exposures, cyber and data risks, trade credit, marine transit, and customs-related obligations."
          />
          <Solution
            icon={<Factory />}
            label="Industrial Insurance"
            text="Risk-engineered programs for manufacturing, infrastructure, logistics, and large-scale operations, addressing property damage, machinery breakdown, marine cargo, customs-bonded exposures, credit risks, and complex liability frameworks."
          />
          <Solution
            icon={<Landmark />}
            label="Specialized Insurance"
            text="Bespoke structures for niche industries and complex environments, including professional indemnity, directors and officers liability, cyber liability, customs duty insurance, performance bonds, and trade-risk solutions."
          />
        </div>
      </section>


      {/* ================= Our Values ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">
          <ValueCard
            title="Our Purpose"
            highlight="Guided by perspective. Driven by responsibility."
            paragraphs={[
              "Our purpose is to help people make confident, informed decisions about protection.",
              "We believe clarity, context, and long-term thinking matter more than quick outcomes.",
            ]}
          />

          <ValueCard
            title="Our Culture"
            highlight="Built on trust, performance, and respect."
            paragraphs={[
              "We believe people do their best work when they feel trusted, supported, and valued.",
              "Our culture encourages independent thinking, responsible action, and continuous growth.",
            ]}
          />

          <ValueCard
            title="Our Inclusion & Belonging"
            highlight="Belonging is not a policy. It’s a promise."
            paragraphs={[
              "We value the diverse backgrounds, experiences, and perspectives our colleagues bring.",
              "By fostering true belonging, we build a stronger, more resilient organization.",
            ]}
          />
        </div>
      </section>

      {/* ================= Transition Animation ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-2xl">Insurance Made Simple</h2>
          <p className={`max-w-2xl mx-auto ${font("bodyMuted")}`}>
            Real people when you need them.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-white sm:aspect-[16/9]">
            {shouldLoadAnimation ? (
              <Suspense
                fallback={
                  <img
                    src="/videos/Animation1.svg"
                    alt="Illustrated transition showing insurance made simple"
                    className="h-full w-full scale-[1.2] object-contain sm:scale-[1.02]"
                  />
                }
              >
                <HomeTransitionAnimation />
              </Suspense>
            ) : (
              <img
                src="/videos/Animation1.svg"
                alt="Illustrated transition showing insurance made simple"
                className="h-full w-full scale-[1.2] object-contain sm:scale-[1.02]"
              />
            )}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-10 w-20 bg-white md:h-24 md:w-44"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-12 w-24 bg-gradient-to-tl from-white via-white to-transparent md:h-28 md:w-56"
            />
          </div>
        </div>
      </section>


      {/* ================= Testimonials ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-2xl">What Our Clients Say</h2>
          <p className={`mt-4 ${font("bodyMuted")}`}>
            Trusted by individuals and businesses who value clarity and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <Testimonial
            text="Shoonya helped us uncover gaps we didn’t even know existed. Their claim support was calm, clear, and human."
            author="Manufacturing Business Owner"
          />
          <Testimonial
            text="No pressure, no jargon. Just honest guidance that actually made sense for our family."
            author="Individual Policyholder"
          />
          <Testimonial
            text="Their consultative approach saved us money and future headaches. Rare in this industry."
            author="SME Founder"
          />
        </div>
      </section>


      {/* ================= Final CTA ================= */}
      <section id="final-cta" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl">Let Us Talk About Your Coverage</h2>
          <p className={`${font("heroSupport")} text-grey-600`}>
            Real humans. Real care. Experts who respect your time and guide you to the right protection.
          </p>
          <CTAButtons variant="large" className="justify-center" />
        </div>
      </section>

      <div id="footer-cta-stop" className="h-32 md:h-0" />

      <Footer />
    </div>
  );
}

/* ================= Helpers ================= */

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-grey-200" />
    </div>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="space-y-4 text-left">
      <div className="text-primary">{icon}</div>
      <h3 className="text-xl">{title}</h3>
      <p className={`${font("bodyMuted")} text-justify`}>{text}</p>
    </div>
  );
}

function Solution({ icon, label, text }: any) {
  return (
    <div className="h-full border border-grey-200 rounded-xl bg-grey-50 p-6 space-y-4 text-left">
      <div className="text-primary">{icon}</div>
      <h3 className="text-lg hover:text-primary transition-colors cursor-pointer">{label}</h3>
      <p className={font("bodyMuted")}>{text}</p>
    </div>
  );
}

function ValueCard({ title, highlight, paragraphs }: any) {
  return (
    <div className="border border-grey-200 rounded-xl p-8 bg-white space-y-5">
      <h3 className="text-xl">{title}</h3>
      <p className={`${font("body")} font-semibold text-grey-800`}>{highlight}</p>
      {paragraphs.map((p: string, i: number) => (
        <p key={i} className={`${font("bodyMuted")} text-justify`}>
          {p}
        </p>
      ))}
    </div>
  );
}

function Testimonial({ text, author }: any) {
  return (
    <div className="border border-grey-200 rounded-xl p-6 bg-white space-y-4">
      <Quote className="text-primary opacity-30" />
      <p className={`${font("body")} text-grey-700 italic`}>“{text}”</p>
      <p className="text-xs text-grey-500 font-medium">{author}</p>
    </div>
  );
}
