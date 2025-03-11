import CountDownBanner from '@components/CountDownBanner/CountDownBanner'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import ProductItem from '@components/ProductItem/ProductItem'

function HeadingListProduct({ datas }) {
    const { container, containerItem } = styles
    console.log(datas)
    return (
        <>
            <MainLayout>
                <div className={container}>
                    <div>
                        <CountDownBanner />
                    </div>
                    <div className={containerItem}>
                        {datas.map((data, id) => {
                            return (
                                <ProductItem
                                    key={id}
                                    src={data.images[0]}
                                    prevSrc={data.images[1]}
                                    title={data.name}
                                    price={data.price}
                                    details={data}
                                
                                />
                            )
                        })}
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default HeadingListProduct
