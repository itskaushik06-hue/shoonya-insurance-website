import React from "react";
import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG_IMAGE,
  PageSeo,
  SITE_NAME,
  SITE_URL,
} from "../lib/seo";

type SEOProps = PageSeo;

export function SEO({
  title,
  description,
  canonical,
  keywords,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  robots = "index, follow",
  structuredData,
}: SEOProps) {
  const schemas = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content="Shoonya Insurance Brokers Private Limited" />
      <meta name="theme-color" content="#1e3a8a" />
      {keywords?.length ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:domain" content={SITE_URL.replace("https://", "")} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
