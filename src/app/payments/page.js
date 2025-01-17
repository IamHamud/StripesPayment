"use client";

import React, { useState } from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PricingPage = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (priceId) => {
    setLoading(true);
    const stripe = await stripePromise;

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        alert("Failed to create checkout session!");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      {/* Navbar */}
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 h-[40vh] sm:h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Pricing</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Choose a plan that fits your business needs.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Merchant Services Card */}
        <div className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center shadow-lg">
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/merchant-services.webp"
              alt="Merchant Services"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Merchant Services
          </p>
          <p className="text-center text-3xl font-bold text-teal-500 mb-4 mt-4">
            $499/year
          </p>
          <button
            onClick={() => handleCheckout("price_1QhrtXC2bs2ADXbgztRRi6Jf")}
            className={`rounded-full px-6 py-2 text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600"
            } mt-4 text-xs font-bold`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Buy"}
          </button>
        </div>

        {/* Startup Services Card */}
        <div className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center shadow-lg">
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/startup-services.webp"
              alt="Startup Services"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Startup Services
          </p>
          <p className="text-center text-3xl font-bold text-purple-500 mb-4 mt-4">
            $199/year
          </p>
          <button
            onClick={() => handleCheckout("price_1QiDDGC2bs2ADXbgdQUHEr93")}
            className={`rounded-full px-6 py-2 text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            } mt-4 text-xs font-bold`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Buy"}
          </button>
        </div>
      </section>


{/* Features Section */}
<section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Merchant Services Features */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Merchant Services Features
          </h2>
          <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
            <li><strong>Integration Support:</strong> Platforms like Linktree, Stan Store, and Mailchimp.</li>
            <li><strong>Messaging Automation:</strong> Manage customer interactions with ManyChat.</li>
            <li><strong>Business Tools:</strong> Leverage Beacons and Gumroad for optimization.</li>
            <li><strong>Automation:</strong> Save time and streamline processes.</li>
            <li><strong>Conversion Optimization:</strong> Turn followers into customers.</li>
            <li><strong>Affiliate Strategies:</strong> Monetization for Instagram startups.</li>
            <li><strong>Sales Funnels:</strong> Guide followers through the buying process.</li>
            <li><strong>E-commerce Integration:</strong> Enable seamless shopping experiences.</li>
          </ul>
        </div>

        {/* Startup Services Features */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Startup Services Features
          </h2>
          <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
            <li><strong>Integration Support:</strong> Platforms like Linktree, Stan Store, and Mailchimp.</li>
            <li><strong>Messaging Automation:</strong> Manage customer interactions with ManyChat.</li>
            <li><strong>Business Tools:</strong> Leverage Beacons and Gumroad for optimization.</li>
            <li><strong>Automation:</strong> Save time and streamline processes.</li>
            <li><strong>Conversion Optimization:</strong> Turn followers into customers.</li>
            <li><strong>Affiliate Strategies:</strong> Monetization for Instagram startups.</li>
            <li><strong>Sales Funnels:</strong> Guide followers through the buying process.</li>
            <li><strong>E-commerce Integration:</strong> Enable seamless shopping experiences.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-4 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} Motion Pexels FZ-LLC All rights reserved.</p>
        <p className="mt-2">
          Follow us:{" "}
          <a
            href="https://x.com/Motionpexel"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            href="https://instagram.com/motionpexelsofficial"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Instagram
          </a>
        </p>
      </footer>
    </main>
  );
};

export default PricingPage;
