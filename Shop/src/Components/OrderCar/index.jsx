import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCar = props => {

    const {id, title, imageURL, price, handleDeleteItem} = props

    return(
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img src={imageURL} alt={title} className='w-full h-full rounded-lg object-cover'/>
                </figure>
                <p className='text-sm font-light'> {title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'> {'$' +price}</p>
                <div>
                    <XMarkIcon 
                    onClick={() => handleDeleteItem(id)}
                    className='h-8 w-8 text-black/50 cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default OrderCar