import React from "react";
import logo from "@/assets/logo.png";
import wildlife from "@/assets/keep-it-green.png";

export function Footer() {
  return (
    <footer id="site-footer" className="w-full">
      {/* ================= Wildlife Image ================= */}
      <div className="w-full overflow-hidden">
        <img
          src={wildlife}
          alt="Shoonya Sustainability"
          className="w-full h-[180px] md:h-auto object-cover"
        />
      </div>

      {/* ================= Footer Content ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-8 text-sm text-grey-900">
          
          {/* Nav */}
          <nav className="flex justify-center gap-8 font-medium text-grey-700">
            <a href="#hero" className="hover:text-primary">Home</a>
            <a href="#insurance-solutions" className="hover:text-primary">Solutions</a>
            <a href="#claims" className="hover:text-primary">Claims</a>
          </nav>

          {/* Main */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <img src={logo} alt="Shoonya" className="h-10" />

              <p>
                Email{" "}
                <a href="mailto:shoonyabrokers@gmail.com" className="underline">
                  shoonyabrokers@gmail.com
                </a>
              </p>

              <p>
                Contact{" "}
                <a href="tel:+919419286666" className="underline">
                  +91 94192 86666
                </a>
              </p>
            </div>

            <div className="space-y-2 md:text-right">
              <p>Shoonya Insurance Brokers Private Limited</p>
              <p>7/9 Trikuta Nagar, Jammu, J&K 180012, India</p>
              <p>Direct Insurance Broker (Life & General)</p>
              <p>IRDA License No: 905 (Valid till July 17, 2026)</p>
              <p>CIN: U66000JK2022PTC014062</p>
            </div>
          </div>

          <div className="border-t border-grey-200" />

          <p className="text-xs text-center text-grey-600">
            © 2026 Shoonya Insurance Brokers | We Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
