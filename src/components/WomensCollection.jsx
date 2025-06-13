import React, { useState } from 'react';
import { Filter, ChevronDown, Grid, List, ShoppingCart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const WomensCollection = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const { addToCart } = useCart();

  // Mock products data
  const products = [
    {
      id: 1,
      name: "Floral Print Dress",
      price: 3499,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000",
      isNew: true,
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: "Silk Blouse",
      price: 2499,
      image: "https://images.unsplash.com/photo-1604575396136-79d175778d1d?q=80&w=1000",
      isNew: false,
      sizes: ['S', 'M', 'L', 'XL']
    },
    // Add more products as needed
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

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronDown className="h-4 w-4 mx-2 rotate-[-90deg]" />
          <span className="text-gray-900">Women's Collection</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-4 md:mb-0">Women's Collection</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${
                  viewMode === 'grid' ? 'text-gray-900' : 'text-gray-400'
                } hover:text-gray-900`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${
                  viewMode === 'list' ? 'text-gray-900' : 'text-gray-400'
                } hover:text-gray-900`}
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
            <div key={product.id} className="group relative">
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
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
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

                    {/* Add to Cart Button */}
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
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className={`mt-4 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-light text-lg mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 font-light mb-2">₹{product.price.toLocaleString()}</p>
                </Link>
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

export default WomensCollection; 