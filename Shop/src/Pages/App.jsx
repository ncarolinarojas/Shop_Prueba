import '../App.css'
import Home from './Home/index'
import MyAccount from './MyAccount/index'
import MyOrder from './MyOrder/index'
import MyOrders from './MyOrders/index'
import NotFound from './NotFound/index'
import SingIn from './SingIn/index'

function App() {


  return (
    <>
    <div className='bg-red-100'>
    Hola Mundo
    </div>
    <Home/>
    <MyAccount/>
    <MyOrder/>
    <MyOrders/>
    <NotFound/>
    <SingIn/>
    </>
  )
}

export default App
