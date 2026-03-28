import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  currentPage?: string;
}

export function MobileMenu({ currentPage = "home" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const baseLinkClass =
    "block rounded-xl px-4 py-3 text-[1.05rem] sm:text-lg font-medium leading-tight transition-colors";

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 text-grey-700 hover:text-primary transition-colors"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
      >
        <Menu className="w-7 h-7" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />

          <div
            id="mobile-menu-panel"
            className="
              absolute
              top-[4.5rem]
              right-3
              w-[min(92vw,22rem)]
              max-h-[calc(100vh-5.5rem)]
              overflow-y-auto
              bg-white
              rounded-2xl
              shadow-xl
              border
              border-grey-200
              p-4
              sm:p-5
            "
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1.5 text-grey-600 hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            <nav className="mt-8 flex flex-col gap-1.5">
              <a
                href="/#hero"
                onClick={() => setIsOpen(false)}
                className={`
                  ${baseLinkClass}
                  ${
                    currentPage === "home"
                      ? "bg-primary/10 text-primary"
                      : "text-grey-700 hover:bg-grey-100 hover:text-primary"
                  }
                `}
              >
                Home
              </a>

              <a
                href="/solutions"
                onClick={() => setIsOpen(false)}
                className={`
                  ${baseLinkClass}
                  ${
                    currentPage === "solutions"
                      ? "bg-primary/10 text-primary"
                      : "text-grey-700 hover:bg-grey-100 hover:text-primary"
                  }
                `}
              >
                Solutions
              </a>

              <a
                href="/claims"
                onClick={() => setIsOpen(false)}
                className={`
                  ${baseLinkClass}
                  ${
                    currentPage === "claims"
                      ? "bg-primary/10 text-primary"
                      : "text-grey-700 hover:bg-grey-100 hover:text-primary"
                  }
                `}
              >
                Claims
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
