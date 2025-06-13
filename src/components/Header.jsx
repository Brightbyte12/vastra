import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  const shouldShowBackground = () => {
    return isScrolled || currentPath.startsWith('/men') || currentPath.startsWith('/women') || currentPath.startsWith('/collections');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      shouldShowBackground() ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-light tracking-wider text-white">
            VASTRA APPAREL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white/90 hover:text-rose-300 transition-colors duration-300 font-light text-sm tracking-[0.15em] uppercase ${
                isActive('/') ? 'text-rose-300' : ''
              }`}
            >
              Home
            </Link>

            {/* Men's Collection Dropdown */}
            <div className="relative group">
              <Link 
                to="/men"
                className={`text-white/90 hover:text-rose-300 transition-colors duration-300 font-light text-sm tracking-[0.15em] uppercase ${
                  isActive('/men') ? 'text-rose-300' : ''
                }`}
              >
                Men
              </Link>
              <div className="absolute top-full left-0 w-72 bg-black/95 backdrop-blur-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 mt-4 border border-white/10">
                <div className="p-8 space-y-4">
                  <Link to="/men/shirts" className="block w-full text-left text-white/70 hover:text-rose-300 transition-colors font-light tracking-wide">Shirts</Link>
                  <Link to="/men/pants" className="block w-full text-left text-white/70 hover:text-rose-300 transition-colors font-light tracking-wide">Pants</Link>
                  <Link to="/men/accessories" className="block w-full text-left text-white/70 hover:text-rose-300 transition-colors font-light tracking-wide">Accessories</Link>
                </div>
              </div>
            </div>

            {/* Women's Collection Dropdown */}
            <div className="relative group">
              <Link 
                to="/women"
                className={`text-white/90 hover:text-rose-300 transition-colors duration-300 font-light text-sm tracking-[0.15em] uppercase ${
                  isActive('/women') ? 'text-rose-300' : ''
                }`}
              >
                Women
              </Link>
              <div className="absolute top-full left-0 w-72 bg-black/95 backdrop-blur-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 mt-4 border border-white/10">
                <div className="p-8 space-y-4">
                  <Link to="/women/dresses" className="block w-full text-left text-white/70 hover:text-rose-300 transition-colors font-light tracking-wide">Dresses</Link>
                  <Link to="/women/tops" className="block w-full text-left text-white/70 hover:text-rose-300 transition-colors font-light tracking-wide">Tops</Link>
                  <Link to="/women/accessories" className="block w-full text-left text-white/70 hover:text-rose-300 transition-colors font-light tracking-wide">Accessories</Link>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-white/90 hover:text-rose-300 transition-colors duration-300 font-light text-sm tracking-[0.15em] uppercase ${
                isActive('/about') ? 'text-rose-300' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-white/90 hover:text-rose-300 transition-colors duration-300 font-light text-sm tracking-[0.15em] uppercase ${
                isActive('/contact') ? 'text-rose-300' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 text-white/90 hover:text-rose-300 transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-white/90 hover:text-rose-300 transition-colors duration-300">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-white/90 hover:text-rose-300 transition-colors duration-300">
              <User className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 text-white/90 hover:text-rose-300 transition-colors duration-300 relative">
              <ShoppingBag className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
            
          {/* Mobile Menu Button */}
            <button
            className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
        {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-light text-white/90 hover:text-rose-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/men"
              className="block px-3 py-2 text-base font-light text-white/90 hover:text-rose-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Men's Collection
            </Link>
            <Link
              to="/women"
              className="block px-3 py-2 text-base font-light text-white/90 hover:text-rose-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Women's Collection
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-light text-white/90 hover:text-rose-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-light text-white/90 hover:text-rose-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
                Contact
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-base font-light text-white/90 hover:text-rose-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({getCartCount()})
            </Link>
          </div>
          </div>
        )}
    </header>
  );
};

export default Header;