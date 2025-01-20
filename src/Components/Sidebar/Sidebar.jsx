// src/Components/Sidebar/Sidebar.js
import React from 'react';
import {
  FiHome,
  FiGrid,
  FiClock,
  FiFileText,
  FiTarget,
  FiCalendar,
  FiShoppingBag,
  FiBox,
  FiFilm,
  FiLayers,
  FiTable,
  FiCreditCard,
} from 'react-icons/fi';

const menuItems = [
  { icon: <FiHome />, label: 'Dashboard' },
  { icon: <FiGrid />, label: 'Apps' },
  { icon: <FiClock />, label: 'UI Kits' },
  { icon: <FiFileText />, label: 'Forms' },
  { icon: <FiTarget />, label: 'Board' },
  { icon: <FiCalendar />, label: 'Calendar' },
  { icon: <FiShoppingBag />, label: 'Products' },
  { icon: <FiBox />, label: 'Icons' },
  { icon: <FiFilm />, label: 'Animations' },
  { icon: <FiLayers />, label: 'Components' },
  { icon: <FiTable />, label: 'Table' },
  { icon: <FiCreditCard />, label: 'Cards' },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md fixed top-0 left-0 overflow-y-auto z-40">
      <div className="flex items-center justify-center py-6 border-b border-gray-200">
        <img
          src=""
          alt="Logo"
          className="h-8"
        />
      </div>
      <div className="p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <span className="text-green-500 text-xl">{item.icon}</span>
            <span className="ml-4 text-gray-700 text-sm font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;