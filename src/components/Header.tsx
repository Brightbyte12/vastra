import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight text-black">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#collections" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
              Collections
            </a>
            <a href="#women" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
              Women
            </a>
            <a href="#men" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
              Men
            </a>
            <a href="#accessories" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
              Accessories
            </a>
            <a href="#about" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
              About
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <ShoppingBag className="h-5 w-5" />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#collections" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
                Collections
              </a>
              <a href="#women" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
                Women
              </a>
              <a href="#men" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
                Men
              </a>
              <a href="#accessories" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
                Accessories
              </a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium">
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;