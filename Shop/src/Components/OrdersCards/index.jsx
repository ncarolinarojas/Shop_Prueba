import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {

    const { totalPrice, totalProducts } = props


    return (
        <div className='flex items-center mb-3 border border-black rounded-lg p-4 w-80' >
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <p className='flex items-center gap-1'>
                        <CalendarDaysIcon className='h-6 w-6 text-black/50' />
                        <span className='font-light text-xs'>26.11.2023 </span>
                    </p>
                    <p className='flex items-center gap-1'>
                        <ShoppingBagIcon className='h-6 w-6 text-black/50'/>
                        <span className='font-light'>Articles: {totalProducts}</span>
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>$ {totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black/50 cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default OrdersCard