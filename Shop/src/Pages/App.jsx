import '../App.css'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrders from './MyOrders/index'
import MyOrder from './MyOrder'
import NotFound from './NotFound'
import SingIn from './SingIn'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { ShoppingCarProvider } from '../Context'

function App() {
  return (
    <>
    <ShoppingCarProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/my-account' element={<MyAccount />}/>
        <Route path='/my-orders' element={<MyOrders />}/>
        <Route path='/my-order' element={<MyOrder />}/>
        <Route path='/sing-in' element={<SingIn />}/>
        <Route path='/not-found' element={<NotFound />}/>
      </Routes>
      <Navbar/>
      </ShoppingCarProvider>
    </>
  )
}

export default App
