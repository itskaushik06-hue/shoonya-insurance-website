import React from "react";

export function Hero() {
  return (
    <section
      id="hero"
      className="
        w-full
        bg-white
        flex
        flex-col
        items-center
        pt-16
        pb-20
        md:min-h-screen
        md:pt-20
      "
    >
      {/* IMAGE */}
      <div className="w-full flex justify-center">
        <img
          src="/images/hero.png"
          alt="Shoonya Insurance Brokers"
          className="
            w-[260px]
            sm:w-[300px]
            md:w-[560px]
            h-auto
            object-contain
          "
        />
      </div>

      {/* TEXT */}
      <div
        className="
          mt-8
          md:-mt-28
          px-6
          text-center
          max-w-xl
          md:max-w-2xl
        "
      >
        {/* Descriptor */}
        <p className="text-xs md:text-sm tracking-wide text-grey-500">
          Claim Assistance · Customised Insurance · A Safer and Greener Future
        </p>

        {/* Headline – SAME SCALE AS OTHER h2s */}
        <h1
          className="
            mt-4
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-semibold
            text-grey-700
          "
        >
          Let’s start with a conversation
        </h1>

        {/* Supporting copy */}
        <p className="mt-3 text-sm sm:text-base text-grey-600 leading-relaxed">
          No pressure. No sales calls. Just humans who care.
        </p>
      </div>
    </section>
  );
}
