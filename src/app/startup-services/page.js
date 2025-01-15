"use client";

import React from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";

const StartupServicesPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 h-[40vh] sm:h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            We Help You Build Your Marketing Funnel
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            No need to worry about your payments, integrations, or marketing tools.
            We take care of everything, so you can focus on scaling your business.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Tools We Help You With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { name: "Linktree", image: "/images/linktree.jpg" },
            { name: "Stanstore", image: "/images/stanstore.jpg" },
            { name: "Beacons", image: "/images/beacons.jpg" },
            { name: "Mailchimp", image: "/images/mailchimp.jpg" },
            { name: "ManyChat", image: "/images/manychat.jpg" },
            { name: "Gumroad", image: "/images/gumroad.jpg" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="p-6 bg-white shadow-md rounded-lg text-center transform transition-transform duration-200 hover:scale-105"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-40 mx-auto mb-4 object-contain"
              />
              <p className="font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Improve Your Conversion Rate Today
        </h2>
        <p className="text-gray-600 mb-6">
          Let us help you set up your tools and take your business to the next level.
        </p>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            At MotionPexels, we empower startups to streamline their operations with cutting-edge
            tools like Linktree, Mailchimp, and Stan Store. Our services include API integrations
            for payment platforms, seamless funnel building, and advanced automation tools like
            ManyChat to boost efficiency and engagement. Whether you're looking to grow your
            audience or enhance conversions, we tailor strategies that help startups scale with
            confidence.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed text-justify mt-6">
            By leveraging platforms like Gumroad and Beacons, we ensure that startups have access
            to innovative monetization solutions. We focus on optimizing conversion rates with
            personalized funnels, engaging marketing campaigns, and actionable analytics, enabling
            you to turn leads into loyal customers. Start your growth journey today and unlock your
            potential with our tailored startup services.
          </p>
        </div>
        <button
          className="p-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium mt-6"
          onClick={() => (window.location.href = "/contact")}
        >
          <div className="px-6 py-2 bg-black rounded-md hover:bg-transparent transition duration-200">
            Get Started Now
          </div>
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-4 bg-gray-100 text-center text-gray-700">
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

export default StartupServicesPage;
