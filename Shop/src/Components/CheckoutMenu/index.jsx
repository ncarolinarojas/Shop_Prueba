import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCarContext } from '../../Context/index'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import OrderCar from '../OrderCar/index'
import { totalPrice } from '../utils/index'

const CheckoutMenu = () => {

    const context = useContext(ShoppingCarContext)

    const handleDeleteItem = (id) => {
        const filteredProducts = context.shoppingCar.filter(product =>
            product.id != id
        )

        context.setShoppingCar(filteredProducts)
    }

    const handleCheckOut = () => {
        const orderToAdd = {
            date: '',
            products: context.shoppingCar,
            total: context.shoppingCar.length,
            totalPrice: totalPrice(context.shoppingCar)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setShoppingCar([])
        context.setSearchedProducts(null)
        context.setCount(0)
    }


    return (
        <aside
            className={`${context.checkOutSideMenuOpen ? 'flex' : 'hidden'} checkoutSideMenu flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon className='h-6 w-6 text-black/50 cursor-pointer'
                        onClick={() => context.isCheckOutClose()}
                    />
                </div>
            </div>
            <figure className='p-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={context.detailProduct.images}
                    alt={context.detailProduct.title} />
            </figure>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.shoppingCar.map(product => (
                        <OrderCar
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                            handleDeleteItem={handleDeleteItem}
                        />
                    ))
                }
            </div>
            <div className='p-6 '>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>{'$ ' + totalPrice(context.shoppingCar)}</span>
                </p>
                <Link to={'/my-orders/last'}>
                <button 
                className='w-full bg-black text-white py-3 font-medium mb-2 rounded-lg cursor-pointer'
                onClick={() => handleCheckOut()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutMenu