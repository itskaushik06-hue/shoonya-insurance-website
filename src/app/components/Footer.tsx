import React from "react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="w-full border-t border-grey-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6 text-center text-grey-600 leading-tight">

        {/* LOGO */}
        <div className="flex justify-center">
          <img src={logo} alt="Shoonya" className="h-9" />
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs">
          <a href="#csr" className="hover:text-primary transition-colors">CSR</a>
          <a href="#articles" className="hover:text-primary transition-colors">Articles</a>
          <a href="#privacy-policy" className="hover:text-primary transition-colors">Privacy Notice</a>
          <a href="#terms-and-conditions" className="hover:text-primary transition-colors">Terms of Use</a>
          <a href="#disclaimer" className="hover:text-primary transition-colors">Transparency &amp; Disclosure</a>
          <a href="#cookie-policy" className="hover:text-primary transition-colors">Cookie Notice</a>
        </div>

        {/* COMPANY INFO */}
        <div className="max-w-6xl mx-auto text-xs space-y-1">

          {/* Line 1 */}
          <div>
            Shoonya Insurance Brokers Private Limited •
            7/9 Trikuta Nagar, Jammu, J&amp;K 180012, India •
            Direct Insurance Broker (Life &amp; General)
          </div>

          {/* Line 2 */}
          <div>
            IRDA License No: 905 (Valid till July 17, 2026) •
            CIN: U66000JK2022PTC014062
          </div>

          {/* Line 3 */}
          <div>
            <a
              href="mailto:info@shoonya.care"
              className="hover:text-primary underline"
            >
              info@shoonya.care
            </a>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-3 border-t border-grey-200 text-xs">
          © 2026 Shoonya Insurance Brokers | All rights reserved.
        </div>

      </div>
    </footer>
  );
}