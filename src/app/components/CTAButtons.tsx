import React from 'react';
import { Phone } from 'lucide-react';

interface CTAButtonsProps {
  variant?: 'default' | 'large';
  className?: string;
}

export function CTAButtons({ variant = 'default', className = '' }: CTAButtonsProps) {
  const handleScheduleCall = () => {
    window.location.href = 'tel:+919419286666';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919419286666', '_blank');
  };

  const sizeClasses = variant === 'large' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm';

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <button
        onClick={handleScheduleCall}
        className={`${sizeClasses} bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium`}
      >
        Schedule a Call
      </button>
      <button
        onClick={handleWhatsApp}
        className={`${sizeClasses} bg-secondary hover:bg-secondary-hover text-white rounded-lg transition-colors font-medium flex items-center gap-2`}
      >
        <Phone className="w-4 h-4" />
        WhatsApp Us
      </button>
    </div>
  );
}
