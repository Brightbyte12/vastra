import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ProductShowcase from './components/ProductShowcase';
import MensCollection from './components/MensCollection';
import WomensCollection from './components/WomensCollection';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
      <Header />
      <Hero />
      <FeaturedCollections />
      <ProductShowcase />
              <Footer />
            </>
          } />
          <Route path="/men" element={
            <>
              <Header />
              <MensCollection />
              <Footer />
            </>
          } />
          <Route path="/women" element={
            <>
              <Header />
              <WomensCollection />
              <Footer />
            </>
          } />
          <Route path="/product/:id" element={
            <>
              <Header />
              <ProductDetail />
              <Footer />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Header />
              <Cart />
      <Footer />
            </>
          } />
        </Routes>
    </div>
    </CartProvider>
  );
}

export default App;