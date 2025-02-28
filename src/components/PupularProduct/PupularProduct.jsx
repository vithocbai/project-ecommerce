import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import ProductItem from '@components/ProductItem/ProductItem'

function PupularProduct({ datas }) {
    const { container } = styles
    return (
        <>
            <MainLayout>
                <div className={container}>
                    {datas.map((data, id) => {
                        return (
                            <ProductItem
                                key={id}
                                src={data.images[0]}
                                prevSrc={data.images[1]}
                                title={data.name}
                                price={data.price}
                            />
                        )
                    })}
                </div>
            </MainLayout>
        </>
    )
}

export default PupularProduct
