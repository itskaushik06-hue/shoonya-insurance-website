import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-grey-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
  <div className="bg-white/80 backdrop-blur-md rounded-md px-3 py-2">
    <img
      src={logo}
      alt="Shoonya Insurance Brokers"
      className="h-10"
    />
  </div>
</a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-auto gap-10">
            {/* Claims with BLUE DOT (INTACT) */}
            <a
              href="#claims"
              className="relative flex items-center text-sm font-medium text-grey-900 hover:text-primary transition-colors"
            >
              <span className="absolute -left-4 text-primary text-xl leading-none">
                •
              </span>
              Claims
            </a>

            {/* Buy Insurance */}
            <a
              href="#insurance-solutions"
              className={`text-sm font-medium ${
                currentPage === "insurance-solutions"
                  ? "text-primary"
                  : "text-grey-700 hover:text-primary transition-colors"
              }`}
            >
              Buy Insurance
            </a>

            {/* Home */}
            <a
              href="#home"
              className={`text-sm font-medium ${
                currentPage === "home"
                  ? "text-primary"
                  : "text-grey-700 hover:text-primary transition-colors"
              }`}
            >
              Home
            </a>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu currentPage={currentPage} />
        </div>
      </div>
    </header>
  );
}
