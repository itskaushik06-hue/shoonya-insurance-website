import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";
import { articles } from "../../data/articles";

export function ArticleDetailPage() {
  const hash = window.location.hash.replace("#", "");
  const slug = hash.replace("article/", "");
  const article = articles.find((a) => a.slug === slug);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / height) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-grey-600">Article not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug);

  return (
    <div className="bg-white page-transition">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-grey-200 z-50">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="px-6 pt-6 pb-12">
        <div className="max-w-4xl mx-auto">

          {/* Image capped height */}
          <div className="rounded-2xl overflow-hidden mb-6">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[260px] md:h-[320px] object-cover"
            />
          </div>

          {/* Meta */}
          <div className="text-sm text-grey-500 uppercase tracking-wide mb-3">
            {article.category} · {article.date} · {article.readTime}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl leading-tight mb-4">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-grey-600 leading-relaxed">
            {article.description}
          </p>

        </div>
      </section>

      {/* ================= BODY ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-8 text-grey-700 text-lg leading-relaxed">

          {article.content.map((paragraph, index) => {

            // First paragraph drop cap
            if (index === 0) {
              return (
                <p key={index}>
                  <span className="text-4xl font-semibold float-left mr-2 leading-none">
                    {paragraph.charAt(0)}
                  </span>
                  {paragraph.slice(1)}
                </p>
              );
            }

            return <p key={index}>{paragraph}</p>;
          })}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto border-t border-grey-200 pt-16">

          <div className="bg-grey-50 rounded-2xl p-10 text-center space-y-6">

            <h3 className="text-2xl">
              How does this affect your coverage strategy?
            </h3>

            <p className="text-grey-600 max-w-xl mx-auto">
              Insurance decisions are evolving. If you're evaluating risk exposure,
              policy structure, or pricing implications, our team is happy to help.
            </p>

            <CTAButtons variant="large" className="justify-center" />

          </div>

        </div>
      </section>

      {/* ================= RELATED ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          <h3 className="text-2xl mb-10 text-center">
            Continue Reading
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">

            {related.map((item) => (
              <a
                key={item.slug}
                href={`#article/${item.slug}`}
                className="w-full max-w-[340px]"
              >
                <div className="bg-white border border-grey-200 rounded-2xl overflow-hidden hover:shadow-md transition">

                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs text-grey-500 uppercase tracking-wide">
                      {item.category}
                    </p>

                    <h4 className="text-lg leading-snug hover:text-primary transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-sm text-grey-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </a>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
