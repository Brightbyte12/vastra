import React, { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const FeaturedCollections = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const collections = [
    {
      id: 1,
      title: "Couture Collection",
      subtitle: "Haute Couture",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      description: "Exquisite handcrafted pieces that embody the pinnacle of fashion artistry",
      link: "#couture"
    },
    {
      id: 2,
      title: "Bridal Couture",
      subtitle: "Wedding Collection",
      image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      description: "Timeless elegance for your most precious moments",
      link: "#bridal"
    },
    {
      id: 3,
      title: "Ready to Wear",
      subtitle: "Contemporary Line",
      image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      description: "Modern luxury for the contemporary connoisseur",
      link: "#ready-to-wear"
    },
    {
      id: 4,
      title: "Accessories",
      subtitle: "Luxury Details",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      description: "Refined accessories that complete your sophisticated look",
      link: "#accessories"
    }
  ];

  return (
    <section id="collections" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <p className="text-sm font-light tracking-[0.4em] uppercase mb-6 text-rose-300">
            Our Collections
          </p>
          <h2 className="text-6xl md:text-7xl font-thin text-white mb-8 tracking-tight">
            Artistry
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Each collection represents our unwavering commitment to exceptional craftsmanship, 
            timeless design, and the art of haute couture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(collection.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => window.location.href = collection.link}
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-[3/4] mb-8">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Wishlist Button */}
                <button className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 border border-white/20">
                  <Heart className="h-4 w-4 text-white" />
                </button>

                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
                  <p className="text-xs font-light tracking-[0.3em] mb-3 text-rose-300 uppercase">{collection.subtitle}</p>
                  <h3 className="text-2xl font-light mb-4 tracking-wide">{collection.title}</h3>
                  <p className="text-sm mb-6 opacity-90 font-light leading-relaxed">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light tracking-[0.2em] uppercase">Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-light text-white mb-2 group-hover:text-rose-300 transition-colors duration-300 tracking-wide">
                  {collection.title}
                </h3>
                <p className="text-white/60 text-sm tracking-[0.2em] uppercase font-light">{collection.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="group relative overflow-hidden bg-transparent border border-white/30 text-white px-16 py-5 font-light tracking-[0.3em] uppercase text-sm hover:border-rose-300 transition-all duration-500">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              View All Collections
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;