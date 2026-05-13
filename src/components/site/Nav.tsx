import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-700">
              SmartFixing
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link to="/warranty" className="text-gray-700 hover:text-blue-600 font-medium">Warranty</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <a href="tel:+971501234567" className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          <Link to="/" className="block text-gray-700 font-medium">Home</Link>
          <Link to="/services" className="block text-gray-700 font-medium">Services</Link>
          <Link to="/warranty" className="block text-gray-700 font-medium">Warranty</Link>
          <Link to="/contact" className="block text-gray-700 font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
