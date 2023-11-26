import { createContext, useState } from 'react'

export const ShoppingCarContext = createContext()

export const ShoppingCarProvider = ({ children }) => {

    const [count, setCount] = useState(0) //state to count to add car users has made

    const [detailProduct, setDetailProduct] = useState({}) //state to show details product
    const [shoppingCar, setShoppingCar] = useState([]) // state to save all product people going to buy

    //Checkout side menu / Open and close aside 
    const [checkOutSideMenuOpen, setCheckOutSideMenuOpen] = useState(false) // state to keep save the state to the side menu
    const isCheckOutOpen = () => setCheckOutSideMenuOpen(true) // function to open the side menu
    const isCheckOutClose = () => setCheckOutSideMenuOpen(false) // function to close the side menu

    //Product detail / Open and close the aside 
    const [detail, setDetail] = useState(false) // state to show details product section
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
                setShoppingCar,
                checkOutSideMenuOpen,
                isCheckOutOpen,
                isCheckOutClose
            }
        }>
            {children}
        </ShoppingCarContext.Provider>
    )
}