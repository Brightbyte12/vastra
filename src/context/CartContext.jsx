import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === size
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId, size, quantity) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 