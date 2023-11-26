import { useContext } from 'react'
import { ShoppingCarContext } from '../../Context/index'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'
import OrderCar from '../OrderCar/index'

const CheckoutMenu = () => {

    const context = useContext(ShoppingCarContext)
    console.log(context.shoppingCar)

    const handleDeleteItem = (id) => {
        const filteredProducts = context.shoppingCar.filter(product => 
            product.id != id
        )

        context.setShoppingCar(filteredProducts)
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
            <div className='px-6 overflow-y-scroll'>
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
        </aside>
    )
}

export default CheckoutMenu