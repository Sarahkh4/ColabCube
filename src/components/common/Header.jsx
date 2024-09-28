import React from "react";
import { FaSearch, FaCommentDots } from "react-icons/fa";
import { FiBell,FiMessageSquare } from "react-icons/fi";



function Header() {
  return (
    <div className="flex content-start items-center h-24 p-4">
      {/* Left Section: Search bar */}
      <div className="flex items-center space-x-2 bg-white p-2 rounded-full w-full max-w-md">
        <FaSearch className="" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right Section: Icons and profile */}
      <div className="flex items-center ml-40 space-x-4 ">
        {/* Notification icons */}
        <div className="border-2 rounded-full border-black">
          <FiMessageSquare className="w-8 p-1 h-8 text-gray-600 cursor-pointer" />
        </div>
        <div className="border-2 rounded-full border-black">
          <FiBell className="w-8 h-8 p-1 text-gray-600 cursor-pointer" />
        </div>

        {/* Profile and name */}
        <div className="flex items-center bg-white rounded-full space-x-2">
          <div className="p-2 relative">
            {/* Profile Icon */}
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
              R
            </div>
          </div>
          <div className="p-2 hidden sm:block">
            <span className="text-gray-800 font-medium">Ceejay James</span>
            <span className="ml-1 text-gray-600">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
