"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Individual menu item with hover and animation
export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-90 dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-gray-900 backdrop-blur-md rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4 space-y-3 text-left text-sm"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Main menu container
export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-gray-900 bg-white shadow-lg flex justify-center space-x-6 px-8 py-5"
    >
      {children}
    </nav>
  );
};

// Hoverable links with enhanced text styling
export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="block text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium tracking-wide"
    >
      {children}
    </Link>
  );
};

// NavbarDemo for integration
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

// Main navbar component
function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-3">
            <HoveredLink href="/merchant-services">
              Merchant Services
            </HoveredLink>
            <HoveredLink href="/startup-services">
              Startup Services
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-3">
            <HoveredLink href="/about">Our Story</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-3">
            <HoveredLink href="/contact">Get in Touch</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-3">
            <HoveredLink href="/payments">View Plans</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
