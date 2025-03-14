import MyHeader from '@components/Header/Header'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import Banner from '@pages/components/Banner'
import OurShopProvider from '@/context/OurShopProvider'
import Filter from '../components/Filter'
import ListProduct from '../components/ListProduct'
import MyFooter from '@components/Footer/Footer'

function OurShop() {
    const {
        container,
        breadcrumbsBox,
        breadcrumbs,
        homeNav,
        breadcrumbsLink,
        backHome
    } = styles

    const navigate = useNavigate()
    const navigateHome = () => {
        navigate(-1)
    }

    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={breadcrumbsBox}>
                        <div className={breadcrumbs}>
                            <a href="./" className={homeNav}>
                                Home
                            </a>{' '}
                            &gt; <h3 className={breadcrumbsLink}>Shop</h3>
                        </div>
                        <div
                            className={backHome}
                            onClick={() => navigateHome()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>

                    <div>
                        <Banner />
                    </div>

                    <div>
                        <Filter />
                        <ListProduct />
                    </div>
                </div>
            </MainLayout>
            <MyFooter />
        </OurShopProvider>
    )
}

export default OurShop
