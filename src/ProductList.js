import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart} // Pass the addToCart function as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;




