import { Link } from 'react-router-dom';
import { SlBasketLoaded } from "react-icons/sl";

export default function Navbar() {
    return (
        <header className="bg-black shadow-md w-full z-50 top-0 left-0">
            <div className="container mx-auto flex gap-3 flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-red-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl font-bold text-gray-800">Сувениры</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition-all duration-300">First Link</Link>
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition-all duration-300">Second Link</Link>
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition-all duration-300">Third Link</Link>
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition-all duration-300">Fourth Link</Link>
                </nav>
                <Link to="/cart" className="relative flex items-center gap-3 px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-green-500 to-yellow-600 rounded-lg 
                      shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 overflow-hidden">
                        <SlBasketLoaded/>

                    Savat
                </Link>
            </div>
        </header>
    );
}