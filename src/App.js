import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SidebarTwo from './components/SideBarTwo'
import Bag from './components/Bag'
import RestrictSideBar from './components/RestrictSideBar'
import Payment from './components/Payment'
import Checkout from './components/Checkout'
import Address from './components/Address'
//import Checkout from './components/Checkout'
//import Address from './components/Address'
//import Checkoutt from './components/Checkoutt'

function App() {
  return (
    <BrowserRouter>
    <RestrictSideBar>
      <SidebarTwo />
    </RestrictSideBar>
    <Routes>
      <Route exact path = "/" element={<Home />}/>
      <Route path='/bag' element={<Bag />}/>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='/payment' element={<Payment />}/>
      <Route path='/address' element={<Address />}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App




