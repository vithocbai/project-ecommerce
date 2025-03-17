import { useState } from 'react'
import { createContext } from 'react'
import { getCart } from '@/apis/cartServices'

export const SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')
    const [listProductCart, setListProductCart] = useState([])

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
