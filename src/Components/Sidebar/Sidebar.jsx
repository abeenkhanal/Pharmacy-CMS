import { FiHome, FiGrid, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { icon: <FiHome />, label: "Dashboard", path: "/" },
  { icon: <FiGrid />, label: "Hero", path: "/hero" },
  { icon: <FiGrid />, label: "Home Banner", path: "/banner" },
  { icon: <FiGrid />, label: "Revolutionize", path: "/revolutionize" },
  { icon: <FiGrid />, label: "Features", path: "/features" },
  { icon: <FiGrid />, label: "Testimonials", path: "/testimonials" },
  { icon: <FiGrid />, label: "About Us", path: "/aboutus" },
  { icon: <FiGrid />, label: "Tailored", path: "/tailored" },
  { icon: <FiGrid />, label: "Connect", path: "/connect" },
];

const pageLayoutSubItems = [
  { label: "Features", path: "/pagelayout/features" },
  { label: "Revolutionize", path: "/pagelayout/revolutionize" },
  { label: "Tailored", path: "/pagelayout/tailored" },
  { label: "Sidebar", path: "/pagelayout/sidebar" },
  { label: "Connect", path: "/pagelayout/connect" },
];

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  return (
    <div className="h-screen w-64 bg-white shadow-md fixed top-0 left-0 overflow-y-auto z-40">
      <div className="flex items-center justify-center py-6 border-b border-gray-200">
        <img src="" alt="Logo" className="h-8" />
      </div>
      <div className="p-4">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <span className="text-green-500 text-xl">{item.icon}</span>
            <span className="ml-4 text-gray-700 text-sm font-medium">
              {item.label}
            </span>
          </Link>
        ))}
        <div className="mt-4">
          <div
            onClick={toggleDropdown}
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <span className="text-green-500 text-xl">
              <FiGrid />
            </span>
            <span className="ml-4 text-gray-700 text-sm font-medium">
              Page Layout
            </span>
            <span className="ml-auto text-gray-500">
              {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </div>
          {isDropdownOpen && (
            <div className="ml-8 mt-2">
              {pageLayoutSubItems.map((subItem, index) => (
                <Link
                  key={index}
                  to={subItem.path}
                  className="block p-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium cursor-pointer"
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
