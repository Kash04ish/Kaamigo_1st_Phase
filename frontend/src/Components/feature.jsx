import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  FaVideo,
  FaBriefcase,
  FaUserAlt,
  FaCrown,
  FaQuestion,
  FaRocket,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Dynamic Video Reels",
      desc: "Discover freelancers through captivating short video reels, bringing their skills to life.",
      icon: "🎥",
    },
    {
      title: "Intuitive Voice Search",
      desc: "Find what you need hands-free with voice commands, simplifying your search.",
      icon: "🎤",
    },
    {
      title: "Real-time Map Discovery",
      desc: "Locate professionals on a live, interactive map. Filter by needs, location, and more.",
      icon: "🗺️",
    },
    {
      title: "Certified Trust Badges",
      desc: "Verify freelancer credentials with badges, ensuring reliability and peace of mind.",
      icon: "✅",
    },
    {
      title: "Secure & Simple Payments",
      desc: "Effortless transactions with multiple payment options for convenience.",
      icon: "💳",
    },
    {
      title: "Dedicated 24/7 Support",
      desc: "Access help whenever needed, with a professional team ready to assist.",
      icon: "🕐",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-50 to-orange-100 font-[Inter]">
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
        {/* Hero Section */}
        <div className="bg-gradient-to-t from-purple-400 via-violet-400 to-indigo-400 text-center py-12 px-4 sm:px-10 rounded-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Unlock Your Potential with{" "}
            <span className="text-orange-300">Kaamigo</span>
          </h2>
          <p className="text-gray-100 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Discover, showcase, and connect with local talent and opportunities
            like never before.
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm"
          >
            Start Exploring Now
          </button>
        </div>

        {/* Features Grid */}
        <section className="bg-gradient-to-t from-purple-200 to-blue-100 p-6 sm:p-8 rounded-lg shadow border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-2">
            Core Features That Set Us Apart
          </h3>
          <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
            Kaamigo is built on powerful capabilities designed to make your
            experience seamless and rewarding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg text-center shadow hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-semibold text-orange-600 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <a href="#" className="text-purple-600 text-sm underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Reels Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-gradient-to-t from-purple-200 to-pink-100 p-6 sm:p-8 rounded-2xl border shadow-lg">
          <img
            src="https://via.placeholder.com/400x200?text=Reel+Preview"
            alt="Preview of a freelancer reel"
            className="h-56 w-full object-cover rounded-lg shadow-inner"
          />
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-3 text-purple-800">
              🎥 Experience Work Through Vibrant Reels
            </h4>
            <p className="text-gray-700 text-sm sm:text-base mb-5 leading-relaxed">
              Our video reels let freelancers showcase skills dynamically — delivering a
              vibrant, engaging experience before you connect.
            </p>
            <button
              onClick={() => navigate("/explore/reels")}
              className="border border-purple-700 text-purple-700 font-semibold px-5 py-2 rounded hover:bg-purple-100 transition text-sm"
            >
              Explore Reels
            </button>
          </div>
        </section>

        {/* Map Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-gradient-to-b from-purple-200 to-pink-100 p-6 sm:p-8 rounded-2xl border shadow-lg">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-3 text-purple-800">
              🗺️ Find Local Talent with Precision Map Discovery
            </h4>
            <p className="text-gray-700 text-sm sm:text-base mb-5 leading-relaxed">
              Use our interactive map to discover nearby freelancers. Filter by category,
              rating, and more with pinpoint accuracy.
            </p>
            <button
              onClick={() => navigate("/explore")}
              className="border border-purple-700 text-purple-700 font-semibold px-5 py-2 rounded hover:bg-purple-100 transition text-sm"
            >
              Discover Nearby
            </button>
          </div>
          <img
            src="https://via.placeholder.com/400x200?text=Map+Feature"
            alt="Interactive map discovery feature"
            className="h-56 w-full object-cover rounded-lg shadow-inner"
          />
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-l from-blue-100 to-pink-100 p-6 sm:p-8 rounded-2xl border shadow-lg">
          <h4 className="text-2xl sm:text-3xl font-bold text-purple-700 text-center mb-6">
            💬 What Our Users Say
          </h4>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 ">
            {["Sarah M.", "Mark J.", "Emily R."].map((name, index) => (
              <div
                key={name}
                className="min-w-[280px] snap-center bg-white p-6 rounded-xl shadow-md text-sm text-gray-700 flex-shrink-0"
              >
                <p className="italic mb-3 leading-relaxed">
                  “
                  {index === 0
                    ? "Kaamigo transformed how I find local talent. The map feature is a game-changer!"
                    : index === 1
                    ? "Showcasing my work through video reels has brought me so many new clients. Truly innovative!"
                    : "Finding trusted professionals has never been easier. Thanks to the reviews and profiles."}
                  ”
                </p>
                <p className="font-semibold text-purple-700">{name}</p>
                <p className="text-xs text-gray-500">
                  {index === 0
                    ? "Small Business Owner"
                    : index === 1
                    ? "Freelance Videographer"
                    : "Homeowner"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Footer */}
        <section className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center py-10 px-4 sm:px-6 rounded-2xl shadow-xl mt-10">
          <h4 className="text-xl sm:text-2xl font-bold mb-3">
            🚀 Ready to Connect or Showcase Your Talent?
          </h4>
          <p className="text-sm sm:text-base mb-5 max-w-2xl mx-auto leading-relaxed">
            Join Kaamigo today and be part of a thriving community where
            opportunities meet skills.
          </p>
          <button
            onClick={() => navigate("/explore/featurebtn")}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition text-sm"
          >
            Get Started Now
          </button>
        </section>


        {/* Back to Top */}
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
