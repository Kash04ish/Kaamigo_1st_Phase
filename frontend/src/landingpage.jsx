// LandingPage.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./index.css";

const LandingPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isMicActive, setIsMicActive] = useState(false);
  const headingText = "Reels Bhi. Rozgaar Bhi.".split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
      rotate: -10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening && transcript) {
      setSearchInput(transcript);
    }
  }, [transcript, listening]);

  const toggleListening = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Browser doesn't support speech recognition.");
      return;
    }

    if (listening) {
      SpeechRecognition.stopListening();
      setIsMicActive(false);
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
      setIsMicActive(true);
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 text-gray-800 text-sm sm:text-base">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-400 via-purple-200 to-orange-200 py-16 sm:py-24 text-center px-4 sm:px-6 md:px-12">
        <motion.h1
          className="font-Montserrat text-center text-3xl lg:text-5xl font-extrabold mb-6 px-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-600 to-orange-500 w-full inline-block"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {headingText.map((char, i) => (
            <motion.span
              key={i}
              variants={item}
              whileHover={{
                scale: 1.3,
                color: "#ea580c",
                textShadow: "0px 0px 12px rgba(250, 204, 21, 0.8)",
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        {/* Platform Messaging */}
      <div className="text-lg md:text-xl text-gray-800 max-w-5xl mx-auto text-center leading-relaxed font-medium space-y-6">
       <p>
        <span className="font-semibold text-purple-700">Kaamigo</span> is India’s
        <span className="text-purple-600 font-semibold"> voice-first</span> and
        <span className="text-orange-600 font-semibold"> video-powered</span> freelance platform tailored for the real
        <span className="italic text-purple-800"> Bharat</span>. We empower local talent by bridging gaps with technology that speaks the language of every corner of India- from busy towns to emerging Tier 2 cities.
       </p>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-8">
      <span className="font-semibold text-purple-700 max-w-xl">
        Need an <span className="font-semibold">electrician</span>, <span className="font-semibold">mehendi artist, engineer</span>, or <span className="font-semibold">tutor</span>? <span className="text-purple-700 font-semibold">Kaamigo</span> connects you to skilled local talent through <span className="text-purple-700">reels</span>, <span className="text-purple-700">voice search</span>, and a <span className="text-purple-700">live map</span>.
        <br />
        No red tape- just <span className="text-orange-500 font-semibold">real skills</span>, <span className="text-orange-500 font-semibold">instant gigs</span>, and trusted <span className="text-purple-800 font-medium">conversations</span>.
      </span>
      </div>

        {/* Search bar with mic */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch max-w-xl mx-auto mb-10 relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for gigs or workers..."
            className="w-full px-5 py-3 border-2 border-purple-500 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
          />
          <button
            onClick={toggleListening}
            className={`absolute lg:right-30 md:right-30 right-3 top-[18px] sm:top-[16px] text-xl cursor-pointer ${
              isMicActive ? "text-red-500" : "text-gray-500"
            } hover:text-purple-700 transition-colors`}
          >
            {isMicActive ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-purple-700 transition-all transform hover:scale-105 shadow">
            Search
          </button>
        </div>

        <div className="flex justify-center flex-wrap gap-4">
          <button 
          href="https://expo.dev/accounts/ariifff/projects/kaamigo/builds/39b66d65-8ebd-49aa-ae06-15ca65599cdb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition transform hover:scale-105 shadow">
            📥 Download the App
          </button>
          <button className="border-2 border-purple-600 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-100 transition transform hover:scale-105 shadow">
            Join as a Freelancer / Client
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-12 px-6 bg-gradient-to-t from-purple-300 via-violet-200 to-indigo-100">
        <h2 className="text-4xl text-center text-black mb-10">
          Why Kaamigo? Benefits for Everyone
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            [
              "👤",
              "Verified Talent",
              "Access skilled freelancers from Tier 2/3 India.",
            ],
            [
              "💼",
              "Quick Hiring",
              "Post gigs, review applications, and hire efficiently.",
            ],
            [
              "🎤",
              "Voice Communication",
              "Bridge language gaps with voice notes & calls.",
            ],
            [
              "🎥",
              "Showcase Reels",
              "Display skills via short, powerful videos.",
            ],
            [
              "📈",
              "Flexible Work",
              "Choose projects, set terms, and earn better.",
            ],
            [
              "🪙",
              "Tier 2/3 Focus",
              "Get matched with nearby clients or workers.",
            ],
          ].map(([emoji, title, desc], idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white shadow hover:shadow-md transition border border-purple-200"
            >
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-18 px-6 bg-gradient-to-br from-orange-200 to-purple-300">
        <h2 className="text-4xl text-center mb-14 text-black">
          See Skills in Action: <span className="text-purple-600">Top Reels</span>
        </h2>

        <div className="flex overflow-x-auto mx-auto justify-center gap-6 max-w-6xl px-1 pb-6 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white border border-orange-300 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out p-5 cursor-pointer"
            >
              {/* Placeholder for Reel Preview */}
              <div className="h-40 bg-orange-100 rounded-lg mb-4 flex items-center justify-center text-3xl text-orange-400">
                🎥
              </div>

              {/* Reel Info */}
              <h3 className="text-purple-700 font-bold text-base mb-1">
                Cooking Reel #{i}
              </h3>
              <p className="text-gray-500 text-xs">By Freelancer #{i} • 1.2k views</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
    <section className="py-16 px-6 bg-purple-200 overflow-hidden">
      <h2 className="text-4xl text-center mb-12">
        What Our Users Say
      </h2>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="flex gap-6 animate-carousel">
          {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-purple-50 border border-purple-200 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-sm italic text-gray-700 mb-4">
                "Kaamigo made it easier for me to find work without the stress!"
              </p>
              <h4 className="font-semibold text-purple-700 text-sm">User #{i}</h4>
              <span className="text-xs text-orange-500">Freelancer</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 30s linear infinite;
        }
      `}</style>
    </section>

      {/* App Download CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-300 via-pink-200 to-orange-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-purple-800 leading-snug">
            Get the <span className="text-orange-600">Kaamigo</span> App Today!
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-xl">
            Experience <span className="font-semibold text-purple-600">voice-first freelancing</span> on the go. Download the app to connect, collaborate, and get hired — anytime, anywhere.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button 
            href="https://expo.dev/accounts/ariifff/projects/kaamigo/builds/39b66d65-8ebd-49aa-ae06-15ca65599cdb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow">
              📱 Android App
            </button>
            <button className="border-2 border-purple-600 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-100 transition-all duration-200 transform hover:scale-105 shadow">
              🍏 iOS Coming Soon
            </button>
          </div>
        </div>

        {/* Visual Placeholder */}
        <div className="md:w-1/3 w-full h-64 bg-purple-100 rounded-2xl shadow-inner flex items-center justify-center text-6xl text-purple-300">
          📱
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-[#181B23] py-6 px-6 text-gray-300 text-center md:text-left animate-fade-in">
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

    </div>
  );
};

export default LandingPage;
