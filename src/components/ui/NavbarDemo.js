"use client";

import React from "react";

const NavbarDemo = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-800 dark:text-gray-200">
          MotionPexels
        </a>
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDemo;
