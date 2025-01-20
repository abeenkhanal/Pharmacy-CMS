// src/components/Navigation.js
import React from "react";
import { FiSearch, FiBell, FiMail } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 z-10">

      <div className="text-lg font-bold text-green-600">My App</div>

      <div className="flex items-center space-x-6">
         <div className="flex items-center flex-grow border border-green-300 rounded-full">
        <FiSearch className="text-gray-500 text-lg ml-3" />
        <input
          type="text"
          placeholder="Search here..."
          className="ml-2 bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      <div className="flex items-center space-x-6">
      <FiBell className="text-gray-500 text-xl cursor-pointer relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-300 rounded-full border border-white"></span>
        </FiBell>
        <FiMail className="text-gray-500 text-xl cursor-pointer relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-300 rounded-full border border-white"></span>
        </FiMail>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
       
      </div>
    </div>
  );
};

export default Navigation;
