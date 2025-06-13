import React from 'react';

const FeaturedCollections: React.FC = () => {
  const collections = [
    {
      title: "Spring Couture",
      subtitle: "2024 Collection",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      link: "#spring"
    },
    {
      title: "Evening Elegance",
      subtitle: "Premium Line",
      image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      link: "#evening"
    },
    {
      title: "Urban Sophistication",
      subtitle: "Contemporary",
      image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      link: "#urban"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-wide">
            Featured Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Each piece represents our commitment to exceptional craftsmanship and timeless design philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => window.location.href = collection.link}
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-6">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-light tracking-widest mb-1">{collection.subtitle}</p>
                  <h3 className="text-xl font-medium">{collection.title}</h3>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-black mb-2 group-hover:text-gray-600 transition-colors duration-200">
                  {collection.title}
                </h3>
                <p className="text-gray-500 text-sm tracking-wide">{collection.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;