import MyHeader from '@components/Header/Header'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import MyFooter from '@components/Footer/Footer'
import ContactSection from '@/pages/Contacts/components/ContactSection'


function Contact() {
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
                    <ContactSection />
                </div>
            </MainLayout>

            <MyFooter />
        </div>
    )
}

export default Contact
