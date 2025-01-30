import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-300 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Abeen Khanal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
