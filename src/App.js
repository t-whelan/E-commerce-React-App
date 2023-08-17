import React, { useState } from 'react';
import SideBar from './SideBar';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';

import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'product1.jpg' },
  { id: 4, name: 'Product 4', price: 29.99, image: 'product2.jpg' }, 
  { id: 5, name: 'Product 5', price: 29.99, image: 'product2.jpg' },
  { id: 6, name: 'Product 6', price: 19.99, image: 'product1.jpg' },
  { id: 7, name: 'Product 7', price: 29.99, image: 'product2.jpg' },
  { id: 8, name: 'Product 8', price: 29.99, image: 'product2.jpg' },

  // Add more products
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="app">
      <SideBar />
      <ProductSearch products={products} setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;




