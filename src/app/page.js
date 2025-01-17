"use client";

import React from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradientDemo } from "@/components/ui/background-gradient-demo";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Navbar */}
      <NavbarDemo />

      {/* Background Beams with Collision */}
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Merchant Payment Services
          </h2>

          {/* Call-to-Action Button */}
          <button
            className="mt-8 p-[3px] relative"
            onClick={() => (window.location.href = "/payments")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Purchase Your Plan
            </div>
          </button>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Background Gradient Section */}
      <div className="w-full py-12 px-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Product
        </h3>
        <BackgroundGradientDemo />
      </div>

      {/* Descriptive Paragraph */}
      <div className="w-full py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-800 text-lg leading-relaxed text-justify">
            At MotionPexels, we empower merchants with payment integration solutions designed to optimize performance and drive growth. Our services include advanced API integrations for local and international payment gateways, leveraging tools like webhooks to ensure real-time updates and seamless automation. By optimizing approval rates and reducing payment declines, we help merchants maximize revenue and improve customer satisfaction. Additionally, our hosted payment pages and BNPL solutions simplify the checkout process, enabling merchants to offer secure, user-friendly experiences.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed text-justify mt-6">
            For startups, we provide tailored strategies to boost conversion rates and streamline operations. From setting up ready-to-use platforms like Linktree and Stan Store to implementing marketing funnels and automation tools, we help startups turn leads into loyal customers. With insights-driven analytics and scalable solutions, we enable businesses to grow efficiently, reducing operational overhead and enhancing their market presence.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-4 w-full bg-gray-100 text-center text-gray-700">
        <p>&copy; {new Date().getFullYear()} Motion Pexels FZ-LLC All rights reserved.</p>
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
}
