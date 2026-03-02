import { font } from "./typography";

export const sectionHero = {
  divider: "hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2",
  leftColumn: "flex flex-col items-center text-center",
  logoMobile: "w-full",
  logoMax: "max-w-[520px]",
  descriptorWrap: "-mt-20 space-y-1",
  descriptorText: font("heroDescriptor", "text-grey-600"),
  title: font("heroTitle"),
  kicker: font("heroKicker", "text-grey-600"),
  support: font("heroSupport"),
  full: {
    minHeight: "min-h-[85vh] md:min-h-screen",
    topPadding: "pt-24 md:pt-5",
    bottomPadding: "pb-12 md:pb-24",
    logoDesktop: "w-[360px]",
    logoShiftDesktop: "md:-mt-20",
    rightColumn: "flex flex-col items-center text-center space-y-6 mt-12 md:mt-0",
  },
  compact: {
    minHeight: "min-h-auto md:min-h-[80vh]",
    sectionPadding: "pt-24 pb-16 md:py-20",
    logoDesktop: "w-[340px]",
    logoShiftDesktop: "md:-mt-16",
    rightColumn: "flex flex-col items-center text-center space-y-5",
  },
} as const;
