import { useState } from 'react'
import './App.css'
import Navigation from './Components/Common/Navigation/Navigation'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 min-h-screen">
  
    <Navigation />


    <Sidebar />

    {/* Main Content */}
    <div className="ml-64 mt-16 p-6">
      <h1 className="text-2xl font-bold">Main Content Area</h1>
      <p className="mt-4 text-gray-600">
        This is the main content area. The navigation bar stays at the top,
        and the sidebar is on the left.
      </p>
    </div>
  </div>
  )
}

export default App
