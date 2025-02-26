import CountDownBanner from '@components/CountDownBanner/CountDownBanner'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'

function HeadingListProduct() {
    const { container, flex } = styles
  
    return (
        <>
            <MainLayout>
                <div className={container}>
                    <div className={flex}>
                        <CountDownBanner />
                    </div>
                    <div>1234</div>
                </div>
            </MainLayout>
        </>
    )
}

export default HeadingListProduct
