import { useState } from 'react'
import { createContext } from 'react'
import { getCart } from '@/apis/cartServices'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')
    const [listProductCart, setListProductCart] = useState([])
    const userId = Cookies.get('userId')

    const handGetListProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data)
                })
                .catch((err) => {
                    setListProductCart([])
                })
        }
    }

    useEffect(() => {
        handGetListProductsCart(userId, 'cart')
    }, [])

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handGetListProductsCart,
        listProductCart
    }
    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    )
}
