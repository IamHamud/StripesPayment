"use client";

import React from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      {/* Navbar */}
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 h-[40vh] sm:h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            What do we do? Who are we?
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 px-4 max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Merchant Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify">
            We are a fintech solutions provider specializing in assisting merchants with payment
            integrations, optimizing payment performance, and leveraging data science to improve
            approval rates. By acting as dedicated Technical Account Managers (TAM), we ensure
            smooth coordination with PSPs, BNPL providers, and other financial tools to boost
            merchant revenues.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Payments Hubs
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify">
            Based in both Dubai and London, we understand the unique challenges faced by businesses
            in these dynamic financial hubs. In Dubai, we help local merchants expand their reach
            across the GCC region, while in London, we support global merchants in penetrating
            European and international markets.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Tailored for Merchants
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-justify">
            Our expertise extends to assisting startups by integrating ready-to-use platforms like
            Linktree, Mailchimp, and other essential tools. Whether you're a small business or a
            large enterprise, we are committed to helping you achieve scalable growth.
          </p>
        </div>
      </section>

      {/* Regional Focus Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dubai */}
          <div>
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/dubai-high-quality.jpg"
                alt="Dubai Skyline"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
              Dubai
            </p>
          </div>
          {/* London */}
          <div>
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/london-high-quality.jpg"
                alt="London Skyline"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
              London
            </p>
          </div>
        </div>
      </section>

   {/* Additional Information */}
<section className="py-12 px-4 max-w-6xl mx-auto space-y-8">
  {/* Who We Are */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
      Who We Are
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto">
      We are Motion Pexels FZ-LLC  licensed as a web development service provider in the UAE under RAKEZ 
      (Ras Al Khaimah Economic Zone). Our business is built on a foundation of legitimacy and compliance, 
      ensuring transparency in all our offerings. We specialize in providing integration support and web services support 
      for merchants and customers, focusing solely on integration services. We do not use customer card 
      data directly and ensure full compliance with PCI standards as provided by PSPs (Payment Service Providers). 
      Furthermore, we only collaborate with PSPs that adhere to PCI compliance, upholding the highest standards of 
      integrity in our web development services.
    </p>
  </div>

  {/* Our Mission */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
      Our Mission
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto">
      We deeply value our customers and are committed to maintaining the highest ethical 
      standards. Our goal is to add value to the payments industry by empowering merchants to thrive in a 
      rapidly evolving fintech landscape. With a focus on innovation, we aim to stay at the forefront of 
      growth in the fintech sectors of the MENA region and London. By delivering tailored solutions, we help 
      our clients meet the challenges of an ever-changing market while ensuring the integrity and quality of 
      our services.
    </p>
  </div>

  {/* Contact and Awareness */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
      Contact and Awareness
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto">
      Our official websites are:
    </p>
    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
      <li>
        <a
          href="https://www.motionpexels.com"
          className="text-blue-500 hover:underline"
        >
          www.motionpexels.com
        </a>
      </li>
      <li>
        <a
          href="https://www.motionpexels.ae"
          className="text-blue-500 hover:underline"
        >
          www.motionpexels.ae
        </a>
      </li>
    </ul>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto mt-4">
      These domains have been purchased legitimately through{" "}
      <a
        href="https://www.tasjeel.ae"
        className="text-blue-500 hover:underline"
      >
        tasjeel.ae
      </a>{" "}
      and GoDaddy. Beyond these domains, we do not operate any other websites. 
      Our official social media pages are:
    </p>
    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
      <li>
        Instagram:{" "}
        <a
          href="https://instagram.com/motionpexelsofficial"
          className="text-blue-500 hover:underline"
        >
          @motionpexelsofficial
        </a>
      </li>
      <li>
        Twitter:{" "}
        <a
          href="https://x.com/Motionpexel"
          className="text-blue-500 hover:underline"
        >
          @Motionpexel
        </a>
      </li>
    </ul>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto mt-4">
      We are aware that scams may use similar domains or claim to be affiliated 
      with us. Please be vigilant and ensure you are engaging with our official 
      platforms. For any inquiries or to report concerns, contact us directly at{" "}
      <a
        href="mailto:motionpexelsofficial@gmail.com"
        className="text-blue-500 hover:underline"
      >
        motionpexelsofficial@gmail.com
      </a>. We are here to assist and safeguard your trust in our services.
    </p>
  </div>
</section>


      {/* Footer */}
      <footer className="mt-16 py-4 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} MotionPexels. All rights reserved.</p>
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

export default AboutUsPage;
