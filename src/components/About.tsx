import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-8 tracking-wide">
              Crafting Excellence
              <span className="block text-2xl md:text-3xl text-gray-600 mt-2">Since 1985</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                For nearly four decades, LUXE has been synonymous with uncompromising quality and timeless elegance. Our atelier combines traditional craftsmanship with contemporary vision.
              </p>
              <p>
                Each piece in our collection is meticulously crafted by master artisans who have dedicated their lives to perfecting their craft. We source only the finest materials from around the world.
              </p>
              <p>
                From our heritage workshop in Paris to our contemporary design studios, every creation embodies our commitment to excellence and our passion for luxury fashion.
              </p>
            </div>
            <div className="mt-10">
              <button className="border border-black text-black px-8 py-3 font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                OUR STORY
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;