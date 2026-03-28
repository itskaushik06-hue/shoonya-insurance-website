import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { articles } from "../../data/articles";
import { font } from "../lib/typography";
import { sectionHero } from "../lib/sectionHero";

/* ========================== */
/* ========= TUNING ========= */
/* ========================== */

/* Card sizing control */
const CARD_WIDTH = "w-full max-w-[380px]";
const CARD_HEIGHT = "h-[480px]";
const IMAGE_HEIGHT = "h-[220px]";

/* ========================== */

export function ArticlesPage() {
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

          {/* Divider (desktop only) */}
          <div className={sectionHero.divider}>
            <div className="h-full w-px bg-grey-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
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

            {/* RIGHT SIDE */}
            <div className={sectionHero.full.rightColumn}>
              <h1 className={sectionHero.title}>
                Articles
              </h1>

              <p className={sectionHero.kicker}>
                Insights on business insurance, cyber risk, liability, and coverage decisions in India
              </p>

              <p className={`max-w-xl ${font("bodyMuted")}`}>
                Explore practical reads on{" "}
                <a className="text-primary hover:underline" href="/cyber-insurance">
                  cyber insurance
                </a>
                ,{" "}
                <a className="text-primary hover:underline" href="/liability-insurance">
                  liability insurance
                </a>
                , and broader risk trends shaping Indian businesses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="px-6 py-20">
        <div className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center ${font("contentScale")}`}>

          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/articles/${article.slug}`}
              className={CARD_WIDTH}
            >
              <div
                className={`
                  ${CARD_HEIGHT}
                  flex flex-col
                  bg-white
                  border border-grey-200
                  rounded-2xl
                  overflow-hidden
                  transition
                  hover:shadow-md
                `}
              >
                {/* IMAGE */}
                <div className={`${IMAGE_HEIGHT} overflow-hidden`}>
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6 space-y-4">

                  <p className="text-xs text-grey-500 uppercase tracking-wide">
                    {article.category}
                  </p>

                  <h3 className={`${font("sectionHeading")} hover:text-primary transition-colors`}>
                    {article.title}
                  </h3>

                  <p className={`${font("bodyMuted")} flex-1`}>
                    {article.description}
                  </p>

                  <div className="text-xs text-grey-500 pt-2">
                    {article.date} · {article.readTime}
                  </div>

                </div>
              </div>
            </a>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}
