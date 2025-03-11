import { useContext } from 'react'
import { OurShopContext } from '@/context/OurShopProvider'
import ProductItem from '@components/ProductItem/ProductItem'
import styles from '../OurShop/styles.module.scss'

function ListProduct() {
    const { containerProduct, containerProductList } = styles

    const { products, isShowGrid, loading } = useContext(OurShopContext)

    return (
        <>
            {loading ? (
                <div>Loading</div>
            ) : (
                <div
                    className={
                        isShowGrid ? containerProduct : containerProductList
                    }
                >
                    {products.map((product, index) => {
                        return (
                            <ProductItem
                                key={index}
                                src={product.images[0]}
                                prevSrc={product.images[1]}
                                title={product.name}
                                price={product.price}
                                details={product}
                                isHomePage={false}
                            ></ProductItem>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default ListProduct
