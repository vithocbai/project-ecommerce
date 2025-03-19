import MainLayout from '@components/Layout/Layout'
import styles from '../../styles.module.scss'
import CartTable from './CartTable'
import CartSummary from './CartSummary'
import SafeCheckout from './SafeCheckOut'
import Button from '@components/Button/Button'
import { FaRegTrashCan } from 'react-icons/fa6'

function Contents() {
    const {
        containerContent,
        contentLeft,
        contentRight,
        coupon,
        couponSearch,
        couponClear
    } = styles
    return (
        <>
            <MainLayout>
                <div className={containerContent}>
                    <div className={contentLeft}>
                        <CartTable />
                        <div className={coupon}>
                            <div className={couponSearch}>
                                <input type="text" placeholder="Coupon code" />
                                <input type="submit" value="OK" />
                            </div>
                            <div className={couponClear}>
                                <Button
                                    content={
                                        <div>
                                            <FaRegTrashCan />{' '}
                                            {'Clear shopping cart'}
                                        </div>
                                    }
                                />
                            </div>
                        </div>
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
