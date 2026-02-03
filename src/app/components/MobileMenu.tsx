import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  currentPage?: string;
}

export function MobileMenu({ currentPage = "home" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-grey-700 hover:text-primary transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className="
              absolute
              top-20
              left-4
              right-4
              bg-white
              rounded-xl
              shadow-lg
              border
              border-grey-200
              p-6
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-grey-500">
                Navigation
              </span>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-grey-600 hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-4">
              {/* Home */}
              <a
                href="#hero-desktop"
                onClick={() => setIsOpen(false)}
                className={`
                  text-base
                  py-2
                  transition-colors
                  ${
                    currentPage === "home"
                      ? "text-primary font-medium"
                      : "text-grey-700 hover:text-primary"
                  }
                `}
              >
                Home
              </a>

              {/* Solutions */}
              <a
                href="#solutions"
                onClick={() => setIsOpen(false)}
                className={`
                  text-base
                  py-2
                  transition-colors
                  ${
                    currentPage === "solutions"
                      ? "text-primary font-medium"
                      : "text-grey-700 hover:text-primary"
                  }
                `}
              >
                Solutions
              </a>

              {/* Claims with Green Dot */}
              <a
                href="#claims"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  text-base
                  py-2
                  text-grey-700
                  hover:text-primary
                  transition-colors
                "
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: "#42599c" }}
                />
                Claims
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
