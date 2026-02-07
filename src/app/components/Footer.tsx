import React from "react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="site-footer" className="w-full">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-8 text-sm text-grey-900">

          {/* ================= MAIN FOOTER ================= */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            
            {/* LEFT */}
            <div className="space-y-3">
              <img src={logo} alt="Shoonya" className="h-10" />
            </div>

            {/* RIGHT */}
            <div className="space-y-2 md:text-right text-justify md:text-justify">
              <p>Shoonya Insurance Brokers Private Limited</p>
              <p>7/9 Trikuta Nagar, Jammu, J&amp;K 180012, India</p>
              <p>Direct Insurance Broker (Life &amp; General)</p>
              <p>IRDA License No: 905 (Valid till July 17, 2026)</p>
              <p>CIN: U66000JK2022PTC014062</p>
              <p>
                <a
                  href="mailto:shoonyabrokers@gmail.com"
                  className="hover:text-primary underline"
                >
                  shoonyabrokers@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* ================= LINK STRIP ================= */}
          <div className="border-t border-grey-200 pt-4">
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-2
                text-xs
                text-grey-600
              "
            >
              <a href="/csr" className="hover:text-primary transition-colors">
                CSR
              </a>

              <a href="/articles" className="hover:text-primary transition-colors">
                Articles
              </a>

              <a href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>

              <a href="/terms-and-conditions" className="hover:text-primary transition-colors">
                Terms &amp; Conditions
              </a>

              <a href="/disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </a>
            </div>
          </div>

          {/* ================= COPYRIGHT ================= */}
          <p className="text-xs text-center text-grey-600">
            © 2026 Shoonya Insurance Brokers | We Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
