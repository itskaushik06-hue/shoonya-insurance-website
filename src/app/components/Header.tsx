import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");

    if (!hero || !footer) return;

    let heroOut = false;
    let footerIn = false;

    const update = () => {
      setShowLogo(heroOut && !footerIn);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting;
        update();
      },
      { threshold: 0.2 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        footerIn = entry.isIntersecting;
        update();
      },
      { threshold: 0.2 }
    );

    heroObserver.observe(hero);
    footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-300 ${
          showLogo
            ? "bg-white border-b border-grey-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <div className="flex-shrink-0">
              {showLogo && (
                <img
                  src={logo}
                  alt="Shoonya Insurance Brokers"
                  className="h-10 transition-opacity duration-300"
                />
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10 ml-auto">
              <a
                href="#claims"
                className="relative flex items-center text-sm font-medium text-grey-900 hover:text-primary"
              >
                <span className="absolute -left-4 text-primary text-xl">
                  •
                </span>
                Claims
              </a>

              <a
                href="#insurance-solutions"
                className="text-sm font-medium text-grey-700 hover:text-primary"
              >
                Buy Insurance
              </a>

              <a
                href="#hero"
                className="text-sm font-medium text-grey-700 hover:text-primary"
              >
                Home
              </a>
            </nav>

            <MobileMenu currentPage={currentPage} />
          </div>
        </div>
      </div>
    </header>
  );
}
