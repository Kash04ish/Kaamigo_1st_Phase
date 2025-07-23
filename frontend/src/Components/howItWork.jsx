import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  FaVideo,
  FaBriefcase,
  FaUserAlt,
  FaCrown,
  FaQuestion,
  FaRocket,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate();
  const [ctaClicked, setCtaClicked] = useState(false);

  const handleExploreClick = () => {
    setCtaClicked(true);
    setTimeout(() => navigate("/explore"), 1000);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-orange-50 to-purple-100 font-[Inter]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r shadow-xl p-6 space-y-6 rounded-r-xl">
        <h2
          className="text-2xl font-extrabold text-purple-700 tracking-wide cursor-pointer"
          onClick={() => navigate("/explore")}
        >
          📍 Kaamigo
        </h2>
        <nav className="space-y-3">
          {[
            { label: "Explore", path: "/explore", icon: <LuLayoutDashboard /> },
            { label: "Reels", path: "/explore/reels", icon: <FaVideo /> },
            { label: "Jobs", path: "/explore/jobs", icon: <FaBriefcase /> },
            { label: "Profile", path: "/explore/profile", icon: <FaUserAlt /> },
            {
              label: "Features",
              path: "/explore/features",
              icon: <FaRocket />,
            },
            {
              label: "How it Works",
              path: "/explore/how-it-works",
              icon: <FaQuestion />,
            },
            {
              label: "Premium",
              path: "/explore/featurebtn",
              icon: <FaCrown />,
            },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-purple-100 hover:text-purple-800"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 space-y-10 w-full">
        {/* Top Banner */}
        <div className="bg-gradient-to-b from-orange-200 to-purple-300 text-center py-10 px-4 sm:px-10 rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Discover How <span className="text-orange-600">Kaamigo</span>{" "}
            Connects You
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Learn the simple, effective steps to find the perfect freelancer or
            land your next exciting gig.
          </p>
        </div>

        {/* For Freelancers */}
        <section>
          <h3 className="text-xl sm:text-2xl text-purple-600 font-bold mb-6 text-center">
            For Freelancers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Create Your Profile",
                desc: "Showcase your skills, experience, and portfolio to attract potential clients.",
                icon: "👤",
              },
              {
                title: "Record Short Reels",
                desc: "Capture attention with engaging video reels demonstrating your expertise and personality.",
                icon: "📹",
              },
              {
                title: "Get Discovered Locally",
                desc: "Appear on the map for nearby clients seeking your services, making connections easy.",
                icon: "📍",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-lg text-orange-500 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For Customers */}
        <section>
          <h3 className="text-xl sm:text-2xl text-purple-600 font-bold mb-6 text-center">
            For Customers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Find Nearby Talent",
                desc: "Browse the map or watch reels to discover skilled freelancers in your area.",
                icon: "🔍",
              },
              {
                title: "Connect & Chat",
                desc: "Directly message freelancers to discuss project details and get quotes.",
                icon: "💬",
              },
              {
                title: "Hire & Get Work Done",
                desc: "Securely hire the best fit for your needs and track job progress seamlessly.",
                icon: "📁",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-lg text-orange-500 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-gradient-to-r from-purple-100 to-purple-300 text-center py-10 px-4 sm:px-10 rounded-lg">
          <h4 className="text-xl sm:text-2xl text-purple-600 font-bold mb-4">
            Ready to Get Started?
          </h4>
          <p className="text-sm sm:text-base text-gray-700 mb-4 max-w-xl mx-auto">
            Join Kaamigo today and transform the way you work or find talent.
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 text-sm"
          >
            {ctaClicked ? "Redirecting..." : "Explore Opportunities"}
          </button>
        </section>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-orange-600 text-white px-3 py-2 rounded-full shadow hover:bg-gradient-to-r from-orange-400 to-yellow-500 transition duration-300"
        >
          Go Back
        </button>
        {/* Footer */}
        <footer className="bg-[#181B23] py-6 px-6 text-gray-300 text-center md:text-left animate-fade-in rounded-t-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">Kaamigo</div>
            <p className="text-sm text-gray-400">
              Connecting talent with opportunities through voice-first innovation.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col gap-2 text-sm md:items-center">
            <span className="font-semibold text-purple-300 mb-2">Quick Links</span>
            <a href="/explore" className="hover:text-purple-400 transition">Explore</a>
            <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
            <a href="/blog" className="hover:text-purple-400 transition">Blog</a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col md:items-end gap-2">
            <span className="font-semibold text-purple-300 mb-2">Connect with us</span>
            <div className="flex gap-4 justify-center md:justify-end text-xl">
              <a href="#" className="hover:text-purple-400 transition" aria-label="Instagram">📸</a>
              <a href="#" className="hover:text-purple-400 transition" aria-label="Twitter">🐦</a>
              <a href="#" className="hover:text-purple-400 transition" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8 text-xs text-gray-500 border-t border-gray-700 pt-4">
          © 2025 <span className="text-purple-400 font-semibold">Kaamigo</span>. All rights reserved.
        </div>
      </footer>
      </main>
    </div>
  );
}
