import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "/logo.svg";
import CV from "../assets/CV.pdf"; // Import the CV file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <Link
          to="/"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          Home
        </Link>
        
        <Link
          to="/projects"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          Contact
        </Link>
        <a
          href={CV}
          download="CV.pdf"
          className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-md"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center py-4 gap-4 md:hidden shadow-lg">
          <Link
            to="/"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
       
          <Link
            to="/projects"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a
            href={CV}
            download="CV.pdf"
            className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
