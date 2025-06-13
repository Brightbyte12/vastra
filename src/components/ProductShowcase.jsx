import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'couture', name: 'Couture' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'ready-to-wear', name: 'Ready to Wear' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: "Embroidered Lehenga",
      price: "₹2,50,000",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "couture",
      rating: 5,
      reviews: 127,
      isNew: true,
      description: "Handcrafted with intricate zardozi work"
    },
    {
      id: 2,
      name: "Silk Saree Gown",
      price: "₹1,80,000",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "bridal",
      rating: 4.8,
      reviews: 89,
      isNew: false,
      description: "Contemporary drape with traditional elegance"
    },
    {
      id: 3,
      name: "Cocktail Dress",
      price: "₹95,000",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "ready-to-wear",
      rating: 4.9,
      reviews: 203,
      isNew: false,
      description: "Modern silhouette with artistic detailing"
    },
    {
      id: 4,
      name: "Embellished Jacket",
      price: "₹75,000",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "ready-to-wear",
      rating: 4.6,
      reviews: 156,
      isNew: true,
      description: "Statement piece with metallic threadwork"
    },
    {
      id: 5,
      name: "Beaded Clutch",
      price: "₹25,000",
      image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "accessories",
      rating: 4.7,
      reviews: 94,
      isNew: false,
      description: "Hand-beaded luxury accessory"
    },
    {
      id: 6,
      name: "Bridal Lehenga Set",
      price: "₹4,50,000",
      image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "bridal",
      rating: 4.9,
      reviews: 312,
      isNew: false,
      description: "Complete bridal ensemble with dupatta"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-light tracking-[0.4em] uppercase mb-6 text-rose-300">
            Signature Pieces
          </p>
          <h2 className="text-6xl md:text-7xl font-thin text-white mb-8 tracking-tight">
            Masterpieces
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Discover our most coveted pieces, each one a testament to luxury and refined taste, 
            crafted with the finest materials and unparalleled attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 font-light tracking-[0.2em] uppercase text-sm transition-all duration-300 border ${
                selectedCategory === category.id
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white/70 border-white/30 hover:text-white hover:border-white/60'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-black aspect-[3/4] mb-8">
                {product.isNew && (
                  <span className="absolute top-6 left-6 bg-rose-500 text-white px-4 py-2 text-xs font-light tracking-[0.2em] uppercase z-10">
                    New
                  </span>
                )}
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-6 right-6 flex flex-col gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 border ${
                        favorites.includes(product.id)
                          ? 'bg-rose-500 text-white border-rose-500'
                          : 'bg-black/50 text-white border-white/20 hover:bg-black/70'
                      }`}
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 border border-white/20">
                      <Eye className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <button className="w-full bg-white/90 backdrop-blur-sm text-black py-4 font-light tracking-[0.2em] uppercase text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                      <ShoppingBag className="h-4 w-4" />
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-light text-white mb-3 group-hover:text-rose-300 transition-colors duration-300 tracking-wide">
                  {product.name}
                </h3>
                
                <p className="text-white/60 text-sm mb-3 font-light">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating) ? 'text-rose-400 fill-current' : 'text-white/30'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-white/50 ml-2">({product.reviews})</span>
                </div>
                
                <p className="text-white font-light text-lg tracking-wide">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden bg-transparent border border-white/30 text-white px-16 py-5 font-light tracking-[0.3em] uppercase text-sm hover:border-rose-300 transition-all duration-500">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                View All Products
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button className="border border-rose-300 text-rose-300 px-16 py-5 font-light tracking-[0.3em] uppercase text-sm hover:bg-rose-300 hover:text-black transition-all duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;