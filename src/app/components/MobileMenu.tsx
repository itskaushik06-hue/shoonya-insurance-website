import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  currentPage?: string;
}

export function MobileMenu({ currentPage = 'home' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-grey-700 hover:text-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 border-t border-grey-200">
          <nav className="flex flex-col p-6 space-y-4">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className={`text-base py-2 ${
                currentPage === 'home'
                  ? 'text-primary font-medium'
                  : 'text-grey-700'
              }`}
            >
              Home
            </a>
            <a
              href="#insurance-solutions"
              onClick={() => setIsOpen(false)}
              className={`text-base py-2 ${
                currentPage === 'insurance-solutions'
                  ? 'text-primary font-medium'
                  : 'text-grey-700'
              }`}
            >
              Insurance Solutions
            </a>
            <a
              href="#claims"
              onClick={() => setIsOpen(false)}
              className="text-base py-2 text-grey-700"
            >
              Claims
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-base py-2 text-grey-700"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
