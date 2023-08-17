import React, { useState } from 'react';

const ProductSearch = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    
    <div className="search-bar">
       <div className="search-container">
      <p className="search-item-text">Search for products:</p>
      <input
        type="text"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
    </div>
  );
};

export default ProductSearch;


