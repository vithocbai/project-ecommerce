import { useContext } from 'react'
import { OurShopContext } from '@/context/OurShopProvider'
import ProductItem from '@components/ProductItem/ProductItem'
import styles from '../styles.module.scss'
import Button from '@components/Button/Button'
import { ImSpinner3 } from 'react-icons/im'

function ListProduct() {
    const { containerProduct, containerProductList, btnMore } = styles

    const { products, isShowGrid, loading, handleLoadMore, total, loadMore } =
        useContext(OurShopContext)

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
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
                    {products.length < total && (
                        <div
                            className={btnMore}
                            onClick={() => handleLoadMore()}
                        >
                            <Button
                                content={
                                    loadMore ? (
                                        <ImSpinner3
                                            style={{ fontSize: '28px' }}
                                        />
                                    ) : (
                                        'Load More Products'
                                    )
                                }
                            />
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default ListProduct
