import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { articles } from "../../data/articles";

/* ========================== */
/* ========= TUNING ========= */
/* ========================== */

/* HERO HEIGHT */
const HERO_HEIGHT = "min-h-screen";

/* Vertical spacing */
const HERO_TOP_PADDING = "pt-5 md:pt-5";     // 🔥 move entire hero up/down
const HERO_BOTTOM_PADDING = "pb-16 md:pb-24";

/* Logo */
const LOGO_WIDTH_MOBILE = "w-full";
const LOGO_WIDTH_DESKTOP = "w-[360px]";
const LOGO_MAX = "max-w-[520px]";

/* Logo shift (match CSR system) */
const LOGO_SHIFT_MOBILE = "-mt-6";
const LOGO_SHIFT_DESKTOP = "md:-mt-20";

/* Descriptor overlap */
const DESCRIPTOR_OVERLAP = "-mt-20";

/* Card sizing control */
const CARD_WIDTH = "w-full max-w-[380px]"; // 🔥 adjust width
const CARD_HEIGHT = "h-[480px]";           // 🔥 adjust full card height
const IMAGE_HEIGHT = "h-[220px]";          // 🔥 adjust image height

/* ========================== */

export function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className={`
          ${HERO_HEIGHT}
          flex
          items-center
          justify-center
          px-6
          ${HERO_TOP_PADDING}
          ${HERO_BOTTOM_PADDING}
        `}
      >
        <div className="relative w-full max-w-7xl mx-auto">

          {/* Divider (desktop only) */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2">
            <div className="h-full w-px bg-grey-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div
              className={`
                flex flex-col items-center text-center
                ${LOGO_SHIFT_MOBILE}
                ${LOGO_SHIFT_DESKTOP}
              `}
            >
              <img
                src="/images/sectionhero.png"
                alt="Shoonya Insurance Brokers"
                className={`
                  ${LOGO_WIDTH_MOBILE}
                  ${LOGO_WIDTH_DESKTOP}
                  ${LOGO_MAX}
                  h-auto
                  object-contain
                `}
              />

              <div className={`${DESCRIPTOR_OVERLAP} space-y-1`}>
                <p className="text-sm text-grey-600 tracking-wide">
                  Claim Assistance · Customised Insurance
                </p>
                <p className="text-sm text-grey-600 tracking-wide">
                  A Safer and Greener Future
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center text-center space-y-6">
              <h1 className="text-5xl">
                Articles
              </h1>

              <p className="text-sm tracking-wide text-grey-600 uppercase">
                Insights and Analysis on Insurance Trends
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">

          {articles.map((article) => (
            <a
              key={article.slug}
              href={`#article/${article.slug}`}
              className={`${CARD_WIDTH}`}
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
                    alt={article.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-100"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6 space-y-4">

                  <p className="text-xs text-grey-500 uppercase tracking-wide">
                    {article.category}
                  </p>

                  <h3 className="text-xl leading-snug hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-grey-600 leading-relaxed flex-1">
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
