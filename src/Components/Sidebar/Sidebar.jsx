import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiImage,
  FiSettings,
  FiBarChart,
  FiUser,
  FiHelpCircle,
  FiLayers,
  FiSliders,
  FiDollarSign,
  FiTrendingUp,
  FiBookmark,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";

const menuItems = [
  { icon: <FiHome />, label: "Dashboard", path: "/" },
  { icon: <FiImage />, label: "Hero", path: "/hero" },
  { icon: <FiImage />, label: "Home Banner", path: "/banner" },
  { icon: <FiBarChart />, label: "Revolutionize", path: "/revolutionize" },
  { icon: <FiSettings />, label: "Features", path: "/features" },
  { icon: <FiUser />, label: "Testimonials", path: "/testimonials" },
  { icon: <FiLayers />, label: "About Us", path: "/aboutus" },
  { icon: <FiSliders />, label: "Tailored", path: "/tailored" },
  { icon: <MdOutlineConnectWithoutContact />, label: "Connect", path: "/connect" },
  { icon: <FiDollarSign />, label: "Pricing", path: "/pricing" },
  { icon: <FiTrendingUp />, label: "Discover", path: "/discover" },
  { icon: <RiQuestionAnswerLine />, label: "FAQ", path: "/faq" },
  { icon: <FiBookmark />, label: "Transform", path: "/transform" },
  { icon: <FiCheckCircle />, label: "Progress Bar", path: "/progressbar" },
  { icon: <FiHelpCircle />, label: "Why Us", path: "/whyus" },
  { icon: <FiSettings />, label: "Vision", path: "/vision" },
  { icon: <FiTrendingUp />, label: "Pharmacy Solution", path: "/pharmacysolution" },
];

const pageLayoutSubItems = [
  { label: "Features", path: "/pagelayout/features" },
  { label: "Revolutionize", path: "/pagelayout/revolutionize" },
  { label: "Tailored", path: "/pagelayout/tailored" },
  { label: "Connect", path: "/pagelayout/connect" },
  { label: "Pricing", path: "/pagelayout/pricing" },
  { label: "Discover", path: "/pagelayout/discover" },
  { label: "FAQ", path: "/pagelayout/faq" },
  { label: "Transform", path: "/pagelayout/transform" },
  { label: "Pharmacy Solution", path: "/pagelayout/pharmacysolution" },
  { label: "Testimonials", path: "/pagelayout/testimonials" },

];

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-screen w-64 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg fixed top-0 left-0 overflow-y-auto z-40">
      <div className="flex items-center justify-center py-6 border-b border-gray-200">
        <div className="h-14 w-24  text-white text-lg font-bold rounded-full flex items-center justify-center ">
          <img src="./mainlogo.png" alt="" />
        </div>
      </div>
      <div className="p-4">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="flex items-center p-4 rounded-lg hover:bg-gray-300 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-black text-2xl font-bold group-hover:text-gray-800 transition">
              {item.icon}
            </span>
            <span className="ml-4 text-gray-700 text-sm font-medium group-hover:text-black transition">
              {item.label}
            </span>
          </Link>
        ))}
        <div className="mt-4">
          <div
            onClick={toggleDropdown}
            className="flex items-center p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-black text-2xl font-bold group-hover:text-gray-800 transition">
              <FiLayers />
            </span>
            <span className="ml-4 text-gray-700 text-sm font-medium group-hover:text-black transition">
              Page Layout
            </span>
            <span className="ml-auto text-black">
              {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </div>
          {isDropdownOpen && (
            <div className="ml-6 mt-2">
              {pageLayoutSubItems.map((subItem, index) => (
                <Link
                  key={index}
                  to={subItem.path}
                  className="block p-2 rounded-lg hover:bg-gray-300 text-gray-700 text-sm font-medium transition cursor-pointer"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
