import { useContext } from 'react'
import { OurShopContext } from '@/context/OurShopProvider'
import ProductItem from '@components/ProductItem/ProductItem'
import styles from '../OurShop/styles.module.scss'

function ListProduct() {
    const { products } = useContext(OurShopContext)
    const { containerProduct } = styles
    return (
        <div className={containerProduct}>
            {products.map((product) => {
                return (
                    <ProductItem
                        src={product.images[0]}
                        prevSrc={product.images[1]}
                        title={product.name}
                        price={product.price}
                    ></ProductItem>
                )
            })}
        </div>
    )
}

export default ListProduct
