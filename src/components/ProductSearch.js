import { useState } from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';


const ProductSearch = ({setFilteredProducts }) => {
  const products = useSelector(state => state.allCart.items)
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

ProductSearch.propTypes = {
  products: PropTypes.array,
  setFilteredProducts: PropTypes.func,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};

export default ProductSearch;