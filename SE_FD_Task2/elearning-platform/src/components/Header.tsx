// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow z-50">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
//         <Link to="/" className="text-2xl font-bold tracking-tight">
//           E-Learn
//         </Link>
//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-8">
//           <Link to="/" className="hover:text-blue-200 transition">Home</Link>
//           <Link to="/courses" className="hover:text-blue-200 transition">Courses</Link>
//         </nav>
//         {/* Hamburger (Mobile) */}
//         <button
//           className="md:hidden flex flex-col gap-1"
//           aria-label="Open menu"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="w-7 h-1 bg-white rounded" />
//           <span className="w-7 h-1 bg-white rounded" />
//           <span className="w-7 h-1 bg-white rounded" />
//         </button>
//       </div>
//       {/* Mobile Nav */}
//       {menuOpen && (
//         <nav className="md:hidden bg-blue-900 px-4 pb-4 flex flex-col gap-3">
//           <Link to="/" className="hover:text-blue-200 transition" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link to="/courses" className="hover:text-blue-200 transition" onClick={() => setMenuOpen(false)}>Courses</Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">E-Learn</div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
      </nav>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
