import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">LUXE</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Timeless elegance meets contemporary sophistication. Experience luxury fashion that transcends seasons and trends.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Collections</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Women</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Men</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">New Arrivals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-medium mb-2">Stay Updated</h4>
              <p className="text-gray-400">Subscribe to receive exclusive offers and latest collections.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-700 px-4 py-2 w-full md:w-64 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-200"
              />
              <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-colors duration-200">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; 2024 LUXE. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;