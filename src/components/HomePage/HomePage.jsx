import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import styles from './styles.module.scss'
import Info from '@components/Info/Info'
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading'
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct'
import { useEffect } from 'react'
import { getProduct } from '@/apis/productService'

function HomePage() {
    useEffect(() => {
        getProduct()
    }, [])
    
    const { container } = styles
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct />
            </div>
        </>
    )
}

export default HomePage
