import { FiHome, FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: <FiHome />, label: "Dashboard", path: "/" },
  { icon: <FiGrid />, label: "Hero", path: "/hero" },
  { icon: <FiGrid />, label: "Home Banner", path: "/banner" },
  { icon: <FiGrid />, label: "Revolutionize ", path: "/revolutionize" },
];

const Sidebar = () => {
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
      </div>
    </div>
  );
};

export default Sidebar;
