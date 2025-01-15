"use client";

import React from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";

const MerchantServicesPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      {/* Navbar */}
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 h-[40vh] sm:h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Optimize Your Payment Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            With Local & International Networks, tap into new Markets.
          </p>
        </div>
      </section>

      {/* Payment Networks Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Supported Global & Local Payment Networks
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {["visa", "mastercard", "mada", "knet", "omannet", "qpay"].map(
            (network) => (
              <div
                key={network}
                className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center transform transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={`/images/${network}.jpg`}
                  alt={network}
                  className="w-full h-40 mx-auto object-contain"
                />
              </div>
            )
          )}
        </div>
        <div className="text-center mt-8">
          <button
            className="p-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium"
            onClick={() => (window.location.href = "/payments")}
          >
            <div className="px-6 py-2 bg-black rounded-md hover:bg-transparent transition duration-200">
              Learn More
            </div>
          </button>
        </div>
      </section>

      {/* Informational Paragraphs */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Merchant Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify max-w-4xl mx-auto">
            At MotionPexels, we specialize in providing merchants with advanced payment integration solutions. From API integrations to SDKs and plugins for platforms like WooCommerce, our services are tailored to optimize payment performance. Leveraging tools like webhooks, we ensure real-time updates, automation, and streamlined workflows, enhancing approval rates and reducing payment declines to maximize revenue.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify max-w-4xl mx-auto mt-6">
            Our BNPL (Buy Now, Pay Later) solutions and hosted payment pages simplify the checkout process, offering customers a seamless payment experience. By integrating with global and local networks such as Visa, Mastercard, Mada, and Apple Pay, we empower merchants to expand into new markets with ease and confidence.
          </p>
        </div>
      </section>

      {/* Trusted Providers Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Trusted Providers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center transform transition-transform duration-200 hover:scale-105"
            >
              <img
                src={`/images/${index + 1}.jpg`}
                alt={`Provider ${index + 1}`}
                className="w-full h-40 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Seamless Payments with Digital Wallets
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Integrate Apple Pay, Samsung Pay, and more. We optimize for secure &
          fast transactions.
        </p>
        <div className="flex justify-center items-center gap-12">
          {["apple-pay", "samsung-pay"].map((method) => (
            <div
              key={method}
              className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-full flex justify-center items-center transform transition-transform duration-200 hover:scale-105"
            >
              <img
                src={`/images/${method}.jpg`}
                alt={method}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
        <button
          className="p-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium mt-6"
          onClick={() => (window.location.href = "/payments")}
        >
          <div className="px-6 py-2 bg-black rounded-md hover:bg-transparent transition duration-200">
            Subscribe Now
          </div>
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-4 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} Motion Pexels FZ-LLC  All rights reserved.</p>
        <p className="mt-2">
          Follow us:{" "}
          <a
            href="https://x.com/Motionpexel"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            href="https://instagram.com/motionpexelsofficial"
            className="text-blue-500 hover:underline"
          >
            Instagram
          </a>
        </p>
      </footer>
    </main>
  );
};

export default MerchantServicesPage;
