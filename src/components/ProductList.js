import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ProductList = () => {
    const items = useSelector(state => state.allCart.items)
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
    <div className="search-bar">
       <div className="search-container">
      <p className="search-item-text">Search for products:</p>
      <input
        type="text"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
    </div>
    <div className="grid">
      {items.filter(item => {
        return searchTerm.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(searchTerm)
      }).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  )
}

export default ProductList;