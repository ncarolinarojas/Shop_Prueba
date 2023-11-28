import { createContext, useState, useEffect } from 'react'

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

    //State to save all products that a user want to shop
    const [order, setOrder] = useState([])

    //List of products general
    const [products, setProducts] = useState(null)

    //List filtered products 
    const [filteredProducts, setFilteredProducts] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    //State to keep the search
    const [searchedProducts, setSearchedProducts] = useState(null)

    //function to filter products
    const productsFiltered = (products, searchedProducts) => {
        return products?.filter(product => product.title.toLowerCase().includes(searchedProducts.toLowerCase()))
    }

    //State to show in home a search by category
    const [searchByCategory, setSearchByCategory] = useState(null)


    //Function to filter products by category
    const productsByCategory = (products, searchByCategory) => {
        return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, products, searchedProducts, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return productsFiltered(products, searchedProducts)
        }
        if (searchType === 'BY_CATEGORY') {
            return productsByCategory(products, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return productsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchedProducts.toLowerCase()))
        }
        if (!searchType) {
            return products
        }
    }

    useEffect(() => {
        if (searchedProducts && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchedProducts, searchByCategory))
        if (searchedProducts && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchedProducts, searchByCategory))
        if (!searchedProducts && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, searchedProducts, searchByCategory))
        if (!searchedProducts && !searchByCategory) setFilteredProducts(filterBy(null, products, searchedProducts, searchByCategory))
    }, [products, searchedProducts, searchByCategory])


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
                isCheckOutClose,
                order,
                setOrder,
                products,
                setProducts,
                searchedProducts,
                setSearchedProducts,
                productsFiltered,
                filteredProducts,
                searchByCategory,
                setSearchByCategory,
                productsByCategory
            }
        }>
            {children}
        </ShoppingCarContext.Provider>
    )
}