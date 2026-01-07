import React from 'react';

export function Footer() {
  return (
    <footer className="bg-grey-50 border-t border-grey-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section 1: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-grey-600">
              © 2025 Shoonya Insurance Brokers | We Care. All rights reserved.
            </p>
          </div>

          {/* Section 2: Company Details */}
          <div className="border-t border-grey-200 pt-8">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm font-medium text-grey-900">
                Shoonya Insurance Brokers Private Limited
              </p>
              <p className="text-sm text-grey-600">
                Regd Address: 7/9 Trikuta Nagar Jammu, J&K 180012, India
              </p>
              <p className="text-sm text-grey-600">
                Direct Insurance Broker (Life & General)
              </p>
              <p className="text-sm text-grey-600">
                License No: 905 by IRDA (Expiry: 17th July, 2026)
              </p>
            </div>
          </div>

          {/* Section 3: Contact Information */}
          <div className="border-t border-grey-200 pt-8">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm text-grey-600">
                Email:{' '}
                <a
                  href="mailto:shoonyabrokers@gmail.com"
                  className="text-primary hover:underline"
                >
                  shoonyabrokers@gmail.com
                </a>
              </p>
              <p className="text-sm text-grey-600">
                Contact:{' '}
                <a
                  href="tel:+919419286666"
                  className="text-primary hover:underline"
                >
                  +91 94192 86666
                </a>
              </p>
              <p className="text-sm text-grey-600">
                CIN: U66000JK2022PTC014062
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
