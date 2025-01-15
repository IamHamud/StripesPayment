"use client";

import React from "react";
import { BackgroundGradient } from "./background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Merchant Services Card */}
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center">
          <div className="relative w-full h-[350px] md:h-[400px]">
            <Image
              src="/images/merchant-services.webp" // Add this image in /public/images/
              alt="Merchant Services"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Merchant Services
          </p>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
            <li>✔ Seamless payment integrations</li>
            <li>✔ Approval rate optimization</li>
            <li>✔ Technical Account Management (TAM)</li>
            <li>✔ Support for Visa, Mastercard, Mada, and more</li>
          </ul>
          <button
            onClick={() => (window.location.href = "/merchant-services")}
            className="rounded-full px-6 py-2 text-white bg-teal-500 hover:bg-teal-600 mt-4 text-xs font-bold"
          >
            Learn More
          </button>
        </BackgroundGradient>

        {/* Startup Services Card */}
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col items-center">
          <div className="relative w-full h-[350px] md:h-[400px]">
            <Image
              src="/images/startup-services.webp" // Add this image in /public/images/
              alt="Startup Services"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Startup Services
          </p>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
            <li>✔ Integration with Linktree, Stan Store, and Mailchimp</li>
            <li>✔ Messaging automation with ManyChat</li>
            <li>✔ Affiliate and monetization strategies</li>
            <li>✔ E-commerce integration for seamless shopping</li>
          </ul>
          <button
            onClick={() => (window.location.href = "/startup-services")}
            className="rounded-full px-6 py-2 text-white bg-purple-500 hover:bg-purple-600 mt-4 text-xs font-bold"
          >
            Learn More
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
