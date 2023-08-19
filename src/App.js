import React, { useState } from 'react';
import SideBar from './SideBar';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';

import './App.css';


  const products = [
    { id: 1, name: 'Apple Watch', price: 529.99, image: 'Apple-watch.png', make: 'Series 5 se', },
    { id: 2, name: 'Sony ZX33OBT', price: 39.99, image: 'headphones.png', make: 'Light Grey', },
    { id: 3, name: 'Iphone 11', price: 619.99, image: 'iphone11-pin.jpg', make: 'Serious Black',  },
    { id: 4, name: 'Iphone 11', price: 619.99, image: 'iphone11green.jpg', make: 'Subway Blue',  },
    { id: 5, name: 'Iphone 11', price: 619.99, image: 'iphone11red.jpg', make: 'Product RED',  },
    { id: 6, name: 'Iphone 11', price: 619.99, image: 'iphone11white.jpg', make: 'Milky White',  },
    { id: 7, name: 'Iphone 13', price: 619.99, image: 'iphone13red2.jpg', make: 'Product RED',  },
    { id: 8, name: 'Iphone 14', price: 619.99, image: 'iphone13red2.jpg', make: 'Product RED',  },
  
  

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




