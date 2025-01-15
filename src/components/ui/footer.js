"use client";

export default function Footer() {
  return (
    <footer className="mt-16 py-4 w-full bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
      <p>&copy; {new Date().getFullYear()} MotionPexels. All rights reserved.</p>
      <p className="mt-2">
        Follow us:{" "}
        <a href="https://twitter.com" className="text-blue-500 dark:text-blue-400 hover:underline">
          Twitter
        </a>{" "}
        |{" "}
        <a href="https://linkedin.com" className="text-blue-500 dark:text-blue-400 hover:underline">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
