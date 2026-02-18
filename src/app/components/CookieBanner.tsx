import React, { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectNonEssential = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-0 w-full px-6 z-50">
      <div className="max-w-5xl mx-auto bg-white border border-grey-200 shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-sm">

        {/* TEXT */}
        <div className="space-y-2 text-sm text-grey-700 max-w-2xl">
          <p className="font-medium">
            We use cookies to improve your browsing experience.
          </p>
          <p className="text-grey-600 leading-relaxed">
            By continuing to use this website, you agree to our use of cookies.
            You can learn more in our{" "}
            <a
              href="#cookie-policy"
              className="underline hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={rejectNonEssential}
            className="px-4 py-2 text-sm border border-grey-300 rounded-full hover:bg-grey-100 transition"
          >
            Reject
          </button>

          <button
            onClick={acceptAll}
            className="px-5 py-2 text-sm bg-primary text-white rounded-full hover:opacity-90 transition"
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
}
