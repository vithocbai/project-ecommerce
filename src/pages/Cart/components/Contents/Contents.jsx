import MainLayout from '@components/Layout/Layout'
import styles from '../../styles.module.scss'
import CartTable from './CartTable'
import CartSummary from './CartSummary'
import SafeCheckout from './SafeCheckOut'

function Contents() {
    const { containerContent, contentLeft, contentRight} = styles
    return (
        <>
            <MainLayout>
                <div className={containerContent}>
                    <div className={contentLeft}>
                        <CartTable />
                    </div>
                    <div className={contentRight}>
                        <CartSummary />
                        <SafeCheckout />
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Contents
