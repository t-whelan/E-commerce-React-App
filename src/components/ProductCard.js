//import React from 'react';
import PropTypes from "prop-types";
//import { useSelector } from 'react-redux/es/hooks/useSelector';
//import { selectAllItems } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
      <article>
        <Link to={`/item/${product.id}`}><img src={product.image} alt={product.name} /></Link>
        <div className="text">
          <h3>{product.name}</h3>
          <p>$ {product.price}</p>
          <p>{product.make}</p>
          <button onClick={() => {dispatch(addToCart(product))}}>
          <FontAwesomeIcon icon={faShoppingBag} /><span style={{marginLeft: '7px'}}>Add To Bag</span>
          </button>
        </div>
      </article> 
  )
}

// grid cards
/*


  <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <p>{product.make}</p>
      <button className="add-to-cart-button" onClick={() => {dispatch(addToCart(product))}}>
         <i className="fas fa-shopping-cart"></i>
      </button>
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
}; */

ProductCard.propTypes = {
  product: PropTypes.object,
  productImageName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};

export default ProductCard;
