import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  FaVideo,
  FaBriefcase,
  FaUserAlt,
  FaCrown,
  FaQuestion,
  FaRocket,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import MapWithRadius from "../mapWithRedius";

export default function Explore() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const menuItems = [
    { label: "Explore", path: "/explore", icon: <LuLayoutDashboard /> },
    { label: "Reels", path: "/explore/reels", icon: <FaVideo /> },
    { label: "Jobs", path: "/explore/jobs", icon: <FaBriefcase /> },
    { label: "Profile", path: "/explore/profile", icon: <FaUserAlt /> },
    { label: "Features", path: "/explore/features", icon: <FaRocket /> },
    {
      label: "How it Works",
      path: "/explore/how-it-works",
      icon: <FaQuestion />,
    },
    { label: "Premium", path: "/explore/featurebtn", icon: <FaCrown /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-purple-300 flex flex-col md:flex-row font-[Inter]">
      {/* Mobile Header */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gradient-to-r from-orange-100 to-purple-100 shadow-md z-10">
        <h2
          className="text-xl font-bold text-purple-700 cursor-pointer"
          onClick={() => navigate("/explore")}
        >
          📍 Kaamigo
        </h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-purple-700 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar (Mobile toggle + Desktop fixed) */}
      {(menuOpen || !isMobile) && (
        <aside className="bg-gradient-to-r from-orange-100 to-purple-100 w-full md:w-64 p-6 z-10 shadow-xl space-y-6 flex flex-col overflow-y-auto">
          <h2
            className="text-2xl font-extrabold text-purple-700 tracking-wide cursor-pointer hidden md:block"
            onClick={() => navigate("/explore")}
          >
            📍 Kaamigo
          </h2>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-purple-100 hover:text-purple-800"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Filters */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Discover Freelancers
              </h2>
              <input
                type="text"
                placeholder="Search by name, skill..."
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-purple-500"
              />
              <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                Apply Filters
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Filter Options
              </h2>
              <select className="w-full p-2 border rounded-lg text-sm">
                <option>Category</option>
              </select>
              <select className="w-full p-2 border rounded-lg text-sm">
                <option>Status</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className="w-full p-2 border rounded-lg text-sm"
              />
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  className="w-full accent-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price Range
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  className="w-full accent-orange-500"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Nearby Freelancers</h4>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-sm">Name #{i + 1}</p>
                    <p className="text-sm text-gray-500">Web Designer</p>
                    <a href="#" className="text-sm text-purple-600 hover:underline">View Profile</a>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Map & Results */}
          <section className="lg:col-span-2 space-y-8 mt-4">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Freelancers Around You (5 km radius)</h3>
              <div className="h-72 sm:h-96 rounded-lg overflow-hidden shadow-inner">
                <MapWithRadius />
              </div>
              <div className="text-center mt-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  View All Freelancers
                </button>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Featured Freelancers</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
                    <div className="h-24 bg-gray-200 rounded mb-3"/>
                    <p className="font-semibold text-sm">Freelancer #{i + 1}</p>
                    <p className="text-xs text-gray-500">Web Developer</p>
                    <a href="#" className="text-xs text-purple-600 hover:underline">View Profile</a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full shadow hover:bg-gradient-to-r from-orange-400 to-yellow-500 transition duration-300"
        >
          Go Back
        </button>
        {/* Footer */}
        <footer className="mt-8 bg-[#181B23] py-6 px-6 text-gray-300 text-center md:text-left animate-fade-in rounded-t-2xl">
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
            <a href="/" className="hover:text-purple-400 transition">Home</a>
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
