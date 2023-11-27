import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCards/index";
import { useContext } from "react";
import { ShoppingCarContext } from '../../Context/index';
import { Link } from 'react-router-dom'

function MyOrders() {

  const context = useContext(ShoppingCarContext);

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center relative'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.total}
            />
          </Link>
        ))
      }

    </Layout>
  )
}

export default MyOrders