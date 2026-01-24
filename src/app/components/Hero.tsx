import React from "react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/shoonya-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-5xl text-center space-y-8 animate-heroFade">
          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
            Insurance that protects today  
            <br />
            and gives back to tomorrow.
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            For every insurance we place, we contribute to planting trees.
            Because real protection goes beyond policies, it extends to
            the world we all share.
          </p>
        </div>
      </div>
    </section>
  );
}
