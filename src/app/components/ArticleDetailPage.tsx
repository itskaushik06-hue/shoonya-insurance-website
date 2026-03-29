import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButtons } from "./CTAButtons";
import { articles } from "../../data/articles";
import { font } from "../lib/typography";
import { SEO } from "./SEO";
import {
  buildPageUrl,
  clampDescription,
  SITE_NAME,
  SITE_URL,
} from "../lib/seo";

export function ArticleDetailPage() {
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, "");
  const hash = window.location.hash.replace("#", "");
  const params = new URLSearchParams(window.location.search);
  const slug = pathname.startsWith("articles/")
    ? pathname.replace("articles/", "")
    : hash.startsWith("article/")
    ? hash.replace("article/", "")
    : params.get("article") || "";
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
        <SEO
          title={`Article Not Found | ${SITE_NAME}`}
          description="The requested Shoonya article could not be found."
          canonical={buildPageUrl("articles")}
          robots="noindex, nofollow"
        />
        <Header />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-grey-800 mb-2">Article Not Found</h1>
            <p className="text-grey-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <a href="/articles" className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90">
              View All Articles
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug);
  const articleUrl = buildPageUrl(undefined, article.slug);
  const articleDescription = clampDescription(
    article.metaDescription || article.description,
  );
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: articleDescription,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
    mainEntityOfPage: articleUrl,
    keywords: article.keywords.join(", "),
  };

  return (
    <div className="bg-white page-transition">
      <SEO
        title={article.metaTitle || `${article.title} | ${SITE_NAME}`}
        description={articleDescription}
        canonical={articleUrl}
        keywords={article.keywords}
        ogType="article"
        ogImage={`${SITE_URL}${article.image}`}
        structuredData={articleSchema}
      />
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
              alt={article.imageAlt}
              className="w-full h-[260px] md:h-[320px] object-cover"
            />
          </div>

          {/* Meta */}
          <div className="text-sm text-grey-500 uppercase tracking-wide mb-3">
            {article.category} · {article.date} · {article.readTime}
          </div>

          {/* Title - SEO Optimized */}
          <h1 className="text-3xl md:text-4xl leading-tight mb-4 font-bold text-grey-900">
            {article.title}
          </h1>

          {/* Description - SEO Meta Description */}
          <p className="text-lg text-grey-600 leading-relaxed font-medium">
            {article.description}
          </p>

          {article.relatedLinks?.length ? (
            <div className="mt-6 rounded-2xl border border-grey-200 bg-grey-50 p-5">
              <p className="text-sm font-semibold text-grey-800 mb-3">
                Relevant pages
              </p>
              <div className="flex flex-wrap gap-3">
                {article.relatedLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
          
          {/* CTA to Related Service */}
          {article.category === "Cyber Insurance" && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-primary rounded">
              <p className="text-sm text-grey-700">
                <strong>Interested in cyber insurance?</strong> <a href="/cyber-insurance" className="text-primary hover:underline">Learn about our cyber insurance solutions</a> and get expert guidance tailored to your business.
              </p>
            </div>
          )}
          {article.category === "Liability Insurance" && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-primary rounded">
              <p className="text-sm text-grey-700">
                <strong>Need liability coverage?</strong> <a href="/liability-insurance" className="text-primary hover:underline">Explore our liability insurance options</a> designed for your business.
              </p>
            </div>
          )}
          {article.category === "Health Insurance" && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-primary rounded">
              <p className="text-sm text-grey-700">
                <strong>Looking for health coverage?</strong> <a href="/health-insurance" className="text-primary hover:underline">Check our health insurance plans</a> with comprehensive benefits.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ================= BODY ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-8 text-grey-700 text-lg leading-relaxed">

          {article.sections?.length
            ? article.sections.map((section, index) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-grey-900">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph, paragraphIndex) => {
                    if (index === 0 && paragraphIndex === 0) {
                      return (
                        <p key={paragraph}>
                          <span className="text-4xl font-semibold float-left mr-2 leading-none">
                            {paragraph.charAt(0)}
                          </span>
                          {paragraph.slice(1)}
                        </p>
                      );
                    }

                    return <p key={paragraph}>{paragraph}</p>;
                  })}

                  {section.bullets?.length ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))
            : article.content.map((paragraph, index) => {
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
                  href={`/articles/${item.slug}`}
                  className="w-full max-w-[340px]"
                >
                <div className="bg-white border border-grey-200 rounded-2xl overflow-hidden hover:shadow-md transition">

                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
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
