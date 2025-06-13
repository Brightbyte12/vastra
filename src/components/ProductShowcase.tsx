import React from 'react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      name: "Silk Evening Dress",
      price: "$2,450",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "Evening Wear"
    },
    {
      name: "Cashmere Blazer",
      price: "$1,890",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "Outerwear"
    },
    {
      name: "Leather Handbag",
      price: "$1,250",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "Accessories"
    },
    {
      name: "Wool Coat",
      price: "$2,890",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "Outerwear"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-wide">
            Signature Pieces
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our most coveted pieces, each one a testament to luxury and refined taste.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-white aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-black px-3 py-1 text-xs font-medium tracking-wide">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-black mb-2 group-hover:text-gray-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-900 font-light">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;