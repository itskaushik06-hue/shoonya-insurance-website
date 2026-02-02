import React from "react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="site-footer" className="w-full">      
      {/* ================= Footer Content ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-8 text-sm text-grey-900">
          

          {/* Main */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <img src={logo} alt="Shoonya" className="h-10" />

              

            </div>

            <div className="space-y-2 md:text-right">
              <p>Shoonya Insurance Brokers Private Limited</p>
              <p>7/9 Trikuta Nagar, Jammu, J&K 180012, India</p>
              <p>Direct Insurance Broker (Life & General)</p>
              <p>IRDA License No: 905 (Valid till July 17, 2026)</p>
              <p>CIN: U66000JK2022PTC014062</p>
              <p>
                {" "}
                <a href="mailto:shoonyabrokers@gmail.com" className="hover:text-primary underline">
                  shoonyabrokers@gmail.com
                </a>
              </p>
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
