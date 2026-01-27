function HeroMobile() {
  return (
    <section
      id="hero"
      className="
        md:hidden
        h-screen
        w-full
        bg-white
        flex
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >
      <img
        src="/images/hero.png"
        alt="Shoonya Insurance Brokers"
        className="w-[260px] h-auto mb-8"
      />

      <p className="text-xs tracking-wide text-grey-500 mb-3">
        Claim Assistance · Customised Insurance · A Safer and Greener Future
      </p>

      <h1 className="text-2xl font-semibold text-grey-900">
        Let’s start with a conversation
      </h1>

      <p className="mt-3 text-sm text-grey-600 leading-relaxed max-w-sm">
        No pressure. No sales calls. Just humans who care.
      </p>
    </section>
  );
}
