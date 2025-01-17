"use client";

import { useEffect, useState } from "react";
import { NavbarDemo } from "@/components/ui/navbar-menu";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      const query = new URLSearchParams(window.location.search);
      const sessionId = query.get("session_id");

      if (!sessionId) {
        console.error("Missing session_id in query params");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/retrieve-checkout-session?session_id=${sessionId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch session: ${response.statusText}`);
        }

        const data = await response.json();
        setSessionDetails(data);
      } catch (error) {
        console.error("Error fetching session details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Navbar */}
      <NavbarDemo />

      {/* Background Beams with Collision */}
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center">
          {loading ? (
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
              Loading payment details...
            </h2>
          ) : sessionDetails ? (
            <>
              <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
                Payment Successful!
              </h2>
              <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-black">
                Thank you for your payment, {sessionDetails.customer_details?.name || "Customer"}.
              </p>
              <p className="mt-2 text-lg sm:text-xl max-w-2xl mx-auto text-black">
                A confirmation email has been sent to {sessionDetails.customer_details?.email || "your email"}.
              </p>
              <button
                className="mt-6 p-[3px] relative"
                onClick={() => (window.location.href = "/")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Back to Home
                </div>
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
                Failed to retrieve payment details.
              </h2>
              <button
                className="mt-6 p-[3px] relative"
                onClick={() => (window.location.href = "/")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Back to Home
                </div>
              </button>
            </>
          )}
        </div>
      </BackgroundBeamsWithCollision>

      {/* Footer */}
      <footer className="mt-16 py-4 w-full bg-gray-100 text-center text-gray-700">
        <p>&copy; {new Date().getFullYear()} Motion Pexels FZ-LLC All rights reserved.</p>
        <p className="mt-2">
          Follow us: {" "}
          <a
            href="https://x.com/Motionpexel"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>{" "}
          | {" "}
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
