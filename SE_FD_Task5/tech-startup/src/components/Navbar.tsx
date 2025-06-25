import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#hero">TechStart</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#appointment" className="text-gray-700 hover:text-blue-600">
            Appointment
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
          <a
            href="#services"
            className="block text-gray-700 hover:text-blue-600"
          >
            Services
          </a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a
            href="#appointment"
            className="block text-gray-700 hover:text-blue-600"
          >
            Appointment
          </a>
          <a
            href="#pricing"
            className="block text-gray-700 hover:text-blue-600"
          >
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
