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
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default ProductSearch;


