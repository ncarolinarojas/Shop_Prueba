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
import CheckoutMenu from '../Components/CheckoutMenu'

function App() {
  return (
    <>
      <ShoppingCarProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/my-orders/last' element={<MyOrder />} />
          <Route path='/sing-in' element={<SingIn />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Navbar />
        <CheckoutMenu />
      </ShoppingCarProvider>
    </>
  )
}

export default App
