import { useState } from "react";
import { Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black navsticky shadow-md w-full z-50 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-5">
        
        <Link to="/" className="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            className="w-10 h-10 p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold text-gray-300">Сувениры</span>
        </Link>

        {/* Navbar menyusi */}
        <nav className={`md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in ${menuOpen ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-6 text-center md:text-left">
            <li>
              <Link to="/" className="block py-2 md:py-0 px-5 text-gray-400 hover:text-blue-500 transition-all duration-300">Bosh sahifa</Link>
            </li>
            <li>
              <Link to="/shop" className="block py-2 md:py-0 px-5 text-gray-400 hover:text-blue-500 transition-all duration-300">Do'kon</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 md:py-0 px-5 text-gray-400 hover:text-blue-500 transition-all duration-300">Biz haqimizda</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 md:py-0 px-5 text-gray-400 hover:text-blue-500 transition-all duration-300">Aloqa</Link>
            </li>
          </ul>
        </nav>

        <Link to="/cart" className="relative hidden md:flex items-center gap-3 px-6 py-2 text-lg font-bold text-white uppercase transition-all duration-300 
              bg-gradient-to-r from-green-500 to-yellow-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
          <SlBasketLoaded />
          Savat
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden focus:outline-none">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
