import MyHeader from '@components/Header/Header'
import styles from './styles.module.scss'
import MainLayout from '@components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import WelcomeShop from '@/pages/AboutUs/components/WelcomeShop'
import MyFooter from '@components/Footer/Footer'

const {
    container,
    breadcrumbsBox,
    breadcrumbs,
    homeNav,
    breadcrumbsLink,
    backHome
} = styles

function AboutUs() {
    const navigate = useNavigate()

    const navigateHome = () => {
        navigate(-1)
    }
    return (
        <div>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={breadcrumbsBox}>
                        <div className={breadcrumbs}>
                            <a href="./" className={homeNav}>
                                Home
                            </a>
                            &gt; <h3 className={breadcrumbsLink}>Shop</h3>
                        </div>
                        <div
                            className={backHome}
                            onClick={() => navigateHome()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>
                </div>

                <div>
                    <WelcomeShop />
                </div>
            </MainLayout>
            <MyFooter />
        </div>
    )
}

export default AboutUs
