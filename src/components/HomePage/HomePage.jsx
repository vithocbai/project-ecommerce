import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import styles from './styles.module.scss'
import Info from '@components/Info/Info'
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading'
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct'
import { useEffect } from 'react'
import PupularProduct from '@components/PupularProduct/PupularProduct'
import { useState } from 'react'
import getProduct from '@/apis/productService'

function HomePage() {
    const [listProduct,setListProduct] = useState([])

    useEffect(() => {
        getProduct().then(res => setListProduct(res.contents))
    }, [])    

    const { container } = styles
    console.log(listProduct)
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct datas={listProduct.slice(0,2)}/>
                <PupularProduct datas={listProduct.slice(2, 10)}/>
            </div>
        </>
    )
}

export default HomePage
