import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import {getProduct} from '@/apis/productService'

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
    const [loading, setLoading] = useState(false)
    const [loadMore, setLoadMore] = useState(false)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)

    const handleLoadMore = () => {
        const query = {
            sortType: sortId,
            page: +page + 1,
            limit: showId
        }
        setLoadMore(true)
        getProduct(query)
            .then((res) => {
                setProducts((prev) => {
                    return [...prev, ...res.contents]
                })
                setTotal(res.total)
                setPage(+res.page)
                setLoadMore(false)
            })
            .catch((err) => {
                console.log(err)
                setLoadMore(false)
            })
    }

    const value = {
        sortOption,
        showOption,
        setSortId,
        setShowId,
        setIsShowGrid,
        isShowGrid,
        products,
        loading,
        loadMore,
        handleLoadMore,
        total
    }

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        }
        setLoading(true)
        getProduct(query)
            .then((res) => {
                setProducts(res.contents)
                setTotal(res.total)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [sortId, showId])

    return (
        <OurShopContext.Provider value={value}>
            {children}
        </OurShopContext.Provider>
    )
}

export default OurShopProvider
