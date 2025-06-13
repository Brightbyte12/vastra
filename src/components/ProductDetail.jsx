import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, Share2, Truck, RefreshCw, Shield, Minus, Plus, Star, ShoppingCart, Check, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const { addToCart } = useCart();

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id),
    name: "Classic Fit Cotton Shirt",
    price: 2499,
    originalPrice: 3499,
    rating: 4.5,
    reviewCount: 128,
    description: "A timeless cotton shirt with a comfortable classic fit. Perfect for both casual and formal occasions. Crafted from premium cotton for exceptional comfort and durability.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=1000",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy"],
    details: [
      "100% Premium Cotton",
      "Regular fit",
      "Button-down collar",
      "Machine washable",
      "Model is 6'1\" and wearing size M"
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addToCart(product, selectedSize);
    setAddedToCart(true);

    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/men" className="hover:text-gray-900 transition-colors">Men</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
                <p className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
                <span className="text-sm font-medium text-green-600">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-light text-gray-900">Select Size</h2>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="text-sm text-gray-500 hover:text-gray-900 underline"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 border ${
                      selectedSize === size
                        ? 'border-black text-black bg-gray-50'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    } rounded-md text-sm font-medium transition-all duration-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-gray-900 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full flex items-center justify-center py-3 px-6 rounded transition-all duration-200 ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : selectedSize
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
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
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsWishlist(!isWishlist)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 border rounded-md transition-colors ${
                    isWishlist 
                      ? 'border-red-500 text-red-500 hover:bg-red-50' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlist ? 'fill-current' : ''}`} />
                  <span>Wishlist</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-4 px-6 border border-gray-300 rounded-md hover:border-gray-400 transition-colors text-gray-700">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
              <ul className="space-y-3 text-gray-600">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 mt-2 mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-full">
                    <Truck className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Free Shipping</h4>
                    <p className="text-sm text-gray-500">On orders over ₹2000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-full">
                    <RefreshCw className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Easy Returns</h4>
                    <p className="text-sm text-gray-500">30 day return policy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-full">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Secure Payment</h4>
                    <p className="text-sm text-gray-500">100% secure checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-light">Size Guide</h3>
              <button 
                onClick={() => setShowSizeGuide(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Find your perfect fit with our size guide:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Size</th>
                    <th className="py-2 text-left">Chest (inches)</th>
                    <th className="py-2 text-left">Waist (inches)</th>
                    <th className="py-2 text-left">Hip (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">S</td>
                    <td className="py-2">36-38</td>
                    <td className="py-2">30-32</td>
                    <td className="py-2">36-38</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">M</td>
                    <td className="py-2">38-40</td>
                    <td className="py-2">32-34</td>
                    <td className="py-2">38-40</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">L</td>
                    <td className="py-2">40-42</td>
                    <td className="py-2">34-36</td>
                    <td className="py-2">40-42</td>
                  </tr>
                  <tr>
                    <td className="py-2">XL</td>
                    <td className="py-2">42-44</td>
                    <td className="py-2">36-38</td>
                    <td className="py-2">42-44</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail; 