import ProductList from './components/ProductList'
import './App.css'
import SideBagOne from './components/SideBagOne'


const Home = () => {
    return (
        <div className="app">
            <ProductList />
            <SideBagOne />
        </div>
    )
}

export default Home