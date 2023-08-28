import ProductSearch from './components/ProductSearch'
import ProductList from './components/ProductList'
import './App.css'
import SideBagOne from './components/SideBagOne'


const Home = () => {
    return (
        <div className="app">
            <ProductSearch />
            <ProductList />
            <SideBagOne />
        </div>
    )
}

export default Home