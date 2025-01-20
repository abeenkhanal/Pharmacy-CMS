import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Navigation from './Components/Common/Navigation/Navigation';
function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Navigation />
        <div className="pt-16 px-8">
          <h1 className="text-2xl font-bold">Main Content Here</h1>
          <p className="text-gray-600">
            This is the main content area. Your content will be displayed below the navigation bar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;