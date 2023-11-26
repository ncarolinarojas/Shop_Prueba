import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";
import { PlusIcon} from '@heroicons/react/24/solid'
import { CheckIcon} from '@heroicons/react/24/solid'
 

const Card = (data) => {

    const context = useContext(ShoppingCarContext)

    const showDetail = (product) => {
        context.isDetailOpen()
        context.setDetailProduct(product)
    }

    const addProduct = (event, product) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setShoppingCar([...context.shoppingCar, product])
        context.isCheckOutOpen()
        context.isDetailClose()
    }

    //function to validate the Icon
    const validateIconChecked = (id) => {
        const isInCar = context.shoppingCar.filter(product => product.id === id).length > 0
        if (isInCar) {
            return (
                <div className='absolute top-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-8 w-8 text-white/50' />
                </div>
            )
        } else {
            return (
                <div className='absolute top-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProduct(event, data.data)}>
                    <PlusIcon className='h-8 w-8 text-white' />
                </div>
            )
        }
    }


    return (
        <div className='bg-white cursor-pointer w-56 h-60'
            onClick={() => showDetail(data.data)}
        >
            <figure className='relative mb-4 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'> {data.data.category.name} </span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                {validateIconChecked(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>{'$' + data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;