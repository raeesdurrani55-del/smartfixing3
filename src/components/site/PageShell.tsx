import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";

type Props = {
  children: ReactNode;
  title?: string;
};

export function PageShell({ children, title }: Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-6 text-sm flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> +971 50 123 4567</span>
          <span className="hidden md:flex items-center gap-1"><MapPin size={14} /> Dubai, UAE</span>
        </div>
        <div className="flex items-center gap-1"><Clock size={14} /> Open 24/7</div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            SmartFixing<span className="text-orange-500">Dubai</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/warranty" className="hover:text-blue-600">Warranty</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">SmartFixing</h3>
            <p className="text-gray-400">Expert repair services for iPhones, Samsung, iPads, and Laptops in Dubai.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/warranty">Warranty Policy</Link></li>
              <li><Link to="/locations">Our Locations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 text-sm">Email: info@smartfixing.com</p>
            <p className="text-gray-400 text-sm">Address: Deira, Dubai, UAE</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2026 SmartFixing Dubai. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default PageShell;
