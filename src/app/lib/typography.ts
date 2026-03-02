const FONT_TOKENS = {
  body: "text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] leading-relaxed",
  bodyMuted:
    "text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] leading-relaxed text-grey-600",
  sectionTitle: "text-[clamp(1.35rem,1.15rem+0.9vw,1.7rem)] leading-tight",
  sectionHeading: "text-[clamp(1.15rem,1.02rem+0.55vw,1.35rem)] leading-snug",
  cardHeading: "text-[clamp(1.05rem,0.96rem+0.35vw,1.2rem)] leading-snug",
  contentScale:
    "[&_h2]:text-[clamp(1.35rem,1.15rem+0.9vw,1.7rem)] [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:text-grey-900 [&_h3]:text-[clamp(1.15rem,1.02rem+0.55vw,1.35rem)] [&_h3]:leading-snug [&_h3]:font-semibold [&_h4]:text-[clamp(1.05rem,0.96rem+0.35vw,1.2rem)] [&_h4]:leading-snug [&_h4]:font-semibold [&_p]:text-[clamp(0.95rem,0.9rem+0.2vw,1rem)] [&_p]:leading-relaxed",
  heroTitle: "text-[clamp(2rem,1.6rem+2vw,2.4rem)] leading-tight",
  heroKicker:
    "text-[clamp(0.75rem,0.7rem+0.3vw,0.875rem)] tracking-wide uppercase",
  heroSupport: "text-[clamp(0.95rem,0.85rem+0.45vw,1rem)] leading-relaxed",
  heroDescriptor:
    "text-[clamp(0.75rem,0.7rem+0.3vw,1rem)] tracking-wide leading-snug",
} as const;

export type FontVariant = keyof typeof FONT_TOKENS;

export function font(variant: FontVariant, extra = "") {
  return extra ? `${FONT_TOKENS[variant]} ${extra}` : FONT_TOKENS[variant];
}
