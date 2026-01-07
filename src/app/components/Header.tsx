import React from 'react';
import { Phone } from 'lucide-react';
import logo from "@/assets/logo.png";
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = 'home' }: HeaderProps) {
  const handleScheduleCall = () => {
    window.location.href = 'tel:+919419286666';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919419286666', '_blank');
  };

  return (
    <header className="bg-white border-b border-grey-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Shoonya Insurance Brokers" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className={`text-sm ${
                currentPage === 'home'
                  ? 'text-primary font-medium'
                  : 'text-grey-700 hover:text-primary transition-colors'
              }`}
            >
              Home
            </a>
            <a
              href="#insurance-solutions"
              className={`text-sm ${
                currentPage === 'insurance-solutions'
                  ? 'text-primary font-medium'
                  : 'text-grey-700 hover:text-primary transition-colors'
              }`}
            >
              Insurance Solutions
            </a>
            <a
              href="#claims"
              className="text-sm text-grey-700 hover:text-primary transition-colors"
            >
              Claims
            </a>
            <a
              href="#contact"
              className="text-sm text-grey-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary-hover text-white rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">WhatsApp Us</span>
            </button>
            <button
              onClick={handleScheduleCall}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
            >
              <span className="text-sm">Schedule a Call</span>
            </button>

            {/* Mobile Menu Toggle */}
            <MobileMenu currentPage={currentPage} />
          </div>
        </div>
      </div>
    </header>
  );
}