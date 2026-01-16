import React from "react";
import logo from "@/assets/logo.png";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = "home" }: HeaderProps) {
  return (
    <header className="bg-white border-b border-grey-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src={logo}
              alt="Shoonya Insurance Brokers"
              className="h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-auto gap-10">
            {/* Claims with blue dot */}
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
