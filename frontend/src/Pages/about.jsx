import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  { name: 'Aditi Sharma', role: 'Co-Founder', img: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Rohan Verma', role: 'CTO', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Sneha Gupta', role: 'CMO', img: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { name: 'Aryan Mehta', role: 'Product Lead', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
];

const AboutPage = () => {
  return (
    <div className="bg-purple-200 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-10 px-4 bg-gradient-to-r from-purple-300 to-orange-300">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Our Mission</h1>
        <p className="max-w-3xl mx-auto text-lg">
          To empower everyday individuals across India by making social freelance opportunities accessible,
          trusted, and voice-driven - bridging skill with demand through reels, real-time discovery, and regional inclusivity.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-12 max-w-5xl mx-auto">
        <div className="bg-white shadow-lg p-6 rounded-xl text-center border border-purple-100">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Goal</h3>
          <p>
            We strive to connect freelancers and businesses through voice-first, reel-based storytelling,
            making work accessible to Tier 2/3 India.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl text-center border border-orange-100">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Our Vision</h3>
          <p>
            To be India’s most trusted freelance ecosystem focused on inclusivity, opportunity, and innovation.
          </p>
        </div>
      </section>

      {/* Why Kaamigo Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Why Kaamigo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Voice + Video Discovery</h4>
            <p>We make it easy to find and hire freelancers using reels, voice search, and maps- no typing required.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Built for Bharat</h4>
            <p>Low-data design and multilingual support make Kaamigo perfect for Tier 2/3 cities and rural India.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Trust Through Transparency</h4>
            <p>Freelancer reels, ratings, and reviews create visibility, proof of skill, and real-time connections.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Opportunity Without Barriers</h4>
            <p>Anyone can join and start working—no certification or middleman needed.</p>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Together, We Find A Way</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="font-bold text-2xl text-orange-500 mb-2">Who we are</h4>
            <p className="text-md">A team of dreamers from Bharat creating voice-first tech for employment.</p>
          </div>
          <div>
            <h4 className="font-bold text-2xl text-orange-500 mb-2">How we help</h4>
            <p className="text-md">By matching people with opportunities via short reels and voice.</p>
          </div>
          <div>
            <h4 className="font-bold text-2xl text-orange-500 mb-2">What we do</h4>
            <p className="text-md">Bridge the skill-access gap with trust, simplicity, and community.</p>
          </div>
          <div>
            <h4 className="font-bold text-2xl text-orange-500 mb-2">Why we care</h4>
            <p className="text-md">We believe talent exists everywhere - it just needs a chance.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-purple-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-24 h-24 mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold text-purple-600">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-10 px-6 bg-gradient-to-r from-purple-200 to-orange-100">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Stay Connected</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-700 w-full max-w-md focus:outline-none"
          />
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
            Subscribe
          </button>
          <div className="flex gap-4 mt-4">
            <a href="#"><FaInstagram className="text-pink-500 text-xl" /></a>
            <a href="#"><FaLinkedin className="text-blue-700 text-xl" /></a>
            <a href="#"><FaTwitter className="text-blue-500 text-xl" /></a>
            <a href="mailto:info@kaamigo.com"><FaEnvelope className="text-gray-600 text-xl" /></a>
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

export default AboutPage;
