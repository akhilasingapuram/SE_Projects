import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-red-600">
        <a href="#home">
          🍽️ TasteBite
          </a>
          </div>

        {/*Desktop Menu*/}
        <div className="space-x-4 hidden md:flex">
          <a href="#menu" className="hover:text-red-500">
            Menu
          </a>
          <a href="#gallery" className="hover:text-red-500">
            Gallery
          </a>
          <a href="#contact" className="hover:text-red-500">
            Contact
          </a>
        </div>

        {/*Hamburger Icon(Mobile)*/}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <a href="#menu" className="block py-2 hover:text-red-500">
            Menu
          </a>
          <a href="#gallery" className="block py-2 hover:text-red-500">
            Gallery
          </a>
          <a href="#contact" className="block py-2 hover:text-red-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
