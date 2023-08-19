import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.make}</p>
      <button className="add-to-cart-button">
         <i className="fas fa-shopping-cart"></i>
      </button>
    </div>
  );
};

// grid cards
const ProductCardGrid = ({ products }) => {
  const rows = [];
  for (let i = 0; i < products.length; i += 4) {
    const rowProducts = products.slice(i, i + 4);
    const row = (
      <div className="product-row" key={i}>
        {rowProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
    rows.push(row);
  }

  return <div className="product-card-grid">{rows}</div>;
};

export default ProductCard;
