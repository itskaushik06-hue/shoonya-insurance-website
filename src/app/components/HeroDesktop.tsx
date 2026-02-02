import React from "react";

export function HeroDesktop() {
  return (
    <section
      id="hero-desktop"
      className="
        hidden
        md:flex
        w-full
        min-h-screen
        bg-white
        flex-col
        items-center
        pt-28              /* TOP OFFSET FROM HEADER – KEEP */
      "
    >
      {/* IMAGE */}
      <div
        className="
          w-full
          flex
          justify-center
          -mt-30             /* IMAGE VERTICAL POSITION – KEEP */
        "
      >
        <img
          src="/images/hero.png"
          alt="Shoonya Insurance Brokers"
          className="
            w-[600px]        /* LOGO SIZE – ADJUST ONLY IF NEEDED */
            h-auto
            object-contain
          "
        />
      </div>

      {/* TEXT */}
      <div
        className="
          -mt-40             /* TEXT PULL-UP RELATIVE TO IMAGE – KEEP */
          text-center
          max-5xl          /* MATCHES HOMEPAGE TEXT RAIL */
          px-4            /* SIDE PADDING TO PREVENT OVERFLOW – KEEP */
        "
      >
        {/* Descriptor */}
        <p
          className="
            text-sm           /* MATCHES HOMEPAGE META TEXT */
            tracking-wide
            text-grey-600     /* MATCHES HOMEPAGE BODY COLOR */
            mb-10             /* ↓ REDUCED FROM mb-40 → FIXED EXCESS GAP */
          "
        >
          Claim Assistance · Customised Insurance · A Safer and Greener Future
        </p>

        {/* Headline */}
        <a href="#final-cta">
          <h1
  className="
    max-w-4xl
    mx-auto
    text-3xl          /* ↓ MAIN FONT SIZE CONTROL */
    lg:text-4xl       /* ↑ SLIGHTLY BIGGER ON LARGE SCREENS */
    leading-tight     /* TIGHTER, MORE PREMIUM */
    hover:text-primary
    transition-colors
    cursor-pointer
    mb-4
  "
>

            Let’s start with a conversation
          </h1>
        </a>

        {/* Supporting copy */}
        <p
          className="
            text-base        /* MATCHES HOMEPAGE BODY SIZE */
            text-grey-600    /* MATCHES HOMEPAGE BODY COLOR */
            leading-relaxed
            max-w-xl         /* SAME AS HOMEPAGE SUPPORTING COPY */
            mx-auto
          "
        >
          No pressure. No sales calls. Just humans who care.
        </p>
      </div>
    </section>
  );
}
