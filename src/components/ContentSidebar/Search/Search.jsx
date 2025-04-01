import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { IoSearchOutline } from 'react-icons/io5'
import SelectBox from '@/pages/OurShop/components/SelectBox'
import { getProduct } from '@/apis/productService'
import ProductItem from '@components/ProductItem/ProductItem'

const Search = () => {
    const {
        searchContainer,
        title,
        searchBox,
        categorySelect,
        searchInput,
        searchButton,
        searchIcon,
        trending,
        trendingTitle,
        trendingItem,
        productItemSearch,
        productItem,
        productText
    } = styles

    const [searchTerm, setSearchTerm] = useState('')
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [hasSearched, setHasSearched] = useState(false) // Mặc định là false

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getProduct({
                    sortType: 0,
                    page: 1,
                    limit: 10
                })
                if (result && result.contents) {
                    setAllProducts(result.contents)
                    setFilteredProducts([]) // Mặc định không có sản phẩm nào hiển thị
                }
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    }, [])

    // Xử lý tìm kiếm sản phẩm
    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase().trim()
        setSearchTerm(keyword)
        setHasSearched(true) // Luôn đánh dấu đã tìm kiếm, kể cả khi nhập ít ký tự

        if (keyword.length < 2) {
            setFilteredProducts([])
        } else {
            const results = allProducts.filter((product) =>
                product?.name?.toLowerCase().includes(keyword)
            )
            setFilteredProducts(results)
        }
    }

    const showOption = [
        { label: 'All', value: '1' },
        { label: 'Men', value: '2' },
        { label: 'Shoes', value: '3' }
    ]

    return (
        <div className={searchContainer}>
            <h2 className={title}>What Are You Looking For?</h2>
            <div className={searchBox}>
                <div className={categorySelect}>
                    <SelectBox option={showOption} type="show" w80 />
                </div>

                <input
                    type="text"
                    placeholder="Search for products"
                    className={searchInput}
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className={searchButton}>
                    <IoSearchOutline className={searchIcon} /> SEARCH
                </button>
            </div>

            <div className={trending}>
                <span className={trendingTitle}>TRENDING SEARCHES:</span>
                <span className={trendingItem}>Shirt</span>
                <span className={trendingItem}>Shoes</span>
                <span className={trendingItem}>Cap</span>
                <span className={trendingItem}>Skirt</span>
            </div>

            <div className={productItemSearch}>
                {searchTerm.length > 0 && filteredProducts.length > 0 ? (
                    <>
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id || product.id}
                                className={productItem}
                            >
                                <ProductItem
                                    src={product.images?.[0] || ''}
                                    prevSrc={product.images?.[1] || ''}
                                    title={product.name}
                                    price={product.price}
                                    details={product}
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <div className={productText}>No results were found!</div>
                )}
            </div>
        </div>
    )
}

export default Search
