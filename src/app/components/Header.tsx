import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  currentPage?: "home" | "solutions" | "claims";
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [showLogo, setShowLogo] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    // 🔑 HERO = first section on the page (works everywhere)
    const hero = document.querySelector("section");
    const footer = document.getElementById("site-footer");

    if (!hero) return;

    let heroVisible = true;
    let footerVisible = false;

    const update = () => {
      // Logo only shows when hero is gone AND footer not visible
      setShowLogo(!heroVisible && !footerVisible);
      setSolid(!heroVisible);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.15 }
    );

    const footerObserver = footer
      ? new IntersectionObserver(
          ([entry]) => {
            footerVisible = entry.isIntersecting;
            update();
          },
          { threshold: 0.1 }
        )
      : null;

    heroObserver.observe(hero);
    if (footer && footerObserver) footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  const base =
    "text-sm font-medium transition-colors duration-200";

  const active = "text-primary";
  const inactive = "text-grey-700 hover:text-primary";

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`
          h-20
          transition-all
          duration-300
          ${
            solid
              ? "bg-white border-b border-grey-200 shadow-sm"
              : "bg-white/70 backdrop-blur"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* LOGO */}
            <div className="w-40 flex items-center">
              <img
                src={logo}
                alt="Shoonya Insurance Brokers"
                className={`
                  h-10
                  transition-all
                  duration-300
                  ${
                    showLogo
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }
                `}
              />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 ml-auto">
              <a
                href="#claims"
                className={`relative flex items-center ${base} ${
                  currentPage === "claims" ? active : inactive
                }`}
              >
                <span className="absolute -left-4 text-primary text-xl">
                  •
                </span>
                Claims
              </a>

              <a
                href="#solutions"
                className={`${base} ${
                  currentPage === "solutions" ? active : inactive
                }`}
              >
                Solutions
              </a>

              <a
                href="#hero-desktop"
                className={`${base} ${
                  currentPage === "home" ? active : inactive
                }`}
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
