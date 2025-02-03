import React from 'react';
import { FiSearch, FiBell, FiMail } from 'react-icons/fi';
const Navigation = () => {
  return (
    <div className="fixed left-64 top-0 right-0 h-[104px] bg-white shadow-md z-30 flex items-center justify-between px-6">
      <div className="flex items-center border border-green-300 rounded-full px-4 py-2 w-80">
          <FiSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search here..."
            className="ml-3 bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"/>
        </div>
      <div className="flex items-center space-x-4">
      <FiBell className="text-gray-500 text-xl cursor-pointer relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-300 rounded-full border border-white"></span>
        </FiBell>
        <FiMail className="text-gray-500 text-xl cursor-pointer relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-300 rounded-full border border-white"></span>
        </FiMail>
        <img
          src="https://images.pexels.com/photos/20230634/pexels-photo-20230634/free-photo-of-model-posing-in-white-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="User"
          className="w-8 h-8 rounded-full"/>
      </div>
    </div>
  );
};

export default Navigation;
