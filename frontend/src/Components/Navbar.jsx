import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import { FiLogOut } from "react-icons/fi";
import Logo from "../logo.png";
import "../index.css"; 

// Dynamic styling for active nav links
const navLinkClass = ({ isActive }) =>
  `py-2 px-2 sm:px-3 rounded transition-colors duration-300 font-medium text-sm sm:text-base ${
    isActive
      ? "text-purple-700 border-b-2 sm:border-b-4 border-purple-500"
      : "hover:text-purple-500 text-gray-800"
  }`;
const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <nav className="w-full flex flex-wrap items-center justify-between px-4 sm:px-6 py-1 border-b shadow-sm bg-gray-100 transition-all duration-300 text-sm sm:text-base">
      <NavLink
        to="/"
        className="text-xl sm:text-2xl font-bold text-purple-700 hover:text-purple-800 transition-colors duration-300 cursor-pointer"
      >
        <img src={Logo} alt="" className=" lg:w-22 md:w-20 w-18"/>
      </NavLink>

      <div className="hidden lg:flex flex-wrap gap-x-2">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/explore" className={navLinkClass}>
          Explore
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About Us
        </NavLink>
        <NavLink to="/partners" className={navLinkClass}>
          Partners
        </NavLink>
        <NavLink to="/coins" className={navLinkClass}>
          Coins
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact Us
        </NavLink>
        <NavLink to="/blog" className={navLinkClass}>
          Blog
        </NavLink>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4 mt-3 sm:mt-0">
        {!isSignedIn ? (
          <>
            <NavLink
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors py-1 px-3 rounded hover:bg-orange-50"
            >
              Login
            </NavLink>
            <NavLink
              to="/sign"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow"
            >
              Sign Up
            </NavLink>
          </>
        ) : (
          <>
            <div className="text-sm font-medium text-purple-700 hover:text-orange-500 py-1 px-2 rounded hover:bg-orange-50">
              Hi, {user?.firstName || "User"}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-md transition-colors text-sm font-medium"
            >
              <FiLogOut className="text-lg" /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;