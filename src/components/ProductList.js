import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const items = useSelector(state => state.allCart.items)
  return (
    <div className="grid">
      {items.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList;