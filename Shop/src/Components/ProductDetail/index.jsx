import { useContext } from 'react'
import { ShoppingCarContext } from '../../Context/index'
import './style.css'
import { XCircleIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {

    const context = useContext(ShoppingCarContext)

    return (
        <aside
            className={`${context.detail ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XCircleIcon className='h-6 w-6 text-black/50' />
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail