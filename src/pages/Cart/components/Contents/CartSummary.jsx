import Button from '@components/Button/Button'
import styles from '../../styles.module.scss'
import { SideBarContext } from '@/context/SideBarProvider'
import { useContext } from 'react'

function CartSummary() {
    const {
        containerSummary,
        title,
        boxTotal,
        subTotal,
        priceSubTotal,
        total,
        priceTotal,
        groupBtn
    } = styles

    const { listProductCart } = useContext(SideBarContext)
    const totalMoney = listProductCart.reduce((total, item) => {
        return total + item.total
    }, 0)

    return (
        <div className={containerSummary}>
            <div className={title}>Cart totals</div>
            <div className={boxTotal}>
                <div className={subTotal}>Subtotal</div>
                <div className={priceSubTotal}>${totalMoney.toFixed(2)}</div>
            </div>
            <div className={boxTotal}>
                <div className={total}>ToTal</div>
                <div className={priceTotal}>${totalMoney.toFixed(2)}</div>
            </div>
            <div className={groupBtn}>
                <Button content="PROCEED TO CHECKOUT" primary={true} />
                <Button content="CONTINUTE SHOPING" />
            </div>
        </div>
    )
}

export default CartSummary
