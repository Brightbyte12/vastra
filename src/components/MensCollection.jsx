import React, { useState } from 'react';
import { Filter, ChevronDown, Grid, List, ShoppingCart, Check, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MensCollection = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([]);

  // Mock products data
  const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sizes: ['30', '32', '34', '36']
    },
    {
      id: 3,
      name: "Casual Denim Jacket",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 4,
      name: "Premium Cotton Hoodie",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 5,
      name: "Wool Blend Sweater",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1614975058789-41316d0e2cc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 6,
      name: "Leather Bomber Jacket",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sizes: ['S', 'M', 'L', 'XL']
    }
  ];

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id];
    if (!size) return;

    addToCart(product, size);
    setAddedToCart(prev => ({
      ...prev,
      [product.id]: true
    }));

    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({
        ...prev,
        [product.id]: false
      }));
    }, 2000);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors duration-200">Home</Link>
          <ChevronDown className="h-4 w-4 mx-2 rotate-[-90deg]" />
          <span className="text-gray-900">Men's Collection</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-4 md:mb-0">Men's Collection</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'grid' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'list' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        } gap-8`}>
          {products.map(product => (
            <div 
              key={product.id} 
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image with Overlay */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-1/3' : 'aspect-[3/4]'
              }`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-light tracking-wide">
                    New
                  </span>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button 
                    className="p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform translate-x-8 group-hover:translate-x-0 hover:scale-110"
                    title="Add to Wishlist"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`}
                    />
                  </button>
                </div>
                
                {/* Quick Add Overlay */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center p-4 w-full">
                    {/* Size Selector */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSizeSelect(product.id, size);
                          }}
                          className={`w-8 h-8 flex items-center justify-center text-sm border ${
                            selectedSizes[product.id] === size
                              ? 'border-white bg-white text-black'
                              : 'border-white text-white hover:bg-white/20'
                          } transition-all duration-200`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    {/* Quick Add Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      disabled={!selectedSizes[product.id]}
                      className={`flex items-center justify-center w-full py-2 px-4 rounded transition-all duration-200 ${
                        addedToCart[product.id]
                          ? 'bg-green-600 text-white'
                          : selectedSizes[product.id]
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-white/50 text-white cursor-not-allowed'
                      }`}
                    >
                      {addedToCart[product.id] ? (
                        <>
                          <Check className="h-5 w-5 mr-2" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Quick Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className={`mt-4 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                <Link to={`/product/${product.id}`} className="group">
                  <h3 className="font-light text-lg mb-2 text-gray-900 group-hover:text-rose-500 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-600 font-light mb-2">${product.price}</p>
                  {viewMode === 'list' && (
                    <p className="text-gray-500 text-sm">{product.description}</p>
                  )}
                </Link>

                {/* Size Selector */}
                <div className="flex items-center space-x-2 mt-4">
                  {product.sizes.map(size => (
                    <Link
                      key={size}
                      to={`/product/${product.id}`}
                      className="w-8 h-8 flex items-center justify-center text-sm border border-gray-200 hover:border-gray-300 rounded-md transition-all duration-200"
                    >
                      {size}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MensCollection; 