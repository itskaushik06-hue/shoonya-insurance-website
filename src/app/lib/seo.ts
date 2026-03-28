export const SITE_NAME = "Shoonya Insurance Brokers";
export const SITE_URL = "https://shoonya.care";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export type PageSeo = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  ogType?: "website" | "article";
  ogImage?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.png`,
  image: DEFAULT_OG_IMAGE,
  areaServed: "India",
  description:
    "Shoonya Insurance Brokers helps individuals, SMEs, startups, and industrial businesses with insurance advisory, tailored coverage, and claims support in India.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-IN",
};

const routeNames: Record<string, string> = {
  claims: "Claims Support",
  solutions: "Insurance and Risk Solutions",
  "solutions/risk": "Risk Advisory",
  "solutions/insurance": "Insurance Solutions",
  "cyber-insurance": "Cyber Insurance",
  "health-insurance": "Health Insurance",
  "group-health-insurance": "Group Health Insurance",
  "motor-insurance": "Motor Insurance",
  "personal-accident-insurance": "Personal Accident Insurance",
  "travel-insurance": "Travel Insurance",
  "home-insurance": "Home Insurance",
  "office-package-policy": "Office Package Policy",
  "property-insurance": "Property Insurance",
  "shopkeeper-insurance": "Shopkeeper Insurance",
  "liability-insurance": "Liability Insurance",
  "professional-indemnity-insurance": "Professional Indemnity Insurance",
  "employee-fidelity-insurance": "Employee Fidelity Insurance",
  "workmen-compensation-insurance": "Workmen Compensation Insurance",
  "burglary-insurance": "Burglary Insurance",
  "fire-insurance": "Fire Insurance",
  "contractors-all-risk-insurance": "Contractors All Risk Insurance",
  "contractors-plant-machinery-insurance":
    "Contractors Plant and Machinery Insurance",
  "credit-insurance": "Credit Insurance",
  "industrial-all-risk-insurance": "Industrial All Risk Insurance",
  "machinery-breakdown-insurance": "Machinery Breakdown Insurance",
  "engineering-insurance": "Engineering Insurance",
  "money-insurance": "Money Insurance",
  "marine-cargo-insurance": "Marine Cargo Insurance",
  "erection-all-risk-insurance": "Erection All Risk Insurance",
  "india-all-risk-insurance": "India All Risk Insurance",
  "industrial-property-insurance": "Industrial Property Insurance",
  articles: "Insurance Articles",
  csr: "CSR",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms and Conditions",
  disclaimer: "Disclaimer",
  "cookie-policy": "Cookie Policy",
};

const routeSeo: Record<string, Omit<PageSeo, "canonical">> = {
  home: {
    title:
      "Insurance Broker in India for Business, Cyber and Claims Support | Shoonya Insurance Brokers",
    description:
      "Shoonya Insurance Brokers helps businesses and families across India with insurance audits, business insurance, cyber insurance, liability coverage, and dependable claims support.",
    keywords: [
      "insurance broker India",
      "business insurance India",
      "cyber insurance India",
      "liability insurance India",
      "claims support insurance broker",
      "industrial insurance India",
    ],
    structuredData: [organizationSchema, websiteSchema],
  },
  solutions: {
    title: "Risk and Insurance Solutions in India | Shoonya Insurance Brokers",
    description:
      "Explore Shoonya's risk advisory and insurance solutions for individuals, SMEs, startups, and industrial businesses across India.",
    keywords: [
      "insurance solutions India",
      "risk advisory India",
      "business insurance solutions",
      "industrial insurance coverage",
    ],
  },
  "solutions/risk": {
    title: "Risk Advisory Services in India | Shoonya Insurance Brokers",
    description:
      "Understand, assess, and manage business risk with Shoonya's structured risk advisory services for growing companies and complex operations in India.",
    keywords: [
      "risk advisory India",
      "risk assessment services India",
      "business risk management India",
    ],
  },
  "solutions/insurance": {
    title: "Business and Personal Insurance Solutions in India | Shoonya",
    description:
      "Browse Shoonya's insurance solutions across health, liability, cyber, property, marine cargo, engineering, and specialized business coverage in India.",
    keywords: [
      "business insurance India",
      "commercial insurance India",
      "group health insurance India",
      "property insurance India",
    ],
  },
  claims: {
    title: "Claims Support and Insurance Claim Assistance | Shoonya",
    description:
      "Get calm, clear insurance claim assistance from Shoonya, from documentation and escalation support to guidance through the full claims journey.",
    keywords: [
      "insurance claims support India",
      "claim assistance insurance broker",
      "insurance claims advisory",
    ],
  },
  articles: {
    title: "Insurance Articles, Risk Insights and Coverage Guides | Shoonya",
    description:
      "Read Shoonya's insurance articles on cyber insurance, liability, group health, climate risk, underwriting trends, and business coverage decisions in India.",
    keywords: [
      "insurance articles India",
      "cyber insurance guide India",
      "business insurance insights",
      "risk management articles",
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Shoonya Insurance Articles",
      url: buildPageUrl("articles"),
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
    },
  },
};

export function buildPageUrl(route?: string, articleSlug?: string) {
  if (articleSlug) {
    return `${SITE_URL}/articles/${encodeURIComponent(articleSlug)}`;
  }

  if (!route || route === "home") {
    return `${SITE_URL}/`;
  }

  const routePath = route
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${SITE_URL}/${routePath}`;
}

export function clampDescription(text: string, maxLength = 160) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trim()}…`;
}

export function getPageSeo(route: string): PageSeo {
  const normalizedRoute = route || "home";
  const canonical = buildPageUrl(normalizedRoute);
  const customSeo = routeSeo[normalizedRoute];

  if (customSeo) {
    return {
      ...customSeo,
      canonical,
    };
  }

  const routeName = routeNames[normalizedRoute];
  if (routeName) {
    const description = clampDescription(
      `Explore ${routeName.toLowerCase()} options in India with Shoonya Insurance Brokers, including tailored coverage guidance, policy structuring, and ongoing claims support for businesses and individuals.`,
    );

    return {
      title: `${routeName} in India | Shoonya Insurance Brokers`,
      description,
      canonical,
      keywords: [
        `${routeName.toLowerCase()} India`,
        `${routeName.toLowerCase()} broker`,
        "insurance broker India",
        "claims support",
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: routeName,
        serviceType: routeName,
        areaServed: "India",
        provider: {
          "@type": "InsuranceAgency",
          name: SITE_NAME,
          url: `${SITE_URL}/`,
        },
        url: canonical,
      },
    };
  }

  return {
    ...routeSeo.home,
    canonical: `${SITE_URL}/`,
  };
}
