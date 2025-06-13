import React, { useState } from 'react';
import { Play, Award, Users, Globe, Calendar } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('heritage');

  const tabs = [
    { id: 'heritage', name: 'Heritage', icon: Calendar },
    { id: 'craftsmanship', name: 'Craftsmanship', icon: Award },
    { id: 'artisans', name: 'Artisans', icon: Users },
    { id: 'global', name: 'Global Presence', icon: Globe }
  ];

  const tabContent = {
    heritage: {
      title: "Two Decades of Excellence",
      subtitle: "Since 2001",
      description: "Founded by the visionary duo Shantanu and Nikhil, our atelier has been at the forefront of contemporary Indian fashion. From humble beginnings to becoming one of India's most celebrated fashion houses, we continue to redefine luxury.",
      stats: [
        { number: "2001", label: "Founded" },
        { number: "50+", label: "Fashion Shows" },
        { number: "20+", label: "Years of Excellence" }
      ]
    },
    craftsmanship: {
      title: "Artisanal Excellence",
      subtitle: "Handcrafted Perfection",
      description: "Each piece is a testament to exceptional craftsmanship, combining traditional Indian techniques with contemporary design sensibilities. Our artisans dedicate months to perfecting every intricate detail.",
      stats: [
        { number: "200+", label: "Craft Hours" },
        { number: "50", label: "Quality Checks" },
        { number: "5-7", label: "Years Training" }
      ]
    },
    artisans: {
      title: "Master Craftspeople",
      subtitle: "Skilled Artisans",
      description: "Our workshops employ over 200 skilled artisans across India. Each craftsperson undergoes extensive training to master the intricate techniques required to create our exceptional couture pieces.",
      stats: [
        { number: "200+", label: "Artisans" },
        { number: "8", label: "Workshops" },
        { number: "100%", label: "Made in India" }
      ]
    },
    global: {
      title: "International Presence",
      subtitle: "Global Fashion",
      description: "From the runways of Paris Fashion Week to boutiques in New York and Dubai, Shantanu & Nikhil brings Indian luxury to discerning clients around the world.",
      stats: [
        { number: "25+", label: "Countries" },
        { number: "15+", label: "Stores" },
        { number: "4", label: "Continents" }
      ]
    }
  };

  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm font-light tracking-[0.4em] uppercase mb-6 text-rose-300">
            Shantanu & Nikhil
          </p>
          <h2 className="text-6xl md:text-7xl font-thin text-white mb-8 tracking-tight">
            Our Story
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            The art of couture has been at the heart of Shantanu & Nikhil since 2001. 
            Discover the heritage, craftsmanship, and innovation that define our atelier.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 font-light tracking-[0.2em] uppercase text-sm transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/70 border-white/30 hover:text-white hover:border-white/60'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-light tracking-[0.4em] uppercase mb-6 text-rose-300">
              {tabContent[activeTab].subtitle}
            </p>
            <h3 className="text-5xl md:text-6xl font-thin text-white mb-10 tracking-tight">
              {tabContent[activeTab].title}
            </h3>
            <div className="space-y-6 text-white/70 leading-relaxed mb-12 font-light">
              <p className="text-lg">
                {tabContent[activeTab].description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {tabContent[activeTab].stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-thin text-white mb-3">{stat.number}</div>
                  <div className="text-sm text-white/60 tracking-[0.2em] uppercase font-light">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative overflow-hidden bg-transparent border border-white/30 text-white px-12 py-4 font-light tracking-[0.2em] uppercase text-sm hover:border-rose-300 transition-all duration-500">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Discover More
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              <button className="flex items-center gap-3 text-white/70 hover:text-rose-300 transition-colors duration-300 font-light tracking-[0.2em] uppercase text-sm">
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:border-rose-300 transition-colors duration-300">
                  <Play className="h-4 w-4 ml-1" />
                </div>
                Watch Story
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Shantanu & Nikhil Craftsmanship"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm p-8 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-thin text-white mb-2">2001</div>
                <div className="text-xs text-white/60 tracking-[0.3em] uppercase font-light">Founded</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-rose-500/90 backdrop-blur-sm text-white p-8">
              <div className="text-center">
                <div className="text-3xl font-thin mb-2">20+</div>
                <div className="text-xs tracking-[0.3em] uppercase font-light">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-32 text-center">
          <div className="relative inline-block">
            <img
              src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Shantanu & Nikhil Heritage"
              className="w-full max-w-5xl h-96 object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-8 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/30">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
          </div>
          <p className="text-white/60 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the journey of Shantanu & Nikhil through our exclusive documentary 
            showcasing 20 years of luxury craftsmanship and innovation in Indian fashion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;