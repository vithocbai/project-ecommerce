import CountDownBanner from '@components/CountDownBanner/CountDownBanner'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import ProductItem from '@components/ProductItem/ProductItem'

function HeadingListProduct() {
    const { container, containerItem, flex } = styles
  
    return (
        <>
            <MainLayout>
                <div className={container}>
                    <div>
                        <CountDownBanner />
                    </div>
                    <div className={containerItem}>
                        <ProductItem />
                        <ProductItem />
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default HeadingListProduct
