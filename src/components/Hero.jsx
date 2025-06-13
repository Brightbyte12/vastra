import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const slides = [
    {
      image: "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Couture",
      subtitle: "Redefined",
      description: "Where tradition meets innovation in the art of haute couture",
      cta: "Explore Collection"
    },
    {
      image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Bridal",
      subtitle: "Elegance",
      description: "Timeless designs for your most precious moments",
      cta: "View Bridal"
    },
    {
      image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Ready to",
      subtitle: "Wear",
      description: "Contemporary luxury for the modern connoisseur",
      cta: "Shop Now"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="mb-8 overflow-hidden">
              <p className="text-sm font-light tracking-[0.4em] uppercase mb-6 text-rose-300 animate-fade-in-up">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-7xl md:text-9xl font-thin mb-8 tracking-tight leading-none text-white animate-fade-in-up animation-delay-200">
                {slides[currentSlide].title}
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-12 font-light max-w-xl leading-relaxed text-white/80 animate-fade-in-up animation-delay-400">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
              <button className="group relative overflow-hidden bg-transparent border border-white/30 text-white px-12 py-4 font-light tracking-[0.2em] uppercase text-sm hover:border-rose-300 transition-all duration-500">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  {slides[currentSlide].cta}
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              <button 
                className="group flex items-center gap-3 text-white/80 hover:text-rose-300 transition-colors duration-300 font-light tracking-[0.2em] uppercase text-sm"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:border-rose-300 transition-colors duration-300">
                  <Play className="h-4 w-4 ml-1" />
                </div>
                Watch Film
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 text-white/60 hover:text-rose-300 transition-colors duration-300"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 text-white/60 hover:text-rose-300 transition-colors duration-300"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-px transition-all duration-500 ${
              index === currentSlide ? 'bg-rose-300' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-8 z-30 text-white/60">
        <div className="w-px h-20 bg-white/20 mx-auto mb-3 relative">
          <div className="w-px h-6 bg-rose-300 absolute top-0 animate-pulse"></div>
        </div>
        <p className="text-xs font-light tracking-[0.3em] uppercase">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;