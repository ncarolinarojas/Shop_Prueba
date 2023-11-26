import { useContext } from 'react'
import { ShoppingCarContext } from '../../Context/index'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {

    const context = useContext(ShoppingCarContext)

    console.log(context.detailProduct)

    return (
        <aside
            className={`${context.detail ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XCircleIcon className='h-6 w-6 text-black/50 cursor-pointer'
                    onClick={() => context.isDetailClose()}
                    />
                </div>
            </div>
            <figure className='p-6'>
                <img 
                className='w-full h-full rounded-lg'
                src={context.detailProduct.images} 
                alt={context.detailProduct.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>{'$' + context.detailProduct.price}</span>
                <span className='font-medium text-md'>{context.detailProduct.title}</span>
                <span className='font-light text-sm'>{context.detailProduct.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail