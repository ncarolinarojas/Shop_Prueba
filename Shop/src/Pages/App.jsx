import '../App.css'
import Home from './Home/index'
import MyAccount from './MyAccount/index'
import MyOrder from './MyOrder/index'
import MyOrders from './MyOrders/index'
import NotFound from './NotFound/index'
import SingIn from './SingIn/index'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/my-account' element={<MyAccount />}/>
        <Route path='/my-orders' element={<MyOrders />}/>
        <Route path='/my-order' element={<MyOrder />}/>
        <Route path='/sing-in' element={<SingIn />}/>
        <Route path='/not-found' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
