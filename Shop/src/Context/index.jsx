import { createContext, useState } from 'react'

export const ShoppingCarContext = createContext()

export const ShoppingCarProvider = ({ children }) => {

    const [count, setCount] = useState(0) //state to count to add car users has made
    const [detail, setDetail] = useState(false) // state to show details product section
    const [detailProduct, setDetailProduct] = useState({}) //state to show details product
    const [shoppingCar, setShoppingCar] = useState([]) // state to save all product people going to buy

    const isDetailOpen = () => setDetail(true)
    const isDetailClose = () => setDetail(false)

    return (
        <ShoppingCarContext.Provider value={
            {
                count,
                setCount,
                isDetailOpen,
                isDetailClose,
                detail,
                detailProduct,
                setDetailProduct,
                shoppingCar,
                setShoppingCar
            }
        }>
            {children}
        </ShoppingCarContext.Provider>
    )
}