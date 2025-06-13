import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Timeless
          <span className="block font-normal">Elegance</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Discover our exclusive collection of luxury fashion pieces crafted with unparalleled attention to detail and sophistication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300">
            EXPLORE COLLECTION
          </button>
          <button className="border border-white text-white px-8 py-3 font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300">
            WATCH FILM
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-px h-16 bg-white/50 mx-auto mb-2"></div>
        <p className="text-white text-sm font-light tracking-widest">SCROLL</p>
      </div>
    </section>
  );
};

export default Hero;