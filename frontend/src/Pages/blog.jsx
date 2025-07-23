import React from "react";

const blogs = [
  {
    title: "A Better Future Through Local Freelance Work",
    excerpt: "Discover how Kaamigo is changing lives by connecting local freelancers with real opportunities.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    link: "#",
    date: "Jul 18, 2025",
  },
  {
    title: "Scaling Up: Success Stories of Rural Youth",
    excerpt: "Meet the faces behind the freelancing revolution in Tier 2/3 cities.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    link: "#",
    date: "Jul 12, 2025",
  },
  {
    title: "Top 5 In-Demand Digital Skills in 2025",
    excerpt: "Stay ahead with our list of the most sought-after freelance skills in the digital economy.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    link: "#",
    date: "Jul 2, 2025",
  },
  {
    title: "Women Empowerment through Remote Work",
    excerpt: "See how Kaamigo is creating flexible job opportunities for women across India.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    link: "#",
    date: "Jun 29, 2025",
  },
  {
    title: "Freelancing in Local Languages",
    excerpt: "Explore the power of regional content and communication for rural freelancers.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    link: "#",
    date: "Jun 21, 2025",
  },
  {
    title: "How to Find Your First Client on Kaamigo",
    excerpt: "Tips and tricks to kickstart your freelance journey the right way.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    link: "#",
    date: "Jun 15, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 px-2 relative overflow-hidden">
      {/* Sparkling Gradient Banner */}
      <div className="max-w-8xl mx-auto mb-16 relative z-10">
        <div className="relative h-64 bg-gradient-to-tr from-purple-700 via-pink-400 to-orange-400 rounded-3xl flex items-center justify-center text-white font-extrabold text-4xl md:text-5xl tracking-wide shadow-2xl overflow-hidden animate-gradient-x">
          🌟 Kaamigo Stories
          <div className="absolute inset-0 bg-stars bg-repeat opacity-30"></div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
        {blogs.map((post, i) => (
          <div
            key={i}
            className="bg-white border border-purple-100 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 group relative overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 bg-white/90 text-xs text-purple-700 font-bold px-3 py-1 rounded-full shadow-md">
              {post.date}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-2 group-hover:text-purple-900 transition">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-orange-500 font-semibold text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-orange-400 rounded-2xl text-white p-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mb-8 animate-pulse shadow-lg">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Want to know more about Kaamigo?</h2>
          <p className="text-sm text-blue-100">
            We regularly publish stories of inspiring freelancers, success journeys, and tips to level up your career.
          </p>
        </div>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition-all duration-300 flex items-center gap-2">
          <span>Explore Stories</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

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
            <a href="/" className="hover:text-purple-400 transition">Home</a>
            <a href="/explore" className="hover:text-purple-400 transition">Explore</a>
            <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
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

export default Blog;
