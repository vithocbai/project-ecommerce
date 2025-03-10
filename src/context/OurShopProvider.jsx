import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import getProduct from '@/apis/productService'

export const OurShopContext = createContext()

function OurShopProvider({ children }) {
    const sortOption = [
        { label: 'Default sorting', value: '0' },
        { label: 'Sort by popularity', value: '1' },
        { label: 'Sort by average rating', value: '2' },
        { label: 'Sort by latest', value: '3' },
        { label: 'Sort by price: low to high', value: '4' },
        { label: 'Sort by price: high to low', value: '5' }
    ]

    const showOption = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'all' }
    ]

    const [sortId, setSortId] = useState('0')
    const [showId, setShowId] = useState('8')
    const [isShowGrid, setIsShowGrid] = useState(true)
    const [products, setProducts] = useState([])

    const value = {
        sortOption,
        showOption,
        setSortId,
        setShowId,
        setIsShowGrid,
        isShowGrid,
        products
    }

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        }
        getProduct(query)
            .then((res) => {
                setProducts(res.contents)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [sortId, showId])

    return (
        <OurShopContext.Provider value={value}>
            {children}
        </OurShopContext.Provider>
    )
}

export default OurShopProvider
