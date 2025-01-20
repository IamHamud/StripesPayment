"use client";

import React from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Navbar */}
      <NavbarDemo />

      {/* Background Beams with Collision */}
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Payment Canceled
          </h2>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-black flex items-center justify-center text-center">
  Your payment was not completed. If this was an error, you can try again or contact our support team for assistance.
</p>

          <div className="mt-6 flex justify-center gap-4">
            {/* Back to Home Button */}
            <button
              className="p-[3px] relative"
              onClick={() => (window.location.href = "/")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Back to Home
              </div>
            </button>
            {/* Retry Payment Button */}
            <button
              className="p-[3px] relative"
              onClick={() => (window.location.href = "/payments")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Try Again
              </div>
            </button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
