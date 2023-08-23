import React from 'react';




const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.make}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
  <i className="fas fa-shopping-cart"></i>
</button>

    </div>
  );
};


export default ProductCard;

