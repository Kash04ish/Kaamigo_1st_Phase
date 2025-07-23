import React, { useState } from "react";
import { FiHeart, FiMessageSquare, FiShare2 } from "react-icons/fi";
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

const Reels = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Design",
    "Development",
    "Multimedia",
    "Writing",
    "Marketing",
    "Admin Support",
    "Consulting",
    "Finance",
    "Data Science",
  ];

  const navigate = useNavigate();

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
      <main className="flex-1 p-4 md:p-6 space-y-10 w-full">
        {/* Categories */}
        <section className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">🎯 Discover Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition shadow-sm ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r from-purple-500 to-violet-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Trending Freelancers */}
        <section className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">🔥 Trending Freelancers</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="text-center min-w-[110px] sm:min-w-[130px] p-3 bg-white rounded-lg shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gray-300 rounded-full shadow-inner mb-2" />
                <p className="font-medium text-sm">Freelancer #{i + 1}</p>
                <p className="text-xs text-gray-500">Role</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Reels */}
        <section className="space-y-4 bg-white p-5 md:p-7 rounded-xl shadow-lg border border-purple-100">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-600">
            ⭐ Featured Reels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array(12)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white to-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl space-y-3"
                >
                  <div className="w-full h-32 sm:h-36 bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-3xl text-white bg-black bg-opacity-40">
                      ▶️
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs bg-black bg-opacity-60 text-white px-2 py-0.5 rounded">
                      00:23
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                      Alex Johnson
                    </h3>
                    <p className="text-xs text-gray-500">Graphic Designer</p>
                  </div>
                  <div className="text-orange-500 text-sm font-medium">
                    4.8 (120 reviews)
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => alert("Booking coming soon!")}
                      className="bg-purple-600 text-white text-xs px-3 py-2 rounded hover:bg-purple-700 transition"
                    >
                      Book Now
                    </button>
                    <div className="flex gap-2 text-gray-500 text-sm">
                      <FiMessageSquare className="cursor-pointer hover:text-purple-600" />
                      <FiHeart className="cursor-pointer hover:text-red-500" />
                      <FiShare2 className="cursor-pointer hover:text-orange-400" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-gradient-to-r from-orange-400 to-yellow-500 transition duration-300"
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
};

export default Reels;
