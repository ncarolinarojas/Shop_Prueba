import { createContext, useState } from 'react'

export const ShoppingCarContext = createContext()

export const ShoppingCarProvider = ({ children }) => {

    const [count, setCount] = useState(0) //Estado para contar los add car que haya el usuario
    const [detail, setDetail] = useState(false) //Estado para mostrar el detalle del producto
    const [detailProduct, setDetailProduct] = useState(null) //Estado para el renderizado del detail

    const isDetailOpen = () => setDetail(true)
    const isDetailClose = () => setDetail(false)

    return (
        <ShoppingCarContext.Provider value={
            {
                count,
                setCount,
                isDetailOpen,
                isDetailClose,
                detail
            }
        }>
            {children}
        </ShoppingCarContext.Provider>
    )
}