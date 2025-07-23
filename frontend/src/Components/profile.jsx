import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaVideo, FaBriefcase, FaUserAlt, FaCrown, FaQuestion, FaRocket } from "react-icons/fa";

export default function Profile() {
  const [isBooked, setIsBooked] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Explore", path: "/explore", icon: <LuLayoutDashboard /> },
    { label: "Reels", path: "/explore/reels", icon: <FaVideo /> },
    { label: "Jobs", path: "/explore/jobs", icon: <FaBriefcase /> },
    { label: "Profile", path: "/explore/profile", icon: <FaUserAlt /> },
    { label: "Features", path: "/explore/features", icon: <FaRocket /> },
    { label: "How it Works", path: "/explore/how-it-works", icon: <FaQuestion /> },
    { label: "Premium", path: "/explore/featurebtn", icon: <FaCrown /> },
  ];

  const handleBook = () => {
    setIsBooked(true);
    alert("Session booked with Sarah!");
  };

  const handleMessage = () => {
    setMessageSent(true);
    alert("Message sent to Sarah!");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-50 to-orange-100 font-inter">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r shadow-xl p-6 space-y-6 rounded-r-xl">
        <h2 className="text-2xl font-extrabold text-purple-700 cursor-pointer" onClick={() => navigate("/explore")}>
          📍 Kaamigo
        </h2>
        <nav className="space-y-3">
          {menuItems.map(({ label, path, icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-semibold transition ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-purple-100 hover:text-purple-800"
                }`
              }
            >
              <span className="text-xl">{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Summary */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNt7Tl2jtLg7G15M-uMxtcPRwp6xW-xSJow&s"
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-full mb-6 object-cover shadow-lg"
              />
              <h2 className="font-bold text-xl text-orange-500">Sarah Chen</h2>
              <p className="text-sm text-gray-600">Graphic Designer</p>

              <div className="flex justify-between mt-4 text-sm text-gray-600">
                <div className="space-y-0.5">
                  <p className="font-bold text-black">4.9</p>
                  <p>Rating</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-black">1200</p>
                  <p>Reviews</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-black">77</p>
                  <p>Projects</p>
                </div>
              </div>

              <button
                onClick={handleBook}
                disabled={isBooked}
                className={`mt-6 w-full py-2 rounded-lg font-semibold ${
                  isBooked ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"
                } text-white transition`}
              >
                {isBooked ? "Booked ✅" : "Book Session"}
              </button>
              <button
                onClick={handleMessage}
                disabled={messageSent}
                className={`mt-2 w-full py-2 rounded-lg font-semibold ${
                  messageSent ? "bg-gray-200 text-gray-500" : "border border-purple-500 text-purple-500 hover:bg-purple-50"
                } transition`}
              >
                {messageSent ? "Message Sent" : "Send Message"}
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-3">Verification Status</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {[
                  ["Govt ID", true],
                  ["Phone", true],
                  ["Email", true],
                  ["Address", false],
                  ["PAN/SSN", false],
                ].map(([item, ok]) => (
                  <li key={item} className="flex items-center gap-2">
                    <span>{ok ? "✔️" : "❌"}</span>
                    {item} – {ok ? "Verified" : "Not Verified"}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Profile */}
          <div className="lg:col-span-3 space-y-6">
            {/* About */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <h2 className="text-xl font-bold">About Me</h2>
              <p className="text-gray-700 text-sm">
                Hi, I’m Sarah, a passionate graphic designer proficient in Figma, Adobe Suite, and Sketch. I’m bilingual (English & Mandarin) with 7 years of experience in branding, UI/UX design, and digital marketing.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Logo & Branding",
                  "UI/UX Design",
                  "Illustration",
                  "Iconography",
                  "Web Layout",
                  "Marketing Collateral",
                ].map((skill) => (
                  <span key={skill} className="text-sm text-gray-600">🔹 {skill}</span>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Featured Reel</h3>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  🎞️ Featured Video
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4">My Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Logo Design & Branding",
                  "UI/UX Design",
                  "Marketing Collateral",
                  "Illustration & Iconography",
                ].map((svc) => (
                  <div key={svc} className="border p-5 rounded-lg text-center hover:shadow-lg transition">
                    <h4 className="font-semibold">{svc}</h4>
                    <p className="text-xs text-gray-600 mt-1">Detailed service description.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4">Portfolio</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bg-gray-100 h-32 rounded-lg flex items-center justify-center text-sm text-gray-500">
                    Project {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4">What Clients Say</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  ["Alice Johnson", "Sarah redesigned our company logo and exceeded expectations. Highly recommended!"],
                  ["Bob Williams", "Working with Sarah on branding was seamless. Clear communication and great outcomes."],
                ].map(([client, testimonial]) => (
                  <div key={client} className="border p-5 rounded-lg space-y-2">
                    <p>"{testimonial}"</p>
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNt7Tl2jtLg7G15M-uMxtcPRwp6xW-xSJow&s"
                        alt="Client"
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="text-gray-500 text-xs">– {client}, Oct 2023</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          ↑
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
