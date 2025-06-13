import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-thin mb-6 tracking-wide text-white">Stay Connected</h3>
            <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Be the first to discover our latest collections, exclusive events, and behind-the-scenes stories from the world of Vastra Apparel.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border border-white/30 px-8 py-5 text-white placeholder-white/50 focus:outline-none focus:border-rose-300 transition-colors duration-300 font-light"
                required
              />
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 px-10 py-5 font-light tracking-[0.2em] uppercase text-sm transition-colors duration-300 flex items-center gap-3"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </div>
            {isSubscribed && (
              <p className="text-rose-300 text-center mt-6 font-light">Thank you for subscribing!</p>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-light mb-8 tracking-[0.2em] text-white">Vastra Apparel</h3>
            <p className="text-white/60 leading-relaxed mb-10 max-w-md font-light">
              Since 2001, Vastra Apparel has been synonymous with luxury, innovation, and contemporary Indian fashion. 
              Experience timeless elegance that transcends generations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-rose-300" />
                <span className="text-white/70 font-light">+91 11 4567 8900</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-rose-300" />
                <span className="text-white/70 font-light">contact@vastraapparel.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-rose-300" />
                <span className="text-white/70 font-light">New Delhi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-8">
              <a href="#" className="text-white/60 hover:text-rose-300 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-rose-300 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-rose-300 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-rose-300 transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-light mb-8 tracking-[0.2em] uppercase text-white">Collections</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Couture</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Bridal Couture</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Ready to Wear</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Menswear</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Accessories</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Jewelry</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-8 tracking-[0.2em] uppercase text-white">Services</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Personal Styling</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Custom Couture</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Bridal Consultation</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Alteration Services</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Store Locator</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors duration-300">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-10 mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/50 text-sm mb-6 md:mb-0 font-light">
              <p>&copy; 2024 Vastra Apparel. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-white/50 font-light">
              <a href="#" className="hover:text-rose-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-rose-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-rose-300 transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="hover:text-rose-300 transition-colors duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;