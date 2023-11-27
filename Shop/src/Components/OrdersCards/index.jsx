import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {

    const { totalProducts, totalPrices } = props


    return (
        <div className='flex justify-between items-center mb-2'>
            <p>
                <span>Date: </span>
                <span>Products: {totalProducts}</span>
                <span>Price: {totalPrices}</span>
            </p>

        </div>
    )
}

export default OrdersCard