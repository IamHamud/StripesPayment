"use client";

import React from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";

const ContactUsPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      {/* Navbar */}
      <NavbarDemo />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 h-[40vh] sm:h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Book a consultation call or connect with us today.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 max-w-lg mx-auto">
        <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-white mb-6">
          Book a consultation call with us
        </h2>
        <form
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md text-gray-800 bg-gray-50 dark:bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md text-gray-800 bg-gray-50 dark:bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md text-gray-800 bg-gray-50 dark:bg-gray-700"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium"
          >
            <div className="px-6 py-2 bg-black rounded-md hover:bg-transparent transition duration-200">
              Submit
            </div>
          </button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Alternatively, you can reach us at:{" "}
          <a
            href="mailto:motionpexelsofficial@gmail.com"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            motionpexelsofficial@gmail.com
          </a>
        </p>
      </section>

      {/* Social Links */}
      <section className="text-center py-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Follow Us
        </h2>
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://instagram.com/motionpexelsofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-200 hover:scale-110"
            style={{
              width: "clamp(50px, 10vw, 100px)",
              height: "clamp(50px, 10vw, 100px)",
            }}
          >
            <img
              src="/images/insta.jpg"
              alt="Instagram"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://x.com/Motionpexel"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-200 hover:scale-110"
            style={{
              width: "clamp(50px, 10vw, 100px)",
              height: "clamp(50px, 10vw, 100px)",
            }}
          >
            <img
              src="/images/x.jpg"
              alt="Twitter"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-4 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} MotionPexels. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default ContactUsPage;
